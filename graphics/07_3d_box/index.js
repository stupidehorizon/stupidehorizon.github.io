import GlRenderer from "gl-renderer";
import vertex from "./vertex.glsl";
import fragment from "./fragment.glsl";
import createRotationsMatrix from './createRotationsMatrix';
import crate3dBox from './create3dBox';

const canvas = document.querySelector("canvas");
const renderer = new GlRenderer(canvas, {
  depth: true,
});
const program = renderer.compileSync(fragment, vertex);
renderer.useProgram(program);

// 光源位置
const lightPos = {
  x: 10,
  y: 0,
  z: 0
};
renderer.uniforms.lightPos = [lightPos.x, lightPos.y, lightPos.z];
const setValue = (key) => {
  return (e) => {
    lightPos[key] = +e.target.value;
    renderer.uniforms.lightPos = [lightPos.x, lightPos.y, lightPos.z];
  };
}
document.querySelectorAll('#lightPos input').forEach(element => {
  const key = element.dataset.key;
  element.value = lightPos[key];
  element.addEventListener('change', setValue(key));
});

// 立方体旋转

renderer.uniforms.rotationsMatrix = [
  1,0,0,
  0,1,0,
  0,0,1
];

let angleX = 0;
let angleY = 0;
let angleZ = 0;

const updateRotationsMatrix = () => {
  angleX+=0.003;
  angleY+=0.003;
  angleZ+=0.003;
  const rotationsMatrix = createRotationsMatrix(angleX, angleY, angleZ);
  renderer.uniforms.rotationsMatrix = rotationsMatrix;
  requestAnimationFrame(updateRotationsMatrix);
}
requestAnimationFrame(updateRotationsMatrix);

// 创建立方体顶点，颜色，法向量数据
const boxData = crate3dBox(1);
renderer.setMeshData([
  {
    positions: boxData.positions,
    attributes: {
      colors: boxData.colors,
      normalVectors: boxData.normalVectors,
    },
    cells: boxData.cells,
  },
]);

renderer.render();

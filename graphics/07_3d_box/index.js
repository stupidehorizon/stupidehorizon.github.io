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

// 投影矩阵
renderer.uniforms.projectionMatrix = [
  1, 0, 0,
  0, 1, 0,
  0, 0, -1,
];

// 光源位置
const lightPos = {
  x: 10,
  y: 0,
  z: 0
};

renderer.uniforms.lightPos = [lightPos.x, lightPos.y, lightPos.z];
const setLightPosValue = (key) => {
  return (e) => {
    lightPos[key] = +e.target.value;
    renderer.uniforms.lightPos = [lightPos.x, lightPos.y, lightPos.z];
  };
}
document.querySelectorAll('#lightPos input').forEach(element => {
  const key = element.dataset.key;
  element.value = lightPos[key];
  element.addEventListener('change', setLightPosValue(key));
});


// 相机位置
const cameraPos = {
  x: 0,
  y: 0,
  z: 0
};

const getViewMatrix = () => ([
  1,0,0,0,
  0,1,0,0,
  0,0,1,0,
  -cameraPos.x,-cameraPos.y,-cameraPos.z,1,
]);

renderer.uniforms.viewMatrix = getViewMatrix();
const setCameraPosValue = (key) => {
  return (e) => {
    cameraPos[key] = +e.target.value;
    renderer.uniforms.viewMatrix = getViewMatrix();
  };
}
document.querySelectorAll('#cameraPos input').forEach(element => {
  const key = element.dataset.key;
  element.value = cameraPos[key];
  element.addEventListener('change', setCameraPosValue(key));
});


// 立方体旋转,模型矩阵
renderer.uniforms.modelMatrix = [
  1,0,0,
  0,1,0,
  0,0,1
];

let angleX = 0;
let angleY = 0;
let angleZ = 0;

const updateModelMatrix = () => {
  angleX+=0.006;
  angleY+=0.006;
  angleZ+=0.006;
  const modelMatrix = createRotationsMatrix(angleX, angleY, angleZ);
  renderer.uniforms.modelMatrix = modelMatrix;
  requestAnimationFrame(updateModelMatrix);
}
// updateModelMatrix();

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

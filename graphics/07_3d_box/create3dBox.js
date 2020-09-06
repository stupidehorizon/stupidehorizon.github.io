import { subtract, cross, normalize } from '../common/lib/math/functions/Vec3Func';

/**
 * create 3d box data: {positions, colors, cells, normalVectors};
 *
 * @param {number} size the receiving matrix
 * @param {array} colors of the surfaces, 后，右，前，左，上，下
 */
const create3dBox = (size, surfaceColors = [[0.1,0,0], [0.1,0,0], [0.1,0,0], [0.1,0,0], [0.1,0,0], [0.1,0,0]]) => {
  const h = size/2;
  const p = [
    [-h, -h, -h],
    [-h, h, -h],
    [h, h, -h],
    [h, -h, -h],
    [h, -h, h],
    [h, h, h],
    [-h, h, h],
    [-h, -h, h],
  ];
  const positions = [];
  const cells = [];
  const colors = [];
  const normalVectors = [];
  let positionsLen = positions.length;

  const createSurface = (a, b, c, d) => {
    const ab = [];
    const ac = [];
    const normal = [];
    subtract(ab, p[b], p[a]);
    subtract(ac, p[c], p[a]);
    cross(normal, ab, ac);
    normalize(normal, normal); 
    [a, b, c, d].forEach(i => {
      positions.push(p[i]);
      normalVectors.push(normal);
      colors.push(surfaceColors[(positionsLen/4)%6]);
    });
    [[0,1,2],[0,2,3]].forEach(([a, b, c]) => {
      cells.push([positionsLen + a, positionsLen + b, positionsLen + c]);
    })
    positionsLen+=4;
  };

  createSurface(0,1,2,3); // 后
  createSurface(5,4,3,2); // 右
  createSurface(4,5,6,7); // 前
  createSurface(7,6,1,0); // 左
  createSurface(5,2,1,6); // 上
  createSurface(0,3,4,7); // 下
  return {positions, colors, cells, normalVectors};
}

export default create3dBox;

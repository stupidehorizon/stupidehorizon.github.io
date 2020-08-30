import { multiply } from '../common/lib/math/functions/Mat3Func';

export default (angleX, angleY, angelZ) => {
  let c = Math.cos(angleX);
  let s = Math.sin(angleX);
  const rotateX = [
    1,0,0,
    0,c,s,
    0,-s,c
  ];
  c = Math.cos(angleY);
  s = Math.sin(angleY);
  const rotateY = [
    c,0,-s,
    0,1,0,                                  
    s,0,c
  ];
  c = Math.cos(angelZ);
  s = Math.sin(angelZ);
  const rotateZ = [
    c,s,0,                                    
    -s,c,0,
    0,0,1
  ];
  const rotationsMatrix = [];
  multiply(rotationsMatrix, rotateX, rotateY);
  multiply(rotationsMatrix, rotationsMatrix, rotateZ);
  return rotationsMatrix;
}
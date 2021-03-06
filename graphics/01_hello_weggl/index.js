
const canvas = document.querySelector('canvas');
const gl = canvas.getContext('webgl');

// 创建 webgl 程序
// 顶点着色器
const vertex = `
  attribute vec2 position;
  varying vec3 color;
  void main() {
    gl_PointSize = 1.0;
    color = vec3(0.5 + position * 0.5, 0.0);
    gl_Position = vec4(position * 0.5, 1.0, 1.0);
  }
`;

// 片元着色器
const fragment = `
  precision mediump float;
  varying vec3 color;
  void main()
  {
    gl_FragColor = vec4(color, 1.0);
  }    
`;

// 创建顶点着色器 shader 对象
const vertexShader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(vertexShader, vertex);
gl.compileShader(vertexShader);

// 创建片元着色器 shader 对象
const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
gl.shaderSource(fragmentShader, fragment);
gl.compileShader(fragmentShader);

// 创建 webglProgram 对象
const program = gl.createProgram();
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);
gl.linkProgram(program);
gl.useProgram(program);

// const points = new Float32Array([
//   0, 0,
//   1, -1,
//   1, 1,
//   -1, 1,
//   -1,-1,
//   1,-1,
// ]);

// 多边形顶点坐标函数
function createCircleVertex(x, y, r, n) {
  const sin = Math.sin;
  const cos = Math.cos;
  const perAngel = (2 * Math.PI) / n;
  const positionArray = [];
  for (let i = 0; i < n; i++) {
      const angel = i * perAngel;
      const nx = x + r * cos(angel);
      const ny = y + r * sin(angel);
      positionArray.push(nx, ny);
  }
  return new Float32Array(positionArray);
}
// 正多角星坐标函数
function create2CircleVertex(x, y, r, R, n) {
    const sin = Math.sin;
    const cos = Math.cos;
    const perAngel = Math.PI / n;
    const positionArray = [];
    for (let i = 0; i < 2 * n; i++) {
        const angel = i * perAngel;
        if (i % 2 !== 0) {
            const Rx = x + R * cos(angel);
            const Ry = y + R * sin(angel);
            positionArray.push(Rx, Ry);
        } else {
            const rx = x + r * cos(angel);
            const ry = y + r * sin(angel);
            positionArray.push(rx, ry);
        }
    }
    return new Float32Array(positionArray);
}

const points = create2CircleVertex(0, 0, 1, 2, 5);

const bufferId = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW);

const vPosition = gl.getAttribLocation(program, 'position');
gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
gl.enableVertexAttribArray(vPosition);

gl.clear(gl.COLOR_BUFFER_BIT);
gl.drawArrays(gl.TRIANGLE_FAN, 0, points.length / 2);
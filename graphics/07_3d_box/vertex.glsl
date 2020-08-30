attribute vec3 a_vertexPosition;
attribute vec3 colors;
attribute vec3 normalVectors;

varying vec3 vColor;
varying float vCos;

uniform mat3 modelMatrix;
uniform mat3 projectionMatrix;
uniform vec3 lightPos;

void main() {
  mat3 tansMateix = modelMatrix * projectionMatrix;
  vec3 pos = tansMateix * a_vertexPosition;
  vColor = colors;
  vCos = max(dot(normalize(tansMateix * normalVectors), normalize(projectionMatrix * lightPos - pos)), 0.0);
  gl_PointSize = 1.0;
  gl_Position = vec4(pos, 1);
}
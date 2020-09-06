attribute vec3 a_vertexPosition;
attribute vec3 colors;
attribute vec3 normalVectors;

varying vec3 vColor;
varying float vCos;

uniform mat4 modelMatrix;
uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform vec3 lightPos;

void main() {
  vec4 vPos = viewMatrix * modelMatrix * vec4(a_vertexPosition, 1.0);
  vec4 vlightPos = projectionMatrix * viewMatrix * vec4(lightPos, 1.0);

  vec4 vNormalVectors = projectionMatrix * viewMatrix * modelMatrix * vec4(normalVectors, 1.0);

  vColor = colors;
  vCos = max(dot(normalize(vNormalVectors), normalize(vlightPos - vPos)), 0.0);
  gl_PointSize = 1.0;
  gl_Position = projectionMatrix * vPos;
}
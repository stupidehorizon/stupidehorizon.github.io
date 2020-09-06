attribute vec3 a_vertexPosition;
attribute vec3 colors;
attribute vec3 normalVectors;

varying vec3 vColor;
varying float vCos;

uniform mat3 modelMatrix;
uniform mat3 projectionMatrix;
uniform mat4 viewMatrix;
uniform vec3 lightPos;

void main() {
  vec4 vPos = viewMatrix * vec4(a_vertexPosition, 1.0);
  vec4 vlightPos = viewMatrix * vec4(lightPos, 1.0);
  vec4 vNormalVectors = viewMatrix * vec4(normalVectors, 1.0);
  mat3 tansMateix = modelMatrix * projectionMatrix;
  vPos = vec4(tansMateix * vPos.xyz, 1.0);
  vColor = colors;
  vCos = max(dot(normalize(tansMateix * vNormalVectors.xyz), normalize(vec4(projectionMatrix * vlightPos.xyz, 1.0) - vPos).xyz), 0.0);
  gl_PointSize = 1.0;
  gl_Position = vec4(vPos.xyz, 1.0);
}
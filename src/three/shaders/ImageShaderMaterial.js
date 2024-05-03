import glsl from 'babel-plugin-glsl/macro'
import { shaderMaterial } from '@react-three/drei';

const ImageShaderMaterial = shaderMaterial(
    {
        uTime: 0,
        uTexture: null,
        uAmplifier1: 1,
        uAmplifier2: 0,
        uOpacity: 0,
        uNegator: 1,
        uFrame: 1,
        uColor: 0.1,
        uWave: 0.5,
        uCancel: 0,
        uZoom: 1.0,
        uNoiseCancel: 0.5
    },
    glsl`
    #pragma glslify: snoise3 = require(glsl-noise/simplex/3d);

    uniform float uTime, uAmplifier1, uAmplifier2, uFreq, uCancel;

    attribute float aRandoms;

    varying vec2 vUv;
    varying vec3 vNormal;
    varying float vNoise;

    void main(){
        vec3 pos = position;
        vec3 noisePos = vec3( pos.x + 0.5, pos.y, pos.z);
        pos += -abs(snoise3(noisePos) * uAmplifier2);
        pos.x += snoise3(noisePos) * uCancel;

        vec4 modelPosition = modelMatrix * vec4(pos,1.0);
    
        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectionPosition = projectionMatrix * viewPosition;
        gl_Position = projectionPosition;

        vUv = uv;
        vNormal = normal;
        vNoise = snoise3(position * uTime);
    }`,
    glsl`
    uniform sampler2D uTexture;
    uniform float uTime, uColor, uOpacity, uNegator, uAmplifier1, uWave, uFrame, uZoom, uNoiseCancel;
    
    varying vec2 vUv;
    varying float vNoise;
    
    void main()
    {        
        float strength = step(uFrame, max(abs(vUv.x - 0.5), abs(vUv.y - 0.5)));

        vec2 newUv = vUv;
        // newUv.x += vNoise * uNoiseCancel;
        // newUv.y += vNoise * uNoiseCancel;
        newUv.x *= uZoom;
        newUv.y *= uZoom;

        vec4 t = texture2D(uTexture, newUv);

        vec4 final = mix(vec4(vec3(0.5 * (t.r + t.g + t.b) / 3.0), 1.0), t, 1.0 * (1.0 - strength));

        // final.r *= 0.5 * uColor;
        // final.g *= 0.5 * uColor;
        // final.b *= 0.5 * uColor;

        // final.r *= uColor;
        // final.g *= uColor;
        // final.b *= uColor;
        
    
        gl_FragColor = final;
        gl_FragColor.a = 1.0;

        #include <tonemapping_fragment>
        #include <encodings_fragment>
    }`
)

export { ImageShaderMaterial }
import glsl from 'babel-plugin-glsl/macro'
import { shaderMaterial } from '@react-three/drei';

const ImageShaderMaterial = shaderMaterial(
    {
        uTime: 0,
        uTexture: null,
        uTexture2: null
    },
    glsl`
    #pragma glslify: snoise3 = require(glsl-noise/simplex/3d);

    uniform float uTime;

    attribute float aRandoms;

    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    varying vec3 vWorldPosition;

    void main(){
        vec4 modelPosition = instanceMatrix * modelMatrix * vec4(position,1.0);
        float offset = (aRandoms) * sin(modelPosition.x + uTime);
        // offset += (aRandoms) + sin(uTime + aRandoms);

        modelPosition.y += offset;
        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectionPosition = projectionMatrix * viewPosition;
        gl_Position = projectionPosition;

        vUv = uv;
        vPosition = position;
        vNormal = normalMatrix * mat3(instanceMatrix) * normal;
        vViewPosition = -viewPosition.xyz;

        vec4 worldPosition = modelMatrix * instanceMatrix * vec4(position,1.0);
        worldPosition.y += offset;
        vWorldPosition = worldPosition.xyz;
    }`,
    glsl`
    uniform float uTime;
    uniform sampler2D uTexture, uTexture2;
    
    varying vec2 vUv;
    varying vec3 vPosition;
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    varying vec3 vWorldPosition;
    
    void main()
    {   
        vec3 normal = normalize(vNormal);
        vec3 viewDirection = normalize(vViewPosition);
        vec3 x = normalize( vec3( viewDirection.z, 0.0, - viewDirection.x ) );
        vec3 y = cross( viewDirection, x );
        vec2 matcapUv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
        vec4 t = texture2D(uTexture, matcapUv);

        // Cells
        vec2 scanUv = fract( vWorldPosition.xz);
        if(vNormal.y < 0.0){
            scanUv = vUv;
        }
        vec4 scan = texture2D(uTexture2, scanUv);
        vec3 origin = vec3(0.0);

        // Wave
        float dist = distance(vWorldPosition, origin);

        float radialMove = fract( dist - uTime );
        // radialMove *= 1.0 - smoothstep( 1.0, 3.0, dist );
        radialMove *= 1.0 - step(uTime, dist);

        float radialSmooth = smoothstep( 0.3, 0.0, 1.0 - radialMove);
        radialSmooth *= 1.0 + scan.r * 0.7;
        radialSmooth += smoothstep(0.1, 0.0, 1.0 - radialMove);
        
        // Color
        vec3 waveColor = mix(vec3(0.0, 0.0, 1.0), vec3(0.0, 0.0, 1.0), radialSmooth * 0.5);

        vec4 final = mix(t, scan, radialMove);

        gl_FragColor = t;
        gl_FragColor.rgb = mix(gl_FragColor.rgb, waveColor, radialSmooth);
        gl_FragColor.a = 0.8;

        #include <tonemapping_fragment>
        #include <encodings_fragment>
    }`
)

export { ImageShaderMaterial }
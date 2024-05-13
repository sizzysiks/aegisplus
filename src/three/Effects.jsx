import { EffectComposer, DepthOfField, Noise, Bloom, Vignette } from "@react-three/postprocessing";

const Effects = () =>
{
    return(
        <EffectComposer>
            {/* <DepthOfField focusDistance={0.1} focalLength={1} bokehScale={7} height={700} /> */}
            {/* <Noise opacity={0.1} /> */}
             <Bloom
                luminanceThreshold={0.3}
                luminanceSmoothing={1.3}
                height={300}
                opacity={3}
            />
            {/* <Vignette eskil={false} offset={0.1} darkness={1} /> */}
        </EffectComposer>
    )
}

export default Effects
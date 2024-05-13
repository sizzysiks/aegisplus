import { Suspense } from "react";

import { getRandomColor } from '../utils/getRandomColor'

import Cube from "./Cube";

export default function Grid (){
    const spacing = 1.01
    const rows = 4;
    const columns = 4;

    return(
        <Suspense fallback={null}>
        {/* eslint-disable-next-line react/no-unknown-property */}
        <group position={[0, -0.5, 0]}>
        {Array.from({ length: rows }, (_, row) =>
            Array.from({ length: columns }, (_, col) => {
              const color = getRandomColor();

              return (
                <Cube
                  key={`${row}-${col}`}
                  position={[col * spacing, row * spacing, 0]}
                  color={color}
                />
              );
            })
          )}
        </group>
      </Suspense>
    )
}
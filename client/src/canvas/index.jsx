import { Canvas } from "@react-three/fiber";
import { Environment, Center, OrbitControls } from "@react-three/drei";

import BackDrop from "./BackDrop";
import CameraRig from "./CameraRig";
import ShoeModel from "./ShoeModel";

const Model = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [10, 0, 0], fov: 6 }}
      gl={{ preserveDrawingBuffer: true }}
      className="w-full max-w-full h-svh transition-all ease-in bg-cyan-600 "
    >
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <OrbitControls />

      <CameraRig>
        {/* <BackDrop /> */}
        <Center>
          <ShoeModel />
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default Model;

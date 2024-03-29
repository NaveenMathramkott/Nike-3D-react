import { easing } from "maath";
import { useSnapshot } from "valtio";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

import state from "../store";

const ShoeModel = () => {
  const store = useSnapshot(state);
  const { nodes, materials } = useGLTF("/nikeOne.glb");

  console.log("position", materials, nodes);
  useFrame((state, delta) =>
    easing.dampC(materials.metall_svart.color, "#00ccbb", 0.25, delta)
  );

  const stateString = JSON.stringify(store);

  return (
    <group key={stateString}>
      <mesh
        geometry={nodes.Object_5.geometry}
        material={materials.metall_svart}
        position={[0.067, 0.044, -0.048]}
        rotation={[-3.008, -0.005, -2.218]}
        scale={[-0.01, 0.01, 0.01]}
      />
      <mesh
        geometry={nodes.Object_7.geometry}
        material={materials["Material.006"]}
        scale={[0.11, 0.108, 0.108]}
      />
      <mesh
        geometry={nodes.Object_9.geometry}
        material={materials["Material.004"]}
      />
      <mesh
        geometry={nodes.Object_11.geometry}
        material={materials["Material.001"]}
        scale={0.108}
      />
      <mesh
        geometry={nodes.Object_13.geometry}
        material={materials.Material}
        scale={0.108}
      />
      <mesh
        geometry={nodes.Object_17.geometry}
        material={materials.material_grund}
        scale={0.108}
      />
      <mesh
        geometry={nodes.Object_24.geometry}
        material={materials.sko_sula_underdel}
        scale={0.108}
      />
    </group>
  );
};

export default ShoeModel;

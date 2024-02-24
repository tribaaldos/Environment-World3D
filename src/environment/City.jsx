
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export default function Model(props) {
    const { nodes, materials } = useGLTF(
        "./cartoon_lowpoly_small_city_free_pack.glb"
    );
    return (
        <RigidBody type="fixed" colliders="trimesh" >


            <group {...props} dispose={null}>
                <group position={[-369.069, -90.704, -920.159]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.CAR_03_1_World_ap_0.geometry}
                        material={materials.World_ap}
                        position={[22.131, 14.663, -475.071]}
                        rotation={[-Math.PI, 0.732, Math.PI]}
                        scale={1.5}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.CAR_03_World_ap_0.geometry}
                        material={materials.World_ap}
                        position={[-281.155, 14.663, 108.452]}
                        rotation={[Math.PI, 1.544, -Math.PI]}
                        scale={1.5}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Car_04_World_ap_0.geometry}
                        material={materials.World_ap}
                        position={[-302.703, 21.45, 233.836]}
                        rotation={[0, 1.57, 0]}
                        scale={1.5}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.CAR_03_2_World_ap_0.geometry}
                        material={materials.World_ap}
                        position={[-478.53, 14.663, 1463.236]}
                        rotation={[Math.PI, -1.457, Math.PI]}
                        scale={1.5}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Car_04_1_World_ap_0.geometry}
                        material={materials.World_ap}
                        position={[-445.674, 21.45, -438.269]}
                        rotation={[0, 1.57, 0]}
                        scale={1.5}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Car_04_2_World_ap_0.geometry}
                        material={materials.World_ap}
                        position={[-1097.654, 21.45, 1123.555]}
                        rotation={[Math.PI, -0.007, Math.PI]}
                        scale={1.5}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Car_04_3_World_ap_0.geometry}
                        material={materials.World_ap}
                        position={[449.954, 21.45, 544.783]}
                        rotation={[Math.PI, -1.57, Math.PI]}
                        scale={1.5}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Car_04_4_World_ap_0.geometry}
                        material={materials.World_ap}
                        position={[780.424, 21.45, -35.692]}
                        rotation={[Math.PI, 0.001, -Math.PI]}
                        scale={1.5}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Car_08_4_World_ap8_0.geometry}
                        material={materials["World_ap.8"]}
                        position={[938.82, -12.941, 754.086]}
                        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                        scale={1.5}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Car_08_3_World_ap9_0.geometry}
                        material={materials["World_ap.9"]}
                        position={[187.866, -12.941, 1351.539]}
                        rotation={[Math.PI / 2, 0, 3.105]}
                        scale={1.5}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Car_04_1_2_World_ap_0.geometry}
                        material={materials.World_ap}
                        position={[-719.822, 21.45, 374.476]}
                        rotation={[0, 1.546, 0]}
                        scale={1.5}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Car_08_2_World_ap11_0.geometry}
                        material={materials["World_ap.11"]}
                        position={[-271.222, -14.732, -95.644]}
                        rotation={[Math.PI / 2, 0, -0.215]}
                        scale={1.5}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.CAR_03_1_2_World_ap_0.geometry}
                        material={materials.World_ap}
                        position={[81.423, 14.663, 401.827]}
                        rotation={[-Math.PI, 1.558, Math.PI]}
                        scale={1.5}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.CAR_03_2_2_World_ap_0.geometry}
                        material={materials.World_ap}
                        position={[-661.168, 8.745, 533.575]}
                        rotation={[Math.PI, -1.43, Math.PI]}
                        scale={1.5}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Car_04_2_2_World_ap_0.geometry}
                        material={materials.World_ap}
                        position={[574.365, 21.45, -216.992]}
                        rotation={[Math.PI, 1.355, -Math.PI]}
                        scale={1.5}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Car_08_1_World_ap15_0.geometry}
                        material={materials["World_ap.15"]}
                        position={[-581.172, -14.732, -559.034]}
                        rotation={[Math.PI / 2, 0, -Math.PI]}
                        scale={1.5}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Car_08_World_ap16_0.geometry}
                        material={materials["World_ap.16"]}
                        position={[-6.17, -13.296, 785.616]}
                        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                        scale={1.5}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Car_08_5_World_ap17_0.geometry}
                        material={materials["World_ap.17"]}
                        position={[565.849, -12.941, -425.914]}
                        rotation={[Math.PI / 2, 0, -0.037]}
                        scale={1.5}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.CAR_03_2_3_World_ap_0.geometry}
                        material={materials.World_ap}
                        position={[-932.317, 14.663, -406.065]}
                        rotation={[0, -1.114, 0]}
                        scale={1.5}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Car_08_6_World_ap19_0.geometry}
                        material={materials["World_ap.19"]}
                        position={[-6.17, -13.296, 1020.423]}
                        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                        scale={1.5}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.CAR_03_3_World_ap_0.geometry}
                        material={materials.World_ap}
                        position={[940.966, 14.663, -243.449]}
                        rotation={[0, 0.098, 0]}
                        scale={1.5}
                    />
                </group>
                <group
                    position={[-858.07, -53.779, 24.514]}
                    rotation={[0, Math.PI / 2, 0]}
                >
                    <group position={[-152.772, -44.68, -137.839]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.traffic_light_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[474.599, 66.934, -256.178]}
                            rotation={[0, -Math.PI / 2, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Light_3_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[403.842, -14.34, 382.062]}
                            rotation={[0, Math.PI / 2, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Light_2_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[-82.277, -14.34, 382.062]}
                            rotation={[0, Math.PI / 2, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Light_1_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[403.841, -14.34, -257.04]}
                            rotation={[0, -Math.PI / 2, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Light_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[-82.277, -14.34, -257.04]}
                            rotation={[0, -Math.PI / 2, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.traffic_light_1_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[-160.492, 66.934, -256.178]}
                            rotation={[0, -Math.PI / 2, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.traffic_light_2_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[474.599, 66.934, 379.607]}
                            rotation={[0, -Math.PI / 2, 0]}
                        />
                    </group>
                    <group position={[1.901, -22.362, -74.237]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Floor_4_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[0, -2.843, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Floor_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[0, 2.843, 0]}
                        />
                    </group>
                    <group position={[-194.202, -41.068, -31.506]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Bed_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[3.142, -17.393, -42.033]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Bushes_3_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[-1.047, 5.798, -183.504]}
                            rotation={[-1.382, -1.399, -0.042]}
                        />
                    </group>
                    <group position={[263.144, -41.068, -31.506]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Bed_2_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[3.142, -17.393, -42.033]}
                            rotation={[-Math.PI, 0, -Math.PI]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Bushes_3_2_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[-1.047, 5.798, -183.504]}
                            rotation={[-1.382, -1.399, -0.042]}
                        />
                    </group>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.House_World_ap_0.geometry}
                        material={materials.World_ap}
                        position={[0, 104.499, 143.579]}
                        rotation={[Math.PI / 2, 0, 0]}
                    />
                </group>
                <group position={[84.723, -88.642, 8.453]}>
                    <group position={[-201.533, -9.817, -54.041]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Light_3_2_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[342.307, -14.34, 382.062]}
                            rotation={[0, Math.PI / 2, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Light_2_2_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[-82.277, -14.34, 382.062]}
                            rotation={[0, Math.PI / 2, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Light_1_2_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[342.307, -14.34, -262.326]}
                            rotation={[0, -Math.PI / 2, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Light_2_3_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[-82.277, -14.34, -262.326]}
                            rotation={[0, -Math.PI / 2, 0]}
                        />
                    </group>
                    <group position={[-66.162, 12.501, 7.296]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Floor_4_2_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[0, -0.857, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Floor_2_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[0, 4.828, 0]}
                        />
                    </group>
                    <group
                        position={[-73.047, -36.012, -229.552]}
                        rotation={[0, -Math.PI / 2, 0]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Firtree_47_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[-9.323, -17.955, 195.551]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Firtree_3_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[8.994, 9.329, 112.135]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Firtree_2_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[4.295, 1.084, 31.603]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Firtree_1_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[-9.614, -11.245, -45.045]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Firtree_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[-3.046, -11.96, -133.056]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube_7_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[-19.841, 13.996, -8.476]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Firtree_4_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[8.208, -0.782, -227.081]}
                            rotation={[0, 0.815, 0]}
                        />
                    </group>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Bench_1_World_ap_0.geometry}
                        material={materials.World_ap}
                        position={[138.129, -19.652, 19.72]}
                        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.House_2_World_ap_0.geometry}
                        material={materials.World_ap}
                        position={[131.582, -47.962, 121.885]}
                        rotation={[0, -Math.PI / 2, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Bench_World_ap_0.geometry}
                        material={materials.World_ap}
                        position={[138.129, -19.652, -109.696]}
                        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                    />
                </group>
                <group position={[77.486, -88.642, -941.285]}>
                    <group position={[-201.533, -9.817, -54.041]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Light_3_3_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[342.307, -14.34, 382.062]}
                            rotation={[0, Math.PI / 2, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Light_2_4_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[-82.277, -14.34, 382.062]}
                            rotation={[0, Math.PI / 2, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Light_1_3_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[342.307, -14.34, -262.326]}
                            rotation={[0, -Math.PI / 2, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Light_3_4_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[-82.277, -14.34, -262.326]}
                            rotation={[0, -Math.PI / 2, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Light_4_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[456.327, -14.34, 37.562]}
                            rotation={[-Math.PI, 0, Math.PI]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Light_5_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[456.327, -14.34, 1034.844]}
                            rotation={[-Math.PI, 0, Math.PI]}
                        />
                    </group>
                    <group position={[-66.162, 12.501, 7.296]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Floor_4_3_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[0, -0.857, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Floor_3_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[0, 4.828, 0]}
                        />
                    </group>
                    <group position={[-305.467, -36.012, 2.868]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Firtree_47_2_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[-9.322, -17.955, 195.551]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Firtree_3_2_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[8.994, 9.329, 112.135]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Firtree_2_2_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[4.295, 1.084, 31.603]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Firtree_1_2_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[-9.614, -11.245, -45.045]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Firtree_2_3_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[-3.046, -11.96, -133.056]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Cube_7_2_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[-18.899, 13.996, -1.578]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Firtree_4_2_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[8.208, -0.782, -227.081]}
                            rotation={[0, 0.815, 0]}
                        />
                    </group>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Muff_1_World_ap_0.geometry}
                        material={materials.World_ap}
                        position={[111.523, 20.053, 89.049]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Muff_World_ap_0.geometry}
                        material={materials.World_ap}
                        position={[111.523, 20.053, 188.913]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Bench_2_World_ap_0.geometry}
                        material={materials.World_ap}
                        position={[-186.916, -19.652, -230.343]}
                        rotation={[Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Behch_World_ap_0.geometry}
                        material={materials.World_ap}
                        position={[-186.916, -19.652, -152.012]}
                        rotation={[Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.House_3_World_ap_0.geometry}
                        material={materials.World_ap}
                        position={[-82.285, 5.958, -23.08]}
                    />
                </group>
                <group
                    position={[-938.463, -88.642, -995.244]}
                    rotation={[0, Math.PI / 2, 0]}
                >
                    <group position={[-201.533, -9.817, -54.041]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Light_3_5_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[413.754, -15.934, 144.867]}
                            rotation={[0, Math.PI / 2, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Light_2_5_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[-134.675, -15.934, 145.283]}
                            rotation={[0, Math.PI / 2, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Light_4_2_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[154.508, -15.934, -264.629]}
                            rotation={[0, -Math.PI / 2, 0]}
                        />
                    </group>
                    <group position={[-66.162, 12.501, 7.296]}>
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Floor_4_4_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[0, 5.03, 0]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Floor_4_5_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[70.759, 3.391, 277.502]}
                        />
                    </group>
                    <group
                        position={[-356.014, -14.546, -70.984]}
                        rotation={[Math.PI, 0, Math.PI]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Bed_3_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[2.856, -15.812, -38.212]}
                            rotation={[-Math.PI, 0, Math.PI]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Bushes_15_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[-0.952, 5.271, 177.883]}
                            rotation={[-1.382, -1.399, -0.042]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Bushes_2_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[-0.952, 5.271, -52.62]}
                            rotation={[-1.382, -1.399, -0.042]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Bushes_2_2_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[-0.952, 5.271, 49.297]}
                            rotation={[-1.382, -1.399, -0.042]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Tree_1_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[-20.425, -28.776, -82.21]}
                            rotation={[-2.971, -0.123, -1.782]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Tree_2_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[-26.521, -46.038, 12.043]}
                            rotation={[-1.382, -1.399, -0.042]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Tree_3_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[-39.243, -27.908, 158.025]}
                            rotation={[-0.171, -0.162, 1.31]}
                        />
                    </group>
                    <group
                        position={[180.931, -14.546, -70.984]}
                        rotation={[Math.PI, 0, Math.PI]}
                    >
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Bed_4_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[2.856, -15.812, -38.212]}
                            rotation={[-Math.PI, 0, Math.PI]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Bushes_15_2_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[-0.952, 5.271, 177.883]}
                            rotation={[-1.382, -1.399, -0.042]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Bushes_2_3_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[-0.952, 5.271, -52.62]}
                            rotation={[-1.382, -1.399, -0.042]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Bushes_4_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[-0.952, 5.271, 49.297]}
                            rotation={[-1.382, -1.399, -0.042]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Tree_1_2_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[-20.425, -28.776, -82.21]}
                            rotation={[-1.382, -1.399, -0.042]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Tree_2_2_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[-34.946, -27.908, 12.043]}
                            rotation={[-1.382, -1.399, -0.042]}
                        />
                        <mesh
                            castShadow
                            receiveShadow
                            geometry={nodes.Tree_3_2_World_ap_0.geometry}
                            material={materials.World_ap}
                            position={[-29.61, -27.908, 158.025]}
                            rotation={[-0.171, -0.162, 1.31]}
                        />
                    </group>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Shop_World_ap_0.geometry}
                        material={materials.World_ap}
                        position={[-65.336, -36.633, -123.335]}
                        rotation={[Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Trash_World_ap_0.geometry}
                        material={materials.World_ap}
                        position={[46.263, -28.068, 47.978]}
                        rotation={[Math.PI, 0, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Trash_2_World_ap_0.geometry}
                        material={materials.World_ap}
                        position={[-82.156, -28.068, 47.978]}
                        rotation={[Math.PI, 0, 0]}
                    />
                </group>
                <group
                    position={[-549.038, -127.662, -453.774]}
                    rotation={[Math.PI / 2, 0, -Math.PI]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.ROAD_World_ap_0.geometry}
                        material={materials.World_ap}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.traffic_light_2_2_World_ap_0.geometry}
                        material={materials.World_ap}
                        position={[-878.585, -144.633, -92.938]}
                        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.traffic_light_1_2_World_ap_0.geometry}
                        material={materials.World_ap}
                        position={[-241.852, -144.633, -92.938]}
                        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.traffic_light_2_3_World_ap_0.geometry}
                        material={materials.World_ap}
                        position={[-878.585, 175.529, -92.938]}
                        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.ROAD_Lines_12_World_ap_0.geometry}
                        material={materials.World_ap}
                        position={[-106.277, -127.72, -0.404]}
                    />
                </group>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Floor_6_World_ap_0.geometry}
                    material={materials.World_ap}
                    position={[-434.044, -237.443, -451.909]}
                    rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                />
            </group>
        </RigidBody>
    );
}

useGLTF.preload("./cartoon_lowpoly_small_city_free_pack.glb");
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from 'three';
import { DirectionalLightHelper } from "three";
export default function Lights() {
    const directionalLightRef = useRef(new THREE.DirectionalLight());
    useHelper(directionalLightRef, DirectionalLightHelper, 1); // Use DirectionalLightHelper instead of THREE.DirectionalLightHelper
    return (_jsxs(_Fragment, { children: [_jsx("directionalLight", { castShadow: true, "shadow-normalBias": 0.06, position: [20, 30, 10], intensity: 1.5, "shadow-mapSize": [1024, 1024], "shadow-camera-near": 1, "shadow-camera-far": 50, "shadow-camera-top": 50, "shadow-camera-right": 50, "shadow-camera-bottom": -50, "shadow-camera-left": -50, name: "followLight", ref: directionalLightRef }), _jsx("ambientLight", { intensity: 0.5 })] }));
}

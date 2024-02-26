import { jsx as _jsx } from "react/jsx-runtime";
import { RigidBody } from "@react-three/rapier";
export default function Floor() {
    return (_jsx(RigidBody, { type: "fixed" }));
}

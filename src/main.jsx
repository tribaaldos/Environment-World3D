import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import Experience from './world/Experience.js';
import { Leva } from 'leva';
import { EcctrlJoystick } from './EcctrlJoystick.js';
import { Suspense } from 'react';
import './index.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
const EcctrlJoystickControls = () => {
    const [isTouchScreen, setIsTouchScreen] = useState(false);
    useEffect(() => {
        // Check if using a touch control device, show/hide joystick
        if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
            setIsTouchScreen(true);
        }
        else {
            setIsTouchScreen(false);
        }
    }, []);
    return (_jsx(_Fragment, { children: isTouchScreen && _jsx(EcctrlJoystick, { buttonNumber: 5 }) }));
};
const App = () => (_jsxs(_Fragment, { children: [_jsx(Leva, { collapsed: true }), _jsx(EcctrlJoystickControls, {}), _jsx(Canvas, { frameloop: "demand", shadows: true, camera: {
                fov: 65,
                near: 0.1,
                far: 1000,
            }, onPointerDown: (e) => {
                if (e.pointerType === 'mouse') {
                    e.target.requestPointerLock();
                }
            }, children: _jsx(Suspense, { fallback: null, children: _jsx(Experience, {}) }) })] }));
root.render(_jsx(React.StrictMode, { children: _jsx(App, {}) }));

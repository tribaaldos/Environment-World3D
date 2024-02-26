import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
export const useJoystickControls = /* @__PURE__ */ create(
/* @__PURE__ */ subscribeWithSelector((set, get) => {
    return {
        /**
         * Joystick state manegement
         */
        // Initial joystick/button state
        curJoystickDis: 0,
        curJoystickAng: 0,
        curRunState: false,
        curButton1Pressed: false,
        curButton2Pressed: false,
        curButton3Pressed: false,
        curButton4Pressed: false,
        curButton5Pressed: false,
        setJoystick: (joystickDis, joystickAng, runState) => {
            set(() => {
                return {
                    curJoystickDis: joystickDis,
                    curJoystickAng: joystickAng,
                    curRunState: runState,
                };
            });
        },
        resetJoystick: () => {
            set((state) => {
                if (state.curJoystickDis !== 0 || state.curJoystickAng !== 0) {
                    return {
                        curJoystickDis: 0,
                        curJoystickAng: 0,
                        curRunState: false,
                    };
                }
                return {};
            });
        },
        pressButton1: () => {
            set((state) => {
                if (!state.curButton1Pressed) {
                    return {
                        curButton1Pressed: true,
                    };
                }
                return {};
            });
        },
        pressButton2: () => {
            set((state) => {
                if (!state.curButton2Pressed) {
                    return {
                        curButton2Pressed: true,
                    };
                }
                return {};
            });
        },
        pressButton3: () => {
            set((state) => {
                if (!state.curButton3Pressed) {
                    return {
                        curButton3Pressed: true,
                    };
                }
                return {};
            });
        },
        pressButton4: () => {
            set((state) => {
                if (!state.curButton4Pressed) {
                    return {
                        curButton4Pressed: true,
                    };
                }
                return {};
            });
        },
        pressButton5: () => {
            set((state) => {
                if (!state.curButton5Pressed) {
                    return {
                        curButton5Pressed: true,
                    };
                }
                return {};
            });
        },
        releaseAllButtons: () => {
            set((state) => {
                if (state.curButton1Pressed) {
                    return {
                        curButton1Pressed: false,
                    };
                }
                if (state.curButton2Pressed) {
                    return {
                        curButton2Pressed: false,
                    };
                }
                if (state.curButton3Pressed) {
                    return {
                        curButton3Pressed: false,
                    };
                }
                if (state.curButton4Pressed) {
                    return {
                        curButton4Pressed: false,
                    };
                }
                if (state.curButton5Pressed) {
                    return {
                        curButton5Pressed: false,
                    };
                }
                return {};
            });
        },
        getJoystickValues: () => {
            return {
                joystickDis: get().curJoystickDis,
                joystickAng: get().curJoystickAng,
                runState: get().curRunState,
                button1Pressed: get().curButton1Pressed,
                button2Pressed: get().curButton2Pressed,
                button3Pressed: get().curButton3Pressed,
                button4Pressed: get().curButton4Pressed,
                button5Pressed: get().curButton5Pressed,
            };
        },
    };
}));

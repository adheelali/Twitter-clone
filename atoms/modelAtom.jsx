import { atom } from "recoil";

export const modelState = atom({
    key: "modelState",
    default: false,
});

export const postIdState = atom({
    key: "postIdState",
    default: '',
});
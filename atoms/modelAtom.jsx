import { atom } from "recoil";

export const modelState = atom({
    key: "modelstate",
    default: false,
});

export const postIdState = atom({
    key: "postidstate",
    default: '',
});
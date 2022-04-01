import { atom } from "recoil";

export const statusState = atom({
    key: 'status-state',
    default: true
})

export const secretState = atom({
    key: 'secret-state',
    default: undefined
})
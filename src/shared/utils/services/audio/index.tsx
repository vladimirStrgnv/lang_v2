import { URN } from "../../const";

export function playWord (path) {
    const audio = new Audio(`${URN}${path}`);
    audio.play();
}

export function playCorrectSound () {
    const audio = new Audio(`${URN}files/correct.mp3`);
    audio.play();
}

export function playIncorrectSound () {
    const audio = new Audio(`${URN}files/incorrect.mp3`);
    audio.play();
}
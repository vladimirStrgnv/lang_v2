import { BASE_SERVER_URL } from "../../../const";

export function playWord (path) {
    const audio = new Audio(`${BASE_SERVER_URL}${path}`);
    audio.play();
}

export function playCorrectSound () {
    const audio = new Audio(`${BASE_SERVER_URL}files/correct.mp3`);
    audio.play();
}

export function playIncorrectSound () {
    const audio = new Audio(`${BASE_SERVER_URL}files/incorrect.mp3`);
    audio.play();
}
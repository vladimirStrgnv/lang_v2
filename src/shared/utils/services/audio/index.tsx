import { URN } from "../../const";
export function playAudio (path) {
    const audio = new Audio(`${URN}${path}`);
    audio.play();
}
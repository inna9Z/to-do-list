import { dom } from "../dom.js";

dom.input.addEventListener('keypress', (e) => {
    dom.error.innerHTML = "";
    dom.error.classList.remove('error1');
})
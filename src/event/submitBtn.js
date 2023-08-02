import { dom } from "../dom.js";
import addItemList from "../handlers/addItemList.js";

dom.submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addItemList(dom.input.value);
});
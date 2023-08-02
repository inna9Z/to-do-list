import { dom } from "../dom.js";
import{ data } from "../data.js";


dom.clearBtn.addEventListener("click", () => {
    // delete data
    data.tasks = [];

    // remove tasks from UI
    dom.itemList.innerHTML = '';
})
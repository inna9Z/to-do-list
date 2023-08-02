import { data } from "./data.js";
import { dom } from "./dom.js";
import createItems from "./components/createItem.js";
import './event/clearBtn.js';
import './event/inputBtn.js';
import './event/submitBtn.js'


data.tasks.forEach((task) => {
    const newTask = createItems(task);
    dom.itemList.append(newTask);

})


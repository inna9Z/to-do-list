import { data } from "../data.js"
import { dom } from "../dom.js";

const editItemList = (id) => {
    // find task for edit
    const findedTask = data.tasks.find((task) => task.id === id)

    // update UI
    dom.input.value = findedTask.text
    

}

export default editItemList;
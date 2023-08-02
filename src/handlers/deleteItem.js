import { data } from "../data.js"


const deleteItemList = (id) => {
    // delete task from data
    data.tasks = data.tasks.filter((task) => task.id !== id);

    // delete task from UI
    document.getElementById(id).remove();
    
}

export default deleteItemList;
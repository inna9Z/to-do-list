import { data } from "../data.js";
import { dom } from "../dom.js";
import createItems from "../components/createItem.js";

const addItemList = (value) => {
    if(dom.submitBtn.innerHTML === "Edit"){
        //update UI
        const editedItem = document.querySelector('.selected')
        editedItem.querySelector('.title').innerHTML = value;

        // update data
        const itemId = Number(editedItem.id)
        const findedTask = data.tasks.find((task) => task.id === itemId)
        findedTask.text = value;

        //remove class 'selected' and change button text
        editedItem.classList.remove('selected');
        dom.submitBtn.innerHTML = 'Submit'
        dom.input.value = ''
    } else {
        if(value === ''){
            dom.error.innerHTML = "the text can not be empty";
            dom.error.classList.add('error1');
            return;
        }
        const newTask = {
            id: data.id++,
            text: value
        }

        // add new task to data
        data.tasks.push(newTask);

        //add new task to UI
        const newTaskDom = createItems(newTask);
        dom.itemList.insertBefore(newTaskDom, dom.itemList.firstChild);
        dom.input.value = '';
    }
}

export default addItemList;
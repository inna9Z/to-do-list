
import { dom } from "../dom.js";
import editItemList from "../handlers/addItemList.js";
import deleteItemList from "../handlers/deleteItem.js";

const createItems = (itemData) => {
    // create container for item
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("grocery-item");
    itemContainer.id = itemData.id;
  
    // create title for item
    const title = document.createElement("p");
    title.classList.add("title");
    title.innerHTML = itemData.text;
  
    // create button container
    const btnContainer = document.createElement("div");
    btnContainer.classList.add("btn-container");
  
    // create edit button
    const editBtn = document.createElement("button");
    editBtn.classList.add("edit-btn");
    editBtn.innerHTML = '<i class="fas fa-edit"></i>';
  
    // add event to edit btn
    editBtn.addEventListener("click", () => {
      dom.submitBtn.innerHTML = "Edit";
      itemContainer.classList.add("selected");
      editItemList(itemData.id);
    });
  
    // create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");
    deleteBtn.innerHTML = '<i class="fas fa-trash"></i>';
  
    // add event to delete btn
    deleteBtn.addEventListener("click", () => {
      deleteItemList(itemData.id);
    });
  
    // append
    btnContainer.append(editBtn, deleteBtn);
    itemContainer.append(title, btnContainer);
  
    return itemContainer;
  };

export default createItems;
const input = document.getElementById("ItemInput");
const addBtn = document.getElementById("addbtn");
const list = document.getElementById("list");

addBtn.addEventListener("click", () => {
  if (input.value === "") {
    alert("Mat Kar Lala!");
    return;
  }

  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.classList.add("delete");

  li.textContent = input.value;

  delBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(delBtn);
  list.appendChild(li);
  input.value = "";
});
 
let main = document.querySelector('.one')
let form = document.forms.form
let arr = [ 

]

form.onsubmit = (e) => {
    e.preventDefault()

    let fm = new FormData(form)

    const data = {}

    fm.forEach((val, key) => data[key] = val)

    arr.push(data)
    reload(arr, main)

}

function reload(arr, place) {

    for(let item of arr) {

        let elem = document.createElement('div')
        let h1 = document.createElement('h1')
        let details = document.createElement('div')
        let h5 = document.createElement('h5')
        let span = document.createElement('span')
    
        elem.classList.add('elem-2')
        details.classList.add('details')

        h1.textContent = item.name
        h5.textContent = "Age"
        span.textContent = item.age
        place.append(elem)
        elem.append(h1, details)
        details.append(h5, span)

    }


}

let boxes = document.querySelectorAll(".todos-column");
let todo = document.querySelector(".elem-2");

function dragStart(e) {
  e.dataTransfer.setData("text/plain", e.target.id);

  setTimeout(() => {
    todo.classList.add("hide");
  }, 0);

  console.log("drag started");
}

function dragEnter(e) {
  e.preventDefault();
  e.target.classList.add("drag-over");
}

function dragOver(e) {
  e.preventDefault();
  e.target.classList.add("drag-over");
}
function dragLeave(e) {
  e.preventDefault();
  e.target.classList.remove("drag-over");
}

function drop(e) {
  const id = e.dataTransfer.getData("text/plain");
  const draggable = document.getElementById(id);

  e.target.lastElementChild.append(draggable);
  draggable.classList.remove("hide");
}

todo.addEventListener("dragstart", dragStart);

boxes.forEach((box) => {
  box.addEventListener("dragenter", dragEnter);
  box.addEventListener("dragover", dragOver);
  box.addEventListener("dragleave", dragLeave);
  box.addEventListener("drop", drop);
});

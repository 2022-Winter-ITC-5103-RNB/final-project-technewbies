
const modal = document.getElementsByClassName('box');
const modal_container = document.getElementById('modal-container');
const close = document.getElementById('close');

for(i = 0 ; i < modal.length ; i++) {
    modal[i].addEventListener('click', () => {
  modal_container.classList.add("show")
    })
}

close.addEventListener('click', () => {
    modal_container.classList.remove("show");
})



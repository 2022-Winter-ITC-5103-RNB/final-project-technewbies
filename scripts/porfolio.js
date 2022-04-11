

const jsonData = [
  {
   "name":"Guernica",
   "url":"./home.html",
   "imageLocatoin":"./images/portfolio1.jpg",
   "description":" 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam magni sapiente sed similique doloremque, quos in neque nobis quis unde consectetur beatae excepturi sunt cupiditate quibusdam minus, eos placeat ipsam!"
      },
  {
      "name":"La Mancha Roja",
      "url":"./home.html",
      "imageLocatoin":"./images/portfolio2.jpg",
      "description":" 2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam magni sapiente sed similique doloremque, quos in neque nobis quis unde consectetur beatae excepturi sunt cupiditate quibusdam minus, eos placeat ipsam!"
     },
     {
      "name":"Guerrilla",
      "url":"./home.html",
      "imageLocatoin":"./images/portfolio3.jpg",
      "description":"3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam magni sapiente sed similique doloremque, quos in neque nobis quis unde consectetur beatae excepturi sunt cupiditate quibusdam minus, eos placeat ipsam!"
     },
     {
      "name":"Vinigrette",
      "url":"./home.html",
      "imageLocatoin":"./images/portfolio4.jpg",
      "description":" 4Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam magni sapiente sed similique doloremque, quos in neque nobis quis unde consectetur beatae excepturi sunt cupiditate quibusdam minus, eos placeat ipsam!"
     },
     {
      "name":"Velasquez",
      "url":"./home.html",
      "imageLocatoin":"./images/portfolio5.jpg",
      "description":" 5Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam magni sapiente sed similique doloremque, quos in neque nobis quis unde consectetur beatae excepturi sunt cupiditate quibusdam minus, eos placeat ipsam!"
     },
     {
      "name":"Eliseo",
      "url":"./home.html",
      "imageLocatoin":"./images/portfolio6.jpg",
      "description":"6 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam magni sapiente sed similique doloremque, quos in neque nobis quis unde consectetur beatae excepturi sunt cupiditate quibusdam minus, eos placeat ipsam!"
     }
]

const modal = document.getElementsByClassName('box');
const modal_container = document.getElementById('modal-container');
const close = document.getElementById('close');
const currentSelection = document.getElementById("description") ;
const button = document.getElementById('viewDetails');



for(let i = 0 ; i < modal.length ; i++) {
    modal[i].addEventListener('click', () => {
     currentSelection.innerText =  jsonData[i].description;
  modal_container.classList.add("show");

  button.onclick =  () => {
    location.href = `../individual${i}.html`;
  };
    })


}

close.addEventListener('click', () => {
    modal_container.classList.remove("show");
})







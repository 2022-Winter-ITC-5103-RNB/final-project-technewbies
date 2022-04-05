const data = [
  {
    id: "card1",
    name: "Farm, Friends and Family",
    content:
      "FFF is an event held during the summer. Have a great time with your family while meeting our little furry friends. ",
    price: 45,
  },

  {
    id: "card2",
    name: "Puppy Fest",
    content:
      "FFF is an event held during the summer. Have a great time with your family while meeting our little furry friends. ",
    price: 45,
  },
];
const event_btn = document.querySelectorAll("#event-btn");

event_btn.forEach((e_btn) => {
  e_btn.addEventListener("click", (btn) => {
    let idElement = btn.target.parentElement.id;
    for (let datas in data) {
      if (idElement == data[datas].id) {
        modalOn(data[datas]);
      }
    }
  });
});

function modalOn({ name, content, price }) {
  console.log("THIS IS DATA" + name);
  const modal = document.getElementById("modal");
  modal.classList.toggle("modal-active");
  let modalHeight = document.body.scrollHeight;
  modal.style.height = `${modalHeight}px`;
}

function modalOff() {
  const modal = document.getElementById("modal");
  modal.classList.toggle("modal-active");
}

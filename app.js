const box = document.querySelector(".box");
box.style.backgroundColor = "red";
const header = document.getElementById("color");
const btn = document.querySelector("#btn")
let x = 0

function rgb() {
    let r= Math.floor(Math.random() * 256)
    let g= Math.floor(Math.random() * 256)
    let b= Math.floor(Math.random() * 256)
    box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}
function inject(item) {
    const container = document.querySelector(".container");
    container.insertAdjacentHTML("beforeend",
    `<div class="card"
       <h2 class="card header">${item}</h2>
        <img src="${item.img}" alt="" />
        <p>filler filler filler</p>
    <div>`,
    );
}

btn.addEventListener("click", function () {
    x++;
    header.textContent = `Clicked ${x}`;
    rgb();
});



function AppCambio(){
    const img = document.querySelector("img");
    const imageLink = img.getAttribute("src");
    const p = document.querySelector("p");
    // p.innerText = imageLink;
    img.setAttribute("src", "https://mimo.app/r/kittles.png");

}
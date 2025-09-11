// const userName = document.getElementById("userNameInput").value;

function register(){
    const paragraph = document.querySelector("p");
    const username = document.getElementById("userNameInput").value;
    paragraph.innerHTML = username + ", Youre asigned up";
}


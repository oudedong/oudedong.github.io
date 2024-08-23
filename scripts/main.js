
const myImage = document.querySelector("img");
const myHeading = document.querySelector("h1");
const myButton = document.querySelector("button");

myImage.onclick = ()=>{
    
    const mySrc = myImage.getAttribute("src");

    if(mySrc === "images/14.png")
        myImage.setAttribute("src", "images/14-2.png");
    else
        myImage.setAttribute("src", "images/14.png");
};

function setUserName() {
    let myName = prompt("Please enter your name.");
    while(myName === null || myName.length <= 0){
        myName = prompt("Please enter your name.");
    }
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.onclick = ()=>{
    setUserName();
};
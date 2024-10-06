const lowerArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m",
    "n","o","p","q","r","s","t","u","v","w","x","y","z"];

const upperArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M",
    "N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

const numArray = ["0","1","2","3","4","5","6","7","8","9"];

const spcArray = ["\""," ","!","#","$","%","&","'","(",")","*","+",",",
  "-",".","/",":",";","<","=",">","?","@","[","]","\\",
  "^","_","`","{","}","|","~",];

const chrArray = [...lowerArray, ...upperArray, ...numArray, ...spcArray];

function passgen(x=24) {
let password = "";
for (let n=0; n<x; n++) {
password += chrArray[Math.floor(Math.random()*95)];
};
return password;
}


const buttonList = document.querySelectorAll(".characterButton");

console.log(buttonList);

buttonList.forEach(buttonElement => {
    console.log("n");
    buttonElement.addEventListener("click", () => {
        if (buttonElement.classList.contains("button--clicked")) {
            buttonElement.classList.remove("button--clicked");
        } else {
            buttonElement.classList.add("button--clicked");
        }
        console.log("Something here");
    });
});
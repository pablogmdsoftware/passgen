// Start passgen functionality

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
};

function passgen2(x,set) {
    let passwordArray = passgen(x-set.size).split("");
    for (y of set) {
        passwordArray.splice(Math.floor(Math.random()*(passwordArray.length+1)),0,y);
    }
    if (set.has("space")) {passwordArray[passwordArray.indexOf("space")] = " "};
    let password2 = "";
    for (m in passwordArray) {
        password2 += passwordArray[m];
    }
    return password2;
};

// End passgen functionality

const addSet = new Set();

const buttonList = document.querySelectorAll(".characterButton");

buttonList.forEach(buttonElement => {
    buttonElement.addEventListener("click", () => {
        if (buttonElement.classList.contains("button--clicked")) {
            buttonElement.classList.remove("button--clicked");
            addSet.delete(buttonElement.textContent);
        } else {
            buttonElement.classList.add("button--clicked");
            addSet.add(buttonElement.textContent);
        };
        console.log(addSet);
    });
});

const pw = document.getElementsByClassName("password")[0];
const buttonGenerate = document.getElementsByClassName("buttonGenerate")[0];
const copyButton = document.getElementsByClassName("copyButton")[0];

buttonGenerate.addEventListener("click", () => {
    pw.value = passgen2(lengthInput.value,addSet);
});

copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(pw.value);
})

const lengthInput = document.getElementById("lengthInput");
const lengthNumber = document.getElementById("lengthNumber");

lengthInput.oninput = (() => {
    lengthNumber.textContent = lengthInput.value;
});
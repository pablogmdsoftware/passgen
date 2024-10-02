const buttonList = document.querySelectorAll(".chrbutton");

console.log(buttonList);

buttonList.forEach(buttonElement => {
    console.log("n");
    buttonElement.addEventListener("click", () => {
        if (buttonElement.classList.contains("button-clicked")) {
            buttonElement.classList.remove("button-clicked");
        } else {
            buttonElement.classList.add("button-clicked");
        }
        console.log("Something here");
    });
});
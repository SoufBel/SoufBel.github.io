let x = 0;
while x = 0;
var message = prompt("Enter your message", "‎");
var counter = parseInt(prompt("How many Times ?", 800));
window.InputEvent = window.Event || window.InputEvent;
var event = new InputEvent("input", { bubbles: true });
var textbox = document.getElementsByClassName("_13NKt copyable-text selectable-text")[1];
for (let index = 0; index < counter; index++) {
    textbox.innerHTML = message;
    textbox.dispatchEvent(event);
    document.getElementsByClassName("_4sWnG")[0].click();
}
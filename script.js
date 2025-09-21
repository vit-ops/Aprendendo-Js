const InputForId = document.getElementById("input-for-id");
const ConfigTextInputId = document.getElementById("Config-text-input-id");
const DivConfiguration = document.getElementsByClassName("div-for-detals-in-tags-1");

let mouseEffectActiveInput = false;
let mouseEffectActiveDiv = false;
let mouseMoveHandlerInput = null;
let mouseMoveHandlerDiv = null;

let rotation = 0;
ConfigTextInputId.addEventListener("click", function() {
    rotation += 360; 
    this.style.transform = `rotate(${rotation}deg)`;

    InputForId.type = InputForId.type === "text" ? "password" : "text";

    if (this.style.backgroundColor === "rgb(51, 51, 51)" || this.style.backgroundColor === "") {
        this.style.backgroundColor = "#fff";
        this.style.color = "#333";
    } else {
        this.style.backgroundColor = "#333";
        this.style.color = "#f0f0f0";
    }
});




document.addEventListener("click", function(e) {

    if (e.target === InputForId || e.target === ConfigTextInputId) return;

    if (!mouseEffectActiveDiv) {
        mouseMoveHandlerDiv = (e) => {
            Array.from(DivConfiguration).forEach((div) => {
                const rect = div.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                const deltaX = e.clientX - centerX;
                const deltaY = e.clientY - centerY;

                div.style.transform = `rotateX(${-deltaY*0.1}deg) rotateY(${deltaX*0.1}deg)`;
                div.style.boxShadow = `${-deltaX*0.2}px ${-deltaY*0.2}px 20px rgba(0,0,0,0.4)`;
            });
        };
        document.addEventListener("mousemove", mouseMoveHandlerDiv);
        mouseEffectActiveDiv = true;
    } else {
        document.removeEventListener("mousemove", mouseMoveHandlerDiv);
        Array.from(DivConfiguration).forEach((div) => {
            div.style.transform = "none";
            div.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
        });
        mouseEffectActiveDiv = false;
    }
});

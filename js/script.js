let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msg = document.querySelector(".msg");
let msgPara = document.querySelector("#message");
let turn_O = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

boxes.forEach((box) => {
    box.addEventListener("click", function () {
        console.log("Box was clicked...");
        if (turn_O) {
            box.innerText = "O";
            turn_O = false;
        } else {
            box.innerText = "X";
            turn_O = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != " ") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("Winner!");
                showWinner(pos1Val);
            }
        }
    }
};

const showWinner = (winner) => {
    msgPara.innerText = `Congratulations, Winner is ${winner}`;
    msg.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
    }
};

const resetGame = () => {
    turn_O = true;
    enableBoxes();
    boxes.forEach((box) => {
        box.innerText = "";
    });
    msgPara.classList.add("hide");
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

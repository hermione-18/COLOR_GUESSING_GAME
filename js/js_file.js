var nums = 6;
var colors = generateColor(nums);
var goal = random(); //winning color chosen
var clicked = goal; //color clicked by user...initializing it with anycolor
var box = document.querySelectorAll(".box"); //color boxes
var rgbdisplay = document.getElementById("rgbdisplay"); //color display text
var msg = document.getElementById("message");
var msg1 = document.getElementById("msg1");
var msg2 = document.getElementById("msg2");
var newcolor = document.querySelector(".newcolor");
var main = document.getElementById("main_heading");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");

easy.addEventListener("click", function() {
    newcolor.textContent = "NEW COLORS";
    msg.textContent = "";
    main.style.backgroundColor = "#F4B400";
    hard.classList.remove("selected");
    hard.classList.add("default");
    easy.classList.add("selected");
    easy.classList.remove("default");
    nums = 3;
    colors = generateColor(3);
    goal = random();
    rgbdisplay.textContent = goal;

    for (var i = 0; i < box.length; i++) {
        if (colors[i]) {
            box[i].style.backgroundColor = colors[i];
        } else {
            box[i].style.display = "none";
        }
    }
});

hard.addEventListener("click", function() {
    newcolor.textContent = "NEW COLORS";
    msg.textContent = "";
    main.style.backgroundColor = "#F4B400";
    easy.classList.remove("selected");
    easy.classList.add("default");
    hard.classList.add("selected");
    hard.classList.remove("default");
    nums = 6;
    colors = generateColor(6);
    goal = random();
    rgbdisplay.textContent = goal;

    for (var i = 0; i < box.length; i++) {
        box[i].style.backgroundColor = colors[i];
        box[i].style.display = "block";
    }
});
rgbdisplay.textContent = goal;
for (var i = 0; i < colors.length; i++) {
    box[i].style.backgroundColor = colors[i];
    box[i].addEventListener("click", function() {
        clicked = this.style.backgroundColor;
        if (clicked === goal) {
            win();
        } else {
            this.style.backgroundColor = "#171D1C";
            msg.textContent = "TRY AGAIN :/";
        }
    });
}

newcolor.addEventListener("click", function() {
    msg.textContent = "";
    colors = generateColor(nums);
    goal = random();
    rgbdisplay.textContent = goal;
    newcolor.textContent = "NEW COLORS";

    main.style.backgroundColor = "#F4B400";
    msg1.textContent = "Can you guess this color??";
    msg2.textContent = "NOW CHOOSE!";

    for (var i = 0; i < box.length; i++) {
        box[i].style.backgroundColor = colors[i];
    }
})

function win() {
    newcolor.textContent = "PLAY AGAIN?";

    msg.textContent = "CORRECT! ^-^";
    main.style.backgroundColor = goal;
    msg1.textContent = "You guessed it right";
    msg2.textContent = "AMAZING DUDE!!"
    for (var i = 0; i < box.length; i++) {
        box[i].style.backgroundColor = goal;
    }
}

function random() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function generateColor(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    //pick red green and blue;
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}

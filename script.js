var container = document.createElement("div");
container.setAttribute("id", "container");
document.body.append(container);

var calculator = document.createElement("div");
calculator.setAttribute("id", "calculator");
container.append(calculator);

var res = document.createElement("div");
res.setAttribute("id", "result");

var keyboard = document.createElement("div");
keyboard.setAttribute("id", "keyboard");
calculator.append(res, keyboard);

var res_value = document.createElement("p");
res_value.setAttribute("id", "res-value");
res.append(res_value);

var one = createButtons("button", 1, "number");
one.innerHTML = "1";

var two = createButtons("button", 2, "number");
two.innerHTML = "2";

var three = createButtons("button", 3, "number");
three.innerHTML = "3";

var addition = createButtons("button", "+", "operator");
addition.innerHTML = "+";

var four = createButtons("button", 4, "number");
four.innerHTML = "4";

var five = createButtons("button", 5, "number");
five.innerHTML = "5";

var six = createButtons("button", 6, "number");
six.innerHTML = "6";

var sub = createButtons("button", "-", "operator");
sub.innerHTML = "-";

var seven = createButtons("button", 7, "number");
seven.innerHTML = "7";

var eight = createButtons("button", 8, "number");
eight.innerHTML = "8";

var nine = createButtons("button", 9, "number");
nine.innerHTML = "9";

var multiplication = createButtons("button", "*", "operator");
multiplication.innerHTML = "*";

var cl = createButtons("button", "clear", "operator");
cl.innerHTML = "C";

var zero = createButtons("button", 0, "number");
zero.innerHTML = "0";

var eq = createButtons("button", "=", "operator");
eq.innerHTML = "=";

var division = createButtons("button", "/", "operator");
division.innerHTML = "/";

function createButtons(elementsName, idName = "", className = "") {
    var result = document.createElement(elementsName);
    result.setAttribute("id", idName);
    result.setAttribute("class", className);
    keyboard.append(result);
    return result;
}

function printOutput(num) {
    if (num.includes("=")) {
        var num1 = num.replace("=", "");
        document.getElementById("res-value").innerHTML = num1;
    } else {
        document.getElementById("res-value").innerHTML = num;
    }
}

function getOutput() {
    return document.getElementById("res-value").innerHTML;
}
var operators = document.getElementsByClassName("operator");
var numbers = document.getElementsByClassName("number");
var keyboard_value = [...operators, ...numbers];
var flag = 0;
for (var i = 0; i < keyboard_value.length; i++) {
    keyboard_value[i].addEventListener("click", function () {
        if (this.id == "clear") {
            printOutput("");
        } else if (this.className == "operator" && flag == 0) {
            printOutput("");
            flag = 1;
        } else {
            var output = getOutput();
            if (output != NaN) {
                flag = 1;
                output = output + this.id;
                printOutput(output);

                if (this.id == '=') {
                    var req = document.getElementById("res-value").textContent;
                    //console.log(req);
                    var res = eval(req);
                    res = res.toString();
                    // console.log(res);
                    // console.log(typeof(res));
                    printOutput(res);
                }
            }
        }
    });
}
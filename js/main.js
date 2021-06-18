"use strict";
const container = document.querySelector(".content");

// function to generate bars
function generatebars(num = 20) {
    //for loop to generate 20 bars
    for (let i = 0; i < num; i += 1) {
        // To generate random values from 1 to 100
        const value = Math.floor(Math.random() * 100) + 1;

        // To create element "div"
        const bar = document.createElement("div");

        // To add class "bar" to "div"
        bar.classList.add("bar");

        // Provide height to the bar
        bar.style.height = `${value * 3}px`;

        // Translate the bar towards positive X axis
        bar.style.transform = `translateX(${i * 30}px)`;

        // To create element "label"
        const barLabel = document.createElement("label");

        // To add class "bar_id" to "label"
        barLabel.classList.add("bar_id");

        // Assign value to "label"

        barLabel.innerHTML = value;
        // Append "Label" to "div"
        bar.appendChild(barLabel);

        // Append "div" to "data-container div"
        container.appendChild(bar);
    }
}

async function bubbleSort(delay = 300) {

    let bars = document.querySelectorAll(".bar");
    for (var i = 0; i < bars.length - 1; i += 1) {

        for (var j = 0; j < bars.length - i - 1; j += 1) {
            bars[j].style.backgroundColor = "pink";
            bars[j + 1].style.backgroundColor = "blue";
            var a = parseInt(bars[j].childNodes[0].innerHTML);
            var height_a = bars[j].style.height;
            var b = parseInt(bars[j + 1].childNodes[0].innerHTML);
            var height_b = bars[j + 1].style.height;

            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 300)
            );
            if (a > b) {
                bars[j].childNodes[0].innerText = b;
                bars[j].style.height = height_b;
                bars[j + 1].childNodes[0].innerText = a;
                bars[j + 1].style.height = height_a;
                bars[j].style.backgroundColor = "yellow";
                bars[j + 1].style.backgroundColor = "yellow";
            }
        }
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 300)
        );
        bars[j].style.backgroundColor = "rgb(49, 226, 13)"

    }
    enable();
}
// asynchronous function to perform "Insertion Sort"
async function insertionSort(delay = 600) {
    let bars = document.querySelectorAll(".bar");
    for (var i = 0; i < bars.length; i += 1) {
        var j = i;
        var k = j - 1;
        bars[j].style.backgroundColor = "darkblue";


        while (j > k && k > -1) {

            bars[j].style.backgroundColor = "red";
            bars[k].style.backgroundColor = "  rgb(24, 190, 255)";
            var height = bars[j].style.height;
            var value = parseInt(bars[j].childNodes[0].innerHTML);
            var valueleft = parseInt(bars[k].childNodes[0].innerHTML);
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 600)
            );

            if (value < valueleft) {
                bars[j].style.height = bars[k].style.height;
                bars[k].style.height = height;
                bars[j].childNodes[0].innerText = bars[k].childNodes[0].innerText;
                bars[k].childNodes[0].innerText = value;
            } else {
                break;
            }
            j--;
            k--;
        }

        // To pause the execution of code for 300 milliseconds
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 600)
        );
    }
    for (var i = 0; i < bars.length; i++) {
        bars[i].style.backgroundColor = " rgb(49, 226, 13)";
    }
    enable();
}
// asynchronous function to perform "Selection Sort"
async function selectionSort(delay = 300) {
    let bars = document.querySelectorAll(".bar");
    // Assign 0 to min_idx
    var min_idx = 0;
    for (var i = 0; i < bars.length; i += 1) {
        // Assign i to min_idx
        min_idx = i;

        // Provide darkblue color to the ith bar
        bars[i].style.backgroundColor = "darkblue";
        for (var j = i + 1; j < bars.length; j += 1) {
            // Provide red color to the jth bar
            bars[j].style.backgroundColor = "red";

            // To pause the execution of code for 300 milliseconds
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 300)
            );

            // To store the integer value of jth bar to var1
            var val1 = parseInt(bars[j].childNodes[0].innerHTML);

            // To store the integer value of (min_idx)th bar to var2
            var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);

            // Compare val1 & val2
            if (val1 < val2) {
                if (min_idx !== i) {
                    // Provide skyblue color to the (min-idx)th bar
                    bars[min_idx].style.backgroundColor = "  rgb(24, 190, 255)";
                }
                min_idx = j;
            } else {
                // Provide skyblue color to the jth bar
                bars[j].style.backgroundColor = "  rgb(24, 190, 255)";
            }
        }

        // To swap ith and (min_idx)th bar
        var temp1 = bars[min_idx].style.height;
        var temp2 = bars[min_idx].childNodes[0].innerText;
        bars[min_idx].style.height = bars[i].style.height;
        bars[i].style.height = temp1;
        bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
        bars[i].childNodes[0].innerText = temp2;

        // To pause the execution of code for 300 milliseconds
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 300)
        );

        // Provide skyblue color to the (min-idx)th bar
        bars[min_idx].style.backgroundColor = "  rgb(24, 190, 255)";

        // Provide lightgreen color to the ith bar
        bars[i].style.backgroundColor = " rgb(49, 226, 13)";
    }
    enable();
}

// Call "generatebars" function
generatebars();

// function to generate new random array
function generateOnClick() {
    document.querySelector(".content").innerHTML = "";
    generatebars();
}

//  function to disable the button
function disable() {
    // To disable the button "Generate New Array"
    document.getElementById("btn1").disabled = true;
    document.getElementById("btn1").style.backgroundColor = "#d8b6ff";
    document.getElementById("btn2").disabled = true;
    document.getElementById("btn2").style.backgroundColor = "#d8b6ff";

    document.getElementById("bubble_srt_btn").disabled = true;
    document.getElementById("bubble_srt_btn").style.backgroundColor = "#d8b6ff";

    document.getElementById("selection_srt_btn").disabled = true;
    document.getElementById("selection_srt_btn").style.backgroundColor =
        "#d8b6ff";
    document.getElementById("merge_srt_btn").disabled = true;
    document.getElementById("merge_srt_btn").style.backgroundColor = "#d8b6ff";
    document.getElementById("insertion_srt_btn").disabled = true;
    document.getElementById("insertion_srt_btn").style.backgroundColor =
        "#d8b6ff";
    document.getElementById("quick_srt_btn").disabled = true;
    document.getElementById("quick_srt_btn").style.backgroundColor = "#d8b6ff";
}

function enable() {
    document.getElementById("bubble_srt_btn").disabled = false;
    document.getElementById("bubble_srt_btn").style.backgroundColor = "#6f459e";

    document.getElementById("selection_srt_btn").disabled = false;
    document.getElementById("selection_srt_btn").style.backgroundColor =
        "#6f459e";
    document.getElementById("merge_srt_btn").disabled = false;
    document.getElementById("merge_srt_btn").style.backgroundColor = "#6f459e";
    document.getElementById("insertion_srt_btn").disabled = false;
    document.getElementById("insertion_srt_btn").style.backgroundColor =
        "#6f459e";
    document.getElementById("quick_srt_btn").disabled = false;
    document.getElementById("quick_srt_btn").style.backgroundColor = "#6f459e";

    // To enable the button "Generate New Array" after final(sorted)
    document.getElementById("btn1").disabled = false;
    document.getElementById("btn1").style.backgroundColor = "#6f459e";

    // To enable the button "Selection Sort" after final(sorted)
    document.getElementById("btn2").disabled = false;
    document.getElementById("btn2").style.backgroundColor = "#6f459e";
}
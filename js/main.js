"use strict";
const rangeValue = document.querySelector(".rangeValue");
const inputSlider = document.querySelector(".input-range");
inputSlider.oninput = (() => {
    let val = inputSlider.value;
    rangeValue.textContent = val;
    rangeValue.style.left = (val / 2) + "%";
    rangeValue.classList.add("show");

});
inputSlider.onblur = (() => {
    rangeValue.classList.remove("show");
});
const container = document.querySelector(".bars-container");
removeDiv();

function removeDiv() {
    document.querySelector(".padding-content").style.display = "none";
    const all = document.querySelectorAll(".sort-info");
    all.forEach(function(item) { item.style.display = "none"; });
}

function enableDiv(_id) {
    document.querySelector(".padding-content").style.display = "block";
    document.querySelector("." + _id).style.display = "block";
}

function getSpeed() {
    let speed = parseInt(document.querySelector(".input-range").value);

    if (speed > 50) {
        return (300 - (300 - speed) % 300);
    } else if (speed < 50) {
        console.log("low speed");
        return (300 - (speed + 300) % 300);
    } else {
        return speed;
    }

}
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

async function mergeSort(delay = 300) {
    removeDiv();
    enableDiv("merge-sort");
    document.getElementById("merge_srt_btn").style.backgroundColor = "red";
    let bars = document.querySelectorAll(".bar");
    await sortData(bars, 0, bars.length - 1);
    enable();
}

async function sortData(array, low, high) {
    if (low < high) {
        let speed = getSpeed();
        var mid = Math.floor(high - (high - low) / 2);
        array[mid].style.backgroundColor = "red";
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, speed)
        );
        await sortData(array, low, mid);
        await sortData(array, mid + 1, high);
        await merge(array, low, mid, mid + 1, high, speed);

    }
}

async function merge(array, low1, high1, low2, high2, speed) {

    var len_array = high2 - low1 + 1;
    var helper = new Array(len_array);
    var helper_take_height = new Array(len_array);
    var k = 0;
    var i = low1;
    var j = low2;
    array[low1].style.backgroundColor = "pink";
    array[low2].style.backgroundColor = "pink";
    while (i <= high1 && j <= high2) {
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, speed)
        );
        array[i].style.backgroundColor = "blue";
        array[j].style.backgroundColor = "blue";
        if (parseInt(array[i].childNodes[0].innerHTML) < parseInt(array[j].childNodes[0].innerHTML)) {


            helper[k] = parseInt(array[i].childNodes[0].innerHTML);
            helper_take_height[k] = array[i].style.height;
            i += 1;
            k += 1;
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, speed)
            );
        } else if (parseInt(array[i].childNodes[0].innerHTML) >= parseInt(array[j].childNodes[0].innerHTML)) {
            array[i].style.backgroundColor = "yellow";
            array[j].style.backgroundColor = "yellow";
            helper[k] = parseInt(array[j].childNodes[0].innerHTML);
            helper_take_height[k] = array[j].style.height;
            j += 1;
            k += 1;
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, speed)
            );
        }
        if (j < high2 && i < high1) {
            array[i].style.backgroundColor = "blue";
            array[j].style.backgroundColor = "blue";
        }
    }

    while (i <= high1) {

        helper[k] = parseInt(array[i].childNodes[0].innerHTML);
        array[i].style.backgroundColor = "blue";
        helper_take_height[k] = array[i].style.height;
        i += 1;
        k += 1;
    }
    while (j <= high2) {
        helper[k] = parseInt(array[j].childNodes[0].innerHTML);
        array[j].style.backgroundColor = "blue";
        helper_take_height[k] = array[j].style.height;
        j += 1;
        k += 1;
    }

    for (var i = low1, k = 0; i <= high2; i += 1, k += 1) {
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, speed)
        );
        array[i].childNodes[0].innerHTML = helper[k];
        array[i].style.height = helper_take_height[k];
        array[i].style.backgroundColor = "rgb(49, 226, 13)";
    }
}

async function bubbleSort(delay = 300) {

    removeDiv();
    enableDiv("bubble-sort");
    var speed = getSpeed();
    console.log(speed);
    document.getElementById("bubble_srt_btn").style.backgroundColor = "red";
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
                }, speed)
            );
            if (a > b) {
                await new Promise((resolve) =>
                    setTimeout(() => {
                        resolve();
                    }, speed)
                );
                bars[j].childNodes[0].innerText = b;
                bars[j].style.height = height_b;
                bars[j + 1].childNodes[0].innerText = a;
                bars[j + 1].style.height = height_a;
                bars[j].style.backgroundColor = "yellow";
                bars[j + 1].style.backgroundColor = "yellow";
            }
            bars[j + 1].style.backgroundColor = "rgb(24, 190, 255)";
            bars[j].style.backgroundColor = "rgb(24, 190, 255)";

            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, speed + speed)
            );
        }
        bars[j].style.backgroundColor = "rgb(49, 226, 13)";
    }

    bars[0].style.backgroundColor = "rgb(49, 226, 13)";
    enable();
}

async function quickSort(delay = 300) {
    removeDiv();
    enableDiv("quick-sort");
    document.getElementById("quick_srt_btn").style.backgroundColor = "red";
    let bars = document.querySelectorAll(".bar");
    await quick(bars, 0, bars.length - 1);
    for (var i = 0; i < bars.length; i++) {
        bars[i].style.backgroundColor = " rgb(49, 226, 13)";
    }
    enable();
}

async function quick(array, low, high) {
    if (low < high) {
        let speed = getSpeed();
        var mid = await find_pivot(array, low, high, speed);
        array[mid].style.backgroundColor = " rgb(49, 226, 13)";
        await quick(array, low, mid - 1);
        await quick(array, mid + 1, high);
    }
}

async function find_pivot(array, low, high, speed) {
    var i = low;
    var j = high + 1;
    var pivot = parseInt(array[i].childNodes[0].innerText);
    var pivot_index = low;

    array[pivot_index].style.backgroundColor = "red";
    do {
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, speed)
        );
        do {
            i += 1;
            array[i].style.backgroundColor = "darkblue";
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, speed)
            );
            array[i].style.backgroundColor = "rgb(24, 190, 255)";
        } while (pivot > parseInt(array[i].childNodes[0].innerHTML) && i < high);

        array[i].style.backgroundColor = "blue";

        do {
            j -= 1;
            array[j].style.backgroundColor = "darkblue";
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, speed)
            );
            array[j].style.backgroundColor = "  rgb(24, 190, 255)";
        } while (pivot < parseInt(array[j].childNodes[0].innerHTML));

        array[j].style.backgroundColor = "blue";

        if (i < j) {
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, speed)
            );
            var a = parseInt(array[i].childNodes[0].innerHTML);
            var b = parseInt(array[j].childNodes[0].innerHTML);
            var height_a = array[i].style.height;
            var height_b = array[j].style.height;
            array[i].childNodes[0].innerText = b;
            array[j].childNodes[0].innerText = a;
            array[i].style.height = height_b;
            array[j].style.height = height_a;
            array[i].style.backgroundColor = "rgb(24, 190, 255)";
            array[j].style.backgroundColor = "rgb(24, 190, 255)";
        }
    } while (i < j);

    var height_pivot = array[low].style.height;
    array[low].childNodes[0].innerText = parseInt(array[j].childNodes[0].innerHTML);
    array[low].style.backgroundColor = "  rgb(24, 190, 255)";
    array[low].style.height = array[j].style.height;
    array[j].childNodes[0].innerText = pivot;
    array[j].style.height = height_pivot;
    array[j].style.backgroundColor = "pink";

    await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, speed)
    );

    return j;
}

// asynchronous function to perform "Insertion Sort"
async function insertionSort(delay = 300) {
    removeDiv();
    enableDiv("insertion-sort");
    document.getElementById("insertion_srt_btn").style.backgroundColor = "red";
    let speed = getSpeed();
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
                }, speed)
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

        // To pause the execution of code for speed milliseconds
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, speed)
        );
    }
    for (var i = 0; i < bars.length; i++) {
        bars[i].style.backgroundColor = " rgb(49, 226, 13)";
    }
    enable();
}
async function heapify(array, i, n, speed) {
    //console.log(i, n);
    // console.log("heap");
    var leftchild = 2 * i + 1;
    var rightchild = leftchild + 1;
    var pivot = i;
    array[pivot].style.backgroundColor = "red";
    await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, speed)
    );
    if (leftchild < n)
        array[leftchild].style.backgroundColor = "blue";
    await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, speed)
    );
    if (rightchild < n)
        array[rightchild].style.backgroundColor = "blue";

    if (leftchild < n && (parseInt(array[leftchild].childNodes[0].innerHTML) > parseInt(array[pivot].childNodes[0].innerHTML))) {
        array[pivot].style.backgroundColor = "pink";
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, speed)
        );
        array[pivot].style.backgroundColor = "rgb(24, 190, 255)";
        pivot = leftchild;
        array[pivot].style.backgroundColor = "red";
    }
    if (rightchild < n && (parseInt(array[rightchild].childNodes[0].innerHTML) > parseInt(array[pivot].childNodes[0].innerHTML))) {
        array[pivot].style.backgroundColor = "pink";
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, speed)
        );
        array[pivot].style.backgroundColor = " rgb(24, 190, 255)";
        pivot = rightchild;
        array[pivot].style.backgroundColor = "red";
    }
    await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, speed)
    );
    array[pivot].style.backgroundColor = "rgb(24, 190, 255)";
    if (leftchild < n)
        array[leftchild].style.backgroundColor = "rgb(24, 190, 255)";
    if (rightchild < n)
        array[rightchild].style.backgroundColor = "rgb(24, 190, 255)";
    if (pivot != i) {
        array[pivot].style.backgroundColor = "rgb(24, 190, 255)";
        await swap(array, i, pivot, speed);
        await heapify(array, pivot, n, speed);
    }

}
async function swap(bars, a, b, speed) {
    var temp1 = bars[a].style.height;
    var temp2 = bars[a].childNodes[0].innerText;
    bars[a].style.height = bars[b].style.height;
    bars[b].style.height = temp1;
    bars[a].childNodes[0].innerText = bars[b].childNodes[0].innerText;
    bars[b].childNodes[0].innerText = temp2;

    // To pause the execution of code for speed milliseconds
    await new Promise((resolve) =>
        setTimeout(() => {
            resolve();
        }, speed)
    );
}
async function heapSort(delay = 300) {

    removeDiv();
    enableDiv("heap-sort");
    let speed = getSpeed();
    document.getElementById("heap_srt_btn").style.backgroundColor = "red";
    let bars = document.querySelectorAll(".bar");
    var n = bars.length;
    for (var i = 0; i < n; i++) {
        bars[i].style.backgroundColor = " rgb(24, 190, 255)";
    }

    for (var i = (Math.floor(n / 2) - 1); i >= 0; i--) {
        await heapify(bars, i, n, speed);
    }
    for (var i = n - 1; i >= 0; i--) {
        await swap(bars, 0, i, speed);
        bars[i].style.backgroundColor = " rgb(49, 226, 13)";
        await heapify(bars, 0, i);
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, speed)
        );
    }
    for (var i = 0; i < n; i++) {
        bars[i].style.backgroundColor = " rgb(49, 226, 13)";
    }
    enable();

}
// asynchronous function to perform "Selection Sort"
async function selectionSort(delay = 300) {
    removeDiv();
    enableDiv("selection-sort");
    document.getElementById("selection_srt_btn").style.backgroundColor = "red";
    let speed = getSpeed();
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

            // To pause the execution of code for speed milliseconds
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, speed)
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

        // To pause the execution of code for speed milliseconds
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, speed)
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
    document.querySelector(".bars-container").innerHTML = "";
    removeDiv();
    generatebars();
}

function pauseOnClick() {
    flag = false;
}

function resumeOnClick() {
    flag = true;
}
//  function to disable the button
function disable() {
    // To disable the button "Generate New Array"
    document.getElementById("btn1").disabled = true;
    document.getElementById("btn1").style.backgroundColor = "#d8b6ff";

    document.getElementById("bubble_srt_btn").disabled = true;
    document.getElementById("selection_srt_btn").disabled = true;
    document.getElementById("merge_srt_btn").disabled = true;
    document.getElementById("insertion_srt_btn").disabled = true;
    document.getElementById("quick_srt_btn").disabled = true;
    document.getElementById("heap_srt_btn").disabled = true;
}

function enable() {
    document.getElementById("bubble_srt_btn").disabled = false;
    document.getElementById("selection_srt_btn").disabled = false;
    document.getElementById("merge_srt_btn").disabled = false;
    document.getElementById("insertion_srt_btn").disabled = false;
    document.getElementById("quick_srt_btn").disabled = false;
    document.getElementById("heap_srt_btn").disabled = false;
    document.getElementById("insertion_srt_btn").style.backgroundColor = "#00BF7F";
    document.getElementById("quick_srt_btn").style.backgroundColor = "#00BF7F";
    document.getElementById("merge_srt_btn").style.backgroundColor = "#00BF7F";
    document.getElementById("bubble_srt_btn").style.backgroundColor = "#00BF7F";
    document.getElementById("selection_srt_btn").style.backgroundColor = "#00BF7F";
    document.getElementById("heap_srt_btn").style.backgroundColor = "#00BF7F";
    // To enable the button "Generate New Array" after final(sorted)
    document.getElementById("btn1").disabled = false;
    document.getElementById("btn1").style.backgroundColor = "#6f459e";

    // To enable the button "Selection Sort" after final(sorted)
    document.getElementById("btn2").disabled = false;
    document.getElementById("btn2").style.backgroundColor = "#6f459e";

    document.getElementById("btn3").disabled = false;
    document.getElementById("btn3").style.backgroundColor = "#6f459e";
}
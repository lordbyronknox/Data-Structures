
//Below shows a function for performing sequential search on an array.
function seqSearch(arr, data) {
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] == data) {
            return true;
        }
    }
    return false;
}
// function binSearch(arr, data) {
//     var upperBound = arr.length - 1;
//     var lowerBound = 0;
//     while (lowerBound <= upperBound) {
//         var mid = Math.floor((upperBound + lowerBound) / 2);
//         if (arr[mid] < data) {
//             lowerBound = mid + 1;
//         }
//         else if (arr[mid] > data) {
//             upperBound = mid - 1;
//         }
//         else {
//             return mid;
//         }
//     }
//     return -1;
// }
function dispArr(arr) {
    for (var i = 0; i < arr.length; ++i) {
        console.log(arr[i] + " ");
        if (i % 10 == 9) {
            console.log("\n");
        }
    }
    if (i % 10 != 0) {
        console.log("\n");
    }
}
function findMin(arr) {
    var min = arr[0];
    for (var i = 1; i < arr.length; ++i) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
function findMax(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; ++i) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
function swap(arr, index, index1) {
    temp = arr[index];
    arr[index] = arr[index1];
    arr[index1] = temp;
}
function binSearch(arr, data) {
    var upperBound = arr.length - 1;
    var lowerBound = 0;
    while (lowerBound <= upperBound) {
        var mid = Math.floor((upperBound + lowerBound) / 2);
        console.log("Current midpoint: " + mid);
        if (arr[mid] < data) {
            lowerBound = mid + 1;
        }
        else if (arr[mid] > data) {
            upperBound = mid - 1;
        }
        else {
            return mid;
        }
    }
    return -1;
}
function count(arr, data) {
    var count = 0;
    var position = binSearch(arr, data);
    if (position > -1) {
        ++count;
        for (var i = position - 1; i > 0; --i) {
            if (arr[i] == data) {
                ++count;
            }
            else {
                break;
            }
        }
        for (var i = position + 1; i < arr.length; ++i) {
            if (arr[i] == data) {
                ++count;
            }
            else {
                break;
            }
        }
    }
    return count;
}
function run() {
    var nums = [];
    for (var i = 0; i < 10; ++i) {
        nums[i] = Math.floor(Math.random() * 11);
    }
    dispArr(nums);
    var num = parseInt(prompt("Enter a number to search for(1 and 10): "));
    console.log();
    if (seqSearch(nums, num)) {
        console.log(num + " is in the array.");
    }
    else {
        console.log(num + " is not in the array.");
    }
    console.log();
    dispArr(nums);
    var minValue = findMin(nums);
    dispArr(nums);
    console.log();
    console.log("The minimum value is: " + minValue);
    var retVal = binSearch(nums, val);
    if (retVal >= 0) {
        console.log("Found " + val + " at position " + retVal);
    }
    else {
        console.log(val + " is not in array.");
    }
    var val = parseInt(prompt("Enter a value to count: "));
    var retVal = count(nums, val);
    console.log("Found " + retVal + " occurrences of " + val + ".");
}














var arr1 = [];
for (var i = 0; i < 10; ++i) {
    arr1[i] = Math.floor(Math.random() * 10);
}
console.log(arr1);

function minMax(arr) {
    min = [arr[1]];
    max = [];
    for (var i = 0; i < arr.length; ++i) {
        if (arr[i] < min) {
            min = arr[i];
        }
        else if (arr[i] > max) {
            max = arr[i]
        }
    }console.log("min: " + min + "\n" + "max: " + max)
}
minMax(arr1)
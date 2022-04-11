var nums = [];
for (var i = 0; i < 10; ++i) {
    nums[i] = Math.floor(Math.random() * 11);
}

//end of main program

function run() {
    document.write("This is the start array " + nums + "<br>");
    insertionsort(nums);
    document.write("this is the final sorted array " + nums + "<br>");
    //dispArr(nums);
    var val = parseInt(window.prompt("Enter a value to search for: "));
    document.write("you are searching for " + val + "<br>");
    var retVal = binSearch(nums, val);
    if (retVal >= 0) {
        document.write("Found " + val + " at position " + retVal + "<br>");
    }
    else {
        document.write(val + " is not in array." + "<br>");
    }
    document.write(arr + "<br>");
}

//end of main program

function binSearch(arr, val) {
    var upperBound = arr.length - 1;
    var lowerBound = 0;
    while (lowerBound <= upperBound) {
        var mid = Math.floor((upperBound + lowerBound) / 2);
        if (arr[mid] < val) {
            lowerBound = mid + 1;
            document.write("our searched value could be in upper half of sorted array" + "<br>");
            document.write("the upper half looks like this " + arr.slice(lowerBound, upperBound + 1) + "<br>");
        }
        else if (arr[mid] > val) {
            upperBound = mid - 1;
            document.write("our searched value could be in lower half of array " + "<br>");
            document.write("the lower half looks like this " + arr.slice(lowerBound, upperBound + 1) + "<br>");
        }
        else {
            // if (mid != val) {
            //     document.write("not in array " + "<br>");
            // } else {
                document.write("match at " + mid + "<br>");
                return mid;
            // }
        }
    }
    return -1;
 }

function insertionsort(nums) {
    for (let i = 1; i < nums.length; i++) {
        let j = i - 1
        let temp = nums[i]
        while (j >= 0 && nums[j] > temp) {
            nums[j + 1] = nums[j]
            j--
        }
        nums[j + 1] = temp
    }
    return nums;

}
// function dispArr(arr) {
// for (var i = 0; i < arr.length; ++i) {
// console.log(arr[i] + " ");
// if (i % 2 == 1) {
// console.log("\nnums");

// }
// }
// if (i % 2 != 0) {
//     console.log("\n");
// }


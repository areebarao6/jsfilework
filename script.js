//give an integer array nums,find a subarray that has the largest product and return the product
function Subarray(nums) {
    if (nums.length === 0) return 0;

    let maxPrd = nums[0];
    let minPrd = nums[0];
    let result = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < 0) {
            let swip = maxPrd;
            maxPrd = minPrd;
            minPrd= swip;
        }

        maxPrd = Math.max(nums[i], maxPrd * nums[i]);
        minPrd= Math.min(nums[i], minPrd * nums[i]);

        result = Math.max(result, maxPrd);
    }

    return result;
}

// Example usage:
const nums = [2, 3, -2, 4];
console.log(Subarray(nums)); 


//question no 2
//Given an array of integers nums and an integer target, return indices of
//the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the
//same element twice.

function sum_2(nums, target) {
    const numIndice = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numIndice.hasOwnProperty(complement)) {
            return [numIndice[complement], i];
        }
        numIndice[nums[i]] = i;
    }


    return [];
}

// Example usage:
const nums2 = [2, 7, 11, 15];
const target = 9;
console.log(sum_2(nums2, target));


//question no 3
//Reverse each word in a given input string.

function reverseWords(inputString) {
    // Split the input string into an array of words
    const words = inputString.split(" ");

    // Reverse each word in the array
    const reversedWords = words.map(word => {
        return word.split("").reverse().join("");
    });

    // Join the reversed words back into a single string
    const reversedString = reversedWords.join(" ");

    return reversedString;
}

// Example usage:
const inputString = "hello areeba here ";
console.log(reverseWords(inputString));




//question no 5
//Write a JavaScript function to convert an amount into coins.
//Sample function : amountTocoins(46, [25, 10, 5, 2, 1])
//Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
//Output : 25, 10, 10, 1
//You can return the answer in any order.

function amountToCoins(amount, coins) {
    const result = [];
    let remainingAmount = amount;

    for (const coin of coins) {
        while (remainingAmount >= coin) {
            result.push(coin);
            remainingAmount -= coin;
        }
    }

    return result;
}

// Example usage:
const amount = 46;
const coins = [25, 10, 5, 2, 1];
console.log(amountToCoins(amount, coins)); // Output: [25, 10, 10, 1]
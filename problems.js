function divideByThree(num) {
    let three=num/3;
    return three;
    /* Returns the passed in number argument divided by three. */
    // Your code here
};

function averageOfTwo(num1, num2) {
    let sum = num1 + num2;
    let avg=sum/2;
    return avg;
    /* Returns the average of two numbers, num1 and num2. */
    // Your code here
};

function averageOfFour(num1, num2, num3, num4) {
    let sum=num1+num2+num3+num4;
    let avg=sum/4;
    return avg;
    /* Takes in four numbers. The function should return the average of all of
    the numbers. */
    // Your code here
};

function doubler(nums) {
    let doubNum= [];
/*need to change to an array*/
    for (let i=0 ; i<nums.length ; i+=-1) {
/*starting at 0 in the array, as long as the index is in the length of the array
/* (it only uses the values present), we will go down the line until the end)*/
        let num1=nums[i];
/*set num1 to be the input of nums*/
        let num2=num1*2;
        doubNum=doubNum.concat(num2);}
/*concat does not change original array*/
    }
    return doubNum;
    /* Takes an array of numbers and returns a new array where every element of
    the original array is multiplied by 2. */
    // Your code here
};

function combineArrays(arr1, arr2) {
    let nArr=arr1.concat(arr2);
    return nArr;
    /* Takes in two arrays of numbers and returns the two arrays combined into
    a single array. **Hint**: Use the `Array.concat` method but be aware that
    calling this method won't permanently change, also known as **mutate**,
    either array. */
    // Your code here
};

function wordWithinArray(word, arr) {
    let eString=word.includes(arr);
    if (eString==true) {
        return true
    }
    else {
        return false
    }
    }
    /* Takes in both a word and an array of words as arguments and returns a
    boolean that returns true if that string is located inside of the array, or
    false if it does not. Use `Array.indexOf`. */
    // Your code here
};

function echo(str) {
    let echostr=str.toUpperCase() + " ... " + str + " ... " + str.toLowerCase();
    console.log(echostr);
    /* Takes in a string and returns that string "echo-ized". E.g.
    echo("Mom!"); // => returns "MOM! ... Mom! ... mom!"
    echo("hey"); // => returns "HEY ... hey ... hey"
    echo("JUMp"); // => returns "JUMP ... JUMp ... jump" */
    // Your code here
};

function fizzBuzz(max) {
    for (let i=0; i<max; i+=1) {
        if (i % 3===0 && i %5 !==0) {
            console.log(i);
        }
        else if (i %5===0 && i%3 !==0) {
            console.log(i);
        }
    }
    /* Takes a number, max and returns an array that contains every number from
    0 to max (not inclusive) that is divisible by either 3 or 5, **but not both**. */
    // Your code here
};

function hello(name) {
    console.log("Hello, " + name);

    /* Takes in a string name and returns a string saying "Hello, " to that name. */
    // Your code here
};

function goodbye(name) {
    console.log("Bye, " + name);
    /* Takes in a string name and returns a string saying "Bye, " to that name. */
    // Your code here
};

function isFive(num) {
    /* Takes in a number, num, and returns `true` if a number is equal to 5 and
    `false` if it is not. */
    // Your code here
};

function isOdd(num) {
    /* Takes in a number and returns `true` if the number is odd and returns
    `false` otherwise. Try writing this with and without `if` statements */
    // Your code here
};

function isSubString(searchString, subString) {
    /* Takes in two strings, `searchString` and `subString`. Should return
    `true` if `subString` is a part of the`searchString`, regardless of upper
    or lower case, and `false` if otherwise. */
    // Your code here
};

function aCounter(word) {
    /* Takes in a word and returns the number of a's within that word. Counts
    both lowercase (a) and uppercase (A). Your job is to translate the following
    function to use a `for` loop instead of the `while` loop it is currently
    using. */

    /*
    let index = 0;
    let count = 0;
    while (index < word.length) {
        let char = word[index];
        if (char === "a" || char === "A") {
        count += 1;
        }
        index++;
    }
    return count;
    */
    // Your code here
};

module.exports = {
    divideByThree,
    averageOfTwo,
    averageOfFour,
    doubler,
    combineArrays,
    wordWithinArray,
    echo,
    fizzBuzz,
    hello,
    goodbye,
    isFive,
    isOdd,
    isSubString,
    aCounter
}

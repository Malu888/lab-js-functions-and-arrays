// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1
    } else if (num2 > num1) {
        return num2
    } else {
        return num1
    }
}
maxOfTwoNumbers(4, 4)
console.log(maxOfTwoNumbers(1, 9))

// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];
let count = 0;

function findLongestWord(words) {

    if (words === undefined || words === null) {
        return `Error please define argument`
    } else if (words.length === 0) {
        return null
    }

    let longest = ""

    for (let i = 0; i < words.length; i++) {
        let indexWords = words[i]

        if (indexWords.length > longest.length) {
            longest = indexWords
        }
    }
    return longest
}
findLongestWord(words)
console.log(findLongestWord(words))


// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];


function sumNumbers(numbers) {
    if (numbers.length === 0) {
        return 0
    }
    if (numbers.length === 1) {
        numbers
    }

    let countNum = 0;

    for (let i = 0; i < numbers.length; i++) {
        countNum += numbers[i]
    }
    return countNum
}
sumNumbers(numbers)
console.log(sumNumbers(numbers))


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];


function averageNumbers(numbers2) {
    if (numbers2.length === 0) {
        return 0
    }
    if (numbers2.length === 1) {
        numbers2
    }

    let sumTotal = 0
    let averageNum2 = 0

    for (let i = 0; i < numbers2.length; i++) {
        sumTotal += numbers2[i]

        averageNum2 = sumTotal / numbers2.length

    }
    return averageNum2
}

averageNumbers(numbers2)
console.log(averageNumbers(numbers2))

// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrayOfWords, word) {

    if (arrayOfWords.length === 0) {
        return null
    }
    let result = false
    for (let i = 0; i < arrayOfWords.length; i++) {
        if (arrayOfWords[i] === word) {
            result = true
        }
    }
    return result
}

console.log(doesWordExist(words2, "machine"))

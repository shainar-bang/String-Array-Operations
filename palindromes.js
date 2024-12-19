function reverseString(str) {
    return str.split('').reverse().join('');
}

function checkPalindrome(str, label) {
    let reversedStr = reverseString(str);
    let isPalindrome = str === reversedStr;

    let result = `${label}:\nOriginal: ${str}\nReversed: ${reversedStr}\nIs palindrome? ${isPalindrome}`;
    alert(result);
    console.log(result);
}

let str1 = prompt("Enter the first word (e.g., RACECAR):");
let str2 = prompt("Enter the second word (e.g., RECORDER):");

checkPalindrome(str1, "First Result");
checkPalindrome(str2, "Second Result");

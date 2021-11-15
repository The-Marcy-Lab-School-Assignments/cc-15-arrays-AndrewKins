function findLongestWord(array) {
    let longest;
    let length = 0;
        for (let i = 0; i < array.length; i++) {
            array.length > length ? length : longest;
        } return array
    //create a variable called "longest"
    //create a variable called "length" initialize to 0
    // We want to interate through the array
     // if the element has a longer length than the length of the same string
}

let array = ["The","quick","brown", "fox", "jumped", "over", "the", "lazy", "dog"] 
findLongestWord(["The","quick","brown", "fox", "jumped", "over", "the", "lazy", "dog"]) //returns "jumped"
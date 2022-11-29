

// Q3. The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

// Q3. The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

// For example (Input --> Output):

// [1, 2, 10, 8] --> [8, 10]
// [1, 5, 87, 45, 8, 8] --> [45, 87]
// [1, 3, 10, 0]) --> [3, 10]



let twoNumbers = (arrayin)=>{
    let newly = arrayin.sort(function(a, b){return a-b});
    let original=[];
    let original2=[];
    for(let i=0; i<newly.length; i++){
        // original = original.unshift(newly[i])
        original.unshift(newly[i])
    }
    for(let i=0; i<2; i++){
        // original = original.unshift(newly[i])
        original2.unshift(original[i])
    }
    return original2
   
}

console.log(twoNumbers([1, 3, 10, 0]))
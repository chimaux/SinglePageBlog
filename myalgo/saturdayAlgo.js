// Q1. It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty

let averageValue = (array1)=>{
let sum =0
for(let i = 0; i < array1.length; i++){
    sum += array1[i];
}
let finalValue = sum/array1.length
return Math.floor(finalValue)
}

console.log(averageValue([8,9,52,800]))




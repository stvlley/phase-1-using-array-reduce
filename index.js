const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let totalBatteries = batteryBatches.reduce(getSum, 0)

function getSum (total, num){
    return total + num 
}
console.log(getSum)
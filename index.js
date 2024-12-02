const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// // Code your solution here
// Create a new variable called totalBatteries, 
//which holds the sum of all of the battery amounts in the batteryBatches array. 
const totalBatteries = batteryBatches.reduce(mySum, 0);
function mySum(total, start){
    return total + start;
}
console.log(totalBatteries(mySum, 0));
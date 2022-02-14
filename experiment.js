//const nums = [9,6,4,2,3,5,7,0,1]
//const nums = [0,1,2,3,4,5,6,7,8,9,10]
//const nums = [0,1]
//const nums = [1,2]
//const nums = [0,2,3]
// const nums = [3,0,1] // 2
const nums = [45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14] // 18


var missingNumber = function(nums) {
  let length = nums.length, sorted = nums.sort((a, b) =>  a - b)
  if (sorted[0] != 0) return 0
  if (sorted[length-1] != length) return length
  for (let idx in sorted) {
    if(sorted[idx] != idx) {return idx}
  }
};

console.log(missingNumber(nums))
// un sorted array
// function twoSum(array,totalArrayLength,target) {
//     var i = 0;
//     var j = totalArrayLength-1;
    
//     while(i < j) {
//         var sum = array[i] + array[j];

//         if(sum === target) {
//             return [i,j]
//         } else if(sum < target) {
//             i++;
//         } else {
//             j--;
//         }
        
//     }
// }

// var arr = [ 3, 5, 9, 2, 8, 10, 11 ];
// var val = 11;
// var arrSize =7;
// console.log(twoSum(arr,arrSize,val));



// sorted array
function twoSum(array,target) {
    var i = 0;
    var j = array.length-1;
    
    while(i < j) {
        var sum = array[i] + array[j];

        if(sum === target) {
            return [i,j]
        } else if(sum < target) {
            i++;
        } else {
            j--;
        }
        
    }
}

var arr = [ 3, 2, 5, 8, 9, 10, 11 ];
var val = 11;

console.log(twoSum(arr,val));
// Code your solution in this file!
const headQ = 42


function distanceFromHqInBlocks(blocks) {
   if (blocks > 42){
       return (blocks - 42);
   } else {
       return (42 - blocks);
   }
}

function distanceFromHqInFeet(blocks) {
    return (distanceFromHqInBlocks(blocks) * 264);
}
function distanceTravelledInFeet(blockA, blockB){
    if (blockA > blockB) {
        return ((blockA - blockB) * 264);
    } else return ((blockB - blockA) * 264);
}
function calculatesFarePrice(blockA, blockB) {
    if (distanceTravelledInFeet(blockA, blockB) < 400) {
        return 0
    } else if (distanceTravelledInFeet(blockA, blockB) < 2000) {
        return ((distanceTravelledInFeet(blockA, blockB) - 400) * .02 )
    } else if (distanceTravelledInFeet(blockA, blockB) < 2500){
        return 25
    } else if (distanceTravelledInFeet(blockA, blockB) > 2500) {
        return 'cannot travel that far'
    }
}
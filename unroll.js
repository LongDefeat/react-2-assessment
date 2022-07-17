function unroll(squareArray) {
    if (!Array.isArray(squareArray)){

        return console.error("squareArray must of type array.") 
    }

    let isParamSquareArray = true;
    
    const rows = squareArray.length;
    const cols = squareArray[0].length;

    for (let i = 0; i < squareArray.length; i++){
        if (squareArray[i].length !== cols){
            isParamSquareArray = false;
            break;
        }
    }

    if(!isParamSquareArray){

        return console.error("Unroll requires a square function")
    }

   
    
    // return console.log(squareArray);
   
}

unroll([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ]);
// module.exports = unroll;

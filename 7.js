function sortOddElements(arr){
    let oddSorted = arr.filter(ele => ele %2 != 0).sort((a, b) => a - b);
    let evenNotSorted = arr.map(ele => {
        if(ele % 2 != 0){
            return oddSorted.shift();
        }
        return ele;
    });
    return evenNotSorted;
 }
 let arr = [9, 4, 2, 4, 1, 5, 3, 0];
 console.log(sortOddElements(arr));
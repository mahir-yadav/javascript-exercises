const removeFromArray = function (arr, ...rem) {
    // rem.forEach(x => {
    //     for (let i = arr.length - 1; i >= 0; i--) {
    //         if (arr[i] === x) {
    //             arr.splice(i, 1);
    //         }
    //     }
    // });

    // return arr;
    return arr.filter(ele => !rem.includes(ele));

};


// Do not edit below this line
module.exports = removeFromArray;

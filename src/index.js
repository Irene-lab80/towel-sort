
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix){
        matrix = [];
    }

    matrix.map(function(item, i){
        if (i % 2 !=0) {
           item = item.sort((a,b) => b - a);
        }
        item = item
    });
    
    return matrix.flat()
}


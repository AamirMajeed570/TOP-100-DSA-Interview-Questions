let matrix = [[1,2,3],[4,5,6],[7,8,9]];

function rotatematrix(matrix){
    let transpose = [];

    for(let i = 0;i<matrix[0].length;i++){
        let row = []
        for(let j = 0;j<matrix.length;j++){
            row.push(matrix[j][i])
        }
        transpose.push(row.reverse())
    }

    return transpose;
}

console.log(rotatematrix(matrix))
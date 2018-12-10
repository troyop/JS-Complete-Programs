// This JavaScript program takes numbers and puts them in   
// a array.

function numarray(n) {
    resultArr = [n];
    for (i = 0; i < n; i++) {
        resultArr[i] = i ;
    }
    console.log(resultArr);
}

// This section starts my app.

numarray(10);
numarray(4);
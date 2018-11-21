let input = +prompt("Enter the limit of Fibonacci sequence (equal or above 1)", ''),
    i = 1,
    j = 1,
    delta = 0;

while (isNaN(input) || input != parseInt(input) || input < 1) {
    input = +prompt("Enter your number again", '');
}

let result = (limit) => {
    document.write(i + ' ');
    document.write(j + ' ');
    input -= 2;
    fib(limit);
}

let fib = (limit) => {
    for (; input != 0; input--) {
        delta = i + j;
        document.write(delta + ' ');
        i = j;
        j = delta;
    }
} 

result(input);
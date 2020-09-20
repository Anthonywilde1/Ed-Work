const multipleArguments = (...args) => {
    if (args.length > 0) {
        return args.reduce((acc, value) => { return acc * value })
    } else {
        return 0;
    }
}
console.log(multipleArguments(2,3));
console.log(multipleArguments());
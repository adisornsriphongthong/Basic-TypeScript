let userInput: unknown = 'hello';

// 'unknown' type is more restrictive than 'any'
// We need to perform a type check before using the value

function main() {
    if (typeof userInput === 'string') {
        let strLength: number = userInput.length;
        console.log(strLength);
    } else {
        console.log("The type of userInput is not known.");
    }
}


main()
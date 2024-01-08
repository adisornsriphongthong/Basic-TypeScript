const x: string | number = "10"

function y(weight: string | number): number {
    if(typeof weight == 'number') {
        return weight + 10
    } else {
        return parseInt(weight) + 10
    }
}

console.log(y('10'))

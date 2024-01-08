function main() {
    /*let num: number[] = []
    num[0] = 10
    num[1] = 'hello world'*/

    let num: any[] = []
    num[0] = 10
    num[1] = 'hello world'

    num.forEach(e => {
        console.log(e + 10)
    })
}

export default main
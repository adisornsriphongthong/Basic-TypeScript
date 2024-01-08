//aliases
type Emplyee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

const emplyee: Emplyee = {
    id: 10,
    name: 'adisorn sriphongthong',
    retire: (date) => {
        console.log(date)
    }
}

console.log(emplyee.id)

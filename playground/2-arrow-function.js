//Standard function
// const square = function (x) {
//     return x * x
// }

//Arrow function long form syntax
// const square = (x) => {
//     return x * x
// }

//Arrow function short hand syntax
//const square = (x) => x*x

//console.log(square(3))

const event = {
    name: 'Birthday Party',
    guestList: ['Steve', 'AJ', 'Julien', 'Meah'],
    printGuestList() {
        console.log('Guest List for ' + this.name)

        this.guestList.forEach((guest) =>{
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()



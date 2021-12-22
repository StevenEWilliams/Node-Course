const fs = require('fs')


//Read JSON file
const dataBuffer = fs.readFileSync('1-json.json')
const dataJSON =  dataBuffer.toString()
const user = JSON.parse(dataJSON)

//Update JSON 
user.name = 'Steve'
user.age = '38'

//Create JSON file
const userJSON = JSON.stringify(user)
console.log(userJSON)
fs.writeFileSync('1-json.json', userJSON)

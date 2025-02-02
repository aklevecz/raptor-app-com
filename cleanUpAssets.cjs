const fs = require('fs')
let relativeFolder = "./static/"
let prefixToRemove = 'bao-head-'

let files = fs.readdirSync(relativeFolder)

for (let i = 0; i < files.length; i++) {
    let file = files[i]
    let fileName = file.replace(prefixToRemove, '')
    fs.renameSync(relativeFolder + file, relativeFolder + fileName)
}
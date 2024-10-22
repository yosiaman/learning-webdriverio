const fs = require('fs')
const path = require('path')

const downloadDirectory = path.dirname("/Users/cashbac/Playground/learning-webdriverio/downloads")

const desiredFileName = "hello.txt"
const filePath = `${downloadDirectory}/${desiredFileName}`

const deleteFileIfExists = () => {
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath)
    }
  } catch (error) {
    console.error(`Error deleting file: ${error.messsage}`)
  }
}

export default deleteFileIfExists
export { filePath }
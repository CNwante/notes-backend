const mongoose = require('mongoose')

// Global plugin to automatically format all outputs to JSON cleanly
mongoose.plugin((schema) => {
  schema.set('toJSON', {
    transform: (document, returnedObject) => {
      if (returnedObject._id) {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
      }
      delete returnedObject.__v
    },
  })
})

mongoose.set('strictQuery', false)

const noteSchema = new mongoose.Schema({
  content: {
    type: String,
    minLength: 5,
    required: true,
  },
  important: Boolean,
})

module.exports = mongoose.model('Note', noteSchema)

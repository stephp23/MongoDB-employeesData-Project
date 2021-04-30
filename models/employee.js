const mongoose = require('mongoose')
const Schema = mongoose.Schema
const childScheme = new Schema({ address: {
  street: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true }
  }})

const Employee = new Schema(
  {
    _id: ObjectId { type: Schema.Types.ObjectId, ref: '_id'},
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    job_title: { type: String, required: true },
    address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        zip: { type: String, required: true }
        }
  },
  { timestamps: true }
)

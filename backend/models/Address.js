import mongoose from "mongoose"

const AddressSchema = new mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  suite: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
  },
})

export default mongoose.model("Address", AddressSchema)

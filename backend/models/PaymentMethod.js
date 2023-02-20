import mongoose from "mongoose";

const PaymentMethodSchema = new mongoose.Schema({
  paymentType: {
    type: String,
    required: true,
  },
  cardNumber: {
    type: String,
    default: "",
  },
  cvv: {
    type: String,
    default: "",
  },
  expiryDate: {
    type: String,
    default: "",
  },
});

export default mongoose.model("PaymentMethod", PaymentMethodSchema);

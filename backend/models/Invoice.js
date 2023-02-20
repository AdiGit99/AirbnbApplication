import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema(
  {
    //Do payment per order for now
    //Maybe group orders later
    orderDetails: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Job",
      },
    ],

    paymentMethod: {
      type: mongoose.Types.ObjectId,
      ref: "PaymentMethod",
      required: true,
    },
    //result obj from paypal api
    paymentResult: {
      id: String,
      status: String,
      update_time: String,
      email_address: String,
    },
    //add up all the prices for orders
    totaLPrice: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Payment", PaymentSchema);

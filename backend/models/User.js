import mongoose from "mongoose"
import AddressSchema from "./Address"
import ImageSchema from "./Image"
import OrderSchema from "./Order"
import InvoiceSchema from "./Invoice"
import ReceiptSchema from "./Invoice"

const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "First name is required"],
      trim: true,
    },
    lastname: {
      type: String,
      required: [true, "Last name is required"],
      trim: true,
    },
    dob: {
      type: Date,
      required: [true, "Date of Birth required"],
    },
    gender: {
      type: String,
      default: "Not specified",
    },
    phone: {
      type: String,
      default: "Not provided",
      // required: true,
    },
    email: {
      type: String,
      max: 50,
      unique: true,
      default: "Not provided",
      trim: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    identities: [
      //   { type: "local",
      //     email: "",
      //     password: "",
      // },
      // {
      //   type: String,
      //   googleId: String,
      // },
      // {
      //   type: String,
      //   facebookId: String,
      // },
    ],
    profilePicture: [ImageSchema],
    address: [AddressSchema],
    paymentMethod: {
      type: mongoose.Types.ObjectId,
      ref: "PaymentMethod",
    },
    payoutMethod: {
      type: mongoose.Types.ObjectId,
      ref: "PaymentMethod",
    },
    healthcareProvider: {
      type: mongoose.Types.ObjectId,
      ref: "HealthcareProvider",
    },
    role: {
      type: [
        {
          type: String,
          enum: ["ROLE_ADMIN", "ROLE_MEMBER", "ROLE_HEALTHCARE_PROVIDER"],
        },
      ],
      default: ["ROLE_MEMBER"],
    },
    orders: [OrderSchema],
    invoices: [InvoiceSchema],
    receipts: [ReceiptSchema],
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
)

export default mongoose.model("User", UserSchema)

//Address referred in other schemas (order, invocing), embed here and reference in other documents
//Payment method not always accessed unless on payment page so reference
//Same for Payout method ^
//Healthcare provider not always accessed unless in provider portal

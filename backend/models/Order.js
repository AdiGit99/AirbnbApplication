import mongoose from "mongoose"

const OrderSchema = new mongoose.Schema({
  //id required checked later
  customerID: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  providerID: {
    type: mongoose.Types.ObjectId,
    ref: "Provider",
  },
  //admin who organized order
  adminID: {
    type: mongoose.Types.ObjectId,
    ref: "Admin",
  },
  date: {
    type: String,
    required: true,
  },
  timeStarted: {
    type: String,
    required: true,
  },
  timeEnded: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    enum: [
      1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5,
      10, 10.5, 11, 11.5, 12,
    ],
    required: true,
  },
  location: {
    type: mongoose.Types.ObjectId,
    ref: "Address",
    required: true,
  },
  serviceType: {
    type: String,
    enum: [
      "Registered Nurse",
      "Enlisted Nurse",
      "Healthcare Assistant",
      "Healthcare Worker",
      "Nurse Specialist",
      "China Trained Nurse",
      "Clinical Assistant",
      "Home Services",
      "Personal Care Worker",
      "Domestic Helper",
      "Disability Healthcare Worker",
      "Babysitter",
      "Medical Practioners and Therapists",
      "Chinese Medicine Practioner",
      "Occupational Therapist",
      "Speech Therapist",
      "Podiatrist",
      "Phlebotomist",
    ],
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  //if order is confirmed done by both parties
  isConfirmedMember: {
    type: Boolean,
    default: false,
  },
  isConfirmedProvider: {
    type: Boolean,
    default: false,
  },
  status: {
    type: String,
    default: "Waiting Approval",
    enum: [
      "Waiting Scheduling",
      "Waiting Acception",
      "Ready",
      "Waiting Confirmation",
      "Waiting Payment",
      "Completed",
    ],
  },
})

export default mongoose.model("Order", OrderSchema)

import mongoose from "mongoose";

const HealthcareProviderSchema = new mongoose.Schema(
  {
    position: {
      type: String,
      default: "",
    },

    height: {
      type: String,
      default: "",
    },

    weight: {
      type: String,
      default: "",
    },

    education: {
      type: String,
      default: "",
    },

    //Embedded documents
    // upcomingJobs: {
    //   type: mongoose.Types.ObjectId,
    //   ref: "Job",
    // },

    // pastJobs: {
    //   type: mongoose.Types.ObjectId,
    //   ref: "Job",
    // },

    status: {
      type: String,
      default: "Waiting Approval",
      enum: ["Waiting Approval", "Approved", "Rejected"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("HealthcareProvider", HealthcareProviderSchema);

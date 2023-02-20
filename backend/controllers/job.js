import Job from "../models/Job.js";

//create new job
const addJob = async (req, res, next) => {
  try {
    const newJob = new Job(req.body);

    await newJob.save();
    res.status(200).send("Job created");
  } catch (err) {
    next(err);
  }
};

//delete job
const deleteJob = async (req, res, next) => {
  try {
    await Job.findByIdAndDelete(req.params.id);
    res.status(200).json("Job has been deleted.");
  } catch (err) {
    next(err);
  }
};

//update job
const updateJob = async (req, res, next) => {
  try {
    const updatedJob = await Job.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedJob);
  } catch (err) {
    next(err);
  }
};

export { addJob, deleteJob, updateJob };

import HealthcareProvider from "../models/HealthcareProvider.js";

const updateHealthcareProvider = async (req, res, next) => {
  try {
    const updatedHealthcareProvider =
      await HealthcareProvider.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
    res.status(200).json(updatedHealthcareProvider);
  } catch (err) {
    next(err);
  }
};

const deleteHealthcareProvider = async (req, res, next) => {
  try {
    await HealthcareProvider.findByIdAndDelete(req.params.id);
    res.status(200).json("Healthcare provider has been deleted");
  } catch (err) {
    next(err);
  }
};

const getHealthcareProvider = async (req, res, next) => {
  try {
    const healthcareProvider = await HealthcareProvider.findById(req.params.id);
    res.status(200).json(healthcareProvider);
  } catch (err) {
    next(err);
  }
};

const changeHealthcareProviderStatus = async (req, res, next) => {
  try {
    const updatedHealthcareProvider =
      await HealthcareProvider.findByIdAndUpdate(
        req.params.id,
        { $set: { status: req.body } },
        { new: true }
      );
    res.status(200).json(updatedHealthcareProvider);
  } catch (err) {
    next(err);
  }
};

export {
  updateHealthcareProvider,
  deleteHealthcareProvider,
  getHealthcareProvider,
  changeHealthcareProviderStatus,
};

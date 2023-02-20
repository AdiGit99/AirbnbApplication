import Payment from "../models/Payment.js";

//create new payment
const addPayment = async (req, res, next) => {
  try {
    const newPayment = new Payment(req.body);

    await newPayment.save();
    res.status(200).send("Payment created");
  } catch (err) {
    next(err);
  }
};

//delete payment
const deletePayment = async (req, res, next) => {
  try {
    await Payment.findByIdAndDelete(req.params.id);
    res.status(200).json("Payment has been deleted.");
  } catch (err) {
    next(err);
  }
};

//update payment
const updatePayment = async (req, res, next) => {
  try {
    const updatedPayment = await Payment.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedPayment);
  } catch (err) {
    next(err);
  }
};

export { addPayment, deletePayment, updatePayment };

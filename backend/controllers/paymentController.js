

const config = (req, res) => {
  res.send({
    message: "Config endpoint no longer provides details."
  });
};

const order = async (req, res, next) => {
  try {
    // Since Razorpay is removed, we can add a different logic here if needed
    res.status(200).json({ message: "Order endpoint no longer processes orders." });
  } catch (error) {
    next(error);
  }
};

const validate = (req, res) => {
  // Since Razorpay is removed, we can add a different logic here if needed
  res.status(200).json({ message: "Validate endpoint no longer validates payments." });
};

export { config, order, validate };

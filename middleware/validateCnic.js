const validateCnic = (req, res, next) => {
    const { cnic } = req.body;
  
    if (!/^\d{5}-\d{7}-\d{1}$/.test(cnic)) {
      return res.status(400).json({ message: "Invalid CNIC format." });
    }
    next();
  };
  
  export default validateCnic;
  
import User from "../models/User.js";

// Register a new user
export const registerUser = async (req, res) => {
  const { cnic, name, contactDetails, address, purpose,token ,count,remarks,assistanceStatus} = req.body;

  try {
    const existingUser = await User.findOne({ cnic });
    if (existingUser) {
      return res.status(400).json({ message: "User with this CNIC already exists." });
    }

    const user = await User.create({ cnic, name, contactDetails, address, purpose,token });
    res.status(201).json({ message: "User registered successfully", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Get all users
export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const updateUserDetails = async (req, res) => {
    const { cnic, count, remarks, assistanceStatus } = req.body;
  
    try {
      // Validate input
      if (!cnic) {
        return res.status(400).json({ message: "CNIC is required." });
      }
  
      // Find the user by CNIC
      const user = await User.findOne({ cnic });
  
      if (!user) {
        return res.status(404).json({ message: "User not found." });
      }
  
      // Update fields
      user.count = count !== undefined ? count : user.count;
      user.remarks = remarks !== undefined ? remarks : user.remarks;
      user.assistanceStatus =
        assistanceStatus !== undefined ? assistanceStatus : user.assistanceStatus;
  
      // Save updated user
      const updatedUser = await user.save();
  
      // Respond with success
      return res.status(200).json({
        message: "User updated successfully.",
        user: updatedUser,
      });
    } catch (error) {
      // Handle server errors
      console.error(error);
      return res.status(500).json({
        message: "Server error.",
        error: error.message,
      });
    }
  };
  

// Get a user by CNIC
export const getUserByCnic = async (req, res) => {
  const { cnic } = req.params;

  try {
    const user = await User.findOne({ cnic });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
// Get a user by Token
export const getUserByToken = async (req, res) => {
    const { token } = req.params; // Extract the token from the request parameters
  
    try {
      const user = await User.findOne({ token });
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      res.status(200).json(user); // Return the user data if found
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };

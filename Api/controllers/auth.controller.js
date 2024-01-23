import User from "../models/user.model.js"
import jwt from "jsonwebtoken";

export const signup = async (req,res) => {
    const {username, email, password} = req.body;
    const newUser = new User({username, email, password});
    try {
        await newUser.save();
        res.status(201).json({message: "Success!"})
    }
    catch(error) {
        res.status(501).json({message: error.message});
    }
}

export const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
      const validUser = await User.findOne({ email });
  
      if (!validUser) {
        return res.status(404).json({ message: "User not found!" });
      }
  
      const validPassword = password === validUser.password;
  
      if (!validPassword) {
        return res.status(401).json({ message: "Invalid Credentials!" });
      }
  
      // Generate JWT token
      const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET, {
        expiresIn: '1h', // You can customize the expiration time
      });
  
      // Send the token in the response
      res.json({ token });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  
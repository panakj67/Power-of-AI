import userModel from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const test = (req, res) => {
  return res.json({ message: "Note routes is working", id: req.user.id });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel
      .findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        message: "User does not exist.",
      });
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.json({
        success: false,
        message: "Invalid email or password.",
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, {
      expiresIn: "2d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: true, // Must be true in production (HTTPS)
      sameSite: "None", // Required for cross-origin cookies
      maxAge: 7 * 24 * 60 * 60 * 1000, // optional
    });

    return res.json({ success: true, message: "LoggedIn successfully!", user });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (user) {
      return res.json({ success: false, message: "User already exists." });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = await userModel.create({
      name,
      email,
      password: hashedPassword,
    });

    const token = jwt.sign({ id: newUser._id }, process.env.SECRET_KEY, {
      expiresIn: "2d",
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: true, // Must be true in production (HTTPS)
      sameSite: "None", // Required for cross-origin cookies
      maxAge: 7 * 24 * 60 * 60 * 1000, // optional
    });

    return res.json({
      success: true,
      message: "User created successfully!",
      user: newUser,
    });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const isAuthorised = async (req, res) => {
  try {
    if (!req.user) {
      return res.json({ success: false, message: "You are not authorised" });
    }
    const user = await userModel
      .findById(req.user.id)
      .select("-password");

    return res.json({ success: true, user });
  } catch (error) {
    return res.json({ success: false, message: error.message });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      sameSite: "None", // Required for cross-site cookies
      secure: true,
    });
    console.log("logging out");
    res.json({ success: true, message: "Logout Successfully!" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};


// import { redis } from "../lib/redis.js";
// import User from "../models/user.model.js";
// import jwt from "jsonwebtoken";

// const generateTokens = (userId) => {
//   const accessToken = jwt.sign({ userId }, process.env.ACCESS_TOKEN_SECRET, {
//     expiresIn: "15m",
//   });

//   const refreshToken = jwt.sign({ userId }, process.env.REFRESH_TOKEN_SECRET, {
//     expiresIn: "7d",
//   });
//   return { accessToken, refreshToken };
// };

// const storeRefreshToken = async (userId, refreshToken) => {
//   await redis.set(
//     `refresh_token:${userId}`,
//     refreshToken,
//     "EX",
//     7 * 24 * 60 * 60
//   );
// };

// //52:48

// export const signup = async (req, res) => {
//   const { email, password, name } = req.body;
//   try {
//     const userExists = await User.findOne({ email });

//     if (userExists) {
//       return res.status(400).json({ message: "User already exists" });
//     }
//     const user = await User.create({ name, email, password });

//     const { accessToken, refreshToken } = generateTokens(user_.id);
//     await storeRefreshToken(user._id, refreshToken);

//     setCookies(res, accessToken, refreshToken);

//     res.status(201).json({ user, message: "User created successfully" });
//   } catch (error) {
//     console.log("Error in signup controller", error.message);
//     res.status(500).json({ message: error.message });
//   }
// };

// export const login = async (req, res) => {};
// export const logout = async (req, res) => {};

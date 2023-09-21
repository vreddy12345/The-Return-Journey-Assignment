const User = require('../models/User');
const { generateOTP, verifyOTP } = require('../utils/otpUtils');
const twilio = require('twilio'); // Import the Twilio module and configure it with your credentials

// Function to register a new user
async function registerUser(req, res) {
  try {
    // Extract user input from the request body
    const { username, email, phoneNumber } = req.body;

    // Check if the user already exists (you can use email or username for uniqueness)
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this email already exists' });
    }

    // Generate and hash OTP using your otpUtils module
    const otp = await generateOTP();
    
    // Create a new user record in the database
    const newUser = await User.create({
      username,
      email,
      phoneNumber,
      otp, // Save the hashed OTP in the database
    });

    // Send the OTP to the user's phone number using Twilio
    const twilioClient = twilio('YOUR_TWILIO_ACCOUNT_SID', 'YOUR_TWILIO_AUTH_TOKEN');
    const message = await twilioClient.messages.create({
      body: `Your OTP is: ${otp}`,
      from: 'YOUR_TWILIO_PHONE_NUMBER',
      to: phoneNumber,
    });

    // Respond with a success message
    return res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during user registration:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

// Function to verify the OTP provided by the user
async function verifyUserOTP(req, res) {
  try {
    // Extract user input from the request body
    const { email, enteredOTP } = req.body;

    // Find the user by email
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Verify the entered OTP against the stored OTP using your otpUtils module
    const isOTPValid = await verifyOTP(enteredOTP, user.otp);

    if (isOTPValid) {
      // OTP is valid, you can mark the user as verified in the database or perform other actions
      return res.status(200).json({ message: 'OTP verified successfully' });
    } else {
      return res.status(400).json({ message: 'Invalid OTP' });
    }
  } catch (error) {
    console.error('Error during OTP verification:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
}

module.exports = { registerUser, verifyUserOTP };

const bcrypt = require('bcrypt');

async function generateOTP() {
  // Generate OTP logic here
  const otp = '123456'; // Replace with your OTP generation logic
  const hashedOTP = await bcrypt.hash(otp, 10);
  return hashedOTP;
}

async function verifyOTP(enteredOTP, hashedOTP) {
  return await bcrypt.compare(enteredOTP, hashedOTP);
}

module.exports = { generateOTP, verifyOTP };

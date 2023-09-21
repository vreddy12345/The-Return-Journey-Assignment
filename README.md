# The-Return-Journey-Assignment
# User Registration and OTP Verification System

A Node.js server-based user registration system with IP address validation and OTP (One-Time Password) verification.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This project implements a user registration system that validates users' IP addresses, sends OTPs to their phone numbers, and registers users in a database. It's built using Node.js, Express.js, and Sequelize for database operations.

## Features

- User registration with IP address validation.
- OTP generation and verification.
- SQL database storage for user records.
- Secure password hashing.
- Integration with Twilio for sending OTPs via SMS.

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed.
- A SQL database (e.g., MySQL) set up and configured.
- A Twilio account with API credentials.

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/vreddy12345/The-Return-Journey-Assignment
cd user-registration-app
npm install

Configuration
Set up your SQL database and update the configuration in config/database.js.

Create a Twilio account, obtain your API credentials, and update the Twilio configuration in your code (e.g., controllers/authController.js) with your account SID and authentication token.
Access the API endpoints for user registration and OTP verification:

Register a user: POST /api/auth/register
Verify OTP: POST /api/auth/verify

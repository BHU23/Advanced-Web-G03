const Customer = require('../models/customer');

exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find();
    res.status(200).json(customers);
  } catch (err) {
    console.error('Error fetching customers:', err);
    res.status(500).json({ message: err.message });
  }
};

exports.createCustomer = async (req, res) => {
  try {
    // Extract data from request body
    const {
      title,
      firstName,
      lastName,
      gender,
      address,
      phoneNumber,
      avatar,
      email,
      password
    } = req.body;

    // Create a new customer instance
    const newCustomer = new Customer({
      title,
      firstName,
      lastName,
      gender,
      address,
      phoneNumber,
      avatar,
      email,
      password
    });

    // Save the new customer to the database
    const savedCustomer = await newCustomer.save();

    // Respond with the newly created customer
    res.status(201).json(savedCustomer);
  } catch (err) {
    console.error('Error creating customer:', err);
    res.status(500).json({ message: err.message });
  }
};
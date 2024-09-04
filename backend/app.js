const express = require('express');
const app = express();
const config = require('./config');
const apiRoutes = require('./routes/api');
const authRoutes = require('./routes/auth');
const authMiddleware = require('./middleware/auth');

// Middleware setup
app.use(express.json());

// Routes for login and signup (no authentication needed)
app.use('/auth', authRoutes);

// Protected routes (authentication required)
app.use('/api', authMiddleware, apiRoutes);

// Start server
const PORT = config.port || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;

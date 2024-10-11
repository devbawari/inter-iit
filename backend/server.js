const express = require('express');
const cors = require('cors');
const cookieParser=require('cookie-parser');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: './config/.env' });
const { connectDatabase } = require('./config/database');
const items = require('./routes/item.js');
const godown=require('./routes/godown.js');
connectDatabase();
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(
    cors({
      origin: "http://localhost:3000",
      methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
      credentials: true,
    })
  );
  app.use(cookieParser());
  app.use('/api/items', items);
  app.use('/api/godown', godown);
  const port = process.env.PORT || 1008;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    }  );

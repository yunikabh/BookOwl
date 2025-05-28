import 'dotenv/config';
import connectDb from './db/mongoose.connection.js';
import app from "./app.js";

const port = process.env.PORT || 3000;

connectDb()
  .then(() => {
    app.listen(port, '0.0.0.0', () => {
      console.log(`Server started at http://0.0.0.0:${port}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to DB or starting server:", error);
  });


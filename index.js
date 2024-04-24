require("dotenv").config();
const PORT = process.env.PORT;
const cors = require("cors");
const express = require("express");
const app = express();

const coffeeRoute = require("./routes/coffee");
const questionsRoute = require("./routes/questions");

app.use(cors());
app.use(express.json());

app.use("/coffee", coffeeRoute);
app.use("/questions", questionsRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

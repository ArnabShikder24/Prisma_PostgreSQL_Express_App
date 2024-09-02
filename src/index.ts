import app from "./app";
require('dotenv').config();

const port = process.env.PORT || 5001;

async function main() {
  app.listen(port, () => console.log(`Server is Running at ${port}`));
}

main();
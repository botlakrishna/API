// import express from "express";
// import path from "path";
// // import index from "./public/index.html";

// const app = express();

// const PORT = 4500;

// app.use(express.static(path.join(__dirname, "public"))); app.listen(PORT, () => { 
//   console.log(`Server is running on http://localhost:${PORT}`);

//  });

// // app.use("/", index);

// // app.listen(4500);


import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3500;

// Set the static files location
app.use(express.static(path.join(__dirname, "public")));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

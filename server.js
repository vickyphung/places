const express = require("express");
const morgan = require("morgan");
const mongoConfig = require('./config');

require("dotenv").config();

const PORT =  process.env.PORT || 8800;
const server = express();

server.use(express.json());
server.use(morgan("dev"))

server.get('/', (req, res) => {
  res.status(200).json({
    message: "API UP!"
  });
});

// const userRouter = require('./routes/users');
// server.use('/user', userRouter);

// const productRouter = require('./routes/products');
// server.use('/product', productRouter);

// const extraRouter = require('./routes/extras');
// server.use('/extra', extraRouter);

server.listen(PORT, () => {
  mongoConfig()
  console.log('server is listening on port ' + PORT)
})
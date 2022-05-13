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
      message: "places to go in the dmv"
    });
}
);

const userRouter = require('./routes/users');
server.use('/user', userRouter);

const placeRouter = require('./routes/places');
server.use('/places', placeRouter);

const reviewRouter = require('./routes/reviews');
server.use('/reviews', reviewRouter);

const seedRouter = require('./routes/seed');
server.use('/seed', seedRouter);


server.listen(PORT, () => {
  mongoConfig()
  console.log('server is chillin on port ' + PORT)
})
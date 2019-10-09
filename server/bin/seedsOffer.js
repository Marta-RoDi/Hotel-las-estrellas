
const mongoose = require("mongoose");
const Offer = require("../models/Offer");


mongoose
  .connect('mongodb://localhost/server', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

let offers = [
  {
    title: "titulo 1",
    description: "descripcion 1",
    code: "djedhihi99"
  },
  {
    title: "titulo 2",
    description: "descripcion 2",
    code: "yyy777"
  }
]

Offer.deleteMany()
.then(() => {
  return Offer.create(offers)
})
.then(offersCreated => {
  console.log(`${offersCreated.length} offers created with the following id:`);
  console.log(offersCreated.map(u => u._id));
})
.then(() => {
  mongoose.disconnect()
})
.catch(err => {
  mongoose.disconnect()
  throw err
})
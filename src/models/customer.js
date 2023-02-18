const mongoose = require("mongoose");
//shape data
const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  address: String,
  phone: String,
  email: String,
  image: String,
  description: String,

},
  { timetamps: true }
);

const Customer = mongoose.model('customer', customerSchema);

module.exports = Customer;

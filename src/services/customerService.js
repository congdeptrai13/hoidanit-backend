const Customer = require("../models/customer");

const createCustomerService = async (customerData) => {
  console.log("check customerData:", customerData);
  try {

    let result = await Customer.create({
      name: customerData.name,
      address: customerData.address,
      phone: customerData.phone,
      email: customerData.email,
      description: customerData.description,
      image: customerData.image
    })
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
}

const createArrayCustomerService = async (arr) => {
  try {
    let result = await Customer.insertMany(arr);
    return result;
  } catch (error) {
    console.log("error", error);
    return null;
  }
}
const getAllCustomerService = async () => {
  try {
    let result = Customer.find({});
    return result;
  } catch (error) {
    console.log("error>>>:", error);
    return null;
  }
}

const putUpdateCustomerService = async (id, name, email, address) => {
  try {
    let result = await Customer.updateOne({ id: id }, { name, email, address });
    return result;
  } catch (error) {
    console.log("Error>>>", error);
    return null;
  }
}

const deleteACustomerService = async (id) => {
  try {
    let result = await Customer.deleteById(id);
    return result;
  } catch (error) {
    console.log("Error>>>", error);
    return null;
  }
}
module.exports = {
  createCustomerService,
  createArrayCustomerService,
  getAllCustomerService,
  putUpdateCustomerService,
  deleteACustomerService
}
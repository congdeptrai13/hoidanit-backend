const Customer = require("../models/customer");
const aqp = require('api-query-params');

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
const getAllCustomerService = async (limit, page, name, queryString) => {
  try {
    let result = null;
    if (page && limit) {
      let offset = (page - 1) * limit;

      const { filter } = aqp(queryString);
      delete filter.page;
      console.log("check filter", filter);
      return result = await Customer.find(filter).skip(offset).limit(limit).exec();
    } else {
      result = Customer.find({});
    }
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
    let result = await Customer.find(id);
    return result;
  } catch (error) {
    console.log("Error>>>", error);
    return null;
  }
}

const deleteArrayCustomerService = async (arrId) => {
  try {
    let result = await Customer.delete({ _id: { $in: arrId } });
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
  deleteACustomerService,
  deleteArrayCustomerService
}
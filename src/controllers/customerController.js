
const { createCustomerService, createArrayCustomerService, getAllCustomerService, putUpdateCustomerService } = require("../services/customerService");
const { uploadSingleFile } = require("../services/fileService");
module.exports = {
  postCreateCustomer: async (req, res) => {
    // name: {
    //   type: String,
    //     require: true
    // },
    // address: String,
    //   phone: String,
    //     email: String,
    //       image: String,
    //         description: String,
    let { name, address, phone, email, description } = req.body;
    console.log(">>> name,description:", name, description)
    let imageUrl = "";
    //image:string
    if (!req.files || Object.keys(req.files).length === 0) {
      //do nothing
    } else {
      let result = await uploadSingleFile(req.files.image);
      imageUrl = result.path;
    }
    let customerData = {
      name,
      address,
      phone,
      email,
      description,
      image: imageUrl
    };
    let customer = await createCustomerService(customerData);

    return res.status(200).json({
      EC: 0,
      data: customer
    });
  },
  postCreateArrayCustomer: async (req, res) => {
    let customers = await createArrayCustomerService(req.body.customers);
    if (customers) {
      return res.status(200).json({
        EC: 0,
        data: customers
      });
    } else {
      return res.status(200).json({
        EC: -1,
        data: customers
      });
    }
  },
  getAllCustomers: async (req, res) => {
    let customers = await getAllCustomerService();
    if (customers) {
      return res.status(200).json({
        EC: 0,
        data: customers
      });
    } else {
      return null;
    }
  },
  putUpdateCustomer: async (req, res) => {
    let { id, name, email, address } = req.body; //destructoring
    let result = await putUpdateCustomerService(id, name, email, address);
    return res.status(200).json({
      EC: 0,
      data: result
    });
  }
}
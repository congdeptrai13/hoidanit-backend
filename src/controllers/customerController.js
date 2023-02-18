
const { createCustomerService } = require("../services/customerService");
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
  }
}
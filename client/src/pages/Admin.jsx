import React, { useState } from "react";
import axios from "axios";
import { NumericFormat } from "react-number-format";
import UploadImage from "../assets/upload.jpg";

const Admin = () => {
  const [productImages, setProductImages] = useState([]);

  const handleImageUpload = async (event) => {
    const files = event.target.files;

    if (files.length === 1) {
      const file = files[0];
      const base64 = await convertToBase64(file);
      setProductImages([base64]);
    } else {
      let imageArray = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const base64 = await convertToBase64(file);
        imageArray.push(base64);
      }
      setProductImages(imageArray);
    }
  };

  // converting to base64 file
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    image: "", // add image field to form data
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/addProduct", {
        ...formData,
        image: productImages, // set image field to first image in productImages array
      });
      if (response.status === 201) {
        alert("Product successfully added!");

        const inputFields = document.querySelectorAll(
          "input[type='text'],input[type='number'], textarea"
        );
        inputFields.forEach((inputField) => (inputField.value = ""));
        setProductImages([]);
        document.getElementById("file").value = "";
        document.getElementById("price").inputField = "";
      } else {
        throw new Error(response.status);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="min-h-screen w-full h-full px-5 sm:px-6 mt-32"
    >
      <div className="h-full w-full max-w-xl px-6 mx-auto flex flex-col justify-center">
        <div className="py-6">
          <div className="text-lg font-bold text-gray-800 mb-5">
            Add product
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="name">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                onChange={handleChange}
                className="form-input w-full"
                type="text"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="price">
                Price <span className="text-red-500">*</span>
              </label>

              <NumericFormat
                id="price"
                name="price"
                className="form-input w-full"
                onChange={handleChange}
                format="0,0.00"
                decimalSeparator="."
                prefix={"$"}
                thousandSeparator={true}
                allowNegative={false}
              />
            </div>

            <div>
              <label
                className="block text-sm text-gray-800 font-medium mb-1"
                htmlFor="description"
              >
                Description <span className="text-rose-500">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                className="form-textarea text-sm py-2 w-full"
                rows="6"
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1" htmlFor="file">
                Image <span className="text-rose-500">*</span>
              </label>
              <div className="flex items-center">
                <div className="shrink-0 mr-4">
                  <img
                    className="object-cover w-16 h-16 rounded-full border border-gray-200"
                    src={
                      productImages.length > 0 ? productImages[0] : UploadImage
                    }
                    alt="Upload"
                  />
                </div>
                <div>
                  <input
                    id="file"
                    type="file"
                    accept="image/"
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-black file:text-white hover:file:bg-black/70 transition duration-150 ease-in-out cursor-pointer"
                    onChange={handleImageUpload}
                    multiple={true}
                  />
                </div>
                {productImages && (
                  <button
                    type="button"
                    className="ml-2 px-3 py-1.5 text-sm font-medium text-gray-500 rounded-full hover:bg-gray-100 hover:text-gray-600 transition duration-150 ease-in-out cursor-pointer"
                    onClick={() => {
                      setProductImages([]);
                      document.getElementById("file").value = ""; //clears filename
                    }}
                  >
                    Remove
                  </button>
                )}
              </div>
              <p className="text-xs text-gray-500 italic mt-1">
                JPG or PNG only.
              </p>
            </div>
            <div className="mt-6">
              <button
                className=" w-full p-2 rounded-full text-white bg-black hover:bg-black/80 shadow-sm"
                type="submit"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Admin;

import React from "react";
import { useState } from "react";
import { useContext, useRef } from "react";
// import { Context } from "../context/Context";
import axios from "axios";
// import "../style.css"
import Swal from "sweetalert2";

export default function PharmacyReg() {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [town, setTown] = useState("");
  const [contact, setContact] = useState("");
  const [logo, setLogo] = useState(""); // Store the image URL here
  const [opentime, setOpentime] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const file = e.target.files[0];

      if (!file) return alert("File does not exist.");

      if (file.size > 1024 * 1024)
        // 1MB
        return alert("Size is too large!");

      if (file.type !== "image/jpeg" && file.type !== "image/png")
        return alert("File format is incorrect.");

      let formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "ml_default");
      formData.append("cloud_name", "dswsu55n9");

      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dswsu55n9/image/upload",
        formData,
        {
          method: "post",
          body: formData,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(res.data.url);
      setLogo(res.data.url); // Set the image URL in the state
      setIsLoading(false);
    } catch (err) {
      console.log(err.response.data.msg);
      setIsLoading(false);
      console.log("Not uploaded");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      name.length === 0 ||
      email.length === 0 ||
      address.length === 0 ||
      town.length === 0 ||
      contact.length === 0 ||
      logo.length === 0 ||
      opentime.length === 0 ||
      password.length === 0
    ) {
      Swal.fire({
        title: "Fields Cannot be empty!",
        text: "Please enter all data!",
        icon: "error",
        confirmButtonText: "Ok",
      });
    } else {
      const pharmData = {
        name,
        email,
        address,
        town,
        contact,
        logo, // Include the logo URL
        opentime,
        password,
      };

      axios
        .post(`http://localhost:3000/api/pharmacy/addpharmacy`, pharmData)
        .then(function (res) {
          setname("");
          setEmail("");
          setAddress("");
          setTown("");
          setContact("");
          setLogo("");
          setOpentime("");
          setPassword("");
          Swal.fire({
            title: "Success!",
            text: "Successfully registered as a Pharmacist",
            icon: "success",
            confirmButtonText: "Ok",
          });
        })
        .catch(function (error) {
          console.log(error);
          Swal.fire({
            title: "Failed!",
            text: "Registering Unsuccessful",
            icon: "error",
            confirmButtonText: "Ok",
          });
        });
    }
  };

  return (
    <div>
      <div class="container-fluid">
        <div class="row bg-image login-image">
          <div class=" row bg-trans-yellow">
            <div class="col-md-8 ">
              <div class="pic-body">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div class="topic">
                  Switch to a simpler <span class="blue"> pharmacy </span> today
                </div>
              </div>
            </div>

            <div class="col-md-4 login-sec">
              <div style={{ height: "11vh" }}> </div>
              <div class="card login-card" style={{ height: "130vh" }}>
                <span class=" card-body">
                  <br />
                  <span class=" card-title">Pharmacy Register</span>
                  <br />
                  <br />
                  <span class="card-text">
                    <form className="loginForm" onSubmit={handleSubmit}>
                      <div class="form group">
                        <label for=""> Name </label>
                        <input
                          type="username"
                          class="form-control"
                          placeholder="Enter your name"
                          onChange={(e) => {
                            setname(e.target.value);
                          }}
                        />
                      </div>
                      <div class="form group">
                        <label for=""> Email Address </label>
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Enter your email"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </div>
                      <div class="form group">
                        <label for=""> Address </label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter your Address"
                          onChange={(e) => {
                            setAddress(e.target.value);
                          }}
                        />
                      </div>
                      <div class="form group">
                        <label for=""> Town </label>
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Enter your Company Name"
                          onChange={(e) => {
                            setTown(e.target.value);
                          }}
                        />
                      </div>
                      <div class="form group">
                        <label for=""> Contact </label>
                        <input
                          type="tel"
                          class="form-control"
                          placeholder="Enter your Contact"
                          onChange={(e) => {
                            setContact(e.target.value);
                          }}
                        />
                      </div>
                      <div class="form group">
                        <label for=""> Logo </label>
                        <input
                          accept="image/*"
                          id="images-input"
                          multiple
                          type="file"
                          onChange={handleImageChange}
                        />
                      </div>
                      <div class="form group">
                        <label for=""> Opening Time</label>
                        <input
                          type="time"
                          class="form-control"
                          placeholder="Enter your Company Name"
                          onChange={(e) => {
                            setOpentime(e.target.value);
                          }}
                        />
                      </div>
                      <div class="form group">
                        <label for=""> Password </label>
                        <input
                          type="password"
                          class="form-control"
                          placeholder="Enter your password"
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                      </div>
                      {/* <a href=""> Forgot Password</a> */}
                      <br /> <br />
                      <input
                        type="submit"
                        value="Register"
                        class="btn btn-curved"
                        role="button"
                        style={{ width: "100%" }}
                      />
                    </form>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

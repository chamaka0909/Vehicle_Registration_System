import React, { useState } from "react";
import axios from "axios";

export default function AddVehicle() {
  const [licenseplate, setLicenseplate] = useState("");
  const [vtype, setVtype] = useState("");
  const [ownername, setOwnername] = useState("");
  const [phone, setPhone] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    console.log(licenseplate);
    console.log(vtype);
    console.log(ownername);
    console.log(phone);

    const data = {
      licenseplate:licenseplate,
      vtype: vtype,
      ownername: ownername,
      phone: phone,
    };

    axios.post(`http://localhost:5000/vehicle/save`, data).then((res) => {
      if (res.data.success) {
        console.log("success");
        alert("Vehicle Registered Success");
        window.location = "/view/vehicles";
       

        setLicenseplate("");
        setVtype("");
        setOwnername("");
        setPhone("");
      }
    });
  };

  return (
    <div className=" px-5 my-1  ">
      <div className="container col-lg-12 mt-5">
        <div className="form-group row justify-content-center ">
          <div className="col-md-6 margin-tb ">            
              &nbsp;
              <h2>Add Vehicle Details</h2>
              &nbsp;           
          </div>
        </div>

        <form onSubmit={onSubmit}>     
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="form-group">
                  <strong>License Plate </strong>
                    <input
                      type="text"
                      id="licenseplate"
                      placeholder="Input license plate"
                      className="form-control"
                      onChange={(e) => setLicenseplate(e.target.value)}
                      required
                    />
                </div>
              </div>
            </div>
            <br/>

            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="form-group">
                <select name="type" onChange={(e) => setVtype(e.target.value)} className="form-select" required>
                  <option value="" >Select...</option>
                  <option value="car" >Car</option>
                  <option value="van">Van</option>
                  <option value="motorcycle">Motorcycle</option>
                </select>
                </div>
              </div>
            </div>
            <br/>

            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="form-group">
                  <strong>Owner Name</strong>
                    <input
                      type="text"
                      id="ownername"
                      placeholder="Input owner name"
                      className="form-control"
                      onChange={(e) => setOwnername(e.target.value)}
                      required
                    />
                </div>
              </div>
            </div>
            <br/>

            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="form-group">
                  <strong>Phone Number</strong>
                    <input
                      type="text"
                      id="phone"
                      placeholder="Input phone number"
                      className="form-control"
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                </div>
              </div>
            </div>      
        
        <br />       
        <div className="col-md-12 text-center ">
              <div className="form-group ">
                <button className="btn btn-outline-primary col-md-6 " type="submit" >
                  <i className="fa fa-save"> Save </i>
                </button>
              </div>
        </div>  
        <br/>   
      </form>


      </div>
    </div>



     
      

  );
}

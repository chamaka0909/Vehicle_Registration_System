import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function UpdateVehicle() {
  const { id } = useParams();
  console.log(id);

  const [vehicle, setVehicle] = useState([]);
  const [licenseplate, setLicenseplate] = useState("");
  const [vtype, setVtype] = useState("");
  const [ownername, setOwnername] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:5000/vehicle/${id}`).then((response) => {
      setVehicle(response.data.vehiclereg);

      setLicenseplate(response.data.vehiclereg.licenseplate);
      setVtype(response.data.vehiclereg.vtype);
      setOwnername(response.data.vehiclereg.ownername);
      setPhone(response.data.vehiclereg.phone);
    });
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();

    const data = {
        licenseplate:licenseplate,
        vtype: vtype,
        ownername: ownername,
        phone: phone,
    };

    axios
      .put(`http://localhost:5000/vehicle/update/${id}`, data)
      .then((res) => {
        if (res.data.success) {
        }
        alert("Update Success");
        window.location = "/view/vehicles";
      });
  };
  return (
    <div className=" px-5 my-1  ">
      <div className="container col-lg-12 mt-5">
        <div className="form-group row justify-content-center ">
          <div className="col-md-6 margin-tb ">
            &nbsp;
            <h2>Update Vehicle Details</h2>
            &nbsp;
          </div>
        </div>

        <form>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="form-group">
                <strong>License Plate </strong>
                <input
                  type="text"
                  id="licenseplate"
                  placeholder="Input license plate"
                  className="form-control"
                  value={licenseplate}
                onChange={(e) => setLicenseplate(e.target.value)}
                />
              </div>
            </div>
          </div>
          <br />

          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="form-group">
                <select
                  name="type"
                  value={vtype}
                  onChange={(e) => setVtype(e.target.value)}
                  className="form-select"
                  required
                >
                  <option value="">Select...</option>
                  <option value="car">Car</option>
                  <option value="van">Van</option>
                  <option value="motorcycle">Motorcycle</option>
                </select>
              </div>
            </div>
          </div>
          <br />

          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="form-group">
                <strong>Owner Name</strong>
                <input
                  type="text"
                  id="ownername"
                  placeholder="Input owner name"
                  className="form-control"
                  value={ownername}
                  onChange={(e) => setOwnername(e.target.value)}
                />
              </div>
            </div>
          </div>
          <br />

          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="form-group">
                <strong>Phone Number</strong>
                <input
                  type="text"
                  id="phone"
                  placeholder="Input phone number"
                  className="form-control"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </div>
          </div>

          <br />
          <div className="col-md-12 text-center ">
            <div className="form-group ">
              <button
                className="btn btn-outline-primary col-md-6 "
                type="submit"
                onClick={onSubmit}
              >
                <i className="fa fa-save"> Save </i>
              </button>
            </div>
          </div>
          <br />
        </form>
      </div>
    </div>
  );
}

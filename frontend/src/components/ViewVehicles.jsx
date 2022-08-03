import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ViewVehicles() {
  const [vehicle, setVehicle] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/vehicles`).then((response) => {
      setVehicle(response.data.existingvehiclereg);
    });
  }, []);

  const onDelete = (id) => {
    console.log(id);
    axios.delete(`http://localhost:5000/vehicle/delete/${id}`).then((res) => {
      if (res.data.success) {
      }
      alert("Delete Successful");
      window.location = "/view/vehicles";
    });
  };

  return (
    <div className="container px-5 my-3">
      <div className="row">
        <div className="float-left col-lg-9 mt-2 mb-2">
          &nbsp;
          <h2>Registered Vehicle Summary </h2>
          &nbsp;
          <br/>
          <a
            className="btn btn-success"
            href={`/add/vehicle`}
          >
            <i className="fa fa-plus"></i>&nbsp;Add New Record
          </a>
          &nbsp;
        </div>
      </div>

      <table className="table ">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">License Plate</th>
            <th scope="col">Vehicle Type</th>
            <th scope="col">Owner Name</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {vehicle.map((data, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.licenseplate}</td>
                <td>{data.vtype}</td>
                <td>{data.ownername}</td>
                <td>{data.phone}</td>

                <td>
                  <a
                    className="btn btn-outline-success"
                    href={`/update/vehicle/${data._id}`}
                  >
                    <i className="fa fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a
                    className="btn btn-outline-danger"
                    href="#"
                    onClick={() => onDelete(data._id)}
                  >
                    <i className="fa fa-trash"></i>&nbsp;Delete
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

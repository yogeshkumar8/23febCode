import React, { useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";

const BasicDetail = () => {
  const [formData, setFormData] = useState({
    employeeCode: "",
    passwordResetPolicy: "",
    employeeType: "",
    employeeName: "",
    email: "",
    dobRecord: "",
    dobActual: "",
    fathersName: "",
    mothersName: "",
    maritalStatus: "",
    highestQualification: "",
    bloodGroup: "",
    address: "",
    emergencyContact: "",
    gender: "Male",
  });
  const [submittedData, setSubmittedData] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the submitted data to the array
    setSubmittedData([...submittedData, formData]);
    // Clear the form fields after submission

    localStorage.setItem("formData", JSON.stringify(setSubmittedData));

    setFormData({
      employeeCode: "",
      passwordResetPolicy: "",
      employeeType: "",
      employeeName: "",
      email: "",
      dobRecord: "",
      dobActual: "",
      fathersName: "",
      mothersName: "",
      maritalStatus: "",
      highestQualification: "",
      bloodGroup: "",
      address: "",
      emergencyContact: "",
      gender: "Male",
    });
  };

  const deleteHandler = (index) => {
    const updatedData = [...submittedData];
    updatedData.splice(index, 1); // Remove the row at the given index
    setSubmittedData(updatedData);
    localStorage.setItem("formData", JSON.stringify(updatedData));
  };
  const editHandler = () => {};
  return (
    <div>
      <div className="row" style={{ marginLeft: "330px", width: "100vw" }}>
        {/* <div className="col-md-3"></div> */}
        <div className="accordion-item col-md-9">
          <div className="p-3 flex-wrap">
            <h4>Employee Master</h4>
            <form onSubmit={handleSubmit}>
              <div className="d-flex flex-wrap gap-4 mb-2 ">
                <div className="d-flex flex-column">
                  <label>
                    Employee code<p className="text-danger d-inline">*</p>
                  </label>
                  <input
                    type="text"
                    name="employeeCode"
                    value={formData.employeeCode}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="d-flex flex-column">
                  <label className=" rounded">
                    Password Reset Policy
                    <p className="text-danger d-inline">*</p>
                  </label>
                  <input
                    type="text"
                    name="passwordResetPolicy"
                    value={formData.passwordResetPolicy}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="d-flex flex-column">
                  <label>
                    Employee Type<p className="text-danger d-inline">*</p>
                  </label>
                  <input
                    type="text"
                    name="employeeType"
                    value={formData.employeeType}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="d-flex flex-column">
                  <label>
                    Employee Name<p className="text-danger d-inline">*</p>
                  </label>
                  <input
                    type="text"
                    name="employeeName"
                    value={formData.employeeName}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="d-flex flex-column">
                  <label>
                    Email Id<p className="text-danger d-inline">*</p>
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="d-flex flex-column">
                  <label>
                    Date Of Birth(Record)
                    <p className="text-danger d-inline">*</p>
                  </label>
                  <input
                    type="text"
                    name="dobRecord"
                    value={formData.dobRecord}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="d-flex flex-column">
                  <label>
                    Date Of Birth(Actual)
                    <p className="text-danger d-inline">*</p>
                  </label>
                  <input
                    type="text"
                    name="dobActual"
                    value={formData.dobActual}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="d-flex flex-column">
                  <label>
                    Father's Name<p className="text-danger d-inline">*</p>
                  </label>
                  <input
                    type="text"
                    name="fathersName"
                    value={formData.fathersName}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="d-flex flex-column">
                  <label>
                    Mothers Name<p className="text-danger d-inline">*</p>
                  </label>
                  <input
                    type="text"
                    name="mothersName"
                    value={formData.mothersName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="d-flex flex-column">
                  <label>
                    Marital Status<p className="text-danger d-inline">*</p>
                  </label>
                  <input
                    type="text"
                    name="maritalStatus"
                    value={formData.maritalStatus}
                    onChange={handleInputChange}
                  />
                  {/* <select>
                    <option value={"Married"}>Married</option>
                    <option value={"UnMarried"}>UnMarried</option>
                  </select> */}
                </div>

                <div className="d-flex flex-column">
                  <label>
                    Highest Qualification
                    <p className="text-danger d-inline">*</p>
                  </label>
                  <input
                    type="text"
                    name="highestQualification"
                    value={formData.highestQualification}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="d-flex flex-column">
                  <label>
                    Blood Group<p className="text-danger d-inline">*</p>
                  </label>
                  <input
                    type="text"
                    name="bloodGroup"
                    value={formData.bloodGroup}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="d-flex flex-column">
                  <label>
                    Address<p className="text-danger d-inline">*</p>
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="d-flex flex-column">
                  <label>
                    Emergency Contact<p className="text-danger d-inline">*</p>
                  </label>
                  <input
                    type="text"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="d-flex flex-column">
                  <label>
                    Gender<p className="text-danger d-inline">*</p>
                  </label>
                  <select
                    type="text"
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                  >
                    <option value={"Male"}>Male</option>
                    <option value={"Female"}>Female</option>
                  </select>
                </div>
              </div>

              <div className="d-flex mt-4 gap-4">
                <button type="submit" className="btn btn-primary px-4">
                  Save
                </button>
                <button type="button" className="btn btn-warning px-4">
                  Export
                </button>
                <button type="reset" className="btn btn-danger px-4">
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div>
        <thead className="border">
          <tr>
            <th>Action</th>
            <th>Employee code</th>
            <th>Password Reset Policy</th>
            <th>Employee Type</th>
            <th>Employee Name</th>
            <th>Email Id</th>
            <th>Date Of Birth(Record)</th>
            <th>Date Of Birth(Actual)</th>
            <th>Father's Name</th>
            <th>Mothers Name</th>
            <th>Highest Qualification</th>
            <th>Blood Group</th>
            <th>Address</th>
            <th>Emergency Contact</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {/* <td>
              <div>
                <FaRegEdit />
                <MdOutlineDeleteOutline />
              </div>
            </td> */}
          {submittedData.map((data, index) => (
            <tr key={index}>
              <td>
                <div>
                  <FaRegEdit onClick={(index) => editHandler} />
                  <MdOutlineDeleteOutline onClick={(index) => deleteHandler} />
                </div>
              </td>
              <td>{data.employeeCode}</td>
              <td>{data.passwordResetPolicy}</td>
              <td>{data.employeeType}</td>
              <td>{data.employeeName}</td>
              <td>{data.email}</td>
              <td>{data.dobRecord}</td>
              <td>{data.dobActual}</td>
              <td>{data.fathersName}</td>
              <td>{data.mothersName}</td>
              <td>{data.highestQualification}</td>
              <td>{data.bloodGroup}</td>
              <td>{data.address}</td>
              <td>{data.emergencyContact}</td>
              <td>{data.gender}</td>
            </tr>
          ))}
        </tbody>
      </div>
    </div>
  );
};

export default BasicDetail;

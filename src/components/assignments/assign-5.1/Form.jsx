import React, { useState } from "react";

function Form() {
  const [userDetails, setUserDetails] = useState({
    fName: "",
    lName: "",
    birthDate: "",
    selectedGender: "",
    emailAddress: "",
    phoneNumber: "",
    course: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const validateInputs = () => {
    let errors = {};

    if (!userDetails.fName) {
      errors.fName = "First name is mandatory";
    } else if (userDetails.fName.length < 4 || userDetails.fName.length > 6) {
      errors.fName = "First name must be 4 to 6 characters long";
    }

    if (!userDetails.lName) {
      errors.lName = "Last name is mandatory";
    } else if (userDetails.lName.length < 4 || userDetails.lName.length > 6) {
      errors.lName = "Last name must be 4 to 6 characters long";
    }

    if (!userDetails.phoneNumber) {
      errors.phoneNumber = "Phone number is required";
    } else if (userDetails.phoneNumber.length !== 10) {
      errors.phoneNumber = "Phone number must have exactly 10 digits";
    }

    if (!userDetails.birthDate) errors.birthDate = "Date of birth is mandatory";

    if (!userDetails.selectedGender) errors.selectedGender = "Please select gender";

    if (!userDetails.emailAddress) errors.emailAddress = "Email is mandatory";

    if (!userDetails.course) errors.course = "Please select a subject";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (validateInputs()) {
      alert("Form successfully submitted!");
    }
  };

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setUserDetails((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-4 shadow" style={{ width: "400px" }}>
        <h4 className="text-center mb-4">Sign Up Form</h4>
        <form onSubmit={onSubmit}>
          <div className="row mb-3">
            <div className="col">
              <label htmlFor="fName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className={`form-control ${formErrors.fName ? "is-invalid" : ""}`}
                id="fName"
                value={userDetails.fName}
                onChange={handleInputChange}
              />
              {formErrors.fName && <div className="invalid-feedback">{formErrors.fName}</div>}
            </div>
            <div className="col">
              <label htmlFor="lName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className={`form-control ${formErrors.lName ? "is-invalid" : ""}`}
                id="lName"
                value={userDetails.lName}
                onChange={handleInputChange}
              />
              {formErrors.lName && <div className="invalid-feedback">{formErrors.lName}</div>}
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="birthDate" className="form-label">
              Date of Birth
            </label>
            <input
              type="date"
              className={`form-control ${formErrors.birthDate ? "is-invalid" : ""}`}
              id="birthDate"
              value={userDetails.birthDate}
              onChange={handleInputChange}
            />
            {formErrors.birthDate && <div className="invalid-feedback">{formErrors.birthDate}</div>}
          </div>
          <div className="mb-3">
            <label className="form-label">Gender</label>
            <br />
            <div className="form-check form-check-inline">
              <input
                className={`form-check-input ${formErrors.selectedGender ? "is-invalid" : ""}`}
                type="radio"
                name="selectedGender"
                id="male"
                value="male"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, selectedGender: e.target.value })
                }
              />
              <label className="form-check-label" htmlFor="male">
                Male
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className={`form-check-input ${formErrors.selectedGender ? "is-invalid" : ""}`}
                type="radio"
                name="selectedGender"
                id="female"
                value="female"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, selectedGender: e.target.value })
                }
              />
              <label className="form-check-label" htmlFor="female">
                Female
              </label>
            </div>
            {formErrors.selectedGender && (
              <div className="invalid-feedback d-block">{formErrors.selectedGender}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="emailAddress" className="form-label">
              Email Address
            </label>
            <input
              type="email"
              className={`form-control ${formErrors.emailAddress ? "is-invalid" : ""}`}
              id="emailAddress"
              value={userDetails.emailAddress}
              onChange={handleInputChange}
            />
            {formErrors.emailAddress && (
              <div className="invalid-feedback">{formErrors.emailAddress}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Phone Number
            </label>
            <input
              type="tel"
              className={`form-control ${formErrors.phoneNumber ? "is-invalid" : ""}`}
              id="phoneNumber"
              value={userDetails.phoneNumber}
              onChange={handleInputChange}
            />
            {formErrors.phoneNumber && (
              <div className="invalid-feedback">{formErrors.phoneNumber}</div>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="course" className="form-label">
              Subject
            </label>
            <select
              className={`form-select ${formErrors.course ? "is-invalid" : ""}`}
              id="course"
              value={userDetails.course}
              onChange={handleInputChange}
            >
              <option value="">Select a course</option>
              <option value="mathematics">Mathematics</option>
              <option value="science">Science</option>
              <option value="history">History</option>
            </select>
            {formErrors.course && <div className="invalid-feedback">{formErrors.course}</div>}
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;

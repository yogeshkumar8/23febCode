import React from "react";

const Appointment = () => {
  return (
    <div>
      <div style={{ marginLeft: "340px ", width: "75vw" }}>
        <div className="accordion-item ">
          <div className="p-3 flex-wrap">
            <h4>
              Appointment Details<p className="text-danger d-inline">*</p>
            </h4>

            <div className="d-flex  gap-4 flex-wrap">
              <div className="d-flex flex-column">
                <label>
                  Date Of Joining <p className="text-danger d-inline"> *</p>{" "}
                </label>
                <input type="text" />
              </div>

              <div className="d-flex flex-column">
                <label>
                  {" "}
                  Department <p className="text-danger d-inline">*</p>
                </label>
                <input type="text" />
              </div>
              <div className="d-flex flex-column">
                <label>
                  {" "}
                  Designation <p className="text-danger d-inline">*</p>
                </label>
                <input type="text" />
              </div>
              <div className="d-flex flex-column">
                <label>
                  {" "}
                  Grade <p className="text-danger d-inline">*</p>
                </label>
                <input type="text" />
              </div>
            </div>

            <div className="gap-4 mt-2">
              <div>
                <label>
                  Units <p className="text-danger d-inline"> *</p>
                </label>
                <div className="d-flex gap-4 ">
                  <input type="text" />
                  <div className="d-flex align-items-center gap-2 flex-wrap ">
                    <input type="checkbox" />
                    <div>
                      <label>Employee Left</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 form-check form-switch">
              <input className="form-check-input" type="checkbox" />
              <label className="form-check-label">Active</label>
            </div>

            <div className="d-flex gap-4 mt-4">
              <button type="button" className="btn btn-primary px-4">
                Save
              </button>
              <button type="button" className="btn btn-warning px-4">
                Export
              </button>
              <button type="button" className="btn btn-danger px-4">
                Reset
              </button>
            </div>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;

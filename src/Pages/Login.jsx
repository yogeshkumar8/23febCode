import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" bg-danger-subtle vh-100">
      <div className="row">
        <div class="col-md-3"></div>
        <div class="col-md-5 border p-5">
          <h1>Login</h1>

          <form>
            <div data-mdb-input-init class="form-outline mb-4">
              <input type="email" id="form1Example1" class="form-control" />
              <label class="form-label" for="form1Example1">
                Email address
              </label>
            </div>

            <div data-mdb-input-init class="form-outline mb-4">
              <input type="password" id="form1Example2" class="form-control" />
              <label class="form-label" for="form1Example2">
                Password
              </label>
            </div>

            {/* <!-- 2 column grid layout for inline styling --> */}
            <div class="row mb-4">
              <div class="col d-flex justify-content-center">
                {/* <!-- Checkbox --> */}
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="form1Example3"
                    checked
                  />
                  <label class="form-check-label" for="form1Example3">
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
              </div>

              <div class="col">
                {/* <!-- Simple link --> */}
                <a href="#!">Forgot password?</a>
              </div>
            </div>

            {/* <!-- Submit button --> */}
            <Link to={"/main"}>
              <button
                data-mdb-ripple-init
                type="submit"
                class="btn btn-primary btn-block"
              >
                Sign in
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

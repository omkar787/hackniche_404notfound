import "../css/Login.css";
import { Link } from "react-router-dom"


const Login = () => {
  return (
    <div className="form-body">
      <div className="row">
        <div className="form-holder">
          <div className="form-content">
            <span className="form-items">
              <h3>Login Here</h3>
              <p>Fill in the data below.</p>
              <form className="requires-validation" novalidate>

                <div className="col-md-12">
                  <input className="form-control input-field" type="email" name="email" placeholder="E-mail Address" required />
                  <div className="valid-feedback">Email field is valid!</div>
                  <div className="invalid-feedback">Email field cannot be blank!</div>
                </div>

                <div className="col-md-12">
                  <input className="form-control input-field" type="password" name="password" placeholder="Password" required />
                  <div className="valid-feedback">Password field is valid!</div>
                  <div className="invalid-feedback">Password field cannot be blank!</div>
                </div>


                <div className="col-md-12 mt-3">
                  <span className="form-button mt-3">
                    <button id="submit" type="submit" className="btn btn-outline-dark" style={{
                      color: "#495056",
                      fontWeight: "500",
                      borderColor: "#495056",
                    }}>Login</button>
                  </span>
                  <div>
                    Create an account now
                    <Link to="/signup"> Register</Link>
                  </div>
                </div>
              </form>
          </span>
        </div>
      </div>
    </div>
</div >
  );
};

export default Login;

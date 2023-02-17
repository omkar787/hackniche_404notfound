import "../css/Login.css";
import { Link } from "react-router-dom"

const Sigup = () => {
  return (
    <div className="form-body">
      <div className="row">
        <div className="form-holder">
          <div className="form-content">
            <div className="form-items">
              <h3>Register Here</h3>
              <p>Fill in the data below.</p>
              <form className="requires-validation" novalidate>

              <div className="col-md-12">
                  <input className="form-control input-field" type="text" name="text" placeholder="Full Name" required />
                  <div className="valid-feedback">Name field is valid!</div>
                  <div className="invalid-feedback">Name field cannot be blank!</div>
                </div>

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
                <div className="col-md-12">
                  <input className="form-control input-field" type="password" name="confirmPassword" placeholder="Confirm Password" required />
                  <div className="valid-feedback">Password field is valid!</div>
                  <div className="invalid-feedback">Password field cannot be blank!</div>
                </div>


                <div className="col-md-12 mt-3">
                    <span className="form-button mt-3">
                      <button id="submit" type="submit" className="btn" style={{
                        color: "#495056",
                        fontWeight: "500",
                        borderColor: "#495056",
                      }}>Signup</button>
                    </span>
                    <div>
                        Already have an account? 
                        <Link to="/login"> Login </Link>
                    </div>
                    
                </div>
            </form>
          </div>
          <form className="form-item">
          </form>
        </div>
      </div>
    </div>
</div >
  );
};

export default Sigup;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function SignIn() {
  return (
    <div className="containers">
      <div className="logo">Your Logo</div>
      <div className="row">
        <div className="col-md-3 third">
          <h1>Sign in to</h1>
          <h5>Lorem Ipsum is simply</h5>
          <br />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            qui accusantium eveniet voluptas soluta velit ducimus similique fuga, ea
            harum ipsa doloremque cupiditate ut temporibus culpa numquam blanditiis
            praesentium nihil.
          </p>
        </div>
        <div className="col-md-4">
          <img className="img"
            src="https://res.cloudinary.com/dsoqjlpxd/image/upload/v1712764240/Saly-1_xyu5bh.png"
            alt=""
          />
        </div>
        <div className="col-md-5 cont"
        >
          <div className="row">
            <div className="col-md-10">
              <h6>Welcome to <b>Lorem</b> <span className="sign"> No account? <br/>Sign up</span></h6>
            </div>
          </div>
          <h2>Sign in</h2>
          <form>
            <div className="col">
                <label>Enter your username or email address</label>
                <input type="text" className="form-control" placeholder="Username or email address"/>
            </div>
             <div className="col">
                <label>Enter your Password</label>
                <input type="password" className="form-control" placeholder="password"/>
             </div>
            <p className="forgot">Forgot Password</p>
            <button className="btn btn-primary red" >Sign in</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;



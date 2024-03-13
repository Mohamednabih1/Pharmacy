"use client";

import { Header } from "../component/header/header";
import { Footer } from "../component/footer/footer";
import "./login.css";

export function about() {
  return (
    <>
      <Header></Header>
      <div className="logContent">
        <div className="login">
          <div className="loginHeader">Login</div>
          <div className="formContent">
            <form>
              <div className="input">
                <input type="text" name="name" placeholder="email" />
              </div>
              <div className="input">
                <input type="password" name="name" placeholder="password" />
              </div>
              <div className="submitBtn">
                <button type="submit" value="Submit">
                  login
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="line"></div>
        <div className="signUp">
          <div className="signUpHeader">Register</div>
          <div className="formContent">
            <form>
              <div className="input">
                <input type="text" name="name" placeholder="username" />
              </div>
              <div className="input">
                <input type="text" name="name" placeholder="email" />
              </div>
              <div className="input">
                <input type="password" name="name" placeholder="password" />
              </div>
              <div className="input">
                <input
                  type="password"
                  name="name"
                  placeholder="confirm password"
                />
              </div>
              <div className="submitBtn">
                <button type="submit" value="Submit">
                  register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
export default about;

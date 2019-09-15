import React from "react";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils.js";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-in.styles.scss";
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  handleSubmit = async event => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({
        email: "",
        password: ""
      });
    } catch (error) {
      console.error(error.message);
    }
  };
  render() {
    const { email, password } = this.state;
    return (
      <section className="sign-in">
        <h2>Already have an account?</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit} autoComplete="off">
          <FormInput
            type="text"
            name="email"
            required
            label="Email"
            value={email}
            handleChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            required
            label="Password"
            value={password}
            handleChange={this.handleChange}
          />
          <div className="buttons">
            <CustomButton type="submit"> Sign In</CustomButton>
            <CustomButton
              type="button"
              isGoogleSignIn
              onClick={signInWithGoogle}
            >
              Sign In with Google
            </CustomButton>
          </div>
        </form>
      </section>
    );
  }
}
export default SignIn;

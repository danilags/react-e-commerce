import React from 'react';

import '../../../assets/style/Content.css';

class Item extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      password: '',
      email: '',
      penghasilan: '',
      warning1: '',
      warning2: '',
      warning3: '',
      warning4: '',
    }

  }

  submitHandler() {
    const regexName = /^[a-zA-Z ]{3,30}$/;
    let checkName = false;
    let checkpass = false;
    let checkemail = false;
    console.log("checking ", this.state.name);
    console.log("password ", this.state.password);
    console.log("email ", this.state.email);
    if (regexName.test(this.state.name)) {
      checkName = true
      this.setState({warning1: 'Nama anda betol'})
    } else {
      this.setState({warning1: 'Nama Anda belum benar'})
    }

    const regexPassword = /^[a-zA-Z0-9!@#$%^&*]{6,20}$/;
    if (regexPassword.test(this.state.password)) {
      checkpass = true
      this.setState({warning2: 'password anda betol coy'})
    } else {
      this.setState({warning2: 'password anda salah masih kurang panjang'})
    }

    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (regexEmail.test(this.state.email)) {
      checkemail = true
      this.setState({warning3: 'Email anda sudah betol coy'})
    } else {
      this.setState({warning3: 'Email anda belum bener...'})
    }
  }

  handleChange(e) {
    const newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState)
  }

  render () {
    return (
      <div id="box-item">
        <div className="deep-item">
          <div className="side-left">
            kiri
          </div>
          <div className="side-right">
            <div className="form">
              <form
                onSubmit = {(e) => {
                  e.preventDefault()
                  this.submitHandler()
                }}
              >
                <span className="inputan-loan">
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    onChange = {this.handleChange.bind(this)}
                  />
                </span>
                <span className="inputan-loan">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange= {this.handleChange.bind(this)}
                  />
                </span>
                <span className="inputan-loan">
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    onChange = {this.handleChange.bind(this)}
                  />
                </span>
                <span className="inputan-loan">
                  <input
                    type="text"
                    placeholder="Penghasilan"
                    onChange= {(text) => this.setState({penghasilan: text})}
                  />
                </span>
                <span className="inputan-loan">
                  <input
                    type="submit"

                  />
                </span>
              </form>
            </div>
            <div className="warning">
              <h3>{this.state.warning1}</h3>
              <h3>{this.state.warning2}</h3>
              <h3>{this.state.warning3}</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Item
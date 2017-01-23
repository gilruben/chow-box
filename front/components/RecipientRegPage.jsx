import React from 'react';
import store from '../store/store';
import {register} from '../actions/actions';

const RecipientRegPage = React.createClass({
  getInitialState(){
    return{
      first_name : "",
      "last_name" : "",
      "email" : "",
      "password" : "",
      "type" : "recipient",
      "zip" : "",
    }
  },
  onChange(key, e){
    this.setState({[key]: e.target.value})
  },
  onSubmit(e){
    e.preventDefault()
    store.dispatch(register(this.state))
  },
  render(){
    return(
      <div>
        <div>
          <div className="navbarOne">
              <img src="/logo.png"/>
            </div>
            <div className="navbarBorder"></div>
        </div>
        <div className="receiveIntro">
          <div className="receiveIntro1">
            You’re On Your Way To Receiving Your First Box!
          </div>
            <form onSubmit={this.onSubmit} className="regPage">
              <div className="regPageBox1">
                <div className="regPageBoxA">
                <input className="regA" type="text" placeholder="First Name:" onChange={this.onChange.bind(this, "first_name")}/>
                <input className="regA" type="text" placeholder="Last Name:" onChange={this.onChange.bind(this,"last_name")}/>
                <input className="regA" type="text" placeholder="Email:" onChange={this.onChange.bind(this, "email")}/>
                <input className="regA" type="password" placeholder="Password:" onChange={this.onChange.bind(this, "password")}/>
                <input className="regA" type="text" placeholder="Phone Number:"/>
                <input className="regA" type="text" placeholder="Address:" />
                <input className="regA" type="text" placeholder="City:" />
                <input className="regA" type="text" placeholder="Zip Code:" onChange={this.onChange.bind(this, "zip")}/>
                </div>
              </div>
              <div className="regPageBox2">
                <h4 className="regPageAssist">Do you have public assistance? <br/> Check all that apply:</h4>
                <div className="regPageBoxB">
                <div className="regB"><input type="checkbox" value="ebt" /> <span>EBT</span></div>
                <div className="regC"><input type="checkbox" value="medicaid" /><span>MEDICAID</span></div>
                <div className="regD"><input type="checkbox" value="section 8" /><span>SECTION 8</span></div>
                <div className="regE"><input type="checkbox" value="none" /><span>NONE</span></div>
                <h4 className="regPageAssist2"># of members in household?</h4>
                <select>
                  <option value="0"></option>
                  <option value="1">1 - 2 members</option>
                  <option value="2">3 - 5 members</option>
                  <option value="3">6 - 8 members</option>
                  <option value="4">9 - 11 members</option>
                </select>
                </div>
              </div>
              <div>
                <input className="registerButton" type="submit" />
              </div>
            </form>
        </div>
      </div>
      )
  }
})

export default RecipientRegPage;

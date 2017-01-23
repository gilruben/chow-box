import React from 'react';
import store from '../store/store';
import {login} from '../actions/actions';
import '../Recipient.css';

const LandingPage = React.createClass({
  getInitialState(){
    return{email:"rgil@gmail.com", password:"password", zip:"11368"}
  },
  change(key, e){
    this.setState({[key]: e.target.value})
  },
  onSubmit(e){
    e.preventDefault();
    store.dispatch(login({email: this.state.email, password: this.state.password}))
  },
  donorRegistration(){
    this.props.router.push('/donor-registration')
  },
  recipientRegistration(){
    this.props.router.push('/recipient-registration')
  },
  render(){
    return (
      <div className="navbar">
        {/*nav bar */}
      <div className="navbarParent">
        <div className="navbarOne">
            <img src="/logo.png"/>
        </div>
          <div className="navbarTwo">
            <form onSubmit={this.onSubmit}>
              <div className="navbarSignUp">
                {/* <h4 className="login">Username:</h4>*/}
                {/* <h4 className="login">Password:</h4>*/}
                <input className="inputBox" type="text" placeholder="Username" onChange={this.change.bind(this,"email")} value={this.state.email}/>
                <input className="inputBox" type="password" placeholder="Password" onChange={this.change.bind(this,"password")} value={this.state.password}/>
                <button className="loginButton">
                  <img className="loginButton" src="/login-button.png" />
                </button>
              </div>
            </form>
            </div>
        </div>
        {/*nav bar ends*/}
        {/*Body*/}
        <div className="buttonLanding">
          <div className="landingPageButtons">
            <img src="/l.jpg" />
            <div className="landTitleText">
              <h1>6.3 Million Households Experience Very Low Food Security. <br/> We're Here For Those Who Just Need A Little Extra Chow!</h1>
            </div>
            <button className="landingPageButton1" onClick={this.donorRegistration}></button>
            <button className="landingPageButton2" onClick={this.recipientRegistration}></button>
            <div className="landingButtonTitle">
              <h2 className="landingButtonTitle1" onClick={this.donorRegistration}> Give A Box </h2>
              <h2 className="landingButtonTitle2" onClick={this.recipientRegistration}> Get A Box </h2>
            </div>
          </div>
        </div>
        {/*end of body*/}
      </div>
    )
  }
})

export default LandingPage;

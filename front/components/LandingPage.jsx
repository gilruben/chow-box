import React from 'react';
import '../Recipient.css';

const LandingPage = React.createClass({
  getInitialState(){
    return{email:"", password:"", zip:"11368"}
  },
  change(key, e){
    this.setState({[key]: e.change.value})
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
            <div className="navbarSignUp">
              {/* <h4 className="login">Username:</h4>*/}
              {/* <h4 className="login">Password:</h4>*/}
              <input className="inputBox" type="text" placeholder="Username" onChange={this.change.bind(this,"email")} value={this.state.email}/>
              <input className="inputBox" type="text" placeholder="Password" onChange={this.change.bind(this,"password")} value={this.state.password}/>
            <button className="loginButton">
                <img className="loginButton" src="/login-button.png" />
            </button>
            </div>
          </div>
        </div>
        {/*nav bar ends*/}
        {/*Body*/}
        <div className="buttonLanding">
          <div className="landingPageButtons">
            <img src="/l.jpg" />
            <button className="landingPageButton1">
              <h2 className="landingButtonTitle"> Give A Box </h2>
            </button>
            <button className="landingPageButton2">
              <h2 className="landingButtonTitle"> Get A Box </h2>
            </button>
          </div>
        </div>
        {/*end of body*/}
        {/*nutrition*/}
          <div className="landingPageFooter">
            <div className="pageFooter">
            <h1 className="learnNutrition">LEARN MORE ABOUT HOW TO BETTER YOUR NUTRITION</h1>
              <input className="nutritionZip" type="number" placeholder="   Enter Your Zip Code" value={this.state.zip} onChange={this.change.bind(this,"zip")}/>
              <button className="nutritionButton">
                <img className="nutritionButton" src="/login-button.png" />
              </button>
            </div>
          </div>
        {/*end of nutrition*/}
      </div>
    )
  }
})

export default LandingPage;

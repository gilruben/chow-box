import React from 'react';
import $ from 'jquery';

const LandingPage = React.createClass({
  getInitialState(){
    return{email:"", password:"", zip:"11368", programs:[]}
  },
  change(key, e){
    this.setState({[key]: e.target.value})
  },
  nutrition(){
    $.ajax({
      url:"https://c4q-dot-searchbertha-hrd.appspot.com/_ah/api/search/v1/zipcodes/"+this.state.zip+"/programs?api_key=fb8edd11a14dc07088e183b288c2503c&serviceTag=Nutrition+Education&cursor=0&limit=10",
      type: "GET",
    })
    .done(data => {
      this.setState({programs: data.programs});
    })
  },
  render(){
    console.log(this.state.programs)
    return (
      <div>
        {/*nav bar */}
        <div>
          <div>
            <img src="#"/>
          </div>
          <div>
            <form>
              <input type="text" onChange={this.change.bind(this,"email")} value={this.state.email}/>
              <input type="text" onChange={this.change.bind(this,"password")} value={this.state.password}/>
              <input type="submit" />
            </form>
          </div>
        </div>
        {/*nav bar ends*/}
        {/*Body*/}
        <div>
          <div>
            <button>
              give a box
            </button>
            <button>
              get a box
            </button>
          </div>
        </div>
        {/*end of body*/}
        {/*nutrition*/}
        <div>
          <div>
            <p>LEARN MORE ABOUT HOW TO BETTER YOUR NUTRITION</p>
            <div>
              <div>
                <input type="number" placeholder="enter your zip code" value={this.state.zip} onChange={this.change.bind(this,"zip")}/>
                <button onClick={this.nutrition}>
                search
                </button>
              </div>
              <div style={{width: "400px", height: "150px", overflow: "scroll"}}>
                {
                  this.state.programs.map((ele,idx)=>
                    <div key={idx}>
                      <p>Name: {ele.name}</p>
                      <p>Office: {ele.offices[0].address1}</p>
                      <p>Phone: {ele.offices[0].phone_number ? ele.offices[0].phone_number:"none"}</p>
                      <p>Address: {ele.offices[0].address1}</p>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
        {/*end of nutrition*/}
      </div>
    )
  }
})

export default LandingPage;
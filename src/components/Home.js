import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {logoutRider} from '../actions/logoutAction';
import video from '../video/bike.mp4';
import {Login} from  '../components/Login';

class Home extends Component {

  
  constructor(props){
    super(props);
    
    
    this.onSubmit = this.onSubmit.bind(this);
    
}

async onSubmit(e){
  e.preventDefault();

  

 //call action
 
 this.props.logoutRider();

 console.log(this.props.list.current_rider.username);
 

 

}

  render() {
    return (
      <div>
       <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4 reg_header">EXTREME MOUNTAIN BIKING</h1>
            <p className="lead reg_header">One of the largest cycling clubs in the World.</p>
            <p className="lead reg_header">Welcome <strong> {this.props.list.current_rider.username}</strong></p>
            <form onSubmit={this.onSubmit}>
            <button type="submit" >
                Logout
                </button><br/>
            </form>
          </div>
        </div>
        
        <div className="fullscreen-bg">
				<video loop muted autoPlay className="fullscreen-bg__video" >
					<source src = {video}/>
						
						
					
					
				</video>
        <div className = 'rider_profile'>
          <div className = 'container'>
            <div className = 'row'>
              <div className = 'col'>
               
                
              
                
              </div>
            </div>
          </div> 
        </div>


			</div>
      </div>
    )
  }
}

Home.propTypes = {
  logoutRider : PropTypes.func.isRequired,
  list : PropTypes.object.isRequired
 

}

const mapStateToProps = state => ({
  list: state.list
});
export default connect (mapStateToProps,{logoutRider})(Home);
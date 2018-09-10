import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loginRiders} from '../actions/loginAction';
import video from '../video/bike.mp4';
import {Login} from  '../components/Login';

class Home extends Component {
  render() {
    return (
      <div>
       <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4 reg_header">EXTREME MOUNTAIN BIKING</h1>
            <p className="lead reg_header">One of the largest cycling clubs in the World.</p>
            <p className="lead reg_header">Welcome <strong> {this.props.list.current_rider.username}</strong></p>
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
                <h3>Your Profile</h3>
                <button type="button" >
                Edit Profile
                </button><br/>
              
                <span>Email: {this.props.list.current_rider.email}</span><br/>
                <span>Phone: {this.props.list.current_rider.phone}</span><br/>
                <span>Address: {this.props.list.current_rider.address}</span><br/>
                <span>Zip: {this.props.list.current_rider.zip}</span><br/>
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
  loginRiders : PropTypes.func.isRequired,
  list : PropTypes.object.isRequired
 

}

const mapStateToProps = state => ({
  list: state.list
});
export default connect (mapStateToProps,{loginRiders})(Home);
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {updateRider} from '../actions/updateAction';

class Profile extends Component {

  constructor(props){
    super(props);
    this.state={
     
      username : this.props.list.current_rider.username,
      password : this.props.list.current_rider.password,
      zip : this.props.list.current_rider.zip,
      address: this.props.list.current_rider.address,

      gender : this.props.list.current_rider.gender,
      email : this.props.list.current_rider.email,
      dateOfBirth : this.props.list.current_rider.dateOfBirth,
      phone :this.props.list.current_rider.phone
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.profileID = this.props.list.current_rider.id;
  }
  
  onChange(e){
    
    this.setState({[e.target.name]: e.target.value });
    console.log(this.state.email);
  }
  async onSubmit(e){
    e.preventDefault();
    this.props.list.current_rider.username;

   

   //call action
   this.props.updateRider(this.state,this.profileID);
   this.props.history.push('/login');

  }
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className = 'col'>
            <div>
              <h3 className='reg_header'>Profile of {this.props.list.current_rider.username}</h3>
              <form  onSubmit={this.onSubmit}> 
              <div className='form-group'>
              <p>Email : <input name='email' className='form-control' onChange={this.onChange} defaultValue={this.state.email }></input></p>
              </div>
              <div className='form-group'>
              <p>Gender : <input name='gender' className='form-control' onChange={this.onChange} defaultValue={this.state.gender }></input></p>

              </div>
              <div className='form-group'>
              <p>Address : <input name='address' className='form-control' onChange={this.onChange} defaultValue={this.state.address }></input></p>

              </div>
              <div className='form-group'>
              <p>Zip : <input name='zip' className='form-control' onChange={this.onChange} defaultValue={this.state.zip }></input></p>

              </div>
              <div className='form-group'>
              <p>Phone : <input name='phone' className='form-control' onChange={this.onChange} defaultValue={this.state.phone }></input></p>

              </div>
              <button type='submit'>Update</button><br/>
              </form>
            </div>
            <div className='col '>
              <div className='profile-container'>
              </div>
            </div> 
          </div>
        </div>
      </div>
      
    )
  }
  
}
Profile.propTypes = {
  updateRider : PropTypes.func.isRequired,
    list : PropTypes.object.isRequired
   
  
  }
  const mapStateToProps = state => ({
    list: state.list
  });
  
  export default connect(mapStateToProps, {updateRider})(Profile);
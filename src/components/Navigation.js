import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

class Navigation extends Component {
  constructor(props){
    super(props);
    this.state = {
      curr_username : this.props.list.current_rider.username,
      curr_password : this.props.list.current_rider.password,
      curr_zip : this.props.list.current_rider.zip,
      curr_address: this.props.list.current_rider.address,

      curr_gender : this.props.list.current_rider.gender,
      curr_email : this.props.list.current_rider.email,
      curr_dateOfBirth : this.props.list.current_rider.dateOfBirth,
      curr_phone :this.props.list.current_rider.phone
    };

  }
  render() {
    let curr_user = this.props.list.current_rider.username;
    let login;
    let home;
    let profile;
    let listing;
    
    if(curr_user){
      login = <NavLink to='/error' className='nav-link'></NavLink>
    }else{
      login = <NavLink to='/login' className='nav-link'>Login</NavLink>
    }

    if(curr_user){
      home = <NavLink to='/' className='nav-link'>Home</NavLink>
    }else{
      home = <NavLink to='/error' className='nav-link'></NavLink>
    }

    if(curr_user){
      profile = <NavLink to='/profile' className='nav-link'>Profile</NavLink>
    }else{
      profile = <NavLink to='/error' className='nav-link'></NavLink>
    }
    if(curr_user =='admin'){
   
      listing = <NavLink to='/listing' className='nav-link'>Listing</NavLink>
    }else{
      listing = <NavLink to='/error' className='nav-link'></NavLink>
    }

    return (
      
      <ul className='nav justify-content-center nav-pills nav-justified navigation'>
        
        <li className='nav-item'>
         {login}
        </li>
        <li className='nav-item'>
        {home}
        </li>
        <li className='nav-item'>
        {profile}
        </li>
        <li className='nav-item'>
          <NavLink to='/register' className='nav-link'>Register</NavLink>
        </li>
        <li className='nav-item'>
        {listing}
        </li>
       
       
        
        
      </ul>
    )
  }
}
Navigation.propTypes = {
  
  list : PropTypes.object.isRequired
 

}

const mapStateToProps = state => ({
  list: state.list
});
export default connect(mapStateToProps,null)(Navigation);
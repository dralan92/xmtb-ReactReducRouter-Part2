import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loginRiders} from '../actions/loginAction';

class Login extends Component {

    constructor(props){
        super(props);
        this.state={
          username:'',
          password:''
         
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e){
    
        this.setState({[e.target.name]: e.target.value });
      }

      async onSubmit(e){
        e.preventDefault();
    
        const logging_rider = {
          username : this.state.username,
          password : this.state.password,
          
        }
    
       //call action
       
       this.props.loginRiders(logging_rider);
    
      }
  render() {
    return (
        <div className='wrapper'>
        <form onSubmit={this.onSubmit}>
          <div className ='container'>
            <h1 className ='reg_header'>Rider Login </h1>
            <div className ='row'>
              <div className='col-md-6'>
                        <div>
                          <label> Username: </label><br/>
                          <input className='form-control' type='text' name='username' onChange={this.onChange} value={this.state.username} />
                      </div>
                      
              </div>
              <div className='col-md-6'>
                          <div>
                            <label> Password: </label><br/>
                            <input className='form-control' type='password' name='password' onChange={this.onChange} value={this.state.password}/>
                          </div>
                          
              </div>
            </div>
            <div className='row'>
                  <div className='col'>
                    <button className='form-control' type='submit' className = 'btn reg_button'>Login</button>
                  </div>
            </div>
          </div>
         
        </form>
        </div>
    )
  }
}


Login.propTypes = {
    loginRiders : PropTypes.func.isRequired
   
  
  }
export default connect(null,{loginRiders})(Login);
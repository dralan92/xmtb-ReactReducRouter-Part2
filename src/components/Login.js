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
        this.login_message = '';
        this.entered_rider = '';
        
    }
    onChange(e){
    
        this.setState({[e.target.name]: e.target.value });
      }

      componentWillMount(){
        
        this.login_message = '';
      }

      async onSubmit(e){
        e.preventDefault();
        
        const logging_rider = {
          username : this.state.username,
          password : this.state.password,
          
        }
    
       //call action
       this.entered_rider = this.state.username;
       this.props.loginRiders(logging_rider);
       this.login_message = 'Login Failed';
       
      
       

       
      
       
    
      }
     
  render() {
    let curr_rider = this.props.list.current_rider.username;
    
    if(curr_rider){
      this.props.history.push('/');
    }else{
      
      
    }
   
    
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
                    <span id='login_message'>{this.login_message}</span>
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
    loginRiders : PropTypes.func.isRequired,
    list : PropTypes.object.isRequired
   
  
  }

  const mapStateToProps = state => ({
    list: state.list
});
export default connect(mapStateToProps,{loginRiders})(Login);
import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {loginRiders} from '../actions/loginAction';
import {Login} from  '../components/Login';

class Home extends Component {
  render() {
    return (
      <div>
       <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4 reg_header">EXTREME MOUNTAIN BIKING</h1>
            <p className="lead reg_header">{this.props.list.current_rider.username} One of the largest cycling clubs in the World.</p>
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
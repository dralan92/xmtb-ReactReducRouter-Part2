import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchRiders} from '../actions/listingAction';


class Listing extends Component {


    componentWillMount(){
        this.props.fetchRiders();
    }
    
  render() {
      const riderListView = this.props.list.riders.map(rider=>(
        <li key = {rider.id} className="list-group-item ">
            <div className='container'>
                <div className='row'>
                    <div className='col-sm-2'>
                        <strong>{rider.username}</strong>
                    </div>
                    <div className='col-sm-2'>
                        <span>Email: {rider.email}</span>
                    </div>
                    <div className='col-sm-2'>
                        <span>Phone: {rider.phone}</span>
                    </div>
                    <div className='col-sm-2'>
                        <span>Address: {rider.address}</span>
                    </div>  
                    <div className='col-sm-2'>
                        <span>Zip: {rider.zip}</span>
                    </div>
                    <div className='col-sm-2'>
                        <span>Date of Birth: {rider.dateOfBirth}</span>
                    </div>    
                </div>
            </div>
        
        
        </li>
      ));
    return (
        <div>
            <h1 className='reg_header'>List Of Registered Riders</h1>
            <div className='container'>
                <div className='row' >
                    <div className = 'col'>
                        <ul className="list-group">
                            {riderListView}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      
    )
  }
}

Listing.PropTypes = {
    fetchRiders : PropTypes.func.isRequired,
    list : PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    list: state.list
});

export default connect(mapStateToProps, {fetchRiders})(Listing);
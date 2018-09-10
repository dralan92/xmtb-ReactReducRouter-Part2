import {UPDATE_RIDER} from './types';


export const updateRider = (updatedRiderData,riderID) => dispatch =>{
        
        console.log('update action');
        let url = 'https://blooming-mesa-21883.herokuapp.com/riders/'+riderID;
        console.log(url);
        console.log(JSON.stringify(updatedRiderData));
        fetch('https://blooming-mesa-21883.herokuapp.com/riders/'+riderID , {
        method : 'PATCH',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(updatedRiderData)
      })
      .then(res=>res.json())
      .then(data=>dispatch({
          type : UPDATE_RIDER,
          payload : data
      }));
     
      
      

    


}
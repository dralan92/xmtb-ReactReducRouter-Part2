import { FETCH_RIDERS, REGISTER_RIDER} from './types';


export const createRiders = (newRiderData) => dispatch =>{
        
        console.log('reg action');

        fetch('https://blooming-mesa-21883.herokuapp.com/riders', {
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(newRiderData)
      })
      .then(res=>res.json())
      .then(data=>dispatch({
          type : REGISTER_RIDER,
          payload : data
      }));
     
      
      

    


}
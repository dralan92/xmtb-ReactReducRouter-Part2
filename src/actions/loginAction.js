import { LOGIN_RIDER} from './types';

export const loginRiders = (logginRider) => dispatch =>{
        
        fetch('https://blooming-mesa-21883.herokuapp.com/riders')
        .then(res=>res.json())
        .then(data=> {

            data.riders.map((d)=>{
                if(logginRider.username == d.username &&
                    logginRider.password == d.password){

                        dispatch({
                            type : LOGIN_RIDER,
                            payload : d
                        });
                    }else{

                    }
            }
                
            );
        });
    

}
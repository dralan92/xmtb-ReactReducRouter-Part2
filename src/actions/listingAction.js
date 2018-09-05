import { FETCH_RIDERS, REGISTER_RIDER} from './types';

export const fetchRiders = () => dispatch =>{
        console.log('fetching...');
        fetch('https://blooming-mesa-21883.herokuapp.com/riders')
        .then(res=>res.json())
        .then(data=> dispatch({
            type: FETCH_RIDERS,
            payload: data
        }));
    

}
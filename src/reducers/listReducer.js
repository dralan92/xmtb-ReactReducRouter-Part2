import { FETCH_RIDERS, REGISTER_RIDER} from '../actions/types';
const initialState = {
    riders: [],
    new_rider:{}

}

export default function( state=initialState, action){
    switch(action.type){
        case FETCH_RIDERS:
            console.log('reducer'); 
            return {
                ...state,
                riders: action.payload.riders
            }
        default:
            return state;
        
    }
}
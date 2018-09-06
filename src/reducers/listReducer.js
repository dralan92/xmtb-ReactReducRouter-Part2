import { FETCH_RIDERS, REGISTER_RIDER, LOGIN_RIDER} from '../actions/types';
const initialState = {
    riders: [],
    new_rider:{},
    current_rider:{}

}

export default function( state=initialState, action){
    switch(action.type){
        case FETCH_RIDERS:
            
            return {
                ...state,
                riders: action.payload.riders
            }
        case LOGIN_RIDER:
            return{
                ...state,
                current_rider: action.payload
            }
        case REGISTER_RIDER:
        return {
            ...state,
            new_rider: action.payload.createdRider
        }
            
        default:
            return state;
        
    }
}
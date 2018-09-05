import { FETCH_RIDERS, REGISTER_RIDER} from '../actions/types';
const initialState = {
    riders: [],
    new_rider:{}

}

export default function( state=initialState, action){
    switch(action.type){
        case FETCH_RIDERS:
            
            return {
                ...state,
                riders: action.payload.riders
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
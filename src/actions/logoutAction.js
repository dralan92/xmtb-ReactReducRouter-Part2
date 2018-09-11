import { LOGOUT_RIDER} from './types';

export const logoutRider = () => dispatch =>{
        
    dispatch({
        type : LOGOUT_RIDER,
        payload : {}
    });
    

}
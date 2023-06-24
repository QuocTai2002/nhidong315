import  * as actionTypes from './Constant'

export const postDataMap = data => async (dispatch) =>{
    try{
        dispatch({
            type: actionTypes.GET_MAP_ADDRESS,
            payload: data
        })
    }catch(err){
        console.log(err);
    }
}
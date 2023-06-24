import { produce } from 'immer'
import * as actionTypes from './Constant'

const initialState ={
     mapAddress:[]
}
export const  homeReducer = (state = initialState,{type, payload}) =>{
    return produce (state, draft =>{
        if(type === actionTypes.GET_MAP_ADDRESS){
            draft.mapAddress = payload
        }
    
    })
}
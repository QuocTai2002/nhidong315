import { produce } from 'immer'
import * as actionTypes from './Constant'

const initialState ={
     mapHome:[]
}
export const  homeReducer = (state = initialState,{type, payload}) =>{
    return produce (state, draft =>{
        
    })
}
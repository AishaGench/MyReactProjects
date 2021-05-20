 import {ADD, DELETE} from '../action/updateList'
 
export const reducer =(state =[],action)=>{
    switch(action.type){
        case ADD : return [...state, action.content];
        case DELETE : return state.filter((item)=>{return item.id!==action.deleteId});

        default: return state
    }
}
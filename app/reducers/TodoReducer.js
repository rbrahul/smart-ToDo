import * as type from '../constants/TodoConstants.js';
import { saveStoreToLocalStorage, getStoreFromLocalStorage } from './../utils/LocalStorageHelper.js';

export function todo(state=[],action){
	switch(action.type){
		case type.ADD_NEW_TODO:
			return [
        ...state,
        action.data
      ];


			case type.COMPLETE_A_TODO:
			return state.map((item,index)=>{
				if (index!== action.id) {
        	return item
      	}

      	return Object.assign({}, item, {
        	done: true
      	});
			});


		case type.UPDATE_A_TODO:
	return state.map((item,index)=>{
			if (index!== action.data.id) {
				return item
			}

			return Object.assign({}, item, {
				text: action.data.text
			});
		});


		case type.SET_PRIORITY:
		return state.map((item,index)=>{
			if (index!== action.data.id) {
				return item
			}

			return Object.assign({}, item, {
				priority: action.data.priority
			});
		});

		case type.CLEAR_ALL_COMPLETED_TODO:
	return state.map((item,index)=>{
			if(item.done===true){
							return [...state.slice(index,1)];
			}else{
				return item;
			}
		});



		default:
			return state;
	}
}


export default todo ;

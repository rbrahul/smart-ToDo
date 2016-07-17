import { createStore, applyMiddleware, compose } from 'redux';
import todoApp from '../reducers/AppReducer.js';
import { getStoreFromLocalStorage } from './../utils/LocalStorageHelper.js';

const localyStoredData=getStoreFromLocalStorage();
const dummyTodos =[{
	text:'Lunch with Jon Doe',
	done: false,
	priority:'Urgent'
},{
	text:'Meeting with Boss',
	done: false,
	priority:'Normal'
},
{
	text:'Watching Cinema at Star Cineplex',
	done: true,
	priority:'Important'
}
];

let initialState={
	todo: localyStoredData ? localyStoredData.todo:[]
};

const store = createStore(
    todoApp,
    initialState,
		window.devToolsExtension ? window.devToolsExtension() :undefined
);
store.subscribe(() => {
	const state= store.getState();
  const localStore=JSON.stringify(state);
  localStorage.setItem('todos',localStore);
});
export default store;

import { ADD_ARTICLE } from './../constants';

const initialState = {
	articles: [],
};

function rootReducer(state = initialState, action) {
	if (action.type === ADD_ARTICLE) {
		return { ...state, articles: [...state.articles, action.payload] };
	}
	return state;
}

export default rootReducer;

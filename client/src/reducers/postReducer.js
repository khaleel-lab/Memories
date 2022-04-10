import { CREATE_POST, FETCH_POSTS } from '../constants/postConstants';

export const postReducer = (state = { posts: [] }, action) => {
	switch (action.type) {
		case FETCH_POSTS:
			return { ...state, posts: state.posts };
		case CREATE_POST:
			return { ...state, posts: state.posts };

		default:
			return state;
	}
};

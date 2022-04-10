import * as api from '../api';
import { FETCH_POSTS } from '../constants/postConstants';

export const getPosts = () => async (dispatch, getState) => {
	try {
		const { data } = await api.fetchPosts();

		dispatch({
			type: FETCH_POSTS,
			payload: data,
		});
	} catch (error) {
		console.log(error.message);
	}
};

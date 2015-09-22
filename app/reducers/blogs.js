import {GET_BLOGS} from '../constants/blog';

export default function blogposts(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BLOGS:
      return [payload, ...state];
    default:
      return state;
  }
}

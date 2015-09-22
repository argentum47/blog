import { combineReducers } from 'redux';
import {GET_BLOGS} from '../constants/blog';

function blogs(state = {}, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BLOGS:
      return {
        ...payload.data.reduce( (res, blog) => { res[blog.id] = blog; return res; }, {} ),
        ...state
       };
    default:
      return state;
  }
}

export default combineReducers({ blogs });

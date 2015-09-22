import {GET_BLOGS} from '../constants/blog';

export default function blogs(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case GET_BLOGS:
      return payload.data.map( blog => blog.id )
    default:
      return state;
  }
}

// Actions
const COMPLETE = "movie/COMPLETE";
const CREATE = "movie/CREATE";
const SAVE = "movie/SAVE";
const DELETE = "movie/DELETE";

const init = {
  is_loaded: false,
  list: [{}],
};
// Action Creators

export function createMovie(movie_list) {
  return { type: CREATE, movie_list };
}
export function completeMovie(index) {
  return { type: COMPLETE, index };
}
export function saveMovie(comment) {
  return { type: SAVE, comment };
}
export function deleteMovie(index) {
  return { type: DELETE, index };
}

// Reducer
export default function mymovies(state = init, action = {}) {
  switch (action.type) {
    case CREATE: {
      const new_movie_list = action.movie_list.map((list) => {
        return { ...list, completed: false };
      });
      return { list: new_movie_list, is_loaded: true };
    }
    case COMPLETE: {
      // console.log(action.index);
      const new_movie_list = state.list.map((v, idx) => {
        if (action.index === idx) {
          return { ...v, completed: true };
        } else {
          return v;
        }
      });
      console.log(new_movie_list);
      return { list: new_movie_list, is_loaded: true };
    }
    case SAVE: {
      const new_movie_list = state.list.map((list, index) => {
        if (action.comment.id === list.id) {
          return {
            ...list,
            평점: action.comment.평점,
            후기: action.comment.후기,
          };
        } else {
          return list;
        }
      });
      return { ...state, list: new_movie_list };
    }
    case DELETE: {
      const new_movie_list = state.list.filter((value, idx) => {
        return action.index !== idx;
      });
      return { list: new_movie_list, is_loaded: true };
    }
    default:
      return state;
  }
}

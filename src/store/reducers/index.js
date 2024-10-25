
import { movies } from '../../data';
import { ADD_MY_FAVORITE, SIRA_ARTTIR, SIRA_AZALT, REMOVE_MY_LISTEM } from '../actions';

const initialState = {
  sira: 0,
  movies:movies,
  favMovies: [],
};



export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SIRA_ARTTIR:
      return { ...state, sira: state.sira + 1 };
    case SIRA_AZALT:
      return { ...state, sira: state.sira - 1  };

    case ADD_MY_FAVORITE:
        const isHas = state.favMovies.some((item)=>item.title===action.payload.title);

        if(!isHas){
        return {
            ...state,movies:state.movies.filter((item)=>item.title!==action.payload.title), favMovies:[...state.favMovies,state.movies[action.payload.sira]]
        };
        }

        return state;

    case REMOVE_MY_LISTEM:
        const movie = state.favMovies.find((item)=>item.title===action.payload);
        return {
            ...state,favMovies:state.favMovies.filter((item)=>item.title!==action.payload), movies:[...state.movies,movie]
        }
    default:
      return state;
  }
}

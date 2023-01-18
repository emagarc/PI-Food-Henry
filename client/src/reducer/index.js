import {
  GET_RECIPES,
  GET_DETAIL,
  GET_NAME,
  ORD_ALPHA,
  ORD_ALPHA_REV,
  ORD_DIET,
  ORD_HS,
  ORD_HS_REV,
} from "../actions/actionNames";

import { ordAlpha, ordHs } from "../Components/Orders/Order.js";

const initialState = {
  recipes: [],
  recipeDetail: {},
  recipeName: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES: {
      return {
        ...state,
        recipes: action.payload,
      };
    }
    case GET_DETAIL: {
      return {
        ...state,
        recipeDetail: action.payload,
      };
    }
    case GET_NAME: {
      return {
        ...state,
        recipes: action.payload,
      };
    }
    case ORD_ALPHA: {
      return {
        ...state,
        recipes: state.recipes.slice().sort(ordAlpha),
      };
    }
    case ORD_ALPHA_REV: {
      return {
        ...state,
        recipes: state.recipes.slice().sort(ordAlpha).reverse(),
      };
    }
    case ORD_HS: {
      return {
        ...state,
        recipes: state.recipes.slice().sort(ordHs),
      };
    }
    case ORD_HS_REV: {
      return {
        ...state,
        recipes: state.recipes.slice().sort(ordHs).reverse(),
      };
    }
    case ORD_DIET: {
      return {
        ...state,
        recipes: action.payload,
      };
    }

    default:
      return state;
  }
};

export default rootReducer;

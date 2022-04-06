import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dish: [
    {
      id: 1,
      name: "Spaghetti",
      ingredient: "peppers, onions",
    },
  ],
};

const dish = createSlice({
  name: "dish",
  initialState,
  reducers: {
    addDish(state, action) {
      state.dish = [
        ...state.dish,
        {
          id: state.dish.length * Math.random(),
          name: action.payload.name,
          ingredient: action.payload.ingredients,
        },
      ];
    },
    removeDish(state, action) {
      state.dish = state.dish.filter((dish) => dish.id !== action.payload);
    },
  },
});

export const dishActions = dish.actions;
export const dishReducer = dish.reducer;

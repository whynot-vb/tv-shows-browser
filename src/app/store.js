import { configureStore } from "@reduxjs/toolkit";

import showsReducer from "../slices/tvShowSlice";
import detailsReducer from "../slices/showDetailsSlice";

export const store = configureStore({
  reducer: {
    shows: showsReducer,
    details: detailsReducer,
  },
});

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SearchBar from "./features/SearchBar/SearchBar";
import Navbar from "./features/Navbar/Navbar";
import Footer from "./features/Footer/Footer";
import AllDetails from "./features/TvShowDetails/AllDetails";
import PaginationObject from "./features/Navbar/PaginationObject/PaginationObject";
import {
  selectResults,
  selectStatus,
  mostPopularTvShows,
} from "./slices/tvShowSlice";
import { selectIsDetailsOn } from "./slices/showDetailsSlice";
import { store } from "./app/store";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const results = useSelector(selectResults);
  const status = useSelector(selectStatus);
  const isDetailsOn = useSelector(selectIsDetailsOn);

  useEffect(() => {
    dispatch(mostPopularTvShows(1));
    console.log("loaded");
  }, []);

  return (
    <div style={{ backgroundImage: "url(/images/tv-show-motive.jpg)" }}>
      <SearchBar />
      {!store.getState().details.isDetailsOn && <Navbar />}
      {status !== "search" && !store.getState().details.isDetailsOn && (
        <PaginationObject />
      )}
      {store.getState().details.isDetailsOn && <AllDetails />}
      <Footer />
    </div>
  );
}

export default App;

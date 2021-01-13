import React, { useContext, useState } from "react";
import Moment from "react-moment";
import { GlobalContext } from "../context/GlobalState";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export const ResultCard = ({ movie }) => {
  const {
    addMovieToWatchlist,
    watchlist,
  } = useContext(GlobalContext);

  let storedMovie = watchlist.find((o) => o.imdbID === movie.imdbID);

  console.log(storedMovie);

  const watchlistDisabled = storedMovie || watchlist.length >= 5 
    ? true
    : false;
  
  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);
    

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.Poster ? (
          <img
            src={`${movie.Poster}`}
            alt={`${movie.Title} Poster`}
          />
        ) : (
          <div className="filler-poster" />
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.Title}</h3>
          <h4 className="release-date">
            <Moment format="YYYY">{movie.Year}</Moment>
          </h4>
        </div>

        <div className="controls">
          <button
            className="btn"
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(movie)}
          >
            Add to Nominations
          </button> 
        </div>

        <div className="controls">
        <div>
              {watchlist.length >= 5 ? (
                <Popup open={true} closeOnDocumentClick onClose={closeModal}>
                  <div className="modal">
                    <a className="close" onClick={closeModal}>
                      &times;
                    </a>
                    You have reached your 5 movies limit!
                  </div>
                </Popup>
              ) : (
                <h1>You can add upto 5 movies</h1>
              )}
            </div>
        </div>
      </div>
    </div>
  )};
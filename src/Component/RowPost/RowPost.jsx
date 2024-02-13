import React, { useEffect, useState } from "react";
import "./Rowpost.css";
import axios from "../../axios";
import { API_KEY, imageUrl } from "../../constants/constants";
import Youtube from "react-youtube";

function RowPost(props) {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    axios
      .get(props.url)
      .then((response) => {
        console.log(response.data.results);
        setMovies(response.data.results);
      })
      .catch((err) => {
        alert("Network Error");
      });
  }, [props.url]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleMovieClick = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response.data);
        if (response.data.results.length !== 0) {
          setSelectedMovie(response.data.results[0]);
        }
      })
      .catch((err) => {
        alert("Video not found");
      });
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  const onEndHandler = () => {
    closeModal();
  };

  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            key={obj.id}
            onClick={() => {
              if(selectedMovie !== null) {
                closeModal();
              }
              handleMovieClick(obj.id);
            }}
            className={props.isSmall ? "smallPoster" : "poster"}
            alt="poster"
            src={`${imageUrl + obj.backdrop_path}`}
          />
        ))}
        <div className="videoPannel">
      {selectedMovie && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={onEndHandler}>
              Close&times;
            </span>
            <Youtube opts={opts} videoId={selectedMovie.key} onEnd={onEndHandler}/>
          </div>
        </div>
      )}
      </div>
      </div>
      
    </div>
  );
}

export default RowPost;

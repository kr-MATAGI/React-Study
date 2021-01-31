import React from 'react';
import PropTypes from 'prop-types';
import "./Movie.css";

const renderGenres = (genres) => {
    return (genres.map((genre, index) => {
        return (
            <li 
                className="genres_genre"
                key={index}>
                {genre}
            </li>
        )
    }));
}

function Movie({id, year, title, summary, poster, genres}){
    return (
        <div className="movie">
            <img src={poster} title={title} alt={title} />
            <div className="movie_data">
                <h3 className="movie_title">{title}</h3>
                <h5 className="movie_year">{year}</h5>
                <ul className="movie_genres">
                    {renderGenres(genres)}
                </ul>
                <p className="movie_summary">{summary}</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
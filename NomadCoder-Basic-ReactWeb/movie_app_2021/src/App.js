import React from 'react';
import axios from 'axios'
import Movie from './Movie';
import "./App.css";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  getMovies = async () => {
    //https://yts-proxy.nomadcoders1.now.sh/list_movies.json
    const {
      data: {
        data: {
          movies
        }
      }
    } = await axios.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false });
  }

  renderMovies = (movies) => {
      return (movies.map(movie => {
        return (<Movie 
          key={movie.id}
          id={movie.id}
          year={movie.year}
          title={movie.title}
          summary={movie.summary}
          poster={movie.medium_cover_image}
          genres={movie.genres}
          />);
      }));
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? ( 
          <div>
            <span className="loader_text">
              Loading...
            </span>
          </div>) : (
            <div className="movies">
              {this.renderMovies(movies)}
            </div>
          )}
      </section>
    );
  }

  componentDidMount() {
    this.getMovies();
  }
}

export default App;
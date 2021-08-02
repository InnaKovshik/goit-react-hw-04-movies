import { Component } from 'react';
import Loader from 'react-loader-spinner';

import defaultImg from '../images/notFound.png';
import services from '../services/moviesApi';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class Cast extends Component {
  state = {
    cast: [],
    loaderStatus: true,
    error: false,
  };

  componentDidMount() {
    const movieId = this.props.movieId;

    services
      .fetchCast(movieId)
      .then(res => this.setState({ cast: res.data.cast }))
      .catch(err => this.setState({ error: true }))
      .finally(() => this.setState({ loaderStatus: false }));
  }

  render() {
    const { cast, loaderStatus, error } = this.state;

    return (
      <>
        {loaderStatus && (
          <Loader
            type="Bars"
            color="grey"
            height={50}
            width={50}
            className="Loader"
          />
        )}
        {error && <h2>There isn't information about cast...</h2>}
        {cast.length > 0 && (
          <ul>
            {cast.map(({ name, profile_path, character, job, credit_id }) => (
              <li key={credit_id}>
                <img
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : defaultImg
                  }
                  alt={job}
                  width="100px"
                />
                <h2>{name}</h2>
                <p>Character: {character ? `${character}` : 'unknown'}</p>
              </li>
            ))}
          </ul>
        )}
      </>
    );
  }
}

export default Cast;

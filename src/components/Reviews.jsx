import { Component } from 'react';
import Loader from 'react-loader-spinner';

import services from '../services/moviesApi';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

class Reviews extends Component {
  state = {
    reviews: [],
    loaderStatus: true,
    error: false,
  };

  componentDidMount() {
    const movieId = this.props.movieId;

    services
      .fetchReviews(movieId)
      .then(reviews => this.setState({ reviews: reviews }))
      .catch(err => this.setState({ error: true }))
      .finally(() => this.setState({ loaderStatus: false }));
  }

  render() {
    const { reviews, loaderStatus, error } = this.state;

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
        {error && <h2>We don't have any review for this movie...</h2>}
        {reviews.length > 0 &&
          reviews.map(({ author, content, id }) => (
            <div key={id}>
              <h2>Author : {author} </h2>
              <p>{content}</p>
            </div>
          ))}
      </>
    );
  }
}

export default Reviews;

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { getMovieReviews } from 'services/moviesApi';
import { Container } from 'components/Container/Container.styled';
import Loader from 'components/Loader/Loader';

const Reviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    const getCast = async () => {
      setIsLoading(true);

      try {
        const data = await getMovieReviews(movieId);
        if (data) setReviews(data);
      } catch (error) {
        toast.error('Ooops! Something went wrong. Please, try later');
      } finally {
        setIsLoading(false);
      }
    };
    window.scrollBy(0, 250);
    getCast();
  }, [movieId]);

  return (
    <Container>
      <ul>
        {isLoading && <Loader />}
        {reviews.length > 0 ? (
          reviews.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <h5>Author: {author}</h5>
                <p>{content}</p>
              </li>
            );
          })
        ) : (
          <h2>Sorry, we don`t have any reviews for this movie</h2>
        )}
      </ul>
    </Container>
  );
};
export default Reviews;

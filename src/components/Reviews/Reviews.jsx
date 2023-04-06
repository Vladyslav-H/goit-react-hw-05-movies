import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieReviews } from 'services/moviesApi';
import Loader from 'components/Loader/Loader';
import { Container } from 'components/Container/Container.styled';

const Reviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getCast = async () => {
      setIsLoading(true);
      try {
        const data = await getMovieReviews(movieId);

        if (data) setReviews(data);
      } catch (error) {
        console.log(error.massege);
      } finally {
        setIsLoading(false);
      }
    };
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
          <h2>We don`t have any reviews for this movie</h2>
        )}
      </ul>
    </Container>
  );
};
export default Reviews;

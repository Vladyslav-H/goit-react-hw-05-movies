import { useEffect, useState } from 'react';

import { getTrendingMovie } from 'services/moviesApi';

import MovieList from 'components/MovieList/MovieList';
import { Title } from './HomePage.styled';
import Loader from 'components/Loader/Loader';
import { Container } from 'components/Container/Container.styled';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const setNewMovies = async () => {
      setIsLoading(true);
      try {
        const data = await getTrendingMovie();

        setMovies([...data]);
      } catch (error) {
        console.log(error.massege);
      } finally {
        setIsLoading(false);
      }
    };
    setNewMovies();
  }, []);

  return (
    <Container>
      {isLoading && <Loader />}
      {movies.length > 0 && <Title>Trending today</Title>}
      <MovieList movies={movies} />
    </Container>
  );
};
export default HomePage;

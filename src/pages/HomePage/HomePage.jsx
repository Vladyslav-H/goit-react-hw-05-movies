import { useEffect, useState } from 'react';
import Loader from 'components/Loader/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { getTrendingMovie } from 'services/moviesApi';

import MovieList from 'components/MovieList/MovieList';
import { Title } from './HomePage.styled';
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
        toast.error('Ooops! Something went wrong. Please, try later');
      } finally {
        setIsLoading(false);
      }
    };
    setNewMovies();
  }, []);

  return (
    <Container>
      <ToastContainer position="top-center" theme="dark" />
      {isLoading && <Loader />}
      {movies.length > 0 && <Title>Trending today</Title>}
      <MovieList movies={movies} />
    </Container>
  );
};
export default HomePage;

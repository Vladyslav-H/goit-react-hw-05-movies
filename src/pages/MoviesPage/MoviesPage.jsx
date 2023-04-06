import { useEffect, useState } from 'react';
import { getMovieByName } from 'services/moviesApi';
import { useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Container } from 'components/Container/Container.styled';
import SearchForm from 'components/SearchForm/SearchForm';
import MovieList from 'components/MovieList/MovieList';
import Loader from 'components/Loader/Loader';

const MoviesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [arMovies, setArMovies] = useState([]);
  const [searchParams] = useSearchParams();
  const search = searchParams.get('query');

  useEffect(() => {
    if (!search) return;

    const getMovies = async () => {
      setIsLoading(true);

      try {
        const movies = await getMovieByName(search);
        if (movies.length === 0) {
          return toast.error('We don`t have any movie with this name');
        }
        setArMovies(movies);
      } catch (error) {
        toast.error('Ooops! Something went wrong. Please, try later');
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, [search]);

  return (
    <Container>
      <SearchForm />
      {isLoading && <Loader />}
      <MovieList movies={arMovies} />
    </Container>
  );
};
export default MoviesPage;

import { useEffect, useState, useRef } from 'react';
import { TiArrowBack } from 'react-icons/ti';
import {
  Outlet,
  useParams,
  useNavigate,
  useLocation,
  Link,
} from 'react-router-dom';
import { toast } from 'react-toastify';

import { getMovieById } from 'services/moviesApi';

import {
  InfoTitle,
  Item,
  ContainerDetPage,
  ButtonGoBack,
} from './MovieDetailsPage.styled';
import MovieDetailCard from 'components/MovieDetailsCard/MovieDetailCard';
import Loader from 'components/Loader/Loader';

const MovieDetailsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});

  const navigate = useNavigate();
  const location = useLocation();
  const prevPage = useRef(location.state);

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      try {
        const data = await getMovieById(movieId);
        setMovieInfo(data);
      } catch (error) {
        toast.error('Ooops! Something went wrong. Please, try later');
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, [movieId]);

  const goBack = () => navigate(prevPage.current);

  return (
    <ContainerDetPage>
      {isLoading && <Loader />}
      <ButtonGoBack type="button" onClick={goBack}>
        <TiArrowBack /> Go back
      </ButtonGoBack>
      <div>
        <MovieDetailCard info={movieInfo} />
        <div>
          <InfoTitle>Additional information</InfoTitle>
          <ul>
            <Item>
              <Link state={prevPage} to="cast">
                Cast
              </Link>
            </Item>
            <Item>
              <Link state={prevPage} to="reviews">
                Review
              </Link>
            </Item>
          </ul>
        </div>
      </div>
      <Outlet />
    </ContainerDetPage>
  );
};
export default MovieDetailsPage;

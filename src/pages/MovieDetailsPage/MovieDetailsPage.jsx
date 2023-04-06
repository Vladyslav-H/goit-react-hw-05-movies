import {
  Outlet,
  useParams,
  useNavigate,
  useLocation,
  Link,
} from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieById } from 'services/moviesApi';

import MovieDetailCard from 'components/MovieDetailsCard/MovieDetailCard';
import { TiArrowBack } from 'react-icons/ti';
import {
  InfoTitle,
  Item,
  ContainerDetPage,
  ButtonGoBack,
  InfoContainer,
} from './MovieDetailsPage.styled';

import Loader from 'components/Loader/Loader';

const MovieDetailsPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const getMovies = async () => {
      setIsLoading(true);
      try {
        const data = await getMovieById(movieId);

        setMovieInfo(data);
      } catch (error) {
        console.log(error.massege);
      } finally {
        setIsLoading(false);
      }
    };
    getMovies();
  }, [movieId]);

  const goBack = () => navigate( location.state );
  // const goBack = () => navigate('/movies' );

  return (
    <ContainerDetPage>
      {isLoading && <Loader />}
      <ButtonGoBack type="button" onClick={goBack}>
        <TiArrowBack /> Go back
      </ButtonGoBack>
      <div>
        <MovieDetailCard info={movieInfo} />
        <InfoContainer>
          <InfoTitle>Additional information</InfoTitle>
          <ul>
            <Item>
              <Link state={location} to="cast">
                Cast
              </Link>
            </Item>
            <Item>
              <Link state={location}  to="reviews">
                Review
              </Link>
            </Item>
          </ul>
        </InfoContainer>
      </div>
      <Outlet />
    </ContainerDetPage>
  );
};
export default MovieDetailsPage;

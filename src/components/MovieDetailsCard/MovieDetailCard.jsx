import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { CardContainer } from './MovieDatailsCard.styled';
import { DescriptionContainer } from './MovieDatailsCard.styled';
import { getPoster } from 'services/moviesApi';
import Loader from 'components/Loader/Loader';

const MovieDetailCard = ({ info }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [url, setUrl] = useState('');

  const { release_date, poster_path, title, vote_average, overview, genres } =
    info;

  const date = new Date(release_date);
  const realeaseYear = date.getFullYear();

  const userScore = Math.round(vote_average * 10);

  useEffect(() => {
    if (!poster_path) return;
   
    const getImgUrl = async () => {
       setIsLoading(true);
      try {
        const data = await getPoster(poster_path);
        setUrl(data);
      } catch (error) {
        console.log(error.massege);
      } finally {
        setIsLoading(false);
      }
    };
    getImgUrl();
  }, [poster_path]);

  return (
    <CardContainer>
      {isLoading && <Loader />}
      <img src={url} alt={url} />
      <DescriptionContainer>
        <h2>
          {title}{realeaseYear ? <span>({realeaseYear})</span> : null}
        </h2>
        <p>
          User score: <span>{userScore}%</span>
        </p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres &&
            genres.map(({ id, name }) => {
              return <li key={id}>{name}</li>;
            })}
        </ul>
      </DescriptionContainer>
    </CardContainer>
  );
};

MovieDetailCard.propTypes = {
  info: PropTypes.object.isRequired,
};

export default MovieDetailCard;

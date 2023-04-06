import { Link, useLocation } from 'react-router-dom';
import { GiFilmProjector } from 'react-icons/gi';
import { IconContext } from 'react-icons';
import PropTypes from 'prop-types';

import { Item } from './MovieList.styled';

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(({ id, title }) => {
        return (
          <Item key={id}>
            <IconContext.Provider value={{ color: 'blue' }}>
              <GiFilmProjector />
              <Link state={location} to={`/movies/${id}`}>
                {title}
              </Link>
            </IconContext.Provider>
          </Item>
        );
      })}
    </ul>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
};

export default MovieList;

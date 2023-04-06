import { useEffect, useState } from 'react';
import { getMovieCredits } from 'services/moviesApi';
import { Outlet, useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

import { List, Item, EmptyImage, DescriptionWrapp, Name } from './Cast.styled';

const Cast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { movieId } = useParams();

  const [credit, setCredit] = useState([]);

  useEffect(() => {
    if (!movieId) return;

    const getCast = async () => {
      setIsLoading(true);
      try {
        const data = await getMovieCredits(movieId);

        setCredit(data);
      } catch (error) {
        console.log(error.massege);
      } finally {
        setIsLoading(false);
      }
    };
    getCast();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      <List>
        {credit.map(({ id, character, original_name, profile_path }) => {
          return (
            <Item key={id}>
              {profile_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w200/${profile_path}`}
                  alt={profile_path}
                />
              ) : (
                <EmptyImage>Image not found</EmptyImage>
              )}
              <DescriptionWrapp>
                <Name> {original_name}</Name>
                <span> Character:</span> <span>{character}</span>
              </DescriptionWrapp>
            </Item>
          );
        })}
      </List>
      <Outlet />
    </>
  );
};
export default Cast;

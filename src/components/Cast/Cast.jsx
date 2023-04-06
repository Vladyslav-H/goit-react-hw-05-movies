import { useEffect, useState } from 'react';
import { getMovieCredits } from 'services/moviesApi';
import { Outlet, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
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
        toast.error('Ooops! Something went wrong. Please, try later');
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      window.scrollBy(0, 350);
    }, 500);

    getCast();
  }, [movieId]);

  return (
    <>
      {isLoading && <Loader />}
      <List>
        {credit.length > 0 ? (
          credit.map(({ id, character, original_name, profile_path }) => {
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
          })
        ) : (
          <h2>Sorry, we don't have any information about the actors</h2>
        )}
      </List>
      <Outlet />
    </>
  );
};
export default Cast;

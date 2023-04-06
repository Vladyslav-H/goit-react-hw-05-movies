import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Header, Link } from './App.styled';
import Loader from 'components/Loader/Loader';
import MainNav from 'components/MainNav/MainNav';

// import { AiOutlineHome } from 'react-icons/ai';
// import { MdLocalMovies } from 'react-icons/md';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('pages/MovieDetailsPage/MovieDetailsPage')
);
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

const App = () => {
  // const location = useLocation();
  // console.log('location' >> location);
  return (
    <>
      <Header>
        <MainNav/>
        {/* <nav>
          {' '}
          <Link to="/" end state={location.state}>
            Home <AiOutlineHome />
          </Link>
          <Link to="/movies" state={location.state}>
            Movies <MdLocalMovies />
          </Link>
        </nav> */}
        <h1>Filmoteka</h1>
      </Header>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast i />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default App;

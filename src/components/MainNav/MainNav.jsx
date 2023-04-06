import { AiOutlineHome } from 'react-icons/ai';
import { MdLocalMovies } from 'react-icons/md';
import { useLocation } from 'react-router-dom';
import { Nav, Link } from './MainNav.styled';

const MainNav = () => {
  const location = useLocation();
  console.log('nav', location.state);
  return (
    <Nav>
      <Link state={location} to="/" end>
        Home <AiOutlineHome />
      </Link>
      <Link state={location} to="/movies">
        Movies <MdLocalMovies />
      </Link>
    </Nav>
  );
};
export default MainNav;

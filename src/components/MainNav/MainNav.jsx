import { AiOutlineHome } from 'react-icons/ai';
import { MdLocalMovies } from 'react-icons/md';

import { Nav, Link } from './MainNav.styled';

const MainNav = () => {
  return (
    <Nav>
      <Link to="/" end>
        Home <AiOutlineHome />
      </Link>
      <Link to="/movies">
        Movies <MdLocalMovies />
      </Link>
    </Nav>
  );
};
export default MainNav;

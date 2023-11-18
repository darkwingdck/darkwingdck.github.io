import './Header.css';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderNav from './HeaderNav/HeaderNav';


export default function Header() {
  return (
    <header className="header">
      <HeaderLogo />
      <HeaderNav />
    </header>
  );
};

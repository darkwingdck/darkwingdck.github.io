import './HeaderLogo.css';

export default function HeaderLogo() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="header-logo" onClick={scrollToTop}>
      DARKWINGDCK
    </div>
  );
};

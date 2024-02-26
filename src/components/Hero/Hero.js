import './Hero.css';
import HeroPresenter from './HeroPresenter/HeroPresenter';

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <div className="hero-text__title">Daniil Zakharov</div>
        <div className="hero-text__subtitle">Software Dev</div>
      </div>
      <HeroPresenter />
    </div>
  );
};

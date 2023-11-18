import './Hero.css';
import HeroPresenter from './HeroPresenter/HeroPresenter';

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-text animated">
        <div className="hero-text__title">Daniil Zakharov</div>
        <div className="hero-text__subtitle">Front-end dev</div>
      </div>
      <HeroPresenter />
    </div>
  );
};

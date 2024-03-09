import tmdbLogo from '../assets/tmdb-logo.svg';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center">
      <div className="px-3 sm:container text-sm mx-auto flex flex-col sm:flex-row justify-between items-center py-7">
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <img src={tmdbLogo} alt="TMDB Icon" width="60" />
          <p>Powered by TMDB API and is not affiliated with TMDB</p>
        </div>
        <p className="mt-2 sm:mt-0">
          Made with <span className="text-secondary">❤</span> by Ali Sajad
          Ahmadi
        </p>
      </div>
    </footer>
  );
};

export default Footer;

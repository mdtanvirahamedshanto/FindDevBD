import './StarOnGitHub.css';

const StarOnGitHub = () => {
  return (
    <a href="https://github.com/mdtanvirahamedshanto/FindDevBD">
      <div className="github-star-button">
        <span className="star-text">Give Me Star </span>
        <svg
          className={`star-icon '}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      </div>
    </a>
  );
};

export default StarOnGitHub;

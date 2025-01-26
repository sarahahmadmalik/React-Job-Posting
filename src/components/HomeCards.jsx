import { Link } from 'react-router-dom';
import './styles/HomeCards.css';
import Card from './Card';

const HomeCards = () => {
  return (
    <section className="home-cards ">
      <div className="home-cards-container">
        <div className="home-cards-grid">
          <Card>
            <h2 className="card-title">For Developers</h2>
            <p className="card-description">
              Browse our React jobs and start your career today
            </p>
            <Link to='/jobs' className="card-link developers-link">
              Browse Jobs
            </Link>
          </Card>
          <Card bg='gray-200'>
            <h2 className="card-title">For Employers</h2>
            <p className="card-description">
              List your job to find the perfect developer for the role
            </p>
            <Link to='/add-job' className="card-link employers-link">
              Add Job
            </Link>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HomeCards;
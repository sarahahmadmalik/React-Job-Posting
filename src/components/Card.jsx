import './styles/Card.css';

const Card = ({ children, bg = 'gray-100' }) => {
  return (
    <div className={`card card-${bg}`}>
      {children}
    </div>
  );
};

export default Card;
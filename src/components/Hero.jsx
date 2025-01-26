import './styles/Hero.css';

const Hero = ({
    title = 'Become a React Dev',
    subtitle = 'Find the React job that fits your skill set',
}) => {
    return (
        <section className="hero index ">
            <div className="hero-container">
                <div className="hero-content">
                    <h1 className="hero-title">{title}</h1>
                    <p className="hero-subtitle">{subtitle}</p>
                </div>
            </div>
        </section>
    );
};

export default Hero;
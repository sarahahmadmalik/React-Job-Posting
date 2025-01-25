const Card = ({ children, bg = 'bg-gray-100' }) => {
  const hoverBgColor = `hover:${bg.replace('bg-', 'darken-')}-1`;

  return (
    <div className={`${bg} index p-6 rounded-lg shadow-md transition duration-300 ${hoverBgColor} hover:shadow-lg`}>
      {children}
    </div>
  );
};

export default Card;

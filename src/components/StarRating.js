import { useState } from 'react';
import { Star } from 'lucide-react';

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
};

const starContainerStyle = {
  display: 'flex',
  gap: '0.25rem',
};

const StarItem = ({ onRate, full, onHoverIn, onHoverOut, color, size }) => {
  const starStyle = {
    width: '24px',
    height: '24px',
    display: 'block',
    cursor: 'pointer',
  };
  return (
    <span
      role='button'
      style={starStyle}
      onClick={onRate}
      onMouseEnter={onHoverIn}
      onMouseLeave={onHoverOut}
    >
      {full ? (
        <Star color={color} fill={color} strokeWidth={1.5} />
      ) : (
        <Star color={color} strokeWidth={1.5} />
      )}
    </span>
  );
};

const StarRating = ({ maxRating = 3, color = '#fcc419', size }) => {
  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);

  const handleRating = (rating) => {
    setRating(rating);
  };

  const textStyle = {
    lineHeight: '1',
    margin: 0,
    color,
    fontSize: size ? `${size / 1.5}px` : '1.5rem',
  };

  return (
    <div style={containerStyle}>
      <div style={starContainerStyle}>
        {Array.from({ length: maxRating }, (_, i) => (
          <StarItem
            key={i}
            color={color}
            onRate={() => handleRating(i + 1)}
            onHoverIn={() => setTempRating(i + 1)}
            onHoverOut={() => setTempRating(0)}
            full={tempRating ? tempRating >= i + 1 : rating >= i + 1}
          />
        ))}
      </div>
      <p style={textStyle}>{tempRating || rating || ''}</p>
    </div>
  );
};

export default StarRating;

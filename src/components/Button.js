import PropTypes from 'prop-types';

const Button = ({color, text}) => {
  const onClick = () => {
      console.log("Clicked")
  }
    return (
  <button onClick={onClick} className='btn' style={{backgroundColor: color}}>
      {text}
  </button>
  );

};

Button.defaultProps = {
    color: 'steelblue'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func, 
}
export default Button;

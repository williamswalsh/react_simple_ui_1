import PropTypes from 'prop-types';

const Button = ({ text, color, onClick}) => {
    return (<button
            onClick={onClick} 
            style={{backgroundColor: color}} 
            className='btn'>
            {text}
        </button>);
}

Button.defaultProps = {
    color: 'steelBlue'
}
// N.B.: propTypes must be camelCase
Button.propTypes = {
    text:    PropTypes.string,
    color:   PropTypes.string,
    onClick: PropTypes.func,
}

export default Button

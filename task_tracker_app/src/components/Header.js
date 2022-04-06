import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
    const location = useLocation();

    return (
        <header className='header'>
            <h1>{title}</h1>
            {location.pathname === '/' && (
                <Button 
                    text={showAdd ? 'Close' : 'Add'} 
                    color={showAdd ? 'red' : 'green'}
                    onClick={onAdd} />
                    )}
        </header>
    )
}
// Setting a default value for a property - which is just a datum passed to function
// i.e. an argument to the function
// Header.defaultProps = {
//     title: "Task Tracker - default header in use"
// }

// Can specify expected types for properties:
// will still render but will raise a warning when input is incorrect:
// can also make require using .isRequired i.e.: title: PropTypes.string.isRequired,
Header.propTypes = {
    title: PropTypes.string.isRequired
}
export default Header

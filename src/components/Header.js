import PropTypes from 'prop-types'
import Button from './Button'

export const Header = ({ title, onAdd, showAdd }) => {
   

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color={showAdd ? 'red' : 'teal'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string,
}

// const headingStyles = {
//     backgroundColor:'black',
//     color:'green',
// }

export default Header

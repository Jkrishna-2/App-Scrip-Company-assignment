import React, {useState} from 'react'
import './Header.css'

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState)
  }

  return (
    <header className='header'>
      <div className='logo'>Your Logo</div>
      <nav className='navigation'>
        <ul>
          <li>
            <a href='#'>Home</a>
          </li>
          <li>
            <a href='#'>Products</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
          <li className='dropdown'>
            <button onClick={toggleDropdown}>Dropdown</button>
            {isDropdownOpen && (
              <ul className='dropdown-menu'>
                <li>
                  <a href='#'>Option 1</a>
                </li>
                <li>
                  <a href='#'>Option 2</a>
                </li>
                <li>
                  <a href='#'>Option 3</a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header

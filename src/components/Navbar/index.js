import React, { useEffect, useState } from 'react';
import { FaLayerGroup, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyles';
import { MobileIcon, Nav, NavbarContainer, NavBtnLink, NavIcon, NavItem, NavItemBtn, NavLinks, NavLogo, NavMenu } from './NavbarElements';

function Navbar() {
  /* click and button state variables Defined to update Hamburger menu */
  const [click, setClick ] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false)
    } else {
      setButton(true)
    }
  }

  /** Hook for button component  */
  useEffect(() => {
    showButton()
  }, [])
  window.addEventListener('resize', showButton);

  return (
    <>
    <IconContext.Provider value={{ color: '#66FCF1' }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/' onClick={closeMobileMenu}>
            <NavIcon />
            DC Builders
          </NavLogo>
          <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaLayerGroup />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to='/about'>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/showcase'>Showcase</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='/pubawards'>Published Awards</NavLinks>
            </NavItem>
            <NavItemBtn>
              {button ? (
                <NavBtnLink to='/contact'>
                  <Button primary>Contact Us</Button>
                </NavBtnLink>
              ) : (
                <NavBtnLink to='/contact'>
                  <Button onClick={closeMobileMenu} fontBig primary>
                    Contact Us
                  </Button>
                </NavBtnLink>
              )}
            </NavItemBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
    </>
  );
}

export default Navbar;


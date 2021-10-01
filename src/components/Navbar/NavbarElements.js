//import { FaNetworkWired } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../globalStyles';

/** Navbar component rendering <nav> tag */
export const Nav = styled.nav`
  background: #101522;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
`;

/** Navbar Container component rendering global Container */
export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;
/** Navbar Logo component rendering NavLogo Link */
export const NavLogo = styled(Link)`
  color: #C5C6C7;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

// FiCodesandbox fi import
export const NavIcon = styled(FaHome)`
  margin-right: 0.5rem;
`;
/** MobileIcon component rendering HamburgerMenu <div>tag */
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
/** NavMenu component rendering <ul>tag */
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;



  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    // Toggle NavMenu from left, when clicked value shows else dissapear
    left: ${({click}) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;

/** NavItem component rendering <li>tag */
export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #66FCF1;
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

/** NavLinks component rendering <Link> */
export const NavLinks = styled(Link)`
  color: #C5C6C7;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%auto;
    display: table;

    &:hover {
      color: #66FCF1;
      transition: all 0.3s ease;
    }
  }
`;

/** NavItemBtn component rendering <li>tag */
// Sidebar slide out
export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: 120px;
  }
`;

/** NavBtnLink component rendering <Link> */
export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;



import { Link as LinkRouter, Link as LinkScroll } from 'react-router-dom';
import styled from "styled-components";
/** Navbar component rendering <nav> tag */
export const Nav = styled.nav`
  background: #101522;
  //background: ${({scrollNav}) => (scrollNav ? '#000' : 'transparent')};
  height: 80px;
  //margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px){
    transition: 0.8s all ease;
  }
`;
/** NavbarContainer rendering <div> tag */
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;
/** NavLogo rendering <Link> tag */
export const NavLogo = styled(LinkRouter)`
  color: #C5C6C7;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`;

/** MobileIcon rendering <div> tag */
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #66FCF1;
  }
`;
/** NavMenu rendering <ul> tag */
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
/** NavItem rendering <li> tag */
export const NavItem = styled.li`
  height: 80px;
`;
/** NavLinks rendering <LinkScroll> tag */
export const NavLinks = styled(LinkScroll)`
  //color: #fff;
  color: #C5C6C7;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    border-bottom: 3px solid #66FCF1;
  }
`;
/** NavBtn rendering <nav> tag */
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;
/** NavBtnLink rendering <nav> tag */
export const NavBtnLink = styled(LinkRouter)`
  border-radius: 50px;
  background: #66FCF1;
  white-space: nowrap;
  padding: 10px 22px;
  color: #0B0C10;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #C5C6C7;
    //background: #66FCF1;
    //color: #010606;
  }
`;
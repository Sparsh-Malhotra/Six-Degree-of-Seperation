import React, { useRef, useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { animateScroll } from "react-scroll";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavItem,
  NavLinks,
  NavLogo,
  NavMenu,
} from "./NavbarElements";

const Navbar: React.FC<any> = ({ toggle }) => {
  const isScreenMounted = useRef(true);

  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (!isScreenMounted.current) return;
    if (window.scrollY >= 80) setScrollNav(true);
    else setScrollNav(false);
  };

  useEffect(() => {
    if (!isScreenMounted.current) return;
    else window.addEventListener("scroll", changeNav);
    return () => {
      isScreenMounted.current = false;
    };
  }, []);

  const toggleHome = () => {
    animateScroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav} id='nav'>
        <NavbarContainer>
          <NavLogo to='nav' onClick={toggleHome}>
            Degrees of Separation
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to='people'
                duration={500}
                spy={true}
                offset={-80}
                delay={0}
                smooth={true}
              >
                Add People
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='relationship'
                duration={500}
                spy={true}
                offset={-80}
                delay={0}
                smooth={true}
              >
                Set Relationship
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='connection'
                delay={0}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
              >
                Find Connection
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;

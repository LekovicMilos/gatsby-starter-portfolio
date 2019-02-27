import React from 'react';
import { Button, HireMe } from './Button.js';
import Close from '../images/close-popup.png';
import styled from 'styled-components';
import Colors from '../Colors';
import * as Mixins from '../Mixins';
import { media, mediaMin } from '../MediaQueries';
import { withTheme } from 'styled-components';
import * as t from '../Typography';
import { lighten, darken } from 'polished';
import Helmet from 'react-helmet';
import Avatar from '../images/avatar.jpg'

const HeaderWrapper = styled.div`
  height: auto;
  max-height: 48px;
  min-height: 16px;
  z-index: 2;
  position: relative;
  padding: 27px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  color: ${Colors.white};
  background: ${props => (props.scrolled ? `${Colors.white};` : 'transparent')};
  animation: ${props => (props.scrolled ? 'fadein' : 'fadeout')} 0.5s;
  ${props => props.scrolled && 'box-shadow: 0 2px 24px 0 rgba(0, 0, 0, 0.1);'}
  ${t.P} {
    color: ${props => (props.scrolled || props.theme === 'white') && `${Colors.darkest};`}
      ${media.desktop`
        color: ${Colors.white};
      `}
  }
  ${Button} {
    color: ${props => props.scrolled && `${Colors.darkest}`};
    border: 1px solid ${props => props.scrolled && `${Colors.darkest}`};
    &:hover {
      color: ${props => props.scrolled && `${lighten(0.3, Colors.darkest)}`};
      border: 1px solid ${props => props.scrolled && `${lighten(0.3, Colors.darkest)}`};
    }
    ${media.menuMax`
      padding: 15px 20px;
    `}
    ${media.desktop`
      color: ${Colors.white};
      border: 1px solid ${Colors.white};
      &:hover {
        color: ${props => props.scrolled && `${darken(0.3, Colors.white)}`};
        border: 1px solid ${props => props.scrolled && `${darken(0.3, Colors.white)}`};
      }
    `}
  }
  ${HireMe} {
    margin-left: 20px;
    ${media.desktop`
      margin: 30px 0 0 0;
    `}
  }
`;

const Logo = styled.a`
  position: absolute;
  left: 30px;
  top: 16px;
  max-width: 43px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  align-selft: baseline;
  img {
    width: 100%;
    transition-duration: 0.4s;
  }
  &:hover img {
    transform: scale(1.3);
  }
  ${mediaMin.desktop`
    position: relative;
    left: auto;
    top: 0;
  `}
`;

const Burger = styled.div`
  width: 22px;
  height: 22px;
  align-self: center;
  position: absolute;
  right: 25px;
  top: 25px;
  color: ${Colors.white};
  z-index: 2;
  color: ${props => (props.scrolled || props.theme === 'white' ? `${Colors.darkest}` : `${Colors.white}`)};
  &:hover {
    ${props => (props.scrolled || props.theme === 'white' ? lighten(0.3, Colors.darkest) : darken(0.1, Colors.white))};
    cursor: pointer;
    opacity: 0.9;
  }
  ${mediaMin.desktop`
    display: none;
  `}
  img {
    width: 20px;
    height: 20px;
  }
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: none;
  height: 48px;
  li {
    display: inline-block;
    position: relative;
  }
  ${mediaMin.desktop`
    display: block;
  `}
  .mobile-only {
    display: none;
  }
  ${media.desktop`
    position: fixed;
    height: auto;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${Colors.darkest};
    text-align: center;
    padding: 0;
    z-index: 10;
    padding-top: 20px;
    ${props =>
      props.showMobile &&
      `
      display: block;
      .mobile-only {
        display: block;
      }
    `}
    li {
      display: list-item;
      font-size: 20px;
    }
    ${Button} {
      margin-top: 20px;
    }
  `}
`;

const HeaderNav = styled.div`
  display: flex;
  align-items: center;
`;

const ContentWrapper = styled.div`
  ${Mixins.contentMixin}
  align-items: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

class Header extends React.Component {
  state = {
    showMobile: false,
    scrolled: false
  };

  componentDidMount() {
    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll);
    const { theme } = this.props;
    this.setState({
      theme
    });
  }

  handleBurgerClick = () => {
    this.setState({ showMobile: true });
  };

  handleClose = () => {
    this.setState({ showMobile: false });
  };

  handleScroll = () => {
    let doc = document.documentElement;
    let scrollTop = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    if (scrollTop >= 100) {
      this.setState({ scrolled: true });
    } else if (scrollTop < 100) {
      this.setState({ scrolled: false });
    }
  };

  openContactPopup = () => {
    this.props.openContactPopup();
  };

  render() {
    const { showMobile, scrolled, theme } = this.state;
    const overflow = showMobile ? 'hidden' : 'auto';
    return (
      <HeaderWrapper theme={theme} scrolled={scrolled}>
        <Helmet>
          <body style={{ overflow: overflow }} />
        </Helmet>
        <ContentWrapper>
          <Logo href="/">
            <img src={Avatar} alt="Name Surname" />
          </Logo>
          <HeaderNav>
            <Burger alt="Menu" onClick={this.handleBurgerClick} scrolled={scrolled} theme={theme}>
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 39.7 30.3"
              >
                <path
                  fill="currentColor"
                  d="M36.2,6.1H3.6C2,6.1,0.8,4.9,0.8,3.3v0c0-1.6,1.3-2.8,2.8-2.8h32.6c1.6,0,2.8,1.3,2.8,2.8v0
                  C39,4.9,37.8,6.1,36.2,6.1z"
                />
                <path
                  fill="currentColor"
                  d="M36.2,17.8H3.6c-1.6,0-2.8-1.3-2.8-2.8v0c0-1.6,1.3-2.8,2.8-2.8h32.6c1.6,0,2.8,1.3,2.8,2.8v0
                  C39,16.6,37.8,17.8,36.2,17.8z"
                />
                <path
                  fill="currentColor"
                  d="M36.2,29.5H3.6c-1.6,0-2.8-1.3-2.8-2.8v0c0-1.6,1.3-2.8,2.8-2.8h32.6c1.6,0,2.8,1.3,2.8,2.8v0
                  C39,28.3,37.8,29.5,36.2,29.5z"
                />
                <g>
                  <image width="80" height="62" transform="matrix(0.5 0 0 0.5 54 32.5)" />
                </g>
              </svg>
            </Burger>
            <MenuList {...showMobile && { showMobile }}>
              <Burger onClick={this.handleClose}>
                <img alt="Close menu" src={Close} />
              </Burger>
              <li>
                <Button
                  theme={theme}
                  to="about-me"
                >
                  About me
                </Button>
              </li>
              <li>
                <HireMe theme={theme} onClick={this.openContactPopup} book>
                  Contact me
                </HireMe>
              </li>
            </MenuList>
          </HeaderNav>
        </ContentWrapper>
      </HeaderWrapper>
    );
  }
}

export default withTheme(Header);
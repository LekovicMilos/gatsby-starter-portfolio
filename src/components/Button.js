import styled from 'styled-components';
import Colors from '../Colors';
import { lighten, darken } from 'polished';
import { Link } from 'gatsby';

export const Button = styled(Link)`
  background: ${props => props.theme.bg};
  color: ${props =>
    props.theme === 'white' ? `${Colors.darkest};` : `${Colors.white};`};
  line-height: 1.05;
  font-size: 16px;
  font-weight: bold;
  padding: ${props => (props.large ? '15px 34px;' : '12px 30px;')}
  border: 1px solid ${props =>
    props.theme === 'white' ? `${Colors.darkest};` : `${Colors.white};`};
  border-radius: 100px;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  ${props => props.book && 'margin-left: 15px;'}
  &:hover {
    color: ${props =>
      props.theme === 'white'
        ? `${lighten(0.3, Colors.darkest)};`
        : `${darken(0.1, Colors.white)};`};
    text-decoration: none;
    background: transparent;
    border: 1px solid ${props =>
      props.theme === 'white'
        ? `${lighten(0.3, Colors.darkest)};`
        : `${darken(0.1, Colors.white)};`};
  }
`;

export const HireMe = styled.div`
  line-height: 1.05;
  font-size: ${props => (props.large ? '18px' : '16px')};
  padding: ${props => (props.large ? '16px 50px' : '12px 30px')};
  border-radius: 100px;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  background: ${Colors.light};
  color: #3c3b3b;
  font-weight: bold;
  border: 1px solid ${Colors.light};
  transition-duration: 0.3s;
  &:hover {
    color: #3c3b3b;
    background: ${darken(0.2, Colors.light)};
    border: 1px solid ${darken(0.2, Colors.light)};
  }
`;

export const LinkButton = styled(Button)`
  font-size: 0.9;
  border: none;
  text-decoration: underline;
  &:hover {
    border: none;
  }
`;

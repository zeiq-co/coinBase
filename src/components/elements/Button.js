import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  height: 45px;
  padding: 0rem 2.5rem !important;
  background: ${props =>
    props.secondary
      ? props.theme.gradientPrimary
      : props.theme.gradientSecondary};
  border: none;
  transition: all 0.5s ease;
  :hover {
    transform: scale(1.07);
  }
  span {
    font-size: ${props => props.theme.fontSmall}!important;
    color: ${props => (props.secondary ? '#fff' : props.theme.primaryColor)};
  }
`;

const Button = ({ children, ...props }) => (
  <Container
    type="submit"
    className="button is-rounded is-uppercase has-text-weight-bold"
    {...props}>
    <span>{children}</span>
  </Container>
);

export default Button;

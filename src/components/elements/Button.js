import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  height: 54px;
  padding: 0rem 2.5rem !important;
  background: ${props =>
    props.secondary ? props.theme.darkBlack : props.theme.backgroundGradient};
  border: none;
  span {
    font-size: ${props => props.theme.fontSmall}!important;
    background: ${props =>
      props.secondary ? props.theme.colorGradient : props.theme.darkBlack};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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

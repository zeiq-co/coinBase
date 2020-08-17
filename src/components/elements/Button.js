import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
  padding: 1.5rem 2.5rem !important;
  background-color: ${(props) =>
    props.secondary ? props.theme.darkBlack : props.theme.colorGradient};
  p {
    font-size: ${(props) => props.theme.fontSmall}!important;
    background: ${(props) =>
      props.secondary ? props.theme.colorGradient : props.theme.darkBlack};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Button = ({ children, isLarge, ...props }) => (
  <Container
    type="submit"
    className="button is-rounded is-uppercase has-text-weight-bold"
    {...props}
  >
    <p>{children}</p>
  </Container>
);

export default Button;

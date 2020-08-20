import React from 'react';
import styled from 'styled-components';

const Container = styled.h2`
  background: ${props =>
    props.dark ? props.theme.darkBlack : props.theme.colorGradient};
  font-size: ${props => props.theme.fontLarge};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Title = ({ children, ...props }) => (
  <span>
    <Container className="has-text-weight-bold" {...props}>
      {children}
    </Container>
  </span>
);

export default Title;

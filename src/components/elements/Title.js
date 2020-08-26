import React from 'react';
import styled from 'styled-components';

const Container = styled.h2`
  background: ${props =>
    props.white ? '#fff' : props.theme.gradientSecondary};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: ${props => (props.medium ? '1.5rem' : '3rem')};
`;

const Title = ({ children, ...props }) => (
  <span>
    <Container className="has-text-weight-bold" {...props}>
      {children}
    </Container>
  </span>
);

export default Title;

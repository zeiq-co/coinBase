import React from 'react';
import styled from 'styled-components';

const Container = styled.p`
  line-height: ${props => (props.dark ? '27px' : '40px')};
`;

const Subtitle = ({ children, ...props }) => (
  <Container className="is-size-6 has-text-white" {...props}>
    {children}
  </Container>
);

export default Subtitle;

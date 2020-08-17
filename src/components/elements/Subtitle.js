import React from 'react';
import styled from 'styled-components';

const Container = styled.p`
  color: ${props =>
    props.dark ? props.theme.darkBlack : props.theme.textColor};
  line-height: ${props => (props.dark ? '27px' : '40px')};
`;

const Subtitle = ({ children, ...props }) => (
  <Container className="is-size-6" {...props}>
    {children}
  </Container>
);

export default Subtitle;

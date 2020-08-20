import styled from 'styled-components';
import { Button, Title } from './elements';

const Container = styled.p`
  input {
    height: 50px;
    background: ${props => props.theme.darkBlack};
    border: none;
    box-shadow: none;
    ::placeholder {
      background: ${props => props.theme.colorGradient};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  h2 {
    margin-bottom: 2rem;
  }
  button {
    width: 100%;
  }
  .input-Wrapper {
    padding: 2px;
    background: ${props => props.theme.colorGradient};
    margin-bottom: 1.5rem;
    border-radius: 3rem;
  }
`;

const AuthorizationForm = ({title}) => (
  <Container>
    <Title>{title}</Title>
    <div className="input-Wrapper">
      <input
        className="input is-rounded has-text-light"
        type="text"
        placeholder="Enter Your Account Id"
      />
    </div>
    <div className="input-Wrapper ">
      <input
        className="input is-rounded has-text-light"
        type="text"
        placeholder="Enter Your Password"
      />
    </div>

    <Button>SUBMIT</Button>
  </Container>
);

export default AuthorizationForm;

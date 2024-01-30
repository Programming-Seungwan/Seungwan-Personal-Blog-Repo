import { useEffect } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { navigate } from 'gatsby';
import { faBan } from '@fortawesome/free-solid-svg-icons';

const ErrorContainer = styled.div`
  width: 100dvw;
  height: 100dvh;
  background-color: var(--background-color1);
  display: flex;
  flex-direction: column;
`;

const ErrorMessageContainer = styled.div`
  flex-grow: 3;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-size: 1.7rem;
    font-weight: 600;
  }
`;

const ErrorLogoContainer = styled.div`
  flex-grow: 4;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  span {
    font-size: 1rem;
    font-weight: 600;
  }
`;

const RedirectButtonContainer = styled.div`
  flex-grow: 3;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  button {
    border: none;
    background: none;
    padding: none;
    font: inherit;
    cursor: pointer;
    width: 30%;
    height: 40%;
    font-size: 1.5rem;
    font-weight: 550;
    border-radius: 0.5rem;
    color: white;
    background-color: rgba(0, 0, 0, 1);
  }
`;

function handleClickGoHomtButtons() {
  navigate('/');
}

const NotFoundPage = () => {
  useEffect(() => {
    const timer = setTimeout(() => navigate('/'), 10000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ErrorContainer>
      <ErrorMessageContainer>
        <span>404 Error! Page Not Found 😥</span>
      </ErrorMessageContainer>

      <ErrorLogoContainer>
        <FontAwesomeIcon icon={faBan} size='10x' />
        <span>This page is redirected after 10 seconds ...</span>
      </ErrorLogoContainer>

      <RedirectButtonContainer>
        <button onClick={handleClickGoHomtButtons}>Go Home</button>
      </RedirectButtonContainer>
    </ErrorContainer>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;

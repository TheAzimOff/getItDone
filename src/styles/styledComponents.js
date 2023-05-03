import styled from 'styled-components';

export const StyledNav = styled.nav`
  height: 15vh;
  width: 100%;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  background: var(--background);
  .logo {
    font-family: 'Rajdhani', sans-serif;
    font-size: 2rem;
    color: var(--primary);
  }
  .switcher {
    display: flex;
    li {
      margin: 5px;
      span {
        cursor: pointer;
        user-select: none;
        color: var(--secondary);
        &.${props => props.active} {
          color: var(--primary);
        }
      }
    }
  }
`;
export const StyledForm = styled.div`
  position: absolute;
  top: calc(5vh + 50%);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-width: 600px;
  height: 80%;
  padding: 3rem;
  h1 {
    font-size: 30px;
    font-weight: 600;
    text-align: left;
    color: var(--secondary);
    margin-bottom: 2rem;
    span {
      color: var(--primary);
    }
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-bottom: auto;

    input {
      margin-bottom: 3rem;
      width: 100%;
      padding: 20px;
      outline: none;
      background: var(--secondary);
      color: #f8f8f8;
      border-radius: 10px;
      font-size: 16px;

      &::placeholder {
        color: #f8f8f8;
      }
    }
    button {
      font-size: 24px;
      color: #fff;
      padding: 10px 20px;
      background: #7d41ff;
      border-radius: 10px;
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Content = styled.div`
  max-width: 400px;
  h1 {
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    font-size: 2.5rem;
    span {
      color: #b388eb;
    }
  }
  
  div{
      flex: 1;
      display: flex;
      margin-bottom: 1rem;
      
      button + button {
          margin-left: 1rem;
      }
  }


  span{
      font-size: 1.8rem;
      margin-bottom: 2rem;
      flex-wrap: wrap;
  }
`;

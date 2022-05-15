import styled from "styled-components";

export const Container = styled.button`
  background: ${props => (props.whiteSchema ? "#B3E8E5": "#2F8F9D")};
  color: ${props => (props.whiteSchema ? "#2F8F9D": "#B3E8E5")};
  height: 45px;
  border-radius: 8px;
  border: 2px solid var(--blue-black);
  font-family: 'Poppins', sans-serif;
  margin-top: 16px;
  width: 100%;
  transition: 0.5s;
  :hover{
      border: 2px solid #B388EB;
  }
`;
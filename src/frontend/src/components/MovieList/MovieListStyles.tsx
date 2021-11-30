import styled from "styled-components";

export const MovieListStyle = styled.ul`
  margin: 0;
  padding: 0;
`;

export const MovieListItemStyle = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;

  span {
    display: inline-block;
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 16px;
  }
  p {
    font-size: 14px;
    padding: 0 50px;
  }
  button:before {
    align-self: center;
    border-style: solid;
    border-width: 6px 4px 0 4px;
    border-color: #ffffff transparent transparent transparent;
    content: "";
    height: 0;
    margin-right: 5px;
    width: 0;
  }
`;

export const MovieLinkStyle = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-bottom: 32px;
  width: 70%;
  border: 3px solid #ccc;
  padding: 20px 0;
  background-color: #ffffff;
  color: #000000;
  text-decoration: none;
  transition: transform 0.15s ease;

  :hover {
    transform: scale(1.02);
  }
`;

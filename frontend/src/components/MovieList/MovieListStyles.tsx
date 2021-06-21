import styled from "styled-components";

export const MovieListStyle = styled.section`
  padding-bottom: 20px;

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }
  a {
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
  }
  a:hover {
    transform: scale(1.02);
  }
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
  ul {
    margin: 0;
    padding: 0;
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

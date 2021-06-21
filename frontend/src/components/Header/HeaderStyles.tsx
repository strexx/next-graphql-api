import styled from "styled-components";

export const HeaderStyle = styled.header`
  margin-bottom: 25px;

  a {
    font-size: 18px;
    color: #000000;
    font-weight: bold;
    margin-right: 15px;
    text-decoration: none;
    transition: color 0.15s ease;
  }
  a:hover {
    color: red;
  }
  .is-active {
    text-decoration: underline;
  }
`;

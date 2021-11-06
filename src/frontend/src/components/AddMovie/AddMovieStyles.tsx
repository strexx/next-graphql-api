import styled from "styled-components";

export const AddMovieStyle = styled.section`
  background: #f5f4f0;
  padding: 5px 0 20px 20px;

  h1 {
    font-size: 24px;
  }

  fieldset {
    width: 100%;
    border: none;
    padding: 0;
  }

  div {
    margin-bottom: 16px;
  }

  label {
    font-weight: bold;
    display: block;
    margin-bottom: 8px;
  }

  input,
  textarea {
    font-family: Helvetica, Sans-serif, Arial;
    padding: 8px;
    width: 100%;
    max-width: 700px;
    font-size: 16px;
  }

  button {
    padding: 8px;
    width: 100px;
    cursor: pointer;
  }
`;

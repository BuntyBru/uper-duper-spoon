import styled from "styled-components";

export const HeaderElement = styled.div`
  background: #171c23;
  padding: 10px 15px;
  position: fixed;
  width: 100%;
  display: flex;

  & .image-holder {
    flex: 1;
    display: flex;
    justify-content: flex-start;
  }

  .otherLinks {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }

  button {
    margin-right: 20px;
    margin-top: 7px;
    background: none;
    border: none;
    outline: none;
    font-size: 13px;
    font-weight: 600;
    color: white;
    cursor: pointer;
  }
`;

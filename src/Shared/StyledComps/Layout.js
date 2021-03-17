import styled from "styled-components";

export const Layout = styled.div`
  max-width: 1220px;
  margin: 0 auto;
  padding: 60px 30px;

  color: white;
`;

export const LeftNavBar = styled.div`
  background: #0f1218;
  padding: 10px 15px;
  height: 100vh;
  width: 40px;
  position: fixed;

  & ul {
    margin-top: 180px;
    list-style: none;
    padding: 0;
  }
  ul li img {
    width: 40px;
    height: 40px;
    margin-bottom: 40px;
  }
  .lastli {
    position: absolute;
    bottom: 30px;
  }
`;

export const ErrorMessage = styled.p`
  margin: 0px;
  font-size: 13px;
  color: #ff7171;
  font-weight: 600;
  margin-top: 7px;
`;

export const ErrorHolder = styled.div`
  background: #ff71713d;
  padding: 10px 20px;
  & p {
    margin: 0px;
    font-size: 13px;
    color: #ff7171;
    font-weight: 600;
  }
`;

export const CommonBtn = styled.button`
  margin-top: 1rem;
  font-weight: 600;
  background: #0f1218;
  border: none;
  padding: 8px 20px;
  color: white;
  font-size: 12px;
  text-transform: uppercase;
  cursor: pointer;
  outline: none;
`;

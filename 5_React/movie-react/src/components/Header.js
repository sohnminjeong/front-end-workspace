import styled from "styled-components";
const Nav = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Header = () => {
  return (
    <Nav>
      <a href="/">영화 목록</a>
      <a href="/create">영화 정보</a>
    </Nav>
  );
};
export default Header;

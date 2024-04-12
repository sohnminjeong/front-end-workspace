import { Outlet } from "react-router-dom";
import styled from "styled-components"; // npm i styled-components해야 사용 가능!

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  height: 70px;
  line-height: 70px;
  box-sizing: border-box;

  h1 {
    font-size: 3rem;
    margin-left: 15px;
  }

  nav {
    a {
      margin-right: 15px;
    }
  }
`;

const Layout = () => {
  return (
    <>
      <Header>
        {/* outlet : router.js에서 children에 넣은 element가  들어감_outlet 태그가 어디 들어가느냐에 따라 위치 다름 */}
        <h1>Animal</h1>
        <nav>
          <a href="/">목록</a>
          <a href="/create">추가</a>
        </nav>
      </Header>
      <Outlet />
    </>
  );
};
export default Layout;

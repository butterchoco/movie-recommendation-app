import "@fortawesome/fontawesome-free";
import styled from "styled-components";

const Header = styled.header`
  background-color: #222;
  display: flex;
  padding: 1rem;
  max-height: 64px;
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  color: #fff;

  &:hover {
    color: #aaa;
  }
`;

const Nav = () => {
  return (
    <Header>
      <Logo href="/">
        <i class="fab fa-accusoft"></i>
      </Logo>
    </Header>
  );
};

export default Nav;

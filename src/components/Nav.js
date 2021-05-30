import "@fortawesome/fontawesome-free";
import styled from "styled-components";

const Header = styled.header`
  background-color: #222;
  display: flex;
  padding: 1rem;
`;

const InputSearch = styled.input`
  background-color: #444;
  border: 0;
  padding: 5px 10px 5px 2rem;
  border-radius: 5px;
  outline: none;
  color: #999;
  font-size: 14px;
`;

const SearchWrapper = styled.div`
  position: relative;
`;

const Nav = () => {
  return (
    <Header>
      <SearchWrapper>
        <i
          className="fas fa-search"
          style={{
            position: "absolute",
            top: "50%",
            left: "10px",
            transform: "translateY(-50%)",
            color: "#666",
            fontWeight: "400",
            fontSize: "14px",
          }}
        ></i>
        <InputSearch placeholder="Mau nonton film apa ..." />
      </SearchWrapper>
    </Header>
  );
};

export default Nav;

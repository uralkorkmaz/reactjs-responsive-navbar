import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";

export const Nav = styled.nav`
  background-color: black;
`;

export const ToolBar = styled.div`
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  transition: all 0.3s linear;
  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? "300px" : "0px")};
  }
`;

export const Tab = styled.a`
  padding: 1rem 2rem;
  text-align: center;
  color: #00ffff;
  font-size: 20;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Logo = styled.a`
  display: inline-block;
  color: white;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
`;

export const Menu = styled(MenuIcon)`
  cursor: pointer;
  display: none !important;
  color: aqua;

  @media (max-width: 768px) {
    display: flex !important;
  }
`;

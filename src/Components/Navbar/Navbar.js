import {Menu} from "./Menu";
import {Logo} from "./Logo";
import styled from "styled-components";
import {Container} from "../Container/Container";

const NavbarStyled = styled.nav`
    position: relative;    
`

export const Navbar = () => (
    <NavbarStyled>
        <Container>
            <Menu />
            <Logo />
        </Container>
    </NavbarStyled>
)
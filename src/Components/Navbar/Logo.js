import styled from "styled-components";
import logo from "../../img/logo.png";

const LogoStyled = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 30px;
    left: 50%;
    margin-left: -78px; 
`

export const Logo = () => (
    <LogoStyled href="/">
        <img src={logo} alt="Простоквашино"/>
    </LogoStyled>
)
import styled from 'styled-components'
import {Navbar} from "../Navbar/Navbar";
import {MainScreen} from "../MainScreen/MainScreen";


const HeaderStyled = styled.header`
    height: 741px;
    background: linear-gradient(180deg, #2C2161 13.9%, rgba(0, 74, 152, 0) 88.94%);
`

export const Header = () => (
    <HeaderStyled>
        <Navbar />
        <MainScreen />
    </HeaderStyled>
)
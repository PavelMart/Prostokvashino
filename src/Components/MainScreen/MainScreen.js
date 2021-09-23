import styled from "styled-components";
import checkBtn from './../../img/check-btn.svg'
import bg from './../../img/header-bg.png'
import {Container} from "../Container/Container";

const MainScreenStyled = styled.section`
    padding-bottom: 350px;
    background-image: url('${bg}');
    background-repeat: no-repeat;
`

const H1 = styled.h1`
    font-weight: bold;
    font-size: 96px;
    line-height: 97.5%;
    color: #fff;
    margin-bottom: 16px;
`

const P = styled.p`
    font-weight: bold;
    font-size: 36px;
    line-height: 97.5%;
    text-transform: uppercase;
    color: #FFFFFF;
    margin-bottom: 50px;
`

const Button = styled.button`
    padding: 30px 40px 25px 25px;
    position: relative;
    background: #2B3B81;
    color: #fff;
    border: none;
    font-weight: bold;
    font-size: 28px;
    line-height: 32px;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    
    & img {
        margin-right: 30px;
    }
`

export const MainScreen = () => (
    <MainScreenStyled>
        <Container>
            <H1>Выиграй автомобиль</H1>
            <P>И другие крутые призы!</P>
            <Button>
                <img src={checkBtn} alt="Check"/>
                <span>Загрузить чек</span>
            </Button>
        </Container>
    </MainScreenStyled>
)
import styled from 'styled-components'
import arrow from './../../img/arrow.svg'

const MenuStyled = styled.div`
    padding-top: 65px;
    margin-bottom: 184px;
    display: flex;
    align-item: center;
    justify-content: space-between;
`

const MenuList = styled.ul`
    display: flex;
    align-items: center;
`

const MenuItem = styled.li`
    color: #fff;
    font-weight: bold;
    
    &.active {
        color: #37C2E7;
    }
    
    &:not(:last-child) {
        margin-right: 40px;
    }
    
    &:hover img{
        transform: rotate(0);
    }
`

const Arrow = styled.img`
    margin-left: 14px;
    transform: rotate(-90deg);
`

const EntryButton = () => (
    <MenuItem>
        <a style={{display:'flex', alignItems: 'center' }} href="#">
            <span>Личный кабинет</span>
            <Arrow src={arrow} alt="Стрелка"/>
        </a>
    </MenuItem>
)

const LeftMenu = () => (
    <MenuList>
        <MenuItem><a href="#">Главная</a></MenuItem>
        <MenuItem><a href="#">Правила</a></MenuItem>
        <MenuItem className="active"><a href="#">Призы</a></MenuItem>
        <MenuItem><a href="#">Продукты</a></MenuItem>
    </MenuList>
)

const RightMenu = () => (
    <MenuList>
        <MenuItem><a href="#">Победители</a></MenuItem>
        <MenuItem><a href="#">Вопрос-ответ</a></MenuItem>
        <EntryButton />
    </MenuList>
)

export const Menu = () => (
    <MenuStyled>
        <LeftMenu />
        <RightMenu />
    </MenuStyled>
)
import styled from "styled-components";

export const MainPageBody = styled.div`
        width:100%;
        height: max-content;
        display:flex;
        justify-content: center;
        flex-direction: column;
`

export const Wrapper = styled.div`
    width: 100%;
    background-color: black;
    padding: 10px;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const CardBody = styled.div`
       width: 90%;
       height: auto;
       gap: 30px;
       display: flex;
       justify-content: center;
       flex-wrap: wrap;
`

export const Card = styled.div`
    width: 25%;
    height:20rem;
    background-color: yellow;
    transition: all 350ms ease-in-out;

    &:hover{
        transform: scale(1.03);
        cursor: pointer;
    }

`

export const CardImageHolder = styled.div`
    width: 100%;
    height: 50%;
    background: blue;

    img{
        height:100%;
        width: 100%;
        object-fit: cover;
    }
    
`

export const CardText = styled.div`
    height: max-content;
    width: 100%;
    font-size: 18px;
    padding:7px;
`

export const CardDescription = styled.div`
    height:20%;
    width:100%;
    font-size: 17px;
    padding:7px;
    gap: 40px;
    overflow: hidden;
    white-space:nowrap;
    text-overflow: ellipsis;
`

export const CardIcons = styled.div`
    display: flex;
    height:max-content;

    span{
        width: max-content;
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 10px;
        align-items: center;
        font-size: 30px;
    }
`
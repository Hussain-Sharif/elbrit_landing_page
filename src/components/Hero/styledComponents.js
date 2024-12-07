import styled from 'styled-components'

export const HeroBg=styled.div`
    background-color:#E2F5FB;
    height:auto ;
    padding:10px;
    margin:15px;
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    padding-bottom:50px;
`
export const MainHeading=styled.h1`
    color:#003569;
    margin-top:30px;
    font-weight:bold;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size:40px; // 1st Mobile 
    @media screen and (min-width:481px){
        font-size:50px; // Tablet
    }
    @media screen and (min-width:769px){
        font-size:65px; // Small laptops
    }
    @media screen and (min-width:1024px){
        font-size:110px; // bigger Screens
    }
`

export const SpecialBg=styled.div`
    background-color:#FFE9B5;
    border-top-left-radius:80px;
    border-bottom-right-radius:80px;
    position:relative;
    // width:100px;
    z-index:0;
    width:210px;
    min-height:200px;
    height:230px;
    max-height:380px;
    @media screen and (min-width:768px){
        height:350px;
        width:auto;
        top:-20px;
        border-top-left-radius:180px;
    border-bottom-right-radius:180px;
    }
`


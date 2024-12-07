import styled from 'styled-components'

export const HeaderBg=styled.div`
    width:100%;
    padding-top:10px;
    padding-left:30px;
    img{
        width:160px; // 1st Mobile style
        @media screen and (min-width:767px){
            width:220px;
        }
    }
`
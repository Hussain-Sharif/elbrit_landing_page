
import styled from "styled-components";
import { ReUseDiv } from "../../reusableStyles";
export const Masonry=styled(ReUseDiv)`
  @media screen and (max-width:375px ){  //For most Smaller one 
    column-count:1;
  }

  @media screen and (min-width:576px){ // medium to large mobile
    column-count:2;
  }

  @media screen and (min-width:768px){ // tablets
    column-count:3;
  }

  @media screen and (min-width:992px){ // my lapi
    column-count:4;
  }
`

export const Item=styled(ReUseDiv)`
  width:100%;
  margin-bottom:16px;
`

export const DateTag=styled(ReUseDiv)`
  border-top-right-radius:20px;
  border-bottom-right-radius:20px;
  padding:10px;
  left:-10px;
  top:18px;
  position:relative;
`
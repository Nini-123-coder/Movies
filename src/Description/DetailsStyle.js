import styled from "styled-components";

export const Button = styled.button`
  width: 40%;
  height: 50px;
  background-color:yellow;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: none;
  border-radius: 2.5px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  font-size: 20px;
  cursor: pointer;
  transition: all 350ms ease-in;
  gap: 10px;

  &:hover{
    background: ${({Bg})=> (Bg ? "rgb(161, 161, 44)": "rgb(161, 161, 44)")};
  }
`

export const MovieDetailsDesc = styled.div`
   width:100%;
   /* height: 40%; */
   /* background: gold; */
   font-size: 25px;
   font-weight: 500;
   color: white;
`
export const MovieDetailsTitle = styled.div`
   width:100%;
   /* height: 40%; */
   /* background: gold; */
   font-size: 40px;
   font-weight: 900;
   color: yellow;
`
export const DetailsMovieDetails = styled.div`
   width:45%;
   height: 80%;
   /* background: gainsboro; */
   display: flex;
   flex-direction: column;
   justify-content: center;
   gap: 20px;
`
export const DetailsImg = styled.div`
   width:45%;
   height: 100%;
   /* background: gainsboro; */
   border-radius: 10px;
   box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;

   img{
      width: 100%;
      height: 100%;
      border-radius: 10px;
      background-size: cover;
   }
`
export const DetailsMainWrapperBody = styled.div`
   width: 95%;
   height:  90%;
   background: rgba(15, 15, 15, 0.329);
   border-radius: 10px;
   box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px;
   display: flex;
   align-items: center;
   justify-content: space-between;
   padding: 25px;
`
export const DetailsMainWrapper = styled.div`
   width: 100%;
   height:  89.5%;
   display: flex;
   align-items: center;
   justify-content: center;
`
export const DetailsMainBody = styled.div`
   width: 100%;
   height:  100vh;
   background-repeat: no-repeat;
   background-size: cover;
`


import styled from "styled-components"
import Bg from "..//assets/bg.jpg"

// export const Wrapper = styled.div`
//  `
export const PassInfo = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 6px;

  span {
    color: rgba(224, 215, 215, 0.968);
  }
 `
export const InputPasswordDiv = styled.div`
    display: flex;
    width: 100%;
    height: 60px;
    border: 1px solid gray;
    background-color: rgba(128, 128, 128, 0.375);
    color: white;
    outline: none;
    border-radius: 2px;
    align-items: center;
    gap: 10px;
 `
export const FormText = styled.div`
  color: lightgray;
  cursor: pointer;
  transition: all 350ms ease-in;
  display: flex;
  justify-content: flex-end;
  gap: 2px;

  &:hover{
    text-decoration: ${({hv})=> (hv ? "underline" : "none")};
  }
  

  span {
    color: red;
    
    &:hover{
    text-decoration: underline;
  }
  }
 `
export const Or = styled.div`
  width: 100%;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(229, 226, 226);
 `
export const Button = styled.button`
  width: 100%;
  height: 50px;
  background: ${({Bg}) => (Bg ? "yellow" : "rgba(162, 162, 162, 0.342)")};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border: none;
  border-radius: 2px;
  font-size: 20px;
  cursor: pointer;
  transition: all 350ms ease-in;
  gap: 10px;

  &:hover{
    background: ${({Bg})=> (Bg ? "rgb(161, 161, 44)": "rgb(161, 161, 44)")};
  }
`
export const Input = styled.input`
  width: ${({wd})=> (wd ? "100%" : "90%")};
  height: ${({hg})=> (hg ? "60px" : "90%")};
  border: ${({br})=> (br ? "1px solid gray" : "none")};
  background-color: ${({bg})=> (bg ? "rgba(128, 128, 128, 0.375)" : "transparent")};
  color: white;
  padding-left: 10px;
  outline: none;
  border-radius: 2px;
 `
export const TextHeader = styled.div`
  width: 100%;
  height: 10%;
  /* background-color: white; */
  padding: 20px;
  margin-bottom: 10px;

  h3 {
    font-size: 30px;
    color: white;
    font-weight: 500;
  }
 `
export const SignUpFrom = styled.div`
  width: 25%;
  height: 70%;
  background: rgba(0, 0, 0, 0.725);
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 15px;
 `
export const Header = styled.div`
    width: 100%;
    height: 100px;
    /* background-color: red; */
    display: flex;
    align-items: center;
    font-family: "Poppins", sans-serif;
    padding: 20px;
    font-size: 30px;
    gap: 10px;
    font-weight: 800;
    color: white;

    span {
      color: yellow;
    }
 `

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  flex-direction: column;
  /* background: #000; */
  background:linear-gradient(rgba(0, 0, 0, 0.432), rgba(0, 0, 0, 0.623)), url(${Bg});
  display: flex;
  /* justify-content: center; */
  align-items: center;
`
export const MainBody = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;

 `

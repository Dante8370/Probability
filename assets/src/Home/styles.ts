import styled from "styled-components/native";

export const Body = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
    align-items: flex-start;
    margin-bottom: 80px;
    margin-left: 10px;
`;



export const ContainerScreen = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  
`;



export const Head = styled.View`
  height: 20%;
  width: 100%;
  margin-bottom: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 0 0 50px 50px;
  flex-direction: row;
  margin-top: 30px;
`;

export const BoxBtnTheme = styled.View`
   height: 35px;
   width: 60px;
   background-color: #464646;
   align-items: center;
   justify-content: center;
   border-radius: 30px;
   left: -30px;
   top: -30px;
`;

export const BtnTheme = styled.TouchableOpacity`
   
`;

export const TextLogo = styled.Text`
  color: #fff;
  font-weight: 600;
  font-size: 32px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
  top: 10px;
  left: -20px;
`;

export const ScrollContainer = styled.ScrollView`
  width: 100%;
  flex: 1;
  margin-bottom: 60px;
 
`;

export const ContainerBtn = styled.View`
    flex-direction: row;
    margin-left: 5px;
`;

export const BoxBtn = styled.View`
 flex-direction: row;
 align-items: center;
 justify-content: center;
 margin: 10px;
 height: 190px;
 width: 150px;
 border-radius: 30px;
`;


export const NavBTN = styled.TouchableOpacity`
  margin: 30px;
  align-items: center;
  justify-content: center;
`;

export const BoxImage = styled.View`
  padding: 10px;
  border-radius: 30px;
`;

export const ImageIcon = styled.Image` 
 height: 40px;
 width: 40px;

`;

export const TextBtn = styled.Text`
  color: #fff;
  font-size: 15px;
`;
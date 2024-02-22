import  styled  from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    background: #00000F;
`;

export const Head = styled.View`
    height: 20%;
    width: 90%;
    background-color: #191A72;
    justify-content: center;
    align-items: center;
    border-radius: 0px 0px 40px 40px  ;
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
   left: -40px;
   top: -20px;
`;

export const BtnTheme = styled.TouchableOpacity`
   
`;

export const TextLogo = styled.Text`
    font-size: 34px;
    font-weight: bold;
    color: white;
    margin-top: 30px;
`;

export const Body = styled.View`
    width: 90%;
    height: 70%;
    align-items: center;  
    border-radius: 40px;
    margin-top: 20px;
`;

export const DisplayCalc = styled.View`
    margin-top: 100px;
    height: 30%;
    width: 90%;
    align-items: center;
    justify-content: center;
    background-color: #1A1E2E;
    border-radius: 20px;
`;

export const ViewNumb = styled.Text`
    display: flex;
`;

export const NumberOne = styled.TextInput`
    margin: 10px;
    border-radius: 20px;
    width: 60px;
    height: 40px;
    text-align: center;
`;

export const Division = styled.View`
    height: 1px;
    width: 60px;
`;

export const NumberTwo = styled.TextInput`
    margin: 10px;
    height: 40px;
    border-radius: 20px;
    text-align: center;
`;

export const BottomCalc = styled.TouchableOpacity`
    width: 80px;
    height: 40px;
    background-color: #191A72;
    align-items: center;
    justify-content: center;
    border-radius: 50px;
    margin-top: 0px;
`;

export const ResetButton = styled.TouchableOpacity`
  width: 80px;
  height: 40px;
  background-color: #191A72; /* Cor do botão */
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin-top: 10px; /* Ajuste conforme necessário */
`;
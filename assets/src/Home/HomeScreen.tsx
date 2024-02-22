import React, {useState} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Body, ContainerScreen, Head, BoxBtnTheme, BtnTheme, TextLogo, NavBTN, TextBtn, ImageIcon, BoxImage, BoxBtn, ContainerBtn } from './styles';




function HomeScreen({ navigation }: any) {
    const [isNightMode, setIsNightMode] = useState(true);





    const toggleTheme = () => {
        console.log("Before Toggle - isNightMode:", isNightMode);
        setIsNightMode(!isNightMode);
        console.log("After Toggle - isNightMode:", !isNightMode);
      };
      
    return (
        <ContainerScreen style={{ backgroundColor: !isNightMode ? '#fff' : '#141723'}}>
            
           
            <Head style = {{ backgroundColor: !isNightMode ? '#cab8b8' : '#191A72'}}>
                <BoxBtnTheme>
                    <BtnTheme onPress={toggleTheme} style={{right: isNightMode ? 20 : -17, top: 0 }}>
                        <Image
                        source={isNightMode ? require('../img/moon.png') : require('../img/sun.png')}
                        style={{ height: 30, width: 30, padding: 18 }}
                        />
                    </BtnTheme>
                </BoxBtnTheme>
                <TextLogo>PROBABILITY</TextLogo>
            </Head>
                <Body>
                    <ContainerBtn>
                        <BoxBtn style = {{ backgroundColor: !isNightMode ? '#ad9797' : '#1A1E2E'}}>
                            <NavBTN onPress={() => navigation.navigate('Arranjos')}>
                                <BoxImage style = {{ backgroundColor: !isNightMode ? '#ffff' : '#14192e'}}>
                                    <ImageIcon source={require('../../src/img/moon.png')} />
                                </BoxImage>
                                <TextBtn>Arranjos</TextBtn>
                            </NavBTN>
                        </BoxBtn>
                        <BoxBtn style = {{ backgroundColor: !isNightMode ? '#ad9797' : '#1A1E2E'}}>
                            <NavBTN onPress={() => navigation.navigate('Combination')}>
                                <BoxImage style = {{ backgroundColor: !isNightMode ? '#ffff' : '#14192e'}}>
                                    <ImageIcon source={require('../../src/img/sun.png')} />
                                </BoxImage>
                                <TextBtn>Combinação</TextBtn>
                            </NavBTN>
                        </BoxBtn>
                </ContainerBtn>
                   
                </Body>
        
                
           
        </ContainerScreen>
    );
}

export default HomeScreen;
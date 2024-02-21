import React, { useState, useRef } from 'react';
import { Text, View, Image, Animated, PanResponder, TouchableOpacity, TextInput } from 'react-native';

import {
  Container,
  Body,
  Head,
  BtnTheme,
  TextLogo,
  DisplayCalc,
  ViewNumb,
  NumberOne,
  NumberTwo,
  BottomCalc,
  Division,
  ResetButton
} from './Styled';


export default function App() {
  // Estado para controlar o modo noturno
  const [isNightMode, setIsNightMode] = useState(true);
  const [inputValueOne, setInputValueOne] = useState('');
  const [inputValueTwo, setInputValueTwo] = useState('');
  const [result, setResult] = useState(0);
  const resetValues = () => {
    setInputValueOne('');
    setInputValueTwo('');
    setResult(0);
  };

  // Ref para o PanResponder usado no deslize do botão
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        // Lógica para mover o botão durante o deslize
        animatedValue.setValue(gestureState.dx);
      },
      onPanResponderRelease: (_, gestureState) => {
        // Lógica ao soltar o botão
        if (gestureState.dx > 50) {
          // Lógica quando o deslize é suficiente para considerar uma ação
          toggleTheme();
        }
        // Reseta a posição do botão
        Animated.spring(animatedValue, { toValue: 0, useNativeDriver: false }).start();
      },
    })
  ).current;

  // Valor animado usado para mover o botão durante o deslize
  const animatedValue = useRef(new Animated.Value(0)).current;

  // Função para alternar entre os modos noturno e claro
  const toggleTheme = () => {
    setIsNightMode(!isNightMode);
  };

  const calculateResult = () => {
    const numberOne = parseFloat(inputValueOne) || 0;
    const numberTwo = parseFloat(inputValueTwo) || 0;
    const calculatedResult = parseFloat((numberOne / numberTwo).toFixed(3));
  
    setResult(calculatedResult * 100);
  };
  

  return (
   
    <Container style={{ backgroundColor: isNightMode ? '#070714' : '#bdb1b1' }}>
      <Head style={{ backgroundColor: isNightMode ? '#080922' : '#cab8b8' }}>
        <TextLogo style={{ color: isNightMode ? 'white' : 'black', left: 10 }}>Probability</TextLogo>
        <Animated.View
          {...panResponder.panHandlers}
          style={{
            transform: [{ translateX: animatedValue }],
          }}
        >
          <BtnTheme onPress={toggleTheme} style={{ height: 100, top: 10, left: 40}}>
            <Image
              source={isNightMode ? require('./assets/src/img/moon.png') : require('./assets/src/img/sun.png')}
              style={{ height: 30, width: 30, padding: 18 }}
            />
          </BtnTheme>
        </Animated.View>
      </Head>

      <Body style={{ backgroundColor: isNightMode ? '#141723' : '#cab8b8' }}>

        <DisplayCalc style={{ backgroundColor: isNightMode ? '#14192e' : '#ad9797' }}>
          <Text style={{ color: isNightMode ? 'white' : 'black' }}>{result}%</Text>
        </DisplayCalc>

        <View style = {{ alignItems: 'center'}}>
        <View style = {{ flexDirection: 'row', alignItems: 'center'}}>
          <NumberOne
            keyboardType='numeric'
            style={{ backgroundColor: isNightMode ? '#14192e' : '#ad9797',
            width: 80, alignItems: 'center', justifyContent: 'center' }}
            value={inputValueOne}
            onChangeText={(text) => setInputValueOne(text)}
          />
          
          </View>

          <Division style={{ backgroundColor: isNightMode ? '#ffffff' : '#000000', width: 80 }}></Division>

          <View style = {{ flexDirection: 'row', alignItems: 'center'}}>
          <NumberTwo
            keyboardType='numeric'
            style={{ backgroundColor: isNightMode ? '#14192e' : '#ad9797', width: 80 }}
            value={inputValueTwo}
            onChangeText={(text) => setInputValueTwo(text)}
          />
          </View>

        </View>
          <View style= {{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <BottomCalc style={{ backgroundColor: isNightMode ? '#14192e' : '#ad9797', width: 80, marginRight: 20 }} onPress={calculateResult}>
          <Text style={{ color: isNightMode ? 'white' : 'black' }}>Calcular</Text>
        </BottomCalc>
        <ResetButton style={{ backgroundColor: isNightMode ? '#14192e' : '#ad9797', width: 80 }} onPress={resetValues}>
          <Text style={{ color: isNightMode ? 'white' : 'black' }}>Resetar</Text>
        </ResetButton>
        </View>
      </Body>
    </Container>

  );
}

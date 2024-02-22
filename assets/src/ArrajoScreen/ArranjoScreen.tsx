import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';

import {
  Container,
  Body,
  Head,
  BtnTheme,
  TextLogo,
  DisplayCalc,
  NumberOne,
  NumberTwo,
  BottomCalc,
  ResetButton,
  BoxBtnTheme,
  Division,
} from './styles';

export default function ArranjoScreen() {
  // Estado para controlar o modo noturno
  const [isNightMode, setIsNightMode] = useState(true);
  const [inputValueOne, setInputValueOne] = useState('');
  const [inputValueTwo, setInputValueTwo] = useState('');
  const [result, setResult] = useState<number | string>(0); // Definindo tipo para o resultado

  const resetValues = () => {
    setInputValueOne('');
    setInputValueTwo('');
    setResult(0);
  };

  // Função para alternar entre os modos noturno e claro
  const toggleTheme = () => {
    setIsNightMode((prevMode) => !prevMode);
  };

  // Função para calcular o fatorial de um número
  const calcularFatorial = (n: number): number => {
    if (n === 1 || n === 0) {
      return 1;
    } else {
      return n * calcularFatorial(n - 1);
    }
  };

  // Função para calcular arranjos simples
  const calcularArranjo = () => {
    const n = Number(inputValueOne);
    const p = Number(inputValueTwo);
  
    if (!isNaN(n) && !isNaN(p) && n >= 0 && p >= 0) {
      const nMenosP = n - p;
      
      if (nMenosP >= 0) {
        const nFatorial = calcularFatorial(n);
        const nMenosPFatorial = calcularFatorial(nMenosP);
        const arranjo = nFatorial / nMenosPFatorial;
        setResult(arranjo);  // Atualize o estado com o resultado
      } else {
        setResult('O valor de P não pode ser maior que N.');
      }
    } else {
      setResult('Por favor, insira valores válidos para N e P.');
    }
  };
  return (
    <Container style={{ backgroundColor: isNightMode ? '#070714' : '#bdb1b1' }}>
      <Head style={{ backgroundColor: isNightMode ? '#080922' : '#cab8b8' }}>
        <BoxBtnTheme>
          <BtnTheme onPress={toggleTheme} style={{ right: isNightMode ? 20 : -17, top: 0 }}>
            <Image
              source={isNightMode ? require('../img/moon.png') : require('../img/sun.png')}
              style={{ height: 30, width: 30, padding: 18 }}
            />
          </BtnTheme>
        </BoxBtnTheme>

        <TextLogo style={{ color: isNightMode ? 'white' : 'black', right: 15, top: -10 }}>Arranjo</TextLogo>

      </Head>

      <Body style={{ backgroundColor: isNightMode ? '#141723' : '#cab8b8' }}>
        <DisplayCalc style={{ backgroundColor: isNightMode ? '#14192e' : '#ad9797' }}>
          <Text style={{ color: isNightMode ? 'white' : 'black' }}>{result}</Text>
        </DisplayCalc>

        <View style={{ alignItems: 'center' }}>
          <Text id='NumberOne' style={{ color: isNightMode ? 'white' : 'black', marginTop: 10 }}>Digite o N! da fórmula!</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <NumberOne
              keyboardType='numeric'
              style={{
                backgroundColor: isNightMode ? '#14192e' : '#ad9797',
                width: 80, alignItems: 'center', justifyContent: 'center', color: isNightMode ? '#fff' : '#222'
              }}
              id='NumberOne'
              value={inputValueOne}
              onChangeText={(text) => setInputValueOne(text)}
            />
          </View>

          <Division style={{ backgroundColor: isNightMode ? '#ffffff' : '#000000', width: 80 }}></Division>

          <Text id='NumberTwo' style={{ color: isNightMode ? 'white' : 'black', marginTop: 10 }} >Digite o P! da fórmula!</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <NumberTwo
              keyboardType='numeric'
              style={{
                backgroundColor: isNightMode ? '#14192e' : '#ad9797',
                width: 80, alignItems: 'center', justifyContent: 'center', color: isNightMode ? '#fff' : '#222'
              }}
              id='NumberTwo'
              value={inputValueTwo}
              onChangeText={(text) => setInputValueTwo(text)}
            />
          </View>

        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
          <BottomCalc
            style={{ backgroundColor: isNightMode ? '#14192e' : '#ad9797', width: 80, marginRight: 20 }}
            onPress={calcularArranjo}
          >
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


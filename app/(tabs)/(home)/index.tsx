import Title from '@/components/Title'
import { Colors } from '@/constants/Colors'
import { randomData } from '@/constants/Phrases'
import React, { useEffect, useState } from 'react'
import { Image, SafeAreaView, ScrollView, Text, View } from 'react-native'

const HomeScreen = () => {

  const [quote, setQuote] = useState("");

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * randomData.length);
    setQuote(randomData[randomIndex]);
  }, []); // 


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.light.background, paddingTop: 32 }}>
      <ScrollView>
        <Title text='Bienvenido al camino de los pergaminos 🪄' />
        <View style={{
          marginHorizontal: 24,
        }}>
          <Text style={{
            color: Colors.light.text,
            fontFamily: 'SpaceMono',
            fontSize: 16,
            textAlign: 'center',
          }}>Acá podras subir y descargar archivos en formato de pergaminos, facilitando el almacenamiento y visualización de documentos de manera rápida y sencilla."</Text>
        </View>

        <Image
          source={require('@/assets/images/Confuscious.gif')}
          style={{ marginTop: 52, width: 220, height: 220, alignSelf: 'center' }}
        />
        <View style={{
          marginHorizontal: 24,
        }}>
          <Text style={{
            marginTop: 24,
            color: Colors.light.text,
            fontFamily: 'SpaceMono',
            fontSize: 24,
            textAlign: 'center',
          }}>{quote}</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

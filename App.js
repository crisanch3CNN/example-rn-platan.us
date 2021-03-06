import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { Text, TextInput, View, SafeAreaView, Button, Alert, ActivityIndicator } from 'react-native';
import tailwind from 'tailwind-rn';
import useFetchAge from './useFetchAge';


export default function App() {

  const [value, setValue] = useState('');
  const { age, fetchAge, loalding } = useFetchAge();

  return (
    <SafeAreaView style={tailwind('bg-black flex-1')}>
      <View style={tailwind('flex-1 p-4')}>
        <View style={tailwind('flex-row items-center')}>
          <TextInput
            value={value}
            onChangeText={(newValue) => { setValue(newValue) }}
            style={tailwind('bg-gray-100 p-4 flex-1 mr-2')}
          />
          <Button title="Calcular" onPress={() => fetchAge(value)} />
        </View>
        <Text style={tailwind('text-white mt-2')} >Tu edad aproximada es ....</Text>
        {!loalding && (
          <Text style={tailwind('text-white text-lg')}>{age}</Text>
        )}
        {loalding && (
          <ActivityIndicator size="large" style={tailwind('mt-2')} />
        )}


        <StatusBar style="light" />
      </View>
    </SafeAreaView>
  );
}

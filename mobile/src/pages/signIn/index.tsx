import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import api from '../../config/api';
import {Input, Button} from './styles';

const SignIn = () => {
  const path = '/users';
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');

  const navigation = useNavigation();

  function handleRedirect() {
    api
      .post(path, {name: inputName, email: inputEmail})
      .then((response) => {
        console.log(`inputName -> ${inputName} | inputEmail -> ${inputEmail}`);
        navigation.navigate('Welcome', {id: response.data.id});
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <Input
        placeholder="Nome"
        onChangeText={(T) => {
          setInputName(T);
        }}
      />
      <Input
        placeholder="E-mail"
        onChangeText={(T) => {
          setInputEmail(T);
        }}
      />
      <Button onPress={handleRedirect}>Entrar</Button>
    </>
  );
};

export default SignIn;

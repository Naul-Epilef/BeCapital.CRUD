import React, {useEffect, useState} from 'react';
import {useRoute} from '@react-navigation/native';
import {Text} from 'react-native';

import api from '../../config/api';

interface Router {
  key: string;
  name: string;
  params: {
    id: string;
  };
}

const Welcome = () => {
  const {params} = useRoute<Router>();
  const path = `/users/${params.id}`;
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    created_at: '',
  });

  useEffect(() => {
    api
      .get(path)
      .then((response) => {
        console.log(response.data);
        setUser(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Text style={{color: 'white'}}>
      Olá {user.name} | {user.email}
    </Text>
  );
};

export default Welcome;

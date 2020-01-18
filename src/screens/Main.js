import React, { useCallback, useEffect } from 'react';
import{View, Image} from 'react-native';

import logo from '../../assets/images/logo.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import api from '../store/api';

export default ({navigation: {getParam, navigate}}) => {
    
    const id = getParam('id';)
    const onLogout = useCallback( () => {
        navigate('login');
    }, [navigate]);

    const loadUsers = useCallback( async () => {
       const {data} = await api.get('/devs',{
           headers:{
               user: id,
           },
       })
       setUsers()
    },[id]);

    useEffect (() => {
       loadUsers(); 
    },[loadUsers])
    return (
        <View style={{
            flex:1,
            alignItems:'center',
            justifyContent:'space-between',
            backgroundColor:'#f5f5f5',
        }}>
            <TouchableOpacity onPress={onLogout}>
                <Image source={logo} />
            </TouchableOpacity>
            <View
            style={{
                borderWidth:1,
                borderColor:'#ddd',
                borderRadius:8,
                margin:30,
            }}>
            <Image
                style={{
                    height:300,
                    width:300,
                }}
                source={null}
                />
            </View>
        </View>
        
    ) 
}
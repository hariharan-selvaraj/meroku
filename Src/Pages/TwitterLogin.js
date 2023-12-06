
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import Toast from 'react-native-simple-toast';

const TwitterLogin = ({ navigation }) => {

    const Login = () => {
        Toast.show("Logged In Successfully", Toast.LONG);
        navigation.navigate('HomeScreen')
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.containernew} onPress={() => Login()}>
                <Icons size={29}
                    color="black"
                    name="twitter" style={{}} />
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18, marginLeft: 10 }}>Sign in with Twitter</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containernew: {
        width: '65%',
        height: '7%',
        backgroundColor: '#abdbe3',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 1
    },
});

export default TwitterLogin;
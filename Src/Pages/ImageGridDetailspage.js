import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

const DetailScreen = ({ navigation, route }) => {
    const [ImageList, setImageList] = useState(route.params?.item);

    useEffect(() => {
        console.log("ImageList ==> ", ImageList)
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View style={{
                    height: '8%', alignItems: 'center', marginLeft: 10,
                    flexDirection: 'row'
                }}>
                    <TouchableOpacity onPress={() => navigation.pop()}>
                        <Icons size={30}
                            color="darkblue"
                            name="arrow-left-circle" style={{}} />
                    </TouchableOpacity>
                    <Text style={styles.title}>{ImageList.title}</Text>
                </View>
                <FastImage style={styles.image} source={{ uri: ImageList.imageUrl }} />
                <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10, marginLeft: 10 }}>
                    <Icons size={20}
                        color="darkblue"
                        name="account-circle" style={{}} />
                    <Text style={{ color: 'darkblue', fontSize: 15, fontWeight: 'bold', marginLeft: 5 }}>{ImageList.name}</Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    image: {
        width: '100%',
        aspectRatio: 1,
        resizeMode: 'cover'
    },
    title: {
        color: 'darkblue',
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 20
    },
});

export default DetailScreen;
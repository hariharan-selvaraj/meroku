import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'

const data = [
    { id: '1', imageUrl: 'https://i.imgur.com/GBoigh1.jpeg', title: 'Bloom', name: 'Hari' },
    { id: '2', imageUrl: 'https://e7.pngegg.com/pngimages/892/273/png-clipart-social-media-marketing-website-development-digital-marketing-online-advertising-social-media-web-design-text.png', title: 'Social Images', name: 'Kumar' },
    { id: '3', imageUrl: 'https://images.pexels.com/photos/18738369/pexels-photo-18738369/free-photo-of-tiny-fireworks.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', title: 'Crackling', name: 'Vinoth' },
    { id: '4', imageUrl: 'https://images.pexels.com/photos/250177/pexels-photo-250177.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Christmas', name: 'Srini' },
    { id: '5', imageUrl: 'https://images.pexels.com/photos/1552104/pexels-photo-1552104.jpeg?auto=compress&cs=tinysrgb&w=300', title: 'Work Out', name: 'Jeeva' },
    { id: '6', imageUrl: 'https://images.pexels.com/photos/2393835/pexels-photo-2393835.jpeg?auto=compress&cs=tinysrgb&w=400', title: 'Bike', name: 'Manoj' },
    { id: '7', imageUrl: 'https://images.pexels.com/photos/9153468/pexels-photo-9153468.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Sports', name: 'Ramesh' },
    { id: '8', imageUrl: 'https://images.pexels.com/photos/247819/pexels-photo-247819.jpeg?auto=compress&cs=tinysrgb&w=600', title: 'Learning', name: 'Bala' },
    // Add more data as needed
];

const HomeScreen = ({ navigation }) => {
    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('DetailScreen', { item })}>
            <FastImage style={styles.image} source={{ uri: item.imageUrl }} />
            <Text style={styles.title}>{item.title}</Text>
            <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 10, marginLeft: 10 }}>
                <Icons size={20}
                    color="darkblue"
                    name="account-circle" style={{}} />
                <Text style={{ color: 'darkblue', fontSize: 15, fontWeight: 'bold', marginLeft: 5 }}>{item.name}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headertext}>Welcome To Posts</Text>
            </View>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                numColumns={2}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 5,
        backgroundColor: 'white'
    },
    header: {
        width: '100%', height: '8%', justifyContent: 'center', alignItems: 'center'
    },
    headertext: {
        color: 'darkblue', fontWeight: 'bold', fontSize: 20
    },
    itemContainer: {
        flex: 1,
        margin: 8,
        borderRadius: 8,
        overflow: 'hidden',
        borderWidth: 0.5,
        borderColor: 'black'
    },
    image: {
        width: '100%',
        aspectRatio : 1,
        resizeMode : 'contain'
    },
    title: {
        padding: 8,
        textAlign: 'center',
        color: 'darkblue',
        fontWeight: 'bold',
        fontSize: 15
    },
});

export default HomeScreen;
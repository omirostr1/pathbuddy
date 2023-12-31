import { React, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Modal } from "react-native";
import { globalColors } from "../colors";
import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('screen');

const Post = ({ profilepic, firstName, lastName, path, caption, image, timeposted, username }) => {

    const navigation = useNavigation();
    const toggleModal = () => {
        navigation.navigate('ImageFullScreen', {image: image});
    };

    const togglePress = () => {
        if (path==='true') {
            navigation.navigate('PathProfile', {image: profilepic, firstName: firstName, lastName: lastName, username: username});
        } else {
            navigation.navigate('BuddyProfile', {image: profilepic, firstName: firstName, lastName: lastName, username: username})
        }
    };

    return (
        <View style={styles.post}>
            <View style={{flexDirection: 'row'}}>
                <View style={{flexDirection: 'column'}}>
                    <TouchableOpacity style={{flexDirection: 'row'}} onPress={togglePress}>
                        <Image source={profilepic} style={styles.image}/>
                        <Text style={styles.firstandlastnames}>{firstName +' '+ lastName}</Text>
                        {path==='true' ? <Entypo name="graduation-cap" size={24} color={globalColors.orange.title.colour} /> : null}
                    </TouchableOpacity>
                    <Text style={styles.time}>{timeposted}</Text>
                </View>
            </View>
            <Text style={{marginTop: 12}}>{caption}</Text>
            <TouchableOpacity onPress={toggleModal} >
                <Image source={image} style={styles.postimage}/>
            </TouchableOpacity>
        </View>
    )};

const styles = StyleSheet.create({
    post: {
        marginLeft: 20,
        marginRight: 20,
        borderBottomWidth: 2,
        borderBottomColor: globalColors.grey.postborder.colour,
        marginTop: 10
    },
    image: {
        height: 35,
        width: 35,
        borderColor: globalColors.orange.background.colour,
        borderWidth: 2,
        borderRadius: 50
    },
    postimage: {
        height: 235,
        marginTop: 10,
        width: width - 40,
        marginBottom: 26,
        resizeMode: 'contain'
    },
    time: {
        marginTop: -10,
        fontSize: 11,
        color: globalColors.grey.profilepupil.colour,
        marginLeft: 47
    },
    firstandlastnames: {
        fontSize: 16,
        fontWeight: '600',
        marginRight: 4,
        marginLeft: 13
    },
})

export default Post;
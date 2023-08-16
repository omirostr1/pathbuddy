import { React, useState } from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import { globalColors } from "../colors";
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import BottomBar from '../components/BottomBar';
import { Feather, Ionicons } from '@expo/vector-icons';
import EditBioAndUni from '../modals/EditBioAndUni';
import EditProfilePic from '../modals/EditProfilePic'

const { width } = Dimensions.get('screen');

export default function MyProfile() {

    const navigation = useNavigation();
    let firstname = user.firstname
    let lastname = user.lastname
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisible2, setModalVisible2] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
      };
    const toggleModal2 = () => {
        setModalVisible2(!isModalVisible2);
    };
    const handleBuddies = () => {
        navigation.navigate('BuddyProfile')
      };
    const handlePaths = () => {
        navigation.navigate('PathProfile')
    };

    return(

        <View style={styles.bigbox}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backarrow}>
                <Ionicons name="arrow-back" size={24} colour={globalColors.maincolors.black.color}/>
            </TouchableOpacity>
            <View style={styles.titlebox}>
                <Text style={styles.titletext}>{firstname +' '+ lastname}</Text>
            </View>
            <View style={styles.settings}>
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                <Feather name="settings" size={24} colour={globalColors.maincolors.black.color}/>
            </TouchableOpacity>
            </View>
            <View style={styles.profileinfo}>
                <Image source={user.image} style={styles.image}/>
                <View style={styles.userinfo}>
                    <Text style={styles.firstandlastnames}>{firstname +' '+ lastname}</Text>
                    <View style={styles.uniinfo}>
                        {user.uni && <Text style={styles.pupiltext}>Pupil at: </Text>}
                        {user.uni && <Text style={styles.unitext}>@{user.uni}</Text>}
                    </View>
                    {user.bio && <Text style={styles.biotext}>{user.bio}</Text>}
                </View>
            </View>
            <View style={styles.friendsinfo}>
                <TouchableOpacity style={styles.button1} onPress={handleBuddies}>
                    <Text style={styles.buttontext}>Buddies</Text>
                    <Text style={styles.number}>{user.buddies}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2} onPress={handlePaths}>
                    <Text style={styles.buttontext}>Paths</Text>
                    <Text style={styles.number}>{user.paths}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.friendsinfo}>
                <TouchableOpacity style={styles.editprofileuni} onPress={toggleModal}>
                <EditBioAndUni isVisible={isModalVisible} toggleModal={toggleModal} />
                    <Text style={styles.editprofileunitext}>Edit uni or bio</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.editprofilepic} onPress={toggleModal2}>
                <EditProfilePic isVisible={isModalVisible2} toggleModal={toggleModal2} />
                    <Text style={styles.editprofilepictext}>Edit profile picture</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.postsbox}>
                <Text style={styles.poststext}>Posts</Text>
            </View>
            <View style={styles.bottombar}>
                {isModalVisible ? null : <BottomBar activeRoute={'MyProfile'} />}
            </View>
        </View>
    )
};

const styles = StyleSheet.create ({
    bigbox: {
        flex: 1,
        backgroundColor: globalColors.maincolors.white.colour,
        //marginTop: 324,
        marginBottom: 0 
      },
    bottombar: {
        position: 'absolute',
        bottom: 0,
        justifyContent: 'center',
        height: 70,
        borderTopColor: globalColors.grey.greyborder.colour,
        borderTopWidth: 2,
        width: width
    },
    settings: {
        position: 'absolute',
        alignItems: 'flex-end',
        right: 24,
        marginTop: 45
    },
    titlebox: {
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 45
    },
    titletext:{
        fontSize: 20,
        color: globalColors.orange.title.colour,
        textAlign: 'center'
    },
    backarrow: {
        left: 20,
        marginTop: 45
    },
    profileinfo: {
        marginTop: 40,
        marginLeft: 37,
        flexDirection: 'row'
    },
    image: {
        height: 92,
        width: 92,
        borderColor: globalColors.orange.background.colour,
        borderWidth: 2,
        borderRadius: 50
    },
    userinfo: {
        marginLeft: 13,
    },
    firstandlastnames: {
        fontSize: 19,
        fontWeight: '700',
    },
    uniinfo: {
        flexDirection: 'row', 
        marginTop: 8
    },
    unitext: {
        fontWeight: '600'
    },
    biotext: {
        fontSize: 13,
        marginTop: 8
    },
    pupiltext: {
        color: globalColors.grey.profilepupil.colour
    },
    friendsinfo: {
        marginTop: 50,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    buttontext: {
        fontSize: 14,
        color: globalColors.grey.buttontext.colour,
        textAlign: 'center'
    },
    number: {
        fontSize: 20,
        fontWeight: '600',
        alignSelf: 'center'
    },
    button1: {
        width:100,
    },
    button2: {
        width:100,
        marginLeft: 45
    },
    editprofileuni: {
        backgroundColor: globalColors.orange.background.colour,
        height: 45,
        width: 100,
        borderRadius: 10,
    },
    editprofileunitext: {
        color: globalColors.maincolors.white.colour,
        fontSize: 14,
        textAlign: 'center',
        paddingTop: 10,
    },
    editprofilepic: {
        marginLeft: 15,
        backgroundColor: globalColors.grey.buttonchangeimage.colour,
        height: 45,
        width: 150,
        borderRadius: 10,
    },
    editprofilepictext: {
        color: globalColors.maincolors.black.colour,
        textAlign: 'center',
        paddingTop: 10
    },
    postsbox: {
        marginTop: 30,
        height: 40,
        borderBottomColor: globalColors.orange.background.colour,
        borderColor: globalColors.maincolors.white.color,
        borderBottomWidth: 2,
    },
    poststext: {
        color: globalColors.orange.background.colour,
        fontSize: 15,
        fontWeight: '500',
        textAlign: 'center',
        paddingBottom: 11
    }
})

const user = {
    image: require('../assets/no-profile-picture-icon-18.jpg'),
    firstname: 'Hossein',
    lastname: 'Darda',
    uni: 'geia',
    bio: 'eimai vlaks',
    buddies: 50,
    paths: 7
}
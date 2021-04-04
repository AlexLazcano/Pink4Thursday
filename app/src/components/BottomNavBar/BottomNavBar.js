import * as React from 'react';
import { Button , Text } from 'react-native';
import { BottomNavigation } from 'react-native-paper';
import firebase from 'firebase'

import * as Styles from './styles';
import RecentActivity from '../RecentActivity/RecentActivity';
import ActiveDiscussion from '../ActiveDiscussion/ActiveDiscussion';
import ProfileComponent from '../ProfileComponent/ProfileComponent';

onLogout = () => {
    firebase.auth().signOut()
}


const CommunityRoute = () => {
    return (
        <Styles.CenteredView>
            <Styles.TempPageText>CommunityRoute</Styles.TempPageText>
            <RecentActivity User="Alex" Reaction="Respect"></RecentActivity>
            <ActiveDiscussion 
            title="Post Title"
            time="30 minutes"
            text="Amet minim mollit non deserunt ullamco 
            est sit aliqua dolor do amet sint."
            author="Alexis Lazcano"/>
            
           
        </Styles.CenteredView>
    );
}

const ProfileRoute = () => {
    return (
        <Styles.CenteredView>
            {/* <Styles.TempPageText>ProfileRoute</Styles.TempPageText> */}
            <ProfileComponent isPro={true}/>
        </Styles.CenteredView>
    );
}
const SettingsRoute = () => {
    return (
        <Styles.CenteredView>
            <Styles.TempPageText>SettingsRoute</Styles.TempPageText>
            <Button title="Logout" onPress={onLogout}/>
        </Styles.CenteredView>
    );
}

const BottomNavBar = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'community', title: 'Community', color: '#E43090' },
        { key: 'profile', title: 'Profile' },
        { key: 'settings', title: 'Settings' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        community: CommunityRoute,
        profile: ProfileRoute,
        settings: SettingsRoute,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={ setIndex }
            renderScene={ renderScene }
            activeColor={ Styles.ActiveIconColor }
            inactiveColor={ Styles.InactiveIconColor }
            barStyle={{ backgroundColor:  Styles.BackgroundColor }}
        />
    )
}

export default BottomNavBar;
import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import { ActiveIconColor, InactiveIconColor, BackgroundColor } from './styles';

import Landing from "../../screens/Landing/Landing";

const CommunityRoute = () => <Landing />
const ProfileRoute = () => <Text>Profile</Text>
const SettingsRoute = () => <Text>Settings</Text>

const BottomNavBar = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'community', title: 'Community', icon: '#', color: '#E43090' },
        { key: 'profile', title: 'Profile', icon: '#' },
        { key: 'settings', title: 'Settings', icon: '#' },
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
            activeColor={ ActiveIconColor }
            inactiveColor={ InactiveIconColor }
            barStyle={{ backgroundColor:  BackgroundColor }}
        />
    );
}

export default BottomNavBar;

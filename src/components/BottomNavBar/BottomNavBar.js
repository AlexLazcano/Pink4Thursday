import * as React from 'react';
import { BottomNavigation } from 'react-native-paper';

import * as Styles from './styles';

const CommunityRoute = () => {
    return (
        <Styles.CenteredView>
            <Styles.TempPageText>CommunityRoute</Styles.TempPageText>
        </Styles.CenteredView>
    );
}

const ProfileRoute = () => {
    return (
        <Styles.CenteredView>
            <Styles.TempPageText>ProfileRoute</Styles.TempPageText>
        </Styles.CenteredView>
    );
}
const SettingsRoute = () => {
    return (
        <Styles.CenteredView>
            <Styles.TempPageText>SettingsRoute</Styles.TempPageText>
        </Styles.CenteredView>
    );
}

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
            activeColor={ Styles.ActiveIconColor }
            inactiveColor={ Styles.InactiveIconColor }
            barStyle={{ backgroundColor:  Styles.BackgroundColor }}
        />
    )
}

export default BottomNavBar;
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import AboutStack from './AboutStack/AboutStack';
import getHeaderTitle from './headerTitles';

const Tabs = createBottomTabNavigator();

const Navigation = () => {
	return (
		<NavigationContainer>
			<Tabs.Navigator>
				<Tabs.Screen
					name="Home"
					component={Home}
					options={({ route }) => ({
						headerTitle: getHeaderTitle(route),
						headerTitleAlign: 'center'
					})}
				/>
				<Tabs.Screen
					name="AboutStack"
					component={AboutStack}
					options={({ route }) => ({
						headerTitle: getHeaderTitle(route),
						headerTitleAlign: 'center',
						headerBackButtonMenuEnabled: false,
						headerShown: false
					})}
				/>
			</Tabs.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import AboutStack from './AboutStack/AboutStack';

const Tabs = createBottomTabNavigator();

const Navigation = () => {
	return (
		<NavigationContainer>
			<Tabs.Navigator>
				<Tabs.Screen name="Home" component={Home} />
				<Tabs.Screen name="AboutStack" component={AboutStack} options={{ title: 'About' }} />
			</Tabs.Navigator>
		</NavigationContainer>
	);
};

export default Navigation;

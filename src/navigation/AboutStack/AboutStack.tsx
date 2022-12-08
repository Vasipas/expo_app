import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../../screens/About/About';
import Feed from '../../screens/Feed';

const Stack = createNativeStackNavigator();

const AboutStack = () => (
	<Stack.Navigator>
		<Stack.Screen name="About" component={About} />
		<Stack.Screen name="Feed" component={Feed} />
	</Stack.Navigator>
);

export default AboutStack;

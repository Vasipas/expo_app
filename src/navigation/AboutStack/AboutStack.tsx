import { createNativeStackNavigator } from '@react-navigation/native-stack';
import About from '../../screens/About/About';
import Feed from '../../screens/Feed';
import { RootStackParamList } from '../types';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AboutStack = () => (
	<Stack.Navigator>
		<Stack.Screen name="About" component={About} />
		<Stack.Screen name="Feed" component={Feed} initialParams={{ someParam: 'initial string' }} />
	</Stack.Navigator>
);

export default AboutStack;

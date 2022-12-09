import { FC } from 'react';
import { Button, Text, View } from 'react-native';
import { TAboutPropsDetails } from './types';

const About: FC<TAboutPropsDetails> = ({ route, navigation }) => {
	return (
		<View>
			<Button
				onPress={() => navigation.navigate('Feed', { someParam: 'some param string' })}
				title="Go to Feed"
			/>
			<Text>About Page</Text>
		</View>
	);
};

export default About;

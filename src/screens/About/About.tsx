import { FC, useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from './styles';
import { TAboutPropsDetails } from './types';

const About: FC<TAboutPropsDetails> = ({ route, navigation }) => {
	console.log(route);
	return (
		<View style={styles.container}>
			<Button
				onPress={() => navigation.navigate('Feed', { someParam: 'some param string' })}
				title="Go to Feed"
			/>

			<Button
				onPress={() => navigation.setOptions({'headerStyle': {backgroundColor: 'yellow'}})}
				title="Change header color"
			/>
			<Text>About Page</Text>
		</View>
	);
};

export default About;

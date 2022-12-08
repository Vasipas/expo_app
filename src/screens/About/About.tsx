import { FC } from 'react';
import { Button, Text, View } from 'react-native';

type TAboutProps = {
	navigation: any;
};

const About: FC<TAboutProps> = ({ navigation }) => {
	return (
		<View>
			<Button onPress={() => navigation.navigate('Feed')} title="Go to Feed" />
			<Text>About Page</Text>
		</View>
	);
};

export default About;

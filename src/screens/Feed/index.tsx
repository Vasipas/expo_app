import { FC } from 'react';
import { Text, View } from 'react-native';
import { TFeedProps } from '../../navigation/types';

const Feed: FC<TFeedProps> = ({ route, navigation }) => (
	<View>
		<Text>Feed Page</Text>
		<Text>{route.params?.someParam || 'no data'}</Text>
	</View>
);

export default Feed;

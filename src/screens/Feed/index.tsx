import { FC } from 'react';
import { Text, View } from 'react-native';
import { TFeedProps } from '../../navigation/types';
import { styles } from './styles';

const Feed: FC<TFeedProps> = ({ route, navigation }) => (
	<View style={styles.container}>
		<Text>Feed Page</Text>
		<Text>{route.params?.someParam || 'no data'}</Text>
	</View>
);

export default Feed;

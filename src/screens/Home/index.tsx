import React, { FC } from 'react';
import { Text, View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getMessage } from '../../redux/reducers/Users/selectors';
import { showHelloWorld } from '../../redux/reducers/Users/reducer';
import { styles } from './styles';
import { THomePropsDetails } from './types';

const Home: FC<THomePropsDetails> = ({ navigation }) => {
	const dispatch = useDispatch();
	const message = useSelector(getMessage);

	const handleChangeMessage = () => {
		dispatch(showHelloWorld());
	};

	return (
		<View style={styles.layout}>
			<Text>{message}</Text>
			<Button title="change message" onPress={handleChangeMessage} />
		</View>
	);
};

export default React.memo(Home);

import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export type RootStackParamList = {
    Home: undefined;
    Feed: { someParam: string } | undefined;
    About: undefined;
};

export type TFeedProps = NativeStackScreenProps<RootStackParamList, 'Feed'>;

export type TAboutProps = NativeStackScreenProps<RootStackParamList, 'About'>;

export type THomeNavigationProp = BottomTabNavigationProp<RootStackParamList, 'Home'>;
import {CompositeNavigationProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Private} from '@/screens';

export type BottomTabsTypes = {
  Feeds: undefined;
};

type PrivateScreens = {
  [key in keyof typeof Private]: undefined;
};

type OmittedScreens = any // add your props screen like ex : | Home | Products | Category   etc.

export type PrivateNavigationProp = Omit<PrivateScreens, OmittedScreens> & {
// Your screens with required props
};

export type PrivateRoutesTypes = {
  BottomTab: undefined;
} & PrivateNavigationProp;

export type PrivateScreenProps = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabsTypes>,
  NativeStackNavigationProp<PrivateRoutesTypes>
>;
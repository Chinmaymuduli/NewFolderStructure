import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Auth, Public} from '@/screens';

export type PublicRoutesTypes = {
  [key in keyof typeof Public]: undefined;
} & {[key in keyof typeof Auth]: undefined};

type OmittedScreens = any // 'OtpScreen' | 'AuthRoute' | 'Login';
export type AppRoutesTypes = Omit<PublicRoutesTypes, OmittedScreens> & {
// Add screen name and pass props
};

export type PublicNavigationProps = NativeStackNavigationProp<AppRoutesTypes>;
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {GOOGLE_SSO_CLIENT_ID} from '@env';

export function googleSsoConfigure() {
  GoogleSignin.configure({
    scopes: ['profile', 'email'],
    webClientId: GOOGLE_SSO_CLIENT_ID,
    offlineAccess: true,
  });
}

export async function googleSsoSignIn(): Promise<any> {
  await GoogleSignin.hasPlayServices();
  const user = await GoogleSignin.signIn();
  return user;
}

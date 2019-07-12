import Reactotron from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.15.10' })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}

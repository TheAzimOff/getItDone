import { createContext, useContext } from 'react';
import { initializeApp } from 'firebase/app';

const firebase = initializeApp({
  apiKey: 'AIzaSyD7lb51ns3Do3EqHDthWd3Y_s2tRi8Hcmg',
  authDomain: 'getitdone-gid.firebaseapp.com',
  projectId: 'getitdone-gid',
  storageBucket: 'getitdone-gid.appspot.com',
  messagingSenderId: '202614208642',
  appId: '1:202614208642:web:02ac77f858d09ea3a9dc9b',
});
export const Context = createContext(null);
export const useFirebase = () => useContext(Context);

export const FirebaseProvider = ({ children }) => {
  return <Context.Provider value={firebase}>{children}</Context.Provider>;
};

import { db } from '../../firebase/config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut} from 'firebase/auth';
import { auth } from '../../firebase/config';
import {authSlice}  from './authSlice';


const {updateUserProfile, authSingOut, authStateChange} = authSlice.actions;


  export const register = ({ email, password, login }) => async() => {
    try {

    await createUserWithEmailAndPassword(auth, email, password);
    const user =  auth.currentUser;
    updateProfile(user, {displayName: login})

    const { uid, displayName } = auth.currentUser;
    
    const userUpdateProfile = {
        userId:uid, nickName: displayName
    }
  
    dispatch(authSlice.actions.updateUserProfile(userUpdateProfile))
    } catch (error) {
        console.log(error.message)
    }
    

  } 
         
  
 export const authStateChanged = async (onChange = () => {}) => {
          onAuthStateChanged((user) => {
            if (user) { 
                const userUpdateProfile = {
                    userId: user.uid,
                    nickName: user.displayName
        }
                 dispatch(authStateChange({stateChange:true}))
                 dispatch(updateUserProfile(userUpdateProfile));
        
             }
                  onChange(user);
          });
  };
  
  export const login = async ({ email, password }) => {
    try {
      const credentials = await signInWithEmailAndPassword(auth, email, password);
          return credentials.user;
    } catch (error) {
      throw error;
    }
  };

  export const logOutUser = () => async (dispatch) => { 
    await signOut(auth);
    dispatch(authSingOut())
};
  


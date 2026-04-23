import { createSlice } from '@reduxjs/toolkit'
import { auth } from '../firebase.config'
import { signInWithEmailAndPassword } from 'firebase/auth'

const initialState = {
  user: null,
}

export const authSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    registration: (state) => {
      state.value += 1
    },
    login: (state, action)=> {
        signInWithEmailAndPassword(auth, action.payload.email, action.payload.password)
        .then((userCredential) => {
        const user = userCredential.user;
        state= user
        console.log(user)
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
      });
    
      },
    logout: (state, action) => {
      state.value += action.payload
    },
  },
})



// Action creators are generated for each case reducer function
export const { registration, login, logout } = authSlice.actions

export default authSlice.reducer
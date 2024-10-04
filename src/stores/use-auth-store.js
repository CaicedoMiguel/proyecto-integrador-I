import { create } from "zustand";
import { auth } from "../firebase.config";
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

const provider = new GoogleAuthProvider();
/**
 * Auth Store
 * 
 * This Zustand store manages authentication state and provides methods
 * for logging in with Google, observing authentication state changes,
 * and logging out.
 */
const useAuthStore = create((set) => ({
  user: null,
  loading: true,
  // error: null,

   /**
   * Logs in a user using Google authentication via a popup.
   * 
   * @returns {Promise<void>} - A promise that resolves when login is complete.
   */
  loginGoogleWithPopUp: async () => {
    await signInWithPopup(auth, provider)
    .catch((error) =>{
      console.error("Error during Google login:", error);
    });
  },

  /**
   * Logs out the currently authenticated user.
   * 
   * @returns {Promise<void>} - A promise that resolves when logout is complete.
  */
  logout: async () => {
   await signOut(auth).then(() => {
     set({ user: null });
    })
    .catch ((error) => {
      console.error("Error during logout:", error);
    });
  },
  
  /**
   * Observes changes in authentication state.
   * 
   * @returns {Function} - A function that unsubscribes from the auth state listener.
   */
  observeAuthState: () => {
    set({loading: true});
    onAuthStateChanged(auth, (user) => {
      if (user){
        set({user, loading: false});
      } else {
        set({user: null, loading: false});
      }
    });
  },

  /**
   * Clears any existing authentication error.
   */
  clearError: () => set({ error: null }),
}));

export default useAuthStore;
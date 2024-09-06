import { create } from "zustand";
import { auth } from "../firebase.config";
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

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
  error: null,

   /**
   * Logs in a user using Google authentication via a popup.
   * 
   * @returns {Promise<void>} - A promise that resolves when login is complete.
   */
  loginGoogleWithPopup: async () => {
    set({ loading: true, error: null });
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      set({ user: result.user, loading: false });
    } catch (error) {
      console.error("Error during Google login:", error);
      set({ error: error.message, loading: false });
    }
  },

  /**
   * Observes changes in authentication state.
   * 
   * @returns {Function} - A function that unsubscribes from the auth state listener.
   */
  observeAuthState: () => {
    return onAuthStateChanged(auth, (user) => {
      set({ user, loading: false });
    });
  },

  /**
   * Logs out the currently authenticated user.
   * 
   * @returns {Promise<void>} - A promise that resolves when logout is complete.
   */
  logout: async () => {
    set({ loading: true, error: null });
    try {
      await auth.signOut();
      set({ user: null, loading: false });
    } catch (error) {
      console.error("Error during logout:", error);
      set({ error: error.message, loading: false });
    }
  },

  /**
   * Clears any existing authentication error.
   */
  clearError: () => set({ error: null }),
}));

export default useAuthStore;
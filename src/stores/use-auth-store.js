import { create } from "zustand";
import { auth } from "../firebase.config";
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged } from "firebase/auth";

const useAuthStore = create((set) => ({
  user: null,
  loading: true,
  error: null,

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

  observeAuthState: () => {
    return onAuthStateChanged(auth, (user) => {
      set({ user, loading: false });
    });
  },

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

  clearError: () => set({ error: null }),
}));

export default useAuthStore;
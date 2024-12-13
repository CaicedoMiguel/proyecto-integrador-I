import { create } from "zustand";
import { persist } from "zustand/middleware";
import { auth } from "../firebase.config";
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, setPersistence, browserLocalPersistence } from "firebase/auth";

const provider = new GoogleAuthProvider();

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      loading: true,
      error: null,

      loginGoogleWithPopUp: async () => {
        try {
          await setPersistence(auth, browserLocalPersistence);
          const result = await signInWithPopup(auth, provider);
          set({ user: result.user, error: null });
        } catch (error) {
          console.error("Error during Google login:", error);
          set({ error: error.message });
        }
      },

      logout: async () => {
        try {
          await signOut(auth);
          set({ user: null, error: null });
        } catch (error) {
          console.error("Error during logout:", error);
          set({ error: error.message });
        }
      },

      observeAuthState: () => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          set({ user, loading: false, error: null });
        }, (error) => {
          set({ user: null, loading: false, error: error.message });
        });
        return unsubscribe;
      },

      clearError: () => set({ error: null }),
    }),
    {
      name: 'auth-storage',
      getStorage: () => localStorage,
    }
  )
);

export default useAuthStore;


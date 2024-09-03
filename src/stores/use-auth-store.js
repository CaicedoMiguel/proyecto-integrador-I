import { create } from "zustand";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase.config"; // Ruta corregida

const provider = new GoogleAuthProvider();

const useAuthStore = create((set) => ({
    user: null,
    loading: true,
    
    loginGoogleWithPopup: async () => {
        set({ loading: true });
        try {
            const result = await signInWithPopup(auth, provider);
            set({ user: result.user, loading: false });
        } catch (error) {
            console.error(error);
            set({ loading: false });
        }
    },

    logout: async () => {
        set({ loading: true });
        try {
            await auth.signOut();
            set({ user: null, loading: false });
        } catch (error) {
            console.error(error);
            set({ loading: false });
        }
    },

    observeAuthState: () => {
        auth.onAuthStateChanged((user) => {
            set({ user, loading: false });
        });
    },
}));

export default useAuthStore;
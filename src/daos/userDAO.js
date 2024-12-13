import {
  collection,
  doc,
  setDoc,
  getDoc,
  deleteDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "../firebase.config";

class UserDAO {
  constructor() {
    this.collectionRef = collection(db, "users");
  }

  async getUserById(id) {
    try {
      const userDoc = await getDoc(doc(db, "users", id));
      if (userDoc.exists()) {
        return { success: true, data: userDoc.data() };
      } else {
        return { success: false, data: null };
      }
    } catch (error) {
      console.log("Error al obtener el documento: ", error);
      return { success: false, data: null, error };
    }
  }

  async createUser(userData, userId) {
    const searchUser = await this.getUserById(userId);
    if (!searchUser.success) {
      try {
        await setDoc(doc(db, "users", userId), {
          ...userData,
          quizProgress: {
            currentScenario: 0,
            correctAnswers: 0,
            totalQuizAttempts: 0,
            failedQuizAttempts: 0,
            maxScore: 0,
            isQuizCompleted: false,
            isGameOver: false,
          },
          rewards: [],
        });
        console.log("Documento creado con ID: ", userId);
        return { success: true, id: userId };
      } catch (error) {
        console.error("Error al agregar el documento: ", error);
        return { success: false, error };
      }
    } else {
      console.log("El usuario ya existe.");
      return { success: false, error: new Error("El usuario ya existe.") };
    }
  }

  async updateUser(id, userData) {
    const userRef = doc(db, "users", id);
    try {
      await updateDoc(userRef, userData);
      console.log("Documento actualizado correctamente!");
      return { success: true };
    } catch (error) {
      console.error("Error al actualizar el documento: ", error);
      return { success: false, error };
    }
  }

  async deleteUser(id) {
    try {
      await deleteDoc(doc(db, "users", id));
      console.log("Documento eliminado correctamente!");
      return { success: true };
    } catch (error) {
      console.error("Error al eliminar el documento: ", error);
      return { success: false, error };
    }
  }

  async updateQuizProgress(userId, progressData) {
    try {
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, {
        "quizProgress.currentScenario": progressData.currentScenario,
        "quizProgress.correctAnswers": progressData.correctAnswers,
        "quizProgress.totalQuizAttempts": progressData.totalQuizAttempts,
        "quizProgress.failedQuizAttempts": progressData.failedQuizAttempts,
        "quizProgress.maxScore": progressData.maxScore,
        "quizProgress.isQuizCompleted": progressData.isQuizCompleted,
        "quizProgress.isGameOver": progressData.isGameOver,
        "quizProgress.currentQuizScore": progressData.currentQuizScore,
      });
      console.log("Progreso del quiz actualizado correctamente.");
      return { success: true };
    } catch (error) {
      console.error("Error al actualizar el progreso del quiz: ", error);
      return { success: false, error };
    }
  }

  async resetQuizProgress(userId) {
    try {
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, {
        "quizProgress.currentScenario": 0,
        "quizProgress.correctAnswers": 0,
        "quizProgress.currentQuizScore": 0,
        "quizProgress.isQuizCompleted": false,
        "quizProgress.isGameOver": false,
      });
      console.log("Progreso del quiz reiniciado correctamente.");
      return { success: true };
    } catch (error) {
      console.error("Error al reiniciar el progreso del quiz: ", error);
      return { success: false, error };
    }
  }

  async updateQuizStats(userId, stats) {
    try {
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, {
        "quizProgress.totalQuizAttempts": stats.totalQuizAttempts,
        "quizProgress.failedQuizAttempts": stats.failedQuizAttempts,
        "quizProgress.maxScore": stats.maxScore,
      });
      console.log("Estadísticas del quiz actualizadas correctamente.");
      return { success: true };
    } catch (error) {
      console.error("Error al actualizar las estadísticas del quiz: ", error);
      return { success: false, error };
    }
  }

  async addUserReward(userId, reward) {
    try {
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, {
        rewards: arrayUnion(reward),
      });
      console.log("Recompensa añadida correctamente al usuario.");
      return { success: true };
    } catch (error) {
      console.error("Error al añadir la recompensa al usuario: ", error);
      return { success: false, error };
    }
  }

  async getQuizProgress(userId) {
    try {
      const userDoc = await getDoc(doc(db, "users", userId));
      if (userDoc.exists()) {
        const quizProgress = userDoc.data().quizProgress || {};
        return { 
          success: true, 
          data: {
            currentScenario: quizProgress.currentScenario || 0,
            correctAnswers: quizProgress.correctAnswers || 0,
            totalQuizAttempts: quizProgress.totalQuizAttempts || 0,
            failedQuizAttempts: quizProgress.failedQuizAttempts || 0,
            maxScore: quizProgress.maxScore || 0,
            isQuizCompleted: quizProgress.isQuizCompleted || false,
            isGameOver: quizProgress.isGameOver || false,
            currentQuizScore: quizProgress.currentQuizScore || 0,
          }
        };
      } else {
        return { success: false, data: null };
      }
    } catch (error) {
      console.log("Error al obtener el progreso del quiz: ", error);
      return { success: false, data: null, error };
    }
  }
}

export default new UserDAO();


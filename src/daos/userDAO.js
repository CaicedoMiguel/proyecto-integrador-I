// src/daos/userDAO.js

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

/**
 * UserDAO Class
 * 
 * Esta clase proporciona métodos para interactuar con la base de datos Firestore
 * específicamente para gestionar documentos de usuarios en la colección "users".
 */
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
            totalAttempts: 0,
            failedAttempts: 0,
            isQuizCompleted: false,
            isGameOver: false,
          },
          score: 0, // Inicializar la puntuación
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
        "quizProgress.totalAttempts": progressData.totalAttempts,
        "quizProgress.failedAttempts": progressData.failedAttempts,
        "quizProgress.isQuizCompleted": progressData.isQuizCompleted,
        "quizProgress.isGameOver": progressData.isGameOver,
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
        "quizProgress.totalAttempts": 0,
        "quizProgress.failedAttempts": 0,
        "quizProgress.isQuizCompleted": false,
        "quizProgress.isGameOver": false,
        score: 0,
      });
      console.log("Progreso del quiz reiniciado correctamente.");
      return { success: true };
    } catch (error) {
      console.error("Error al reiniciar el progreso del quiz: ", error);
      return { success: false, error };
    }
  }

  async updateUserScore(userId, score) {
    try {
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, {
        score: score,
      });
      console.log("Puntuación del usuario actualizada correctamente.");
      return { success: true };
    } catch (error) {
      console.error("Error al actualizar la puntuación del usuario: ", error);
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
        const completeQuizProgress = {
          currentScenario: quizProgress.currentScenario || 0,
          correctAnswers: quizProgress.correctAnswers || 0,
          totalAttempts: quizProgress.totalAttempts || 0,
          failedAttempts: quizProgress.failedAttempts || 0,
          isQuizCompleted: quizProgress.isQuizCompleted || false,
          isGameOver: quizProgress.isGameOver || false,
          score: userDoc.data().score || 0, // Incluir la puntuación
        };
        return { success: true, data: completeQuizProgress };
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

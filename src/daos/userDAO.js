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

  /**
   * Recupera un documento de usuario por su ID.
   * 
   * @param {string} id - El ID del documento de usuario a recuperar.
   * @returns {Promise<{success: boolean, data?: object, error?: Error}>} - 
   * Un objeto que contiene el estado de éxito y los datos del usuario o un error.
   */
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

  /**
   * Crea un nuevo documento de usuario.
   * 
   * @param {object} userData - Los datos a almacenar en el nuevo documento de usuario.
   * @param {string} userId - El ID del usuario.
   * @returns {Promise<{success: boolean, id?: string, error?: Error}>} - 
   * Un objeto que contiene el estado de éxito y el ID del nuevo documento o un error.
   */
  async createUser(userData, userId) {
    const searchUser = await this.getUserById(userId);
    if (!searchUser.success) {
      try {
        await setDoc(doc(db, "users", userId), {
          ...userData,
          quizProgress: {
            currentScenario: 0,
            correctAnswers: 0,
            totalAttempts: 0, // Añadido
            failedAttempts: 0, // Añadido
            rewards: [],
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

  /**
   * Actualiza un documento de usuario existente.
   * 
   * @param {string} id - El ID del documento de usuario a actualizar.
   * @param {object} userData - Los datos actualizados para el documento de usuario.
   * @returns {Promise<{success: boolean, error?: Error}>} - 
   * Un objeto que contiene el estado de éxito o un error.
   */
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

  /**
   * Elimina un documento de usuario por su ID.
   * 
   * @param {string} id - El ID del documento de usuario a eliminar.
   * @returns {Promise<{success: boolean, error?: Error}>} - 
   * Un objeto que contiene el estado de éxito o un error.
   */
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

  /**
   * Actualiza el progreso del quiz del usuario.
   * 
   * @param {string} userId - El ID del usuario.
   * @param {object} progressData - Los datos de progreso a actualizar.
   * @returns {Promise<{success: boolean, error?: Error}>}
   */
  async updateQuizProgress(userId, progressData) {
    try {
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, {
        quizProgress: {
          ...progressData,
          totalAttempts: progressData.totalAttempts || 0, // Asegurar que exista
          failedAttempts: progressData.failedAttempts || 0, // Asegurar que exista
        },
      });
      console.log("Progreso del quiz actualizado correctamente.");
      return { success: true };
    } catch (error) {
      console.error("Error al actualizar el progreso del quiz: ", error);
      return { success: false, error };
    }
  }

  /**
   * Reinicia el progreso del quiz para un usuario específico.
   * 
   * @param {string} userId - El ID del usuario.
   * @returns {Promise<{success: boolean, error?: Error}>}
   */
  async resetQuizProgress(userId) {
    try {
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, {
        quizProgress: {
          currentScenario: 0,
          correctAnswers: 0,
          totalAttempts: 0, // Reiniciar a 0
          failedAttempts: 0, // Reiniciar a 0
          rewards: [],
          isQuizCompleted: false,
          isGameOver: false,
        },
        score: 0, // Reiniciar la puntuación
      });
      console.log("Progreso del quiz reiniciado correctamente.");
      return { success: true };
    } catch (error) {
      console.error("Error al reiniciar el progreso del quiz: ", error);
      return { success: false, error };
    }
  }

  /**
   * Actualiza la puntuación del usuario.
   * 
   * @param {string} userId - El ID del usuario.
   * @param {number} score - La puntuación a actualizar.
   * @returns {Promise<{success: boolean, error?: Error}>}
   */
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

  /**
   * Añade una recompensa a la cuenta del usuario.
   * 
   * @param {string} userId - El ID del usuario.
   * @param {object} reward - La recompensa a añadir.
   * @returns {Promise<{success: boolean, error?: Error}>}
   */
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

  /**
   * Recupera el progreso del quiz del usuario.
   * 
   * @param {string} userId - El ID del usuario.
   * @returns {Promise<{success: boolean, data?: object, error?: Error}>}
   */
  async getQuizProgress(userId) {
    try {
      const userDoc = await getDoc(doc(db, "users", userId));
      if (userDoc.exists()) {
        const quizProgress = userDoc.data().quizProgress || {};
        // Asegurar que todas las propiedades existan
        const completeQuizProgress = {
          currentScenario: quizProgress.currentScenario || 0,
          correctAnswers: quizProgress.correctAnswers || 0,
          totalAttempts: quizProgress.totalAttempts || 0, // Asegurar que exista
          failedAttempts: quizProgress.failedAttempts || 0, // Asegurar que exista
          rewards: quizProgress.rewards || [],
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

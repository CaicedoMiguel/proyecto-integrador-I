import React, { useEffect, useState } from "react";
import useAuthStore from "../../stores/use-auth-store";
import userDAO from "../../daos/userDAO";
import './Rewards.css';

const Rewards = () => {
  const { user } = useAuthStore();
  const [rewards, setRewards] = useState([]);
  const [quizStats, setQuizStats] = useState({
    totalQuizAttempts: 0,
    failedQuizAttempts: 0,
    maxScore: 0
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    if (user) {
      fetchUserData();
    }
  }, [user]);

  const fetchUserData = async () => {
    if (!user) return;

    try {
      const res = await userDAO.getQuizProgress(user.uid);
      if (res.success && res.data) {
        setQuizStats({
          totalQuizAttempts: res.data.totalQuizAttempts || 0,
          failedQuizAttempts: res.data.failedQuizAttempts || 0,
          maxScore: res.data.maxScore || 0
        });
        // Progreso del quiz cargado exitosamente
      } else {
        // No se pudieron obtener las estadísticas del quiz
      }

      const userRes = await userDAO.getUserById(user.uid);
      if (userRes.success && userRes.data) {
        setRewards(userRes.data.rewards || []);
        // Recompensas del usuario cargadas exitosamente
      } else {
        // No se pudieron obtener las recompensas del usuario
      }
    } catch (error) {
      setError("Hubo un problema al cargar tus recompensas y estadísticas. Por favor, intenta de nuevo más tarde.");
    }
  };

  const handleClearRewards = async () => {
    if (!user) return;
    try {
      await userDAO.updateUser(user.uid, { rewards: [] });
      setRewards([]);
      alert("Todas las recompensas han sido borradas.");
    } catch (error) {
      alert("Hubo un error al borrar las recompensas. Por favor, intenta de nuevo.");
    }
  };

  if (!user) return (
    <div style={{
      marginTop: '24px',
      padding: '16px',
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
    }}>
      <p style={{ textAlign: 'center', color: '#666' }}>Inicia sesión para ver tu perfil, recompensas y estadísticas.</p>
    </div>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {error && (
        <div style={{
          backgroundColor: '#ffe6e6',
          borderRadius: '8px',
          padding: '16px',
          color: '#cc0000',
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}>
          <p style={{ textAlign: 'center' }}>{error}</p>
        </div>
      )}

      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '16px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
      }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0 0 8px 0' }}>{user.displayName}</h2>
        <p style={{ fontSize: '16px', color: '#666', margin: 0 }}>{user.email}</p>
      </div>

      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '16px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h3 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>Estadísticas del Quiz</h3>
          <span style={{ fontSize: '24px' }}>🏆</span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px' }}>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '24px' }}>🎯</span>
            <p style={{ margin: '8px 0', color: '#666' }}>Intentos totales</p>
            <p style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>{quizStats.totalQuizAttempts}</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '24px' }}>❌</span>
            <p style={{ margin: '8px 0', color: '#666' }}>Quices perdidos</p>
            <p style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>{quizStats.failedQuizAttempts}</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span style={{ fontSize: '24px' }}>🏅</span>
            <p style={{ margin: '8px 0', color: '#666' }}>Puntuación Máxima</p>
            <p style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>{quizStats.maxScore} puntos</p>
          </div>
        </div>
      </div>

      <div style={{
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '16px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <h3 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>Tus Recompensas</h3>
          <button
            onClick={handleClearRewards}
            style={{
              backgroundColor: '#ff4d4d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              padding: '8px 16px',
              cursor: 'pointer'
            }}
          >
            Limpiar Recompensas
          </button>
        </div>
        {rewards.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#666' }}>No tienes recompensas todavía.</p>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '16px' }}>
            {rewards.map((reward, index) => (
              <div key={index} style={{
                backgroundColor: '#f9f9f9',
                borderRadius: '8px',
                overflow: 'hidden',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}>
                <img 
                  src={reward.image} 
                  alt={reward.type} 
                  style={{ width: '100%', height: '160px', objectFit: 'cover' }}
                />
                <div style={{ padding: '16px' }}>
                  <h5 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '8px' }}>{reward.type}</h5>
                  <p style={{ fontSize: '14px', color: '#666', marginBottom: '8px' }}>{reward.description}</p>
                  <span style={{ fontSize: '12px', color: '#999' }}>
                    Obtenido el: {new Date(reward.earnedAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Rewards;

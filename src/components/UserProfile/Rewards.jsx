// src/components/UserProfile/Rewards.jsx

import React, { useEffect, useState } from "react";
import useAuthStore from "../../stores/use-auth-store";
import userDAO from "../../daos/userDAO";
import "./Rewards.css"; // Asegúrate de crear este archivo para estilos adicionales

const Rewards = () => {
  const { user } = useAuthStore();
  const [rewards, setRewards] = useState([]);

  useEffect(() => {
    const fetchRewards = async () => {
      if (!user) return;
      const res = await userDAO.getUserById(user.uid);
      if (res.success && res.data && res.data.rewards) {
        setRewards(res.data.rewards);
      }
    };
    fetchRewards();
  }, [user]);

  if (!user) return <p>Inicia sesión para ver tus recompensas.</p>;

  return (
    <div className="rewards-container">
      <h3>Tus Recompensas</h3>
      {rewards.length === 0 ? (
        <p>No tienes recompensas todavía.</p>
      ) : (
        <ul className="rewards-list">
          {rewards.map((reward, index) => (
            <li key={index} className="reward-item">
              <img src={reward.image} alt={reward.type} className="reward-image" />
              <div className="reward-info">
                <h4>{reward.type}</h4>
                <p>{reward.description}</p>
                <span className="earned-date">Obtenido el: {new Date(reward.earnedAt).toLocaleDateString()}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Rewards;

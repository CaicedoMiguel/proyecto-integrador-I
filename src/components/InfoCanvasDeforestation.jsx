// components/InfoCanvas.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

const InfoCanvasDeforestation = ({
  texts,
  currentStep,
  setCurrentStep,
  setShowInfoCanvas,
  resetCamera,
}) => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "70vw",
        maxWidth: "800px",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        color: "#333",
        padding: "40px",
        borderRadius: "20px",
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        fontFamily: "'bebas-neue-regular', sans-serif",
      }}
    >
      {/* Botón de cerrar */}
      <button
        onClick={() => setShowInfoCanvas(false)}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          background: "transparent",
          border: "none",
          fontSize: "24px",
          cursor: "pointer",
          color: "#666",
          transition: "color 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.color = "#f44336")}
        onMouseOut={(e) => (e.target.style.color = "#666")}
        aria-label="Close"
      >
        ×
      </button>

      {/* Contenido dinámico basado en currentStep */}
      <h2 style={{ fontSize: "28px", marginBottom: "20px", color: "#2c3e50" }}>
        {texts[currentStep].title}
      </h2>
      <p
        style={{
          fontSize: "18px",
          lineHeight: "1.6",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        {texts[currentStep].content}
      </p>

      {/* Botones de navegación */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {/* Botón Anterior */}
        {currentStep > 0 && (
          <button
            onClick={() => setCurrentStep(currentStep - 1)}
            style={{
              padding: "15px 30px",
              fontSize: "16px",
              borderRadius: "50px",
              backgroundColor: "#f44336",
              color: "white",
              cursor: "pointer",
              border: "none",
              transition: "background-color 0.3s ease",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#d32f2f")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#f44336")}
          >
            Anterior
          </button>
        )}

        {/* Botón Siguiente o Finalizar */}
        {currentStep < texts.length - 1 ? (
          <button
            onClick={() => setCurrentStep(currentStep + 1)}
            style={{
              padding: "15px 30px",
              fontSize: "16px",
              borderRadius: "50px",
              backgroundColor: "#4CAF50",
              color: "white",
              cursor: "pointer",
              border: "none",
              transition: "background-color 0.3s ease",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
          >
            Siguiente
          </button>
        ) : (
          <button
            onClick={() => navigate("/biodiversity")}
            style={{
              padding: "15px 30px",
              fontSize: "16px",
              borderRadius: "50px",
              backgroundColor: "#4CAF50",
              color: "white",
              cursor: "pointer",
              border: "none",
              transition: "background-color 0.3s ease",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
          >
            Finalizar
          </button>
        )}

        {/* Botón Regresa */}
        <button
          onClick={resetCamera}
          style={{
            padding: "15px 30px",
            fontSize: "16px",
            borderRadius: "50px",
            backgroundColor: "#f44336",
            color: "white",
            cursor: "pointer",
            border: "none",
            transition: "background-color 0.3s ease",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#d32f2f")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#f44336")}
        >
          Regresa
        </button>
      </div>
    </div>
  );
};

export default InfoCanvasDeforestation;

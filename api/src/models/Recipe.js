const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dishSummary: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    punctuation: {
      type: DataTypes.INTEGER,
      
    },
    healthyFoodLevel: {
      type: DataTypes.INTEGER,
      
    },
    stepByStep: {
      type: DataTypes.TEXT,
      
    },
    image: {
      type: DataTypes.STRING,
      
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  });
};

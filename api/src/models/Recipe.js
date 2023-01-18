const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Recipe', {
    
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false
    },
    healthScore: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    steps: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dietTypes: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true
    },
  });
};


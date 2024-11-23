const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  licensePlate: { type: String, required: true }, // Placa
  model: { type: String, required: true },        // Modelo
  ownerName: { type: String, required: true },    // Nome do cliente
  ownerCPF: { type: String, required: true },     // CPF
  ownerPhone: { type: String, required: true },   // Telefone
  entryTime: { type: Date, required: true },      // Data e hora da entrada
  exitTime: { type: Date },                       // Data e hora da saída
  fee: { type: Number },                          // Valor cobrado
});

module.exports = mongoose.model('Vehicle', vehicleSchema);

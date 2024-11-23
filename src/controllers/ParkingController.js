const Vehicle = require('../models/Vehicle');

// Máximo de vagas
const MAX_SPACES = 40;

// Verificar número de veículos estacionados
exports.getCurrentVehicles = async (req, res) => {
  const count = await Vehicle.countDocuments({ exitTime: null });
  res.json({ currentVehicles: count });
};

// Registrar entrada
exports.registerEntry = async (req, res) => {
  const { licensePlate, model, ownerName, ownerCPF, ownerPhone } = req.body;
  const currentCount = await Vehicle.countDocuments({ exitTime: null });

  if (currentCount >= MAX_SPACES) {
    return res.status(400).json({ message: 'Estacionamento lotado!' });
  }

  const newVehicle = new Vehicle({
    licensePlate,
    model,
    ownerName,
    ownerCPF,
    ownerPhone,
    entryTime: new Date(),
  });

  await newVehicle.save();
  res.status(201).json({ message: 'Veículo registrado com sucesso!', vehicle: newVehicle });
};

// Registrar saída
exports.registerExit = async (req, res) => {
  const { licensePlate } = req.body;
  const vehicle = await Vehicle.findOne({ licensePlate, exitTime: null });

  if (!vehicle) {
    return res.status(404).json({ message: 'Veículo não encontrado ou já saiu!' });
  }

  const now = new Date();
  const hoursParked = Math.ceil((now - vehicle.entryTime) / (1000 * 60 * 60)); // Horas arredondadas
  const fee = 2 + (hoursParked > 1 ? (hoursParked - 1) * 2.15 : 0);

  vehicle.exitTime = now;
  vehicle.fee = fee;
  await vehicle.save();

  res.json({ message: 'Saída registrada com sucesso!', fee });
};

// Receita total
exports.getTotalRevenue = async (req, res) => {
  const revenue = await Vehicle.aggregate([
    { $match: { fee: { $ne: null } } },
    { $group: { _id: null, total: { $sum: '$fee' } } },
  ]);
  res.json({ totalRevenue: revenue[0]?.total || 0 });
};

// Total de veículos que já entraram
exports.getTotalVehicles = async (req, res) => {
  const count = await Vehicle.countDocuments();
  res.json({ totalVehicles: count });
};

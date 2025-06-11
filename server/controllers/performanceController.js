import Badge from '../models/Badge.js';

export const saveScore = async (req, res) => {
  const { userId, score } = req.body;
  const badge = score > 75 ? 'Expert' : score > 50 ? 'Intermediate' : 'Beginner';
  await Badge.create({ userId, badge, score });
  res.json({ message: "Score saved", badge });
};

export const getGraphData = async (req, res) => {
  const scores = await Badge.find({ userId: req.params.id }).sort({ createdAt: 1 });
  res.json(scores);
};

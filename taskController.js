const pool = require('../config/db');

const getTasks = async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM tasks WHERE user_id = $1 ORDER BY created_at DESC',
      [req.user.id]
    );

    res.json(result.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка при получении задач' });
  }
};

const createTask = async (req, res) => {
  const { title, description } = req.body;

  if (!title) {
    return res.status(400).json({ message: 'Название задачи обязательно' });
  }

  try {
    const result = await pool.query(
      'INSERT INTO tasks (title, description, completed, user_id) VALUES ($1, $2, $3, $4) RETURNING *',
      [title, description || '', false, req.user.id]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка при создании задачи' });
  }
};

const updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description, completed } = req.body;

  try {
    const result = await pool.query(
      `UPDATE tasks
       SET title = $1, description = $2, completed = $3
       WHERE id = $4 AND user_id = $5
       RETURNING *`,
      [title, description, completed, id, req.user.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Задача не найдена' });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка при обновлении задачи' });
  }
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await pool.query(
      'DELETE FROM tasks WHERE id = $1 AND user_id = $2 RETURNING *',
      [id, req.user.id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Задача не найдена' });
    }

    res.json({ message: 'Задача удалена' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка при удалении задачи' });
  }
};

module.exports = { getTasks, createTask, updateTask, deleteTask };

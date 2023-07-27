const db = require("../service/connection");

module.exports.getRooms = () => {
    return (req, res) => {
        const sql = 'SELECT * FROM room_type';
        db.query(sql, (err, result) => {
            if (err) {
            console.error('Error executing MySQL query:', err);
            res.status(500).json({ error: 'Error fetching room data' });
        } else {
            res.json(result);
            }
        });
    }
}


module.exports.AddRooms = () => {
    return (req, res) => {
    const { name, slug, type, price, size, capacity, pets, breakfast, featured, description, extras, images } = req.body;
    const sql = 'INSERT INTO room_type (name, slug, type, price, size, capacity, pets, breakfast, featured, description, extras, images) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [name, slug, type, price, size, capacity, pets, breakfast, featured, description, JSON.stringify(extras), JSON.stringify(images)];
  
    db.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error executing MySQL query:', err);
        res.status(500).json({ error: 'Error adding new room' });
      } else {
        res.json({ message: 'Room added successfully', id: result.insertId });
      }
    });
    }
}
const User = require("../models/User");

class UserController {
  async show(req, res) {
    const users = await User.findAll();
    return res.status(200).json({ ok: true, users });
  }

  async create(req, res) {
    try {
      const { name, cpf, birthday, weigth } = req.body;

      console.log(req.body);

      const user = await User.create({ name, cpf, birthday, weigth });
      return res.json({
        ok: true,
        user,
      });
    } catch (err) {
      console.log(err);
      return res.json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);

      if (!user) {
        return res.json({ error: "User not found" });
      }

      await user.update(req.body);
      return res.json({ ok: true, user });
    } catch (err) {
      console.log(err);
      return res.json({ error: err.message });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findByPk(id);

      if (!user) {
        return res.json({ error: "User not found" });
      }

      await user.destroy();
      return res.json({ ok: true });
    } catch (err) {
      console.log(err);
      return res.json({ error: err.message });
    }
  }
}

module.exports = new UserController();

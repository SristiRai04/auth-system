const express = require("express");
const router = express.Router();

const {
  register,
  login,
  getProfile,
  getAllUsers,
  deleteUser
} = require("../controllers/authController");

const auth = require("../middleware/auth");
const roleCheck = require("../middleware/role");
const { updateProfile } = require("../controllers/authController");

// AUTH ROUTES
router.post("/register", register);
router.post("/login", login);

// PROFILE (protected)
router.get("/profile", auth, getProfile);

// ADMIN ROUTES
router.get("/users", auth, roleCheck(["admin"]), getAllUsers);
router.delete("/user/:id", auth, roleCheck(["admin"]), deleteUser);

router.put("/profile", auth, updateProfile);

module.exports = router;
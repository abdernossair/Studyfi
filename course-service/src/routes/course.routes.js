const router = require('express').Router();
const { createCourse, getCourses, getCourseById } = require('../controllers/courseController');

// POST /courses
router.post('/', createCourse);

// GET /courses
router.get('/', getCourses);

// GET /courses/:id
router.get('/:id', getCourseById);

module.exports = router;

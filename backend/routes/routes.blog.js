import express from 'express';
const router = express.Router();

//Controllers
import {
    getAllBlogs,
    getOneBlog,
    createBLog,
    updateBlog,
    deleteBlog
} from '../controllers/BlogController.js';

router.get('/', getAllBlogs);
router.get('/:id', getOneBlog);
router.post('/', createBLog);
router.put('/:id', updateBlog);
router.delete('/:id', deleteBlog);

export default router;
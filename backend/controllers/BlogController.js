import BlogModel from '../models/BlogModel.js';

//CRUD

//Crear un nuevo registro
export const createBLog = async (req, res) => {
    const { title, content } = req.body;    //LLEGA title , PERO NO content , why?
    const newBlog = ({ title, content });
    try {
        await BlogModel.create(newBlog);
        res.json({ message: newBlog, text: "Registro creado exitosamente." });
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Actualizar un registro

export const updateBlog = async (req, res) => {
    try {
        await BlogModel.update(req.body, {
            where: { id: req.params.id }
        })
        /* res.json(req.body); */
        res.json({ message: 'Registro actualizado correctamente' });
    } catch (error) {
        res.json({ message: error.message })
    }
}
//Mostrar todos los registros
export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await BlogModel.findAll();
        res.json(blogs);
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Mostrar un unico registro
export const getOneBlog = async (req, res) => {
    try {
        const blog = await BlogModel.findAll({
            where: { id: req.params.id }
        });
        res.json(blog[0]);
    } catch (error) {
        res.json({ message: error.message })
    }
}

//Eliminar un registro

export const deleteBlog = async (req, res) => {
    try {
        await BlogModel.destroy({
            where: {
                id: req.params.id
            }
        })
        res.json({ message: 'Registro eliminado exitosamente.' })
    } catch (error) {
        res.json({ message: error.message });
    }
}
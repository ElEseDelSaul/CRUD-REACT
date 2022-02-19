import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const URI = "http://localhost:8000/blogs";

const CompCreateBlog = () => {
    const [title, setTitle] = useState([]);
    const [content, setContent] = useState([]);
    const navigate = useNavigate();

    //Crear Nuevo Registro
    const createBlog = async (e) => {
        e.preventDefault(); //No reinicio formulario
        await axios.post(URI, { title: title, content: content });    //Hacer peticion al Backend
        navigate('/');  //retornar a la pagina principal
    }

    return (
        <div className="container">
            <h3>Add New Post</h3>
            <form onSubmit={createBlog} className="form-group">
                <label className="form-label">Title</label>
                <div className="mb-3">
                    <input
                        placeholder="Write a Title"
                        className="form-control"
                        type="text"
                        value={title}
                        required
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                <div className="mb-3">
                    <textarea
                        placeholder="Write a Content"
                        className="form-control"
                        type="text"
                        value={content}
                        required
                        onChange={(e) => { setContent(e.target.value) }}
                    />
                </div>
                <button type="submit" className="btn btn-success">Save</button>
            </form>
        </div>
    )

}

export default CompCreateBlog;
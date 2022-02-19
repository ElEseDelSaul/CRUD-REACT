import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const URI = "http://localhost:8000/blogs";

const CompEditBlog = () => {

    let [title, setTitle] = useState('');
    let [content, setContent] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    //Actualizar registro
    const editBlog = async (e) => {
        e.preventDefault();
        await axios.put(`${URI}/${id}`, { title: title, content: content });
        navigate('/');
    }

    useEffect(() => {
        getBlogById();
    },[]);

    const getBlogById = async () => {  //Cargar datos
        const res = await axios.get(`${URI}/${id}`);
        setTitle(res.data.title);
        setContent(res.data.content);
    }

    return (
        <div className="container">
            <h3>Edit Post</h3>
            <form onSubmit={editBlog} className="form-group">
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                    <labe className="form-label">Content</labe>
                </div>
                <div className="mb-3">
                    <textarea
                        type="text"
                        className="form-control"
                        value={content}
                        onChange={(e) => { setContent(e.target.value) }}
                    />
                </div>
                <button type="submit" className="btn btn-info">Edit</button>
            </form>
        </div>
    )

}

export default CompEditBlog;
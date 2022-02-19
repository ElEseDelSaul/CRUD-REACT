import axios from 'axios';  //Librerias
import { useState, useEffect } from 'react';    //Hooks
import { Link } from 'react-router-dom';    //Router

const  URI  = "http://localhost:8000/blogs";

const CompShowBlogs = () => {
    //Hooks
    const [blogs, setBlog] = useState([]);
    useEffect(() => {
        getBlogs();
    }, []);

    //Mostrar todos los blogs
    const getBlogs = async () => {
        const res = await axios.get(URI);
        setBlog(res.data);
    }

    //Eliminar Blog
    const deleteBlog = async (id) => {
        await axios.delete(`${URI}/${id}`);
        getBlogs();
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to="/create" className="btn btn-success rounded-circle mt-2 mb-2" title="Add">
                        <i className="fa-solid fa-circle-plus" />
                    </Link>
                    <table className="table table-dark table-striped table-hover text-center">
                        <thead className="table-primary">
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                blogs.map((blog) => (
                                    <tr key={blog.id}>
                                        <td>{blog.title}</td>
                                        <td>{blog.content}</td>
                                        <td>
                                            <button
                                                onClick={() => { deleteBlog(blog.id) }}
                                                className="fa-solid fa-trash-can btn btn-danger m-1"
                                                title="Delete"
                                            />
                                            <Link
                                                to={`/edit/${blog.id}`}
                                                className="fa-solid fa-pen-to-square btn btn-info"
                                                title="Edit"
                                            />
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default CompShowBlogs;
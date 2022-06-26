import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DeletePage = () => {
  // const [show,setShow] =useState(false);
  // const handleClose =() =>setShow(false);
  // const handleShow =() =>setShow(true);

  const navigate = useNavigate();
  const { _id } = useParams();
  const [blogData, setBlogData] = useState([]);
  const [updated, setUpdated] = useState({});
  useEffect(() => {
    axios({
      url: `http://localhost:8080/blogs/${_id}/edit`,
      method: "GET",
    }).then((res) => {
      setBlogData(res.data);
    });
    setUpdated({ Delete: true });
  }, [setBlogData, _id]);

  const handleDelete = () => {
    axios.patch(`http://localhost:8080/blogs/${_id}`, updated);
    navigate("/").then((res) => {
      console.log(res);
    });
  };
  return (
    <div>
      <div>
        {blogData.map((el) => (
          <div key={el.id}>
            <h1>{el.title}</h1>
            <p>{el.body}</p>
          </div>
        ))}
      </div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeletePage;

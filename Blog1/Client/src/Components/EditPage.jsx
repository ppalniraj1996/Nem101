import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const EditPage = () => {
  const [edit, setEdit] = useState(false);
  const [updated, setUpdated] = useState({});
  const [blogData, setBlogData] = useState([]);

  const navigate = useNavigate();

  const { _id } = useParams();
  console.log(_id);

  useEffect(() => {
    axios({
      url: `http://localhost:8080/blogs/${_id}/edit`,
      method: "GET",
    }).then((response) => {
      setBlogData(response.data);
    });
  }, [setBlogData, _id]);

  const handleChange = (e) => {
    e.preventDefault();
    // let inp=e.target;
    let input = e.target;
    let { name, value } = input;
    
    setUpdated({
      ...updated,
      [name]: value,
      UpdatedAt: new Date(),
      Delete: false,
    });
  };
  console.log(blogData);

  const editData = (e) => {
    e.preventDefault();
    axios.patch(`http://localhost:8080/blogs/${_id}/edit`, updated);

    navigate("/").then((response) => {
      console.log(response);
    });
  };
  return (
    <div>
      {blogData.map((el) =>
        edit ? (
          <div>
            <input type="text" name="title" onChange={handleChange} />
            <textarea
              placeholder="Updated the Blog......"
              name="body"
              onChange={handleChange}
            ></textarea>
            <button onClick={editData}>Update</button>
          </div>
        ) : (
          <div>
            <h1>{el.title}</h1>
            <p>{el.body}</p>
          </div>
        )
      )}

      <button onClick={() => setEdit(!edit)}>Edit</button>
    </div>
  );
};

export default EditPage;

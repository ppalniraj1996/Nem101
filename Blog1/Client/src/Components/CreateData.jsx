import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  styled,
  Typography,
  TextareaAutosize,
} from "@mui/material";

const CreateData = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const onValueChange = (e) => {
    const { value, name } = e.target;  
    setData({
      ...data,                     
      [name]: value,
      CreatedAt: new Date(),
      Deleted:false
    });
  };
  const addUserDetails = () => {
    axios({
      url: "http://localhost:8080/blogs/create",
      method: "POST",
      data,
    });
    navigate("/");
  };
  return (
    <Container>
      <Typography variant="h4">Blog</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Title</InputLabel>
        <Input onChange={onValueChange} name="title" id="my-input" />
      </FormControl>
      <Textarea
        rowsMin={5}
        placeholder="Tell your story..."
        name="description"
        onChange={onValueChange}
      />

      <FormControl>
        <Button variant="contained" color="primary" onClick={addUserDetails}>
          Post
        </Button>
      </FormControl>
    </Container>
 );
};

export default CreateData;

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;
const Textarea = styled(TextareaAutosize)`
  width: 100%;
  border: none;
  margin-top: 50px;
  font-size: 18px;
  &:focus-visible {
    outline: none;
  }
`;

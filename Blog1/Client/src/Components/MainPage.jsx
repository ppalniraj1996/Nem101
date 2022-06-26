import React from 'react'
import axios from "axios"
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from "react-router-dom"
import "./main.css"

const MainPage = () => {
    const [blogData,setBlogData]=useState([])
    
    useEffect(()=>{
        axios({
            url:"http://localhost:8080/blogs",
            method:"GET"
        })
        .then((response)=>{
            setBlogData(response.data)
        })
       
    },[setBlogData])
    console.log(blogData);
   

  return (
    <div>
        <Link to={"/blogs/create"}>New Blog </Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    blogData.map((el)=>(
                        !el.Delete?(
                        <tr>
                            <td>{el.id}</td>
                            <td>{el.title}</td>
                            <td>
                                <Link to={`/blogs/${el._id}/edit`}>EditT</Link>
                            </td>
                            <td>
                                <Link to={`/blogs/${el._id}`}>Delete</Link>
                            </td>
                        </tr>
                        ):("")
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default MainPage

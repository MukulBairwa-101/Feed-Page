import React,{useState,useEffect,useContext} from 'react'
import {GrFormView} from "../Assets/Icons"
import {FcLike} from "../Assets/Icons"
import {IoMdShareAlt} from "../Assets/Icons"
import {CgProfile} from "../Assets/Icons";
import  { AppContext }  from '../Context/AppContext'
import Button from "@material-ui/core/Button"
import {Link} from "react-router-dom"
// import { styled } from '@mui/material/styles';

import "../styles/PostPage.css";
const Feedpage1 = () => {
    const globalState =useContext(AppContext);
    const [post,setPost] = globalState.value1;
    // const sortByDate = globalState.value2;
    const [post1,setPost1]= useState([]);
    const[error,setError]= useState(false);
    useEffect(() => {

       const loadPage1 = async ()=>{
       const responseData = await fetch("http://www.mocky.io/v2/59b3f0b0100000e30b236b7e")
       .then(responseData=>responseData.json())
       .then(data =>setPost(data.posts))
       localStorage.setItem("post",JSON.stringify(post));
       if(!responseData){
            setError(true);
       }
       else setError(false)
        // console.log("fetched post ", post);        
       }

       
       loadPage1();  
    //    sortByDate();
    setPost1(post);
      
    }, [])

    const sortByDate =()=>{
        
        setPost1(post.sort((a, b) => b.event_date - a.event_date));
        setPost(post1);
        // post.sort((a, b) =>  b.event_date - a.event_date);
        // setPost(post)
    }   
    const sortByLikes =()=>{
        setPost1(post.sort((a, b) => b.likes - a.likes));
        setPost(post1);

    }
    const sortByViews =()=>{
        setPost1(post.sort((a, b) => a.views - b.views));
        setPost(post1);
    }
    const sortByShares =()=>{
        setPost1(post.sort((a, b) => b.shares - a.shares));
        setPost(post1);
    }
    const showDetail=()=>{
        
    }
    return (
        <div className="component_wrapper">
                 <h3>Recent Posts</h3>
             <div className="sortBtn_holder">
                 <Button variant="contained" color="primary" className="btn-s" onClick={()=>sortByDate()}>Date</Button>
                 <Button variant="contained"  color="primary"  className="btn-s"onClick={()=>sortByShares()}>Shares</Button>
                 <Button  variant="contained"  color="primary" className="btn-s"onClick={()=>sortByViews()}>Views</Button>
                 <Button  variant="contained" color="primary"  className="btn-s"onClick={()=>sortByLikes()}>Likes</Button>
            </div>
         <div className="postdata_wrapper">
           <div >
            {
                post.map((el)=>{
                    return(
                    <div className="postlist_wrapper">
                    <ul>
                     <li>
                        <div className="post_card">
                            <div className="post_img" >
                                <img src={el.thumbnail_image} alt="image" />    
                            </div>
                            <div className="post_detail">
                                <h2 className="post_title">{el.event_name}</h2>
                                <header>
                                     <h4> <CgProfile /> {el.id} </h4>
                                     <p> Published  At {el.event_date}</p>
                                     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, eos deserunt, repellendus suscipit eveniet illum  Explicabo.  </p>
                                </header>
                                <Link to ="/" onClick={(el)=>showDetail(el)} > Read More</Link>
                                <div className="count_btn">
                                    <span><GrFormView />{el.views}</span>
                                    <span><FcLike/> {el.likes}</span>
                                    <span><IoMdShareAlt /> {el.shares}</span>
                                </div>
                            </div>
                                
                        </div>
                    </li>
                    </ul>
                        
                    </div>
                    )
                })
            }
            </div>

           
     </div>      
            
           
         
        </div>
    )
}

export default Feedpage1;

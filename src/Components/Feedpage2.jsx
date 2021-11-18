// import React,{useState,useEffect,useContext} from 'react'
// import {GrFormView} from "../Assets/Icons"
// import {FcLike} from "../Assets/Icons"
// import {IoMdShareAlt} from "../Assets/Icons"
// import  { AppContext }  from '../Context/AppContext'
// const Feedpage2 = () => {
//     const globalState =useContext(AppContext);
//     const [post,setPost] = globalState.value1;


//     useEffect(() => {
//        const loadPage2 = async ()=>{
//        const responseData = await fetch("http://www.mocky.io/v2/59ac28a9100000ce0bf9c236")
//        .then(responseData=>responseData.json())
//        .then(data =>setPost(data.posts))
//         console.log("fetched post ", post);        
//        }

//        loadPage2();  
      
//     }, [])

//     return (
//         <div>
//             <h3>Recent Posts</h3>
//             {
//                 post.map((el)=>{
//                     return(
//                     <>
//                     <ul>
//                         <li>
//                         <div>
//                             <div >
//                                 <img src={el.thumbnail_image} alt="image" style ={{width:"30%", margin:"1rem"}} />    
//                             </div>
//                             <div>
//                                 <p> Post At {el.event_date}</p>
//                                 <div>
//                                 <span><GrFormView />{el.views}</span>
//                                 <span><FcLike/> {el.likes}</span>
//                                 <span><IoMdShareAlt /> {el.shares}</span>
//                                 </div>
                                
//                             </div>
//                             {/* <p>{el.likes}</p> */}
//                         </div>
//                         </li>
//                     </ul>
                        
//                     </>
//                     )
//                 })
//             }
//         </div>
//     )
// }

// export default Feedpage2;


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
const Feedpage2 = () => {
    const globalState =useContext(AppContext);
    const [post,setPost] = globalState.value1;
    const [post1,setPost1]= useState([]);

    useEffect(() => {
        const loadPage2 = async ()=>{
        const responseData = await fetch("http://www.mocky.io/v2/59ac28a9100000ce0bf9c236")
        .then(responseData=>responseData.json())
        .then(data =>setPost(data.posts))
         console.log("fetched post ", post);        
        }
    
        loadPage2(); 

        setPost1(post);
      
    }, [])

    const sortByDate =()=>{
        
        setPost1(post.sort((a, b) => b.event_date - a.event_date));
        setPost(post1);

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
                                <Link to ="/"> Read More</Link>
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

export default Feedpage2;



import React,{useState,useEffect,useContext} from 'react'
import {GrFormView} from "../Assets/Icons"
import {FcLike} from "../Assets/Icons"
import {IoMdShareAlt} from "../Assets/Icons"
import  { AppContext }  from '../Context/AppContext'
import "../styles/PostPage.css";
const Feedpage1 = () => {
    const globalState =useContext(AppContext);
    const [post,setPost] = globalState.value1;
    // const sortByDate = globalState.value2;
    const [post1,setPost1]= useState([]);

    useEffect(() => {
       const loadPage1 = async ()=>{
       const responseData = await fetch("http://www.mocky.io/v2/59b3f0b0100000e30b236b7e")
       .then(responseData=>responseData.json())
       .then(data =>setPost(data.posts))
        // console.log("fetched post ", post);        
       }

       loadPage1();  
      
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

    }

    return (
        <div className="component_wrapper">
                 <h3>Recent Posts</h3>
         <div className="postdata_wrapper">
           <div >
            {
                post.map((el)=>{
                    return(
                    <div className="postlist_wrapper">
                    <ul>
                        <li>
                        <div className="post_card">
                            <div >
                                <img src={el.thumbnail_image} alt="image" style ={{width:"30%", margin:"1rem"}} />    
                            </div>
                            <div>
                                <p> Post At {el.event_date}</p>
                                <div>
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
        <div>
            <h4>Sort By</h4>
            <div>
                 <button onClick={()=>sortByDate()}>Date</button>
                 <button onClick={()=>sortByLikes()}>Likes</button>
                 <button onClick={()=>sortByShares()}>Shares</button>
                 <button onClick={()=>sortByViews()}>Views</button>
            </div>
        </div>
     </div>      
            
           
         
        </div>
    )
}

export default Feedpage1;

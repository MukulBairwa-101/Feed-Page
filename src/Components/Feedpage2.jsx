import React,{useState,useEffect,useContext} from 'react'
import {GrFormView} from "../Assets/Icons"
import {FcLike} from "../Assets/Icons"
import {IoMdShareAlt} from "../Assets/Icons"
import  { AppContext }  from '../Context/AppContext'
const Feedpage2 = () => {
    const globalState =useContext(AppContext);
    const [post,setPost] = globalState.value1;


    useEffect(() => {
       const loadPage2 = async ()=>{
       const responseData = await fetch("http://www.mocky.io/v2/59ac28a9100000ce0bf9c236")
       .then(responseData=>responseData.json())
       .then(data =>setPost(data.posts))
        console.log("fetched post ", post);        
       }

       loadPage2();  
      
    }, [])

    return (
        <div>
            <h3>Recent Posts</h3>
            {
                post.map((el)=>{
                    return(
                    <>
                    <ul>
                        <li>
                        <div>
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
                            {/* <p>{el.likes}</p> */}
                        </div>
                        </li>
                    </ul>
                        
                    </>
                    )
                })
            }
        </div>
    )
}

export default Feedpage2;


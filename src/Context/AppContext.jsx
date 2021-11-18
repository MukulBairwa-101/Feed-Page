import React,{useState,createContext} from "react";

export const AppContext = createContext();
const Provider = (props) => {
    const [post,setPost] = useState([]); 

    // const sortByDate =()=>{

    // }
    // const sortBylikes =()=>{

    // }
    // const sortByShares =()=>{

    // }
    const globalStateObject = {
        value1:[post,setPost],
        // value2:sortByDate,
    }
    return (
        <div>
            <AppContext.Provider value ={globalStateObject} >
                {props.children}
            </AppContext.Provider>
        </div>
    )
}

export default Provider;

import React,{useState,createContext} from "react";

export const AppContext = createContext();
const Provider = (props) => {
    const [post,setPost] = useState([]); 

    const globalStateObject = {
        value1:[post,setPost],

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

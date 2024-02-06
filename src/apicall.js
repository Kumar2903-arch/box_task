import React, { useEffect, useState } from "react";

function Api_call(){
    const[number,setNumber] = useState([]);


    useEffect(()=> {
        const data = fetch("https://jsonplaceholder.typicode.com/posts");
        const value = data.then((item)=> item.json());
        value.then((apiData)=>setNumber(apiData));
    },[]);
    console.log(number,"apiData");
    return(
        <div className="container"> 
            {
                number.map((item,i)=>  {
                    return(
                        <div className="card">
                            <p><b>title:</b>{item.title}</p>
                            <p><b>body:</b>{item.body}</p>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default Api_call;
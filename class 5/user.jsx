import Emp from "./Emp";
let User = ()=>{
    let user_Data={
        uid:101,
        uname:"vijay",
        loc:["darsi","nandhigama","vijayawada"],
        email:"kamireddynavireddy3777@gmail.com"
    }

    return <div>
            <h3>User Component</h3>
            <hr/>
            <Emp employee={user_Data}/>
          </div>
}

export default user;
//import React from "react";
//class user extends react .component{
//   render()}
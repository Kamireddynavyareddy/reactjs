import CompB from "./componet 2.jsx"
let CompA = ()=>{
    let uid=101;
    let uname="vijay"

    return <div>
            <h3>Componet A</h3>
            <hr/>
            <CompB eid={uid} ename={uname}/>
           </div>

}
export default CompA
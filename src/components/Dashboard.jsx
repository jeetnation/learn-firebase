import {  NavLink,Outlet } from "react-router-dom"

const Dashboard = () => {

let styleObj = {
  display:'flex',
  flexDirection:'row',
  fontSize:'30px',
  color:'white',
  backgroundColor:'black',
  height:'100vh'
}


  return (
    <div style={styleObj}>
      <div style={{width:'30%',color:'black',background:'royalblue'}}>
     <NavLink to='/addStudent'style={{color:'white',display:'block'}}>Add student</NavLink>
     <NavLink to='/studentList' style={{color:'white',display:'block'}}>Student List</NavLink>
     <NavLink to='/AddFacuilty' style={{color:'white',display:'block'}}>Add Facuilty</NavLink>
     <NavLink to='/FacuiltyList' style={{color:'white',display:'block'}}>Facuilty List</NavLink>
      </div>
      <Outlet/>
      <div>



      </div>
    </div>
  )
}

export default Dashboard

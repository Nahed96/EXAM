import React, { useEffect, useState} from 'react'
import axios from "axios"
import {Link} from "react-router-dom" ;

const AllPizza = () => {

    ///--------------ReadAll

    //1 - useState
  const [AllPizza, setAllPizza] = useState([])

    //2 - useEffect
  useEffect(() => {
      axios.get("http://localhost:5000/api/pizza")
          .then((res) => {
              console.log(res.data)
              setAllPizza(res.data.AllPizza)
          })
          .catch(err => {
              console.log(err)
          })
  },  [])
  const DeletePizza = (pizzaId) => {
    axios.delete(`http://localhost:5000/api/pizza/${pizzaId}`)
    //--filter
    const filtredPizza = AllPizza.filter((eachPizza) => {
        if (eachPizza._id === pizzaId) {
            return false
        } else {
            return true
        }
    })
    setAllPizza(filtredPizza)

    
      
}
return (
    <div className="container">
        <div style={{ display: 'flex',justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 >Pizza Order </h1>
        <Link to="/pizza/new" > <button  className="btn btn-success" >Order a Pizza</button></Link>
        
        </div>
  
       
                <div>
                   <h2>Find All Orders of Pizza </h2> 
                <table className="table table-bordered">
                    <thead>
                        <tr>
                        <th>Created At</th>
                        <th>Pizza</th>
                        <th>Size</th>
                        <th>Delivered</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {AllPizza.map((onePizza) => (
                        <tr key={onePizza._id}>
                            <td>{onePizza.createdAt}</td>
                            <td>{onePizza.type}</td>
                            <td>{onePizza.size}</td>
                            <td>False</td>
                            <td>
                            <button onClick={() => { DeletePizza(onePizza._id) }} className="btn btn-danger" >
                                Remove
                            </button>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
</div> 
</div>
)
}
export default AllPizza

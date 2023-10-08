import axios from 'axios'
import React, { useState } from 'react'
import '../../src/App.css';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const CreatePizza = () => {

    const [errors, setErrors] = useState([]);
    const [ObjErrors, setObjErrors] = useState({});
    const navigate = useNavigate();

    //!-1 useState
    const [type, setType] = useState("")
    const [size, setSize] = useState("")
    const [note, setNote] = useState("")
    //!-2 SuBmitHandler
    const SubmitHandler = (e) => {
        e.preventDefault()
        const newPizza = {
            type,
            size,
            note
        }
        axios.post("http://localhost:5000/api/pizza", newPizza)
            .then(res => {
                console.log("Successfully submitted ✅✅✅")
                setType("")
                setSize("")
                setNote("")
                navigate('/');

                
             })
            .catch(err => {
                console.log(err.response.data.errors)
                const errorResponse = err.response.data.errors;
                const errorArr = []; 
                const ObjE = {}
                for (const key of Object.keys(errorResponse)) { 
                    errorArr.push(errorResponse[key].message)
                    ObjE[key] = errorResponse[key].message


                }
                // Set Errors
                setErrors(errorArr);
                setObjErrors(ObjE)
                console.log(errors)


            })
    }
    return (
     <div className="container pt-3">
                    <div className="container">
                         <div className="row">
                             <div className="col-md-6 d-flex justify-content-center align-items-center">
                                  <h1>{size}</h1>
                                  <div className="mx-2"></div>
                                  <h1>{type}</h1>
                            </div>
                        <div className="col-md-6">
                        <Link to="/">Go back home</Link>
                        </div>
                     </div>
</div>
          
          <form className="container p-3 my-3" onSubmit={SubmitHandler}>



      
            <div className="row">
              <div className="col-md-6">
              
                <label htmlFor="pizzaSelect">Pizzas</label>
                <select  className="form-select form-select-sm"  onChange={(e) => setType(e.target.value)} value={type}>
                <option > </option>
                  <option >Pepperoni</option>
                  <option >Cheese</option>
                  <option >Combination</option>
                  <option >Philly Cheese Steak</option>
                  <option >Hawaiian</option>
                  <option >Veggie</option>
                </select>
              </div>

              
              {ObjErrors.type ? <p style={{ color: "red" }} >{ObjErrors.type}</p> : null}



      
              <div className="col-md-6" >
                
                <label >Sizes</label>
                <select  className="form-select form-select-sm" onChange={(e) => setSize(e.target.value)} value={size}>
                  <option > </option>
                  <option >single</option>
                  <option >small</option>
                  <option>medium</option>
                  <option >large</option>
                </select>
                
              </div>

            {ObjErrors.size ? <p style={{ color: "red" }} >{ObjErrors.size}</p> : null}

            <div >
                <div className="col-md-6" style={{ display: 'flex',justifyContent: 'space-between'}} >
                <label>Notes</label>
                {ObjErrors.note ? <p style={{ color: "red" }} >{ObjErrors.note}</p> : null}
               </div>
              <div className="col-md-6"  style={{ display: 'flex',justifyContent: 'space-around'}}  >
                <textarea  rows={4} cols={50} onChange={(e) => setNote(e.target.value)} value={note} />
               <div id="order-now" class="col-md-6">
                
                        <button to="/"  className="btn btn-success "> Order Now!</button>
                </div>
                </div>
              
            </div>
            
          
            </div>
          </form>
        </div>
      );
      
    

}
export default CreatePizza
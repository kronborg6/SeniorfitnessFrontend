import { Button,Modal } from 'react-bootstrap';
import React, { useEffect, useState } from "react"
import './index.css';


const Dashboard = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [products, setProducts] = useState([])
    const [name, setName] = useState('');
    const [clas, setclas] = useState('');
    const [maxWeigt, setmaxWeigt] = useState();
    const [HowMany, setHowMany] = useState();
 
   useEffect(() => {
    fetch('http://localhost:8000/equipment')
        .then(res => {
            return res.json();
        }) 
        .then(data => {
            setProducts(data.equipment)
        });
   }, []);
   

   function handleRemove(id) {
    fetch(`http://172.16.3.91:8000/deleteequipment/${id}`, {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
    })
  }

   const handleSubmit = (e) =>{
    e.preventDefault();
    const data = {name, clas, maxWeigt, HowMany}

    fetch('http://localhost:8000/addequipment', {
      method: 'POST',
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify(data)
    }).then(()=>{
      console.log('new product has been added')
    })
   }
    return(
      <div class="container">
          <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"> 
          <div class="row ">
           
           <div class="col-sm-3 mt-5 mb-4 text-gred">
              <div className="search">
              </div>    
              </div>  
              <div class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred"><h2><b>Product Details</b></h2></div>
              <div class="col-sm-3 offset-sm-1  mt-5 mb-4 text-gred">
              <Button variant="primary" onClick={handleShow}>
                Add New Product
              </Button>
             </div>
           </div>  
            <div class="row">
                <div class="table-responsive " >
                 <table class="table table-striped table-hover table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name </th>
                            <th>Max Weight</th>
                            <th>Class </th>
                            <th>Amount </th>
                            <th>Action </th>
                        </tr>
                    </thead>
                    <tbody>
                    { products.map((product) => (
                        <tr>
                            <td key={product.id}>{product.id}</td>
                            <td>{product.namee} </td>
                            <td>{product.class} </td>
                            <td>{product.maxWeigt} </td>
                            <td>{product.HowMany} </td>
                            <td><Button variant="danger" onClick={() => handleRemove(product.id)}> Delete </Button></td>
                        </tr>
                    ))}                 
                    </tbody>
                </table>
            </div>   
        </div>  
 
        {/* <!--- Model Box ---> */}
        <div className="model_box">
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Record</Modal.Title>
        </Modal.Header>
            <Modal.Body>
            <form onSubmit={handleSubmit}>
                <div class="form-group">
                    <input class="form-control" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div class="form-group mt-3">
                    <input class="form-control" type="number" placeholder="Max Weight" value={maxWeigt} onChange={(e) => setmaxWeigt(e.target.value)}/>
                </div>
                <div class="form-group mt-3">
                    <input class="form-control" placeholder="Class" value={clas} onChange={(e) => setclas(e.target.value)}/>
                </div>
                <div class="form-group mt-3">
                    <input class="form-control" type="number" placeholder="Amount" value={HowMany} onChange={(e) => setHowMany(e.target.value)}/>
                </div>
                
                  <button type="submit" class="btn btn-success mt-4">Add Product</button>
                </form>
            </Modal.Body>
 
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
  
       {/* Model Box Finsihs */}
       </div>  
      </div>    
      </div>  
    )
}

export default Dashboard;

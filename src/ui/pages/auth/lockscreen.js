import React,{useState,useEffect} from 'react'
import { Container,Col,Row,Form } from 'react-bootstrap'
import {Link} from 'react-router-dom'

import { useDispatch, useSelector } from "react-redux";

const LockScreen = (props) => {
   
   const [show, setShow] = useState(false);

   useEffect(() => {
   })

    return (
        <>
            <div className={`rtl-box ${show===true?'show':''}`} >
               <button type="button" className="btn btn-light rtl-btn">
                        <svg onClick={()=>setShow(!show)} xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 20 20" fill="white">
                        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
               </button>
            </div>
       <section className="sign-in-page">
            <Container className="h-100">
               <Row className="justify-content-center align-items-center h-100">
                  <Col md="6" sm="12" className="col-12">
                     <div className="sign-user_card ">
                        <div className="sign-in-page-data">
                           <div className="sign-in-from w-100 m-auto">
                              <h4 className="mt-3 text-white mb-0 text-center">Hi ! Michael Smith</h4>
                              <p className="text-white text-center">Enter your password to access the admin.</p>
                              <Form className="mt-4">
                                 <Form.Group>
                                    <Form.Control type="email" className="mb-0" id="exampleInputEmail2" placeholder="Password" autoComplete="off" required/>
                                 </Form.Group>
                                 <div className="d-inline-block w-100">
                                    <Link to="/auth/sign-in" className="btn btn-primary float-right">Log In</Link>
                                 </div>
                              </Form>
                           </div>
                        </div>
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>
          

        </>
    )
}


export default LockScreen
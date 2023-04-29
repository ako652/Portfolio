import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebook, faYoutube, faInstagram ,faVimeoV } from '@fortawesome/free-brands-svg-icons'


export default function Contact(){
  return <div className='footerElement'>
        <div className='formcontact'>
  <Form className='mt-3' >
  <Form.Group  className='m-3'>
    
    <Form.Control type="email" placeholder="name@example.com" />
  </Form.Group>
  <Form.Group  className='m-3'>
    
    <Form.Control type="text" placeholder="first name" />
  </Form.Group>
  
  <Form.Group  className='m-3' variant="outline-secondary">
 
    <Form.Control as="textarea" rows={3} placeholder='Textarea' />
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1" className='m-3'>
 
  <Button variant="outline-secondary">Secondary</Button>{' '}
</Form.Group>
  
</Form>
        </div>
       
        <div>
        <h2>CONTACT US</h2>
       
        <FontAwesomeIcon icon={faFacebook} className='m-2' size='2xl'/>
        <FontAwesomeIcon icon={faYoutube} className='m-2' size='2xl'/>
        <FontAwesomeIcon icon={faInstagram} className='m-2' size='2xl'/>
        <FontAwesomeIcon icon={faVimeoV} className='m-2' size='2xl'/>
          <div className='m-3'>
        <h2>+1 (717) 9254 563</h2>
        <h2>+1 (717) 9254 563</h2>
        </div>


        </div>
    </div>
}
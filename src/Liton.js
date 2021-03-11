import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {Card} from 'react-bootstrap'
export default function Liton(props) {
    const [litonvystate,setlitonvy]=useState([])

    useEffect(async()=>{
      const data= await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log(data)
      setlitonvy(data.data)
    },[])

    return (
        <div className="container-fluid">
            <div className="row">
               
{litonvystate.map((item,index)=>{
    return(
        <Card key={index} style={{ width: '18rem' }} className="col-md-6">

<Card.Body>
  <Card.Title>{item.id}</Card.Title>
  <Card.Subtitle className="mb-2 text-muted">{item.title}</Card.Subtitle>
  <Card.Text>
    {item.body}
  </Card.Text>
  <Card.Link href="#">Card Link</Card.Link>
  <Card.Link href="#">Another Link</Card.Link>
</Card.Body>
</Card>

    )
})}
    
    

            
            </div>
          
        </div>
    )
}

import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import photo6 from '../images/photo6.png'
import photo3 from '../images/photo3.png'
import { Container, Row ,Col} from 'react-bootstrap';

export default function Grid() {
  return (
    <div className='gridcell'>
    
   <Container>
    <Row  >
    <Col sm={2} lg xs md={12}>
  <CardGroup className ='margin'>
  
 
  <Card>
    <Card.Img variant="top" src={photo6} alt="hacking tool"/>
    <Card.Body>
      <Card.Title>Newsletter subscription</Card.Title>
      <Card.Text>
        Using Node.js and express, I implemented a newspaper subscription, 
        Using https and post request, my data was saved in mailchip
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Visit my github profile</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={photo3} alt="hacking tool" />
    <Card.Body>
      <Card.Title>weatherApp</Card.Title>
      <Card.Text>
        Using Node.js and express.js , I created a weather app base on the location
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={photo3} alt="hacking tool" />
    <Card.Body>
      <Card.Title>Spotify clone</Card.Title>
      <Card.Text>
        I implemented spotify UI using HTML,CSS5,Bootstrap, and vanila Javascript,
    I used API developed by the backend and just display the data to my platform using fetch
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">learn more</small>
    </Card.Footer>
  </Card>
</CardGroup>
<CardGroup className ='margin'>
  
 
  <Card>
    <Card.Img variant="top" src={photo3} alt="hacking tool" />
    <Card.Body>
      <Card.Title>Nmap automation</Card.Title>
      <Card.Text>
        Using python , I automated my enumeration process, design and connected the ports to listen to my connection
        which i later scan the entire network for open ports
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">learn more</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={photo6} alt="hacking tool" />
    <Card.Body>
      <Card.Title>Information Security with HelmetJS - BCrypt</Card.Title>
      <Card.Text>
      BCrypt hashes are very secure. A hash is basically a fingerprint of the original data- always unique. This is accomplished by feeding the original data into an algorithm and returning a fixed length result. To further complicate this process and make it more secure, you can also salt your hash. Salting your hash involves adding random data to the original data before the hashing process which makes it even harder to crack the hash.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">learn more</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={photo3} alt="hacking tool" />
    <Card.Body>
      <Card.Title>python project</Card.Title>
      <Card.Text>
        Using python to configure raspberi pi and node.js to communicate with the computer hard , i developed a health check program 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">check github</small>
    </Card.Footer>
  </Card>
</CardGroup>
<CardGroup className ='margin'>
  
 
  <Card>
    <Card.Img variant="top" src={photo3} alt="hacking tool" />
    <Card.Body>
      <Card.Title>Shoping Cart</Card.Title>
      <Card.Text>
      using react.js to render components , i developed a shoping cart of different watches
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">learn more</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={photo3} alt="hacking tool" />
    <Card.Body bg="secondary">
      <Card.Title>Netflix clone</Card.Title>
      <Card.Text >
       A project using react framework and rendering different components to display the project.
       I also used API calls to display content dynamically 
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">visit my github </small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={photo3} alt="hacking tool" />
    <Card.Body>
      <Card.Title>geolocation attack</Card.Title>
      <Card.Text>
        I used powershell and python scripts to automated events and attacks, attacking  a vulnerable 
        machine which i used, the logs were later on investigated and 
        mapped out to see where the attacks are originating
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">learn more </small>
    </Card.Footer>
  </Card>
  
</CardGroup>
<div className='gridfooter'>
<Card className='bg-dark m-0'>
    
    <Card.Body>
      <Card.Title>project Portfolio</Card.Title>
      
    </Card.Body>
    <button > learn more</button>
  </Card>
 
  </div>
  </Col>
  </Row>
  </Container>
</div>
  );
}


     
import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import interClothes from '../../assets/Images/interClothes.jpg';
import "./prep.css";



function InterviewClothes() {
    return (
        <div >
            <Header />

            <div id='clothing'>
                <div className= 'clothing'>
                    <h1 className=' pt-3 text-center font-details pb-3'>Interview Clothes</h1>
                    <Container>
  {/* Stack the columns on mobile by making one full-width and the other half-width */}
  <Row className='pt-3 pb-5 align-items-center'>
    <Col xs={12} md={6}>
      <Row className='justify-content-center mb-2 mr-2'>
        <Image
        className='profile justify-content-end'
        alt='profile'
        src={interClothes}
        thumbnail
        fluid/>
      </Row>
    </Col>

    <Col xs={12} md={6}>
    <Row className=' align-items-start p-2 my details rounded'> <strong>&nbsp;Below are links to affordable interview Clothes</strong>
    <br/>    
    
    <Col className='d-flex justify-content-center flex-wrap'>
    
      <div>
        <a
        href='https://www.goodwill.org/locator/'
        target='_blank'
        rel='noopener noreferrer'>
          <Button className='m-2' variant='outline-success'> Goodwill</Button>
        </a>
  </div>
  <div>
        <a
        href='https://charity.lovetoknow.com/Locations_of_Salvation_Army_Stores'
        target='_blank'
        rel='noopener noreferrer'>
          <Button className='m-2' variant='outline-success'> Salvation Army Store </Button>
        </a>
      </div>
      
      </Col>
      </Row>
      </Col>
      </Row>
      </Container>
      </div>

                
            </div>
            <Footer />
            
        </div>
    )
}

export default InterviewClothes

import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect,useState } from "react";
import { Container,Row ,Col } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';



const ProductDetail = () => {
let {id}=useParams()
const [product, setProduct]=useState(null)
  const getProductDetail=async()=>{
    let url=`https://my-json-server.typicode.com/minsun283/website/products/${id}`
    let response=await fetch(url);
    let data =await response.json();
    console.log(data)
    setProduct(data)
  }
  useEffect(()=>{
    getProductDetail()
  },[])
  return (
    <Container className='deatail-page'>
      <Row>
        <Col><img  className='detail-font' src={product?.img}/></Col>
        <Col><div className='new'>{product?.new==true?"신제품":""}</div>
        <div> {product?.choice==true?"Conscious Choice":""}</div>
        <div className='detail-font'>{product?.title}</div>
        
        <div><Dropdown data-bs-theme="dark">
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
          사이즈
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" active>
          {product?.size[0]}
          </Dropdown.Item>
          <Dropdown.Item href="#/action-2">{product?.size[1]}</Dropdown.Item>
          <Dropdown.Item href="#/action-3">{product?.size[2]}</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-4">{product?.size[3]}</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown></div>

      <div className='detail-font'>{product?.price}원</div>
      <div><button className='order-button'>주문하기</button></div>
      </Col>
      </Row>
      </Container>
  )
}

export default ProductDetail
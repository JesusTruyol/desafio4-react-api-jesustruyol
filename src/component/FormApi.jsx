import React, {useState, useEffect } from 'react'
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const FormApi = ({infoApi, randon, infoFilter ,setInfoFilter, change, setChange}) => {
  const [dataInfo, setDataInfo]= useState([]);
  const [inputSearch, setinputSearch]= useState('');
  const [orderList, setOrderList]= useState(null)

  
  //let orderList='';
  useEffect(()=>{
    getInfo();
  },[infoApi])


  //Obtiene los datos de la Api y se filtra por un numero randon
  const getInfo= ()=> {

    setDataInfo(infoApi.filter((data)=> data.universe === randon))
    setInfoFilter(dataInfo)
    console.log('dataInfo')
    console.log(dataInfo)

  }

  //Se obtiene los datos buscados por caracteres
  const getData= (searchValue,option)=>{
    let newArrayList =[];
    newArrayList= dataInfo.filter((data) => data.name.toLowerCase().startsWith(searchValue.toLowerCase()));
    order(newArrayList,option)
  }
  //Obtiene los datos del Input
  const searchList = (e) => {
    e.preventDefault();
    let searchValue= e.target.value;

    setinputSearch(searchValue)
    getData(searchValue)
  };

  //ordena la Informacion
  const order=(newArrayList,option)=>{

    let arrayOrder= '';

    option === "ascend"? ascend(newArrayList):
    orderList === "ascend" && option === undefined? ascend(newArrayList):
    option === "descend"? descend(newArrayList):
    orderList === "descend" && option === undefined? descend(newArrayList):
    senInfo(newArrayList)
    
  }
  //Ordenar de forma ascendente
  const ascend=(newArrayList)=>{
    let arrayOrder= newArrayList.sort((a,b) => a.name.localeCompare(b.name));
    senInfo(arrayOrder)
  }
  //Ordenar de forma descendente
  const descend=(newArrayList)=>{
    let arrayOrder= newArrayList.sort((a,b) => a.name.localeCompare(b.name)).reverse();
    senInfo(arrayOrder)
  }
  //opcion para ordenar
  const orderOption=(e)=>{
    e.preventDefault();

    //orderList= e.target.value
    let option= e.target.value

    setOrderList(option)
    getData(inputSearch,option)
    console.log(orderList)
  }
  //Envio de información
  const senInfo=(newArrayList)=>{
    setInfoFilter(newArrayList)
    setChange(!change)
    console.log(infoFilter)
  }

  return (
    <div>
      <div className="conatiner-search px-2 pt-2">
        <Form >
          <Form.Label className="title-search m-0">
              <h3>Bucador de Luchadores</h3>
            </Form.Label>
          <Form.Group as={Row} className="seader-input">
            
            <Col className="select my-1" sm="5" md="5" lg="8">
            <Form.Select className='order' sm="5" md="5" lg="4" aria-label="Default select example"
              onChange={orderOption}
              >
                <option value="Seleciona el tipo de orden">Seleciona el orden</option>
                <option value="ascend">A-Z</option>
                <option value="descend">Z-A</option>

              </Form.Select>
            </Col>
            <Col className="search my-1" sm="5" md="5" lg="8">
            <Form.Control
                type="text"
                placeholder="Busca un luchador"
                value={inputSearch}
                onChange={searchList}
              />
              
            </Col>
          </Form.Group>
        </Form>
      </div>
    </div>
  )
}

export default FormApi
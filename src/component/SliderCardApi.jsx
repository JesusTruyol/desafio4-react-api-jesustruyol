import React,{useState, useEffect, useRef} from 'react'
import { Card } from 'react-bootstrap'
// import { motion } from 'framer-motion'
import Carousel from 'nuka-carousel/lib/carousel'

const SliderCardApi = ({infoFilter, change, setPerson}) => {
   
  const [imgs, setImgs]=useState([{id:null, imageUrl:null, name:null}]);
  const constraintsRef = useRef(null);

  // para renderizar es necezario efecutar algun cambbio en el orden o en la busqueda
  useEffect(()=>{
    imgsCards()
  },[infoFilter, change])

  const imgsCards=()=>{
    if(infoFilter.length=== 0){
      return imgs
    }else{
      let arrayImgs= infoFilter;
      setImgs(arrayImgs)
      console.log(imgs)
      return imgs
    }
    
  }

  const selectImg=(id)=>{
    console.log(id)
    let person= imgs.filter((img)=> img.id === id)
    setPerson(person)
    
  }
  
  return (
    <>
      {/* Se raliza el mapeo de las imagenes extraidas de los datos */}
      <Carousel wrapAround={true} slidesToShow={imgs.length > 5? 5: imgs.length } autoplay={true} autoplayInterval={4500} >
      {imgs.map(imgCard =>        
            <div className='slider-card m-2' key={imgCard.id} onClick={(e)=> selectImg(imgCard.id,e)}>
              <Card className='card-size '> 
                <Card.Img className='cardImg mx-2' variant="top" src={imgCard.imageUrl} alt={imgCard.name}/>
                <div className='baseImg'></div>
                <Card.Body> 
                  <Card.Title className='cardTitle m-0'>{imgCard.name}</Card.Title>
                </Card.Body>
              </Card>
            </div>
        )}
      </Carousel>
 
    </>
  )
}

export default SliderCardApi
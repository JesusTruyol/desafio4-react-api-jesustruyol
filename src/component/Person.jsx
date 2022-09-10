import React from 'react'

const Person = ({person}) => {
  
  return (
    <div>
      {/* Se coloca la imagen seleccionada con su información */}
      {person.length > 0?
      <div className='container-person m-2 py-3' key={person[0].id}>
        <div className='container-person-img'>
          <img className='person-img' src={person[0].imageUrl} alt={person[0].name} />
        </div>
        <div className='container-person-data'>
          <div className='description'>
            <h5>Planeta de Origen: </h5>
            <p>{person[0].originplanet}</p>
          </div>

          <div className='description'>
            <h5>Role: </h5>
            <p>{person[0].role}</p>
          </div>
          
          <div className='description'>
            <h5>Especie: </h5>
            <p>{person[0].status}</p>
          </div>
          
          <div className='description'>
            <h5>Status: </h5>
            <p>{person[0].originplanet}</p>
          </div>
          
          <div className='description'>
            <h5>Transformaciones: </h5>
            <p>{person[0].transform}</p>
          </div>
          
          <div className='description'>
            <h5>Universo: </h5>
            <p>{person[0].universe}</p>
          </div>
          
        </div>
      </div>
      :
      // Imagen principal con instrucciones
      <div className='container-person m-2 py-3'>
        <div className='container-person-img'>
          <img className='person-img' src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/71cdf756-d8b0-4a41-a149-c12a658511b3/day4d28-afb28b92-4831-4bcb-8ddf-656f47369356.png/v1/fill/w_1024,h_949,strp/super_shenlong_y_las_esferas_del_dragon_png_by_santiago84_day4d28-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTQ5IiwicGF0aCI6IlwvZlwvNzFjZGY3NTYtZDhiMC00YTQxLWExNDktYzEyYTY1ODUxMWIzXC9kYXk0ZDI4LWFmYjI4YjkyLTQ4MzEtNGJjYi04ZGRmLTY1NmY0NzM2OTM1Ni5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.LVlAHt6pR1SohCi8r_DKpKIySqQIAz6hmeILcBcgwXg" 
          alt="Super Shenlong Y Las Esferas Del Dragon" />
        </div>
        <div className='container-person-data'>
          <div className='description-primary'>
            <h5>Instrucciones: </h5>
            <p>* Selecciona un luchador desde la parte inferior para ver su información.</p>
            <p>* También puedes buscarlos y filtrarlos desde el menú de la izquierda</p>
          </div>
        </div>
      </div>
      }
    </div>
  )
}

export default Person
import React, {useState} from 'react'

function ContadorCarrito() {
const [count, setCount] = useState(1)
//crear logica por si las dudas.
  return (
    <div className='Container my-5 '>
      <div className='card text-center my-5'>
        <h1>Contador Carrito</h1>
          <div className='my-5'>
            <h2 className='my-5'>{count}</h2>
              <button className='btn btn-success mx-2' 
                        onClick={() => setCount(count +1)}
                        disabled={count ===10}>+</button>
              
              <button className='btn btn-danger mx-2' 
                        onClick={() => setCount(count-1)}
                        disabled={count ===0}>-</button>
              
              <button className='btn btn-secondary mx-2' onClick={() => setCount(0)}>Resetear</button>
      </div>
    </div>
  </div>
  );
}

export default ContadorCarrito;

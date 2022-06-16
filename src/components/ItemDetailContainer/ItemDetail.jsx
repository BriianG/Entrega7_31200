import React from 'react'


const ItemDetail =() =>{

    <div>
    {loading ? <h3>Cargando producto</h3>
                :
    <div className="row">
        <div className="card-body figure">
            <img src={productoUno.imageURL} alt="" className="w-25 figure-img img-fluid" />
        </div>

        <div className="col-md-6">
        <h2>nombre: {productoUno.producto}</h2>
        <h3>categoria: {productoUno.caracteristica}</h3>
        <h4>precio: {productoUno.precio}</h4>
        </div>
    </div>
}
    </div>
    
}


export default ItemDetail
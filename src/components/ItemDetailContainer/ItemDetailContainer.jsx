import { useState } from "react";
import { useEffect } from "react";
import { getFetchFilter } from '../../helpers/getFetch'
import {useParams} from "react-router-dom"

const ItemDetailContainer = () => {
    const[productoUno, setProductoUno] = useState({})
    const [loading, setLoading] = useState (true)



    useEffect(()=>{
        getFetchFilter()
        .then((resp)=>{ setProductoUno(resp) 
            setLoading(false)
            
        })
        .catch(err => console.log(err))
    },{})


    const ItemDetail = () =>{
    return (
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
    )
    }

return (
    <ItemDetail/>
)
}


export default ItemDetailContainer 
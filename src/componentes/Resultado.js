import React, { Component } from 'react';
import Imagen from './Imagen';
import Paginacion from './Paginacion';
class Resultado extends Component {
    mostrarImgs = ()=>{
        const imagenes= this.props.imagenes;
        if(imagenes.length === 0) return null;
        //console.log(imagenes);
        return(
            <React.Fragment>
                <div className="col-12 p-5 row">
                    {imagenes.map(imagen =>( 
                        <Imagen 
                        key={imagen.id}
                        imagen={imagen}/>
                    ))}
                </div>
                <Paginacion 
                paginaAnterior={this.props.paginaAnterior}
                paginaSiguiente={this.props.paginaSiguiente}/>
            </React.Fragment>  
        );
    }
    render() {
        return(
            <React.Fragment>
                {this.mostrarImgs()}
            </React.Fragment>
        );
    }
}
export default Resultado;
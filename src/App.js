import React, { Component } from 'react';
import Likes from './componentes/Likes'
import Resultado from './componentes/Resultado'
class App extends Component {
  state={
    termino: "cafe",
    imagenes : [],
    pagina: 1
  }
  scroll=()=>{
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth','start');
  }
  paginaAnterior =()=>{
    //leer el state de la pagina actual
    let pagina=this.state.pagina;
    //Si la pagina es 1 ya no ir hacia atras
    if (pagina===1) return null;
    //sumar 1 a la pagina atual
    pagina--;
    //agregar el cambio al state
    this.setState({
      pagina
    }, ()=>{
      this.consultarApi();
      this.scroll();
    })
  }
  paginaSiguiente =()=>{
    //leer el state de la pagina actual http://192.168.1.71:300/
    let pagina=this.state.pagina;
    //sumar 1 a la pagina atual
    pagina++;
    //agregar el cambio al state
    this.setState({
      pagina
    },()=>{
      this.consultarApi();
      this.scroll();
    })
  }
  consultarApi = ()=>{
    const pagina= this.state.pagina;
    const url = `https://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${this.state.termino}&per_page=30&page=${pagina}`;
    //console.log(url);
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({imagenes: resultado.hits}))
  }
  datosBusqueda = (termino)=>{
    this.setState({
      termino: termino,
      pagina: 1
    }, ()=>{
      this.consultarApi();
    })
  }
  render() {
      return(
        <div name="app container">
            <div className="jumbotron">
                <h1 className="lead text-center">Bucador de Imagenes</h1>
                <Likes
                  datosBusqueda={this.datosBusqueda}
                />
            </div>
            <div className="row justify-content-center">
              <Resultado
                imagenes={this.state.imagenes}
                paginaAnterior={this.paginaAnterior}
                paginaSiguiente={this.paginaSiguiente}
              />
            </div>
        </div>
      )
  }
}

export default App;

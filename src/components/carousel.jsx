const Asientos = ({ asientos = 0, filas = 0, columnas = 0 }) => {

    useEffect(() => {
      console.log(asientos)
      console.log(filas)
      console.log(columnas)
    }, [asientos, filas, columnas])
    
    const asientosSalas = []
    let contadorAsientos = 0;
    for (let index = 0; index < filas; index++) {
      const asientosFilas=[]
      for (let position = 0; position < columnas; position++) {
        const codigoAsiento =  `${String.fromCharCode(65 + index)}${contadorAsientos + 1}`
        if (contadorAsientos == asientos) {
          break;
        }
        asientosFilas.push(
          <button>{codigoAsiento}</button>
        )
        contadorAsientos++;
      }
      asientosSalas.push(asientosFilas)
      
    }
    return (
      <div>{asientosSalas }</div>
    )
  }
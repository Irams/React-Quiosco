export const formatearDinero = cantidad =>{
    return cantidad.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    })
}

export const formatearFecha = fecha =>{
    // console.log(fecha);
    return new Date(fecha).toLocaleDateString('es-MX',{
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    }) 
}
// console.log(formatearFecha);
import { useState } from "react";

function CatForm ({onSubmit}) {

    // Se crean los estados para los datos de la mascota
    const [nombre,setNombre] = useState('');
    const [propietario,setPropietario] = useState('');
    const [color,setColor] = useState('');
    const [edad,setEdad] = useState('');

    const handlenombreChange = (event) => {
        setNombre(event.target.value);
    }

    const handlepropietarioChange = (event) => {
        setPropietario(event.target.value);
    }

    const handlecolorChange = (event) => {
        setColor(event.target.value);
    }

    const handleedadChange = (event) => {
        setEdad(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit({nombre,propietario,color,edad})
        setNombre('')
        setPropietario('')
        setColor('')
        setEdad('')
    }
    
    // caja de texto para ingresar datos de la mascota
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Nombre de la mascota" value={nombre} onChange={handlenombreChange} required/>
            <input type="text" placeholder="Nombre del propietario" value={propietario} onChange={handlepropietarioChange} required/>
            <input type="text" placeholder="Color de la mascota" value={color} onChange={handlecolorChange} required/>
            <input type="number"  placeholder="Edad de la mascota" value={edad} onChange={handleedadChange} required/>
            <button type="submit"> Agregar Mascota </button>
        </form>
    );
}

export default CatForm;
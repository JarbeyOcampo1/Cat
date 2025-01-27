import { useState, useEffect } from "react";

function CatForm ({onSubmit, initialCat}) {

    // Se crean los estados para los datos de la mascota
    const [nombre,setNombre] = useState('');
    const [propietario,setPropietario] = useState('');
    const [color,setColor] = useState('');
    const [edad,setEdad] = useState('');

    useEffect(() => {
        if (initialCat) {
            setNombre(initialCat.nombre);
            setPropietario(initialCat.propietario);
            setColor(initialCat.color);
            setEdad(initialCat.edad);
        };
    },[initialCat]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const restData = {nombre,propietario,color,edad};
        onSubmit(restData);
        setNombre('');
        setPropietario('');
        setColor('');
        setEdad('');
    };
    
    // caja de texto para ingresar datos de la mascota
    return (
        <form onSubmit={handleSubmit} className="container mt-4 p-4 border rounded shadow-sm bg-light">
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">  Nombre de la mascota </label>
                <input type="text" className="form-control" placeholder="Nombre de la mascota" value={nombre} onChange={(e) => setNombre(e.target.value)} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="propietario" className="form-label"> Propietario </label>
                <input type="text" className="form-control" placeholder="Nombre del propietario" value={propietario} onChange={(e) => setPropietario(e.target.value)} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="color" className="form-label"> Color </label>
                <input type="text" className="form-control" placeholder="Color de la mascota" value={color} onChange={(e) => setColor(e.target.value)} required/>
            </div>
            <div className="mb-3">
                <label htmlFor="edad" className="form-label"> Edad </label>
                <input type="number"  className="form-control" placeholder="Edad de la mascota" value={edad} onChange={(e) => setEdad(e.target.value)} required/>
            </div>
            <button type="submit" className="btn btn-primary w-100">{initialCat ? 'Actualizar' : 'Agregar'}</button>
        </form>
    );
}

export default CatForm;
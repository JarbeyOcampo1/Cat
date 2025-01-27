const CatRow = ({cat, onEdit, onDelete}) => {
    
    // Funciónes para manejar el evento de editar y eliminar
    const handleEdit = () =>{
        onEdit(cat);
    }

    const handleDelete = () =>{
        onDelete(cat.catID);
    }
    
    // Se crea una fila con los datos de la mascota y dos botones para editar y eliminar
    return(
        <tr>
            <td>{cat.nombre}</td>
            <td>{cat.propietario}</td>
            <td>{cat.color}</td>
            <td>{cat.edad}</td>
            <td>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-primary" onClick={handleEdit}> Editar </button>
                    <button className="btn btn-danger" onClick={handleDelete}> Eliminar </button>
                </div>
            </td>
        </tr>
    );

}

export default CatRow;
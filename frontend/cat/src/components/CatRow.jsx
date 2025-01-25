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
                <button onClick={handleEdit}> Editar </button>
                <button onClick={handleDelete}> Eliminar </button>
            </td>
        </tr>
    );

}

export default CatRow;
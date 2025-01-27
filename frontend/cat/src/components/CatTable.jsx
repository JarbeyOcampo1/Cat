import CatRow from "./CatRow";

// Se crea una tabla con los datos de las mascotas
function CatTable ({cats, onEdit, onDelete}) {
    return(
        <div className="container mt-4">
            <table className="table table-striped table-bordered">
                <thead className="table-dark">
                    <tr>
                        <th> Nombre </th>
                        <th> Propietario </th>
                        <th> Color </th>
                        <th> Edad en años </th>
                        <th> Acciones </th>
                    </tr>
                </thead>
                <tbody>
                {cats && cats.length > 0 ? (
                    cats.map((cat) => (
                        <CatRow key={cat.catID} cat={cat} onEdit={onEdit} onDelete={onDelete}/>
                    ))
                    ) : (
                        <tr>
                            <td colSpan={"4"} className="text-center">No hay gatos ingresados</td>  
                        </tr>
                )}
                </tbody>
            </table>
        </div>
    );
}

export default CatTable;
import CatRow from "./CatRow";

// Se crea una tabla con los datos de las mascotas
function CatTable ({cats, onEdit, onDelete}) {
    return(
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Propietario</th>
                    <th>Color</th>
                    <th>Edad en años humanos</th>
                </tr>
            </thead>
            <tbody>
                {cats.map((cat) =>(
                    <CatRow key={cat.catID} cat={cat} onEdit={onEdit} onDelete={onDelete}/>
                ))}
            </tbody>
        </table>
    );
}

export default CatTable;
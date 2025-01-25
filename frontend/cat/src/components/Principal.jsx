import { useState, useEffect} from 'react'
import CatTable from './CatTable'
import CatForm from './CatForm'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Principal.css'

function Principal() {

  //crea un estado para los gatos y un estado para editar un gato
  const [cats, setCats] = useState([]);
  const [editingCat,setEditingCat] = useState(null);

  //actualiza por cada gato nuevo
  useEffect(() => {
    fetchCat();
  },[]);

  //recorre la lista de gatos y retora como respuesta
  const fetchCat = async () => {
    try {
        const response = await axios.get('http://localhost:8080/api/cat');
        setCats(response.data);
    } catch (error) {
        console.error('Error al cargar los gatos: ', error);
    }
  };

  //crea o actualiza el gato
  const CreateOrUpdate = async (catData) => {
    if (editingCat) {
      await axios.put(`http://localhost:8080/api/cat/${editingCat.catID}`,catData);
    } else {
      await axios.post(`http://localhost:8080/api/cat`,catData);
    }
    fetchCat();
    setEditingCat(null);
  };

  //Editar un gato
  const handleEditCat = (cat) => {
    setEditingCat(cat);
  };

  //Eliminar un gato con una id
  const handleDelete = async (catID) => {
    await axios.delete(`http://localhost:8080/api/cat/${catID}`);
    fetchCat();
  };

  //retorna la lista de gatos y el formulario para crear o editar un gato
  return (
    <div className='App'>
      <div>
        <Link className="button" to="/Imagenes"> Imagenes </Link>
      </div>
        <h1> Gatos y propietarios </h1>
        <br/>
        <h2> Lista de gatos </h2>
        <CatTable cats={cats} onEdit={handleEditCat} onDelete={handleDelete}/>
        <h3>{editingCat ? 'Editar gatos' : 'Crear gato'}</h3>
        <CatForm onSubmit={CreateOrUpdate} initialCat={editingCat}/>
    </div>
  );
}

export default Principal

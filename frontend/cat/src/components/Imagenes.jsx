import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Imagenes.css";

function Imagenes() {
    // Recuperar imágenes desde el Local Storage al cargar
    const [images, setImages] = useState(() => {
        const savedImages = localStorage.getItem("images");
        return savedImages ? JSON.parse(savedImages) : [];
    });
    // Recuperar URLs de vista previa desde el Local Storage al cargar
    const [loading, setLoading] = useState(() => {
        const savedLoading = localStorage.getItem("loading");
        return savedLoading ? JSON.parse(savedLoading) : [];
    });
    // Guardar imágenes y URLs en el Local Storage cuando cambien
    useEffect(() => {
        localStorage.setItem("images", JSON.stringify(images));
        localStorage.setItem("loading", JSON.stringify(loading));
    }, [images, loading]);
    // Manejar el cambio de imágenes
    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        const newImages = [...images];
        const newLoading = [...loading];

        files.forEach((file) => {
            newImages.push(file);
            newLoading.push(URL.createObjectURL(file));
        });

        setImages(newImages);
        setLoading(newLoading);
    };
    // Manejar la eliminación de imágenes
    const handleDeleteImage = (index) => {
        URL.revokeObjectURL(loading[index]);
        const newImages = images.filter((_, i) => i !== index);
        const newLoading = loading.filter((_, i) => i !== index);
        setImages(newImages);
        setLoading(newLoading);
    };

    return (
        <div>
            <div>
                <Link className="principal-home " to="/">Principal</Link>
            </div>
            <h2>Subir imágenes</h2>
            <input type="file" accept="image/*" onChange={handleImageChange} multiple />
            <br />

            {loading.length > 0 && (
                <div>
                    <h3>Vista Previa:</h3>
                    {loading.map((src, index) => (
                        <div key={index}>
                            <img className="img-one" src={src} alt={`Vista previa ${index + 1}`} />
                            <br />
                            <button className="button-one" onClick={() => handleDeleteImage(index)}>
                                Borrar imagen {index + 1}
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Imagenes;

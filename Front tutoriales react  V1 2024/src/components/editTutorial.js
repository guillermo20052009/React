import React, { useState, useEffect } from 'react';
import TutorialDataService from '../services/tutorial.service'; // Importa el servicio

function EditTutorial(props) {
  // Estados para gestionar los datos del formulario
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [published, setPublished] = useState(false);

  // Manejador de envío del formulario
  const handleSubmit = async (event) => {
    event.preventDefault(); // Evita que la página se recargue

    // Crea el objeto tutorial con los datos del formulario
    const tutorialData = {
      title: title,
      description: description,
      published: published
    };

    try {
      // Llama al método update de TutorialDataService
      await TutorialDataService.update(props.match.params.id, tutorialData);

      // Muestra mensaje de éxito
      alert('Tutorial actualizado con éxito');
      
      // Limpia el formulario si lo deseas
      setTitle('');
      setDescription('');
      setPublished(false);
    } catch (error) {
      // Maneja cualquier error
      console.error('Error al actualizar tutorial:', error);
      alert('Error al actualizar tutorial');
    }
  };

  // Al cargar el componente, obtenemos los datos del tutorial a editar
  useEffect(() => {
    // Obtenemos el ID del tutorial desde los parámetros de la URL
    const { id } = props.match.params;

    // Llamamos al servicio para obtener el tutorial por ID
    TutorialDataService.get(id)
      .then(response => {
        // Establecemos los valores en los estados
        setTitle(response.data.title);
        setDescription(response.data.description);
        setPublished(response.data.published);
      })
      .catch(e => {
        console.error('Error al obtener el tutorial:', e);
      });
  }, [props.match.params.id]); // Esto se ejecuta cada vez que el ID cambia

  return (
    <div className="container mt-4">
      <h2>Edit Tutorial</h2>
      <form onSubmit={handleSubmit}>
        {/* Input para el título */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter tutorial title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Input para la descripción */}
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Enter tutorial description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        {/* Checkbox para el estado de publicación */}
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="published"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="published">Published</label>
        </div>

        {/* Botón de enviar */}
        <button type="submit" className="btn btn-primary mt-3">Update Tutorial</button>
      </form>
    </div>
  );
}

export default EditTutorial;

import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.
  const initialFormState = {
      name: "",
      cuisine: "",
      photo: "",
      ingredients: "",
      preparation: "",
    }; 
  const [formData, setFormData] = useState({ ...initialFormState });
    const handleChange = ({ target }) => {
        const value = target.value;
        setFormData({
          ...formData,
          [target.name]: value,
        });
      };
  const handleSubmit = (event) => {
        event.preventDefault();
        createRecipe(formData);
        setFormData({ ...initialFormState });
      };
  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input 
                name="name" 
                placeholder="Name" 
                type="text" 
                onChange={handleChange}
                value={formData.name}/>
            </td>
            <td>
              <input 
                name="cuisine" 
                placeholder="Cuisine"
                type="text" 
                onChange={handleChange}
                value={formData.cuisine}/>
            </td>
            <td>
              <input 
                name="photo" 
                placeholder="URL"
                type="text" 
                onChange={handleChange}
                value={formData.photo}/>
            </td>
            <td>
              <textarea 
                name="ingredients" 
                placeholder="Ingredients"
                type="text" 
                onChange={handleChange}
                value={formData.ingredients}/>
            </td>
            <td>
              <textarea 
                name="preparation" 
                placeholder="Preparation"
                type="text" 
                onChange={handleChange}
                value={formData.preparation}/>
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;

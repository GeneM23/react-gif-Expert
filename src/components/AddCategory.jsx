import { useState } from "react"
import { GifExpertApp } from "../GifExpertApp";

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('one punch');
    
    const onInputChange = (event) =>{
        setinputValue(event.target.value);
    }

    const onSubmit = (event) =>{

        event.preventDefault();
        if( inputValue.trim().length <= 1) return;

        //setCategories( categories => [ inputValue, ...categories ]);
        onNewCategory( inputValue.trim());
        setinputValue('');
    }

  return (

    <form onSubmit={(event) => onSubmit(event)}>
          <input
        type="text"
        placeholder="buscar"
        value={ inputValue }
        onChange={ (event) => onInputChange(event) }
         />
    </form>
  

  )
}

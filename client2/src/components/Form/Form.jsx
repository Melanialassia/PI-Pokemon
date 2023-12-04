import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes, createPokemon } from "../../redux/actions/actions";
import { Link } from "react-router-dom";
import validate from "./validate";


const Form = () => {
    const dispatch = useDispatch();
    const types = useSelector((state) => state.types);

    const [input, setInput] = useState({
        name: "",
        image: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        types: []
    });

    useEffect(() => {
        dispatch(getTypes());
    }, []);

    const [errors, setErrors] = useState({});

    const disable = () => {
        for (let error in errors) {
            if (errors[error] !== "") {
                return true; // Deshabilita el botón si hay algún error
            }
        }
        return false; // Habilita el botón si no hay errores
    };

    const handleChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: event.target.value
        });

        setErrors(validate({
            ...input,
            [event.target.name]: event.target.value
        }));
    };

    const handleSelect = (event) => {
        setInput({
            ...input,
            types: [...input.types, event.target.value]
        });
       
        if(input.types.length>1){
           setInput({
            ...input,
           })
            setErrors(validate({
                ...input,
                [event.target.name]: event.target.value
            }));
        }

    };

    const handlerDelete = (typeToDelete) => {
        setInput({
            ...input,
            types: input.types.filter((type) => type !== typeToDelete)
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        if(input.length) {
              dispatch(createPokemon(input));
        setInput({
            name: "",
            image: "",
            hp: "",
            attack: "",
            defense: "",
            speed: "",
            height: "",
            weight: "",
            types: []
        });
        }else {
          alert("no se puede")
        }
        
    };

    return (
        <div>
            <div>
                <Link to={"/home"}>
                    <button >Volver</button>
                </Link>
            </div>
            <form onSubmit={(event) => handleSubmit(event)}>
                <h1>Crea tu pokemon</h1>
                <div>
                    <label htmlFor="name"> Nombre: </label>
                    <input
                        id="name"
                        type="text"
                        name="name"
                        value={input.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    {errors.name && <p>{errors.name}</p>}
                </div>
                <br />
                <div>
                    <label htmlFor="image">Imagen: </label>
                    <input
                        id="image"
                        placeholder="Imagen .png "
                        type="text"
                        name="image"
                        value={input.image}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div>
                    {errors.image && <p>{errors.image}</p>}
                </div>
                <br />
                <div>
                    <label htmlFor="hp">Hp: </label>
                    <input
                        id="hp"
                        type="number"
                        name="hp"
                        value={input.hp}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div>
                    {errors.hp && <p>{errors.hp}</p>}
                </div>
                <br />
                <div>
                    <label htmlFor="attack">Ataque: </label>
                    <input
                        id="attack"
                        type="number"
                        name="attack"
                        value={input.attack}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div>
                    {errors.attack && <p>{errors.attack}</p>}

                </div>
                <br />
                <div>
                    <label htmlFor="defense"> Defensa: </label>
                    <input
                        id="defense"
                        type="number"
                        name="defense"
                        value={input.defense}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div>
                    {errors.defense && <p>{errors.defense}</p>}
                </div>
                <br />
                <div>
                    <label htmlFor="speed">Velocidad: </label>
                    <input
                        id="speed"
                        type="number"
                        name="speed"
                        value={input.speed}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div>
                    {errors.speed && <p>{errors.speed}</p>}

                </div>
                <br />
                <div>
                    <label htmlFor="height">Altura: </label>
                    <input
                        id="height"
                        type="number"
                        name="height"
                        value={input.height}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div>
                    {errors.height && <p>{errors.height}</p>}
                </div>
                <br />
                <div>
                    <label htmlFor="weight">Peso: </label>
                    <input
                        id="weight"
                        type="number"
                        name="weight"
                        value={input.weight}
                        onChange={(event) => handleChange(event)}
                    />
                </div>
                <div>
                    {errors.weight && <p>{errors.weight}</p>}
                </div>
                <br />
                <div>
                    <label htmlFor="types">
                        Seleccione los tipos: </label>
                    <select
                        id="types"
                        onChange={(event) => handleSelect(event)}
                    >
                        {
                            types.map((e, index) => (
                                <option key={index} value={e.name}>
                                    {e.name}
                                </option>
                            ))
                        }
                    </select>
                </div>
                <div>
                    {errors.types && <p>{errors.types}</p>}
                </div>
                <div>
                    {
                        input.types.map((e, index) => (
                            <div key={index}>
                                <p>{e}</p>
                                <button onClick={() => handlerDelete(e)}>x</button>
                            </div>
                        ))
                    }
                </div>
                <br />
                <br />
                <button type="submit" disabled={disable()} >Crear</button>
                <br />
                <br />
            </form >
        </div >
    );
};

export default Form;
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes, createPokemon } from "../../redux/actions/actions";
import { Link } from "react-router-dom";
import validate from "./validate";
import "./Form.css";


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

        if (input.types.length > 1) {
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
        if (Object.keys(errors).length === 0) {
            dispatch(createPokemon(input));
            setInput({
                name: "",
                image: "",
                hp: "",
                attack: "",
                defense: "",
                speed: "",
                types: [],
                height: "",
                weight: ""
            });
        } else {
            alert("Tienes que llenar los campos obligatorios")
        }
    };

    return (
        <div className="container">
            <Link to={"/home"} >
                <button >Volver</button>
            </Link>
            <form onSubmit={(event) => handleSubmit(event)}>
                <h1>Crea tu pokemon</h1>
                <div className="formGroup">
                    <label htmlFor="name">Nombre:</label>
                    <div className="inputContainer">
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={input.name}
                            onChange={handleChange}
                            className="formInput"
                        />
                    </div>
                    {errors.name && (
                        <div className="errorContainer">
                            <p className="errorText">{errors.name}</p>
                        </div>
                    )}
                </div>

                <div>
                    <label htmlFor="image">Imagen: </label>
                    <input
                        id="image"
                        placeholder="Imagen .png "
                        type="text"
                        name="image"
                        value={input.image}
                        onChange={(event) => handleChange(event)}
                        className="formInput"
                    /> {errors.image && <p className="errorText">{errors.image}</p>}
                </div>

                <div>
                    <label htmlFor="hp">Hp: </label>
                    <input
                        id="hp"
                        type="number"
                        name="hp"
                        value={input.hp}
                        onChange={(event) => handleChange(event)}
                        className="formInput"
                    /> {errors.hp && <p className="errorText">{errors.hp}</p>}
                </div>

                <div>
                    <label htmlFor="attack">Ataque: </label>
                    <input
                        id="attack"
                        type="number"
                        name="attack"
                        value={input.attack}
                        onChange={(event) => handleChange(event)}
                        className="formInput"
                    />{errors.attack && <p className="errorText">{errors.attack}</p>}
                </div>

                <div>
                    <label htmlFor="defense"> Defensa: </label>
                    <input
                        id="defense"
                        type="number"
                        name="defense"
                        value={input.defense}
                        onChange={(event) => handleChange(event)}
                        className="formInput"
                    />{errors.defense && <p className="errorText">{errors.defense}</p>}
                </div>

                <div>
                    <label htmlFor="speed">Velocidad: </label>
                    <input
                        id="speed"
                        type="number"
                        name="speed"
                        value={input.speed}
                        onChange={(event) => handleChange(event)}
                        className="formInput"
                    /> {errors.speed && <p className="errorText">{errors.speed}</p>}
                </div>

                <div>
                    <label htmlFor="height">Altura: </label>
                    <input
                        id="height"
                        type="number"
                        name="height"
                        value={input.height}
                        onChange={(event) => handleChange(event)}
                        className="formInput"
                    /> {errors.height && <p className="errorText">{errors.height}</p>}
                </div>

                <div>
                    <label htmlFor="weight">Peso: </label>
                    <input
                        id="weight"
                        type="number"
                        name="weight"
                        value={input.weight}
                        onChange={(event) => handleChange(event)}
                        className="formInput"
                    /> {errors.weight && <p className="errorText">{errors.weight}</p>}
                </div>

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
                    </select>{errors.types && <p className="errorText">{errors.types}</p>}
                </div>
                <div>

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
                <button type="submit"> Crear</button>
                <br />
                <br />
            </form >
        </div >
    );
};

export default Form;
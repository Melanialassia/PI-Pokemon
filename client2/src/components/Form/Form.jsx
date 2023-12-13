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
        types: [],
        image: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
    });
    console.log("principio", input);

    useEffect(() => {
        dispatch(getTypes());
    }, []);

    const [errors, setErrors] = useState({});

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



    const handlerDelete = (typeToDelete) => {
        setInput({
            ...input,
            types: input.types.filter((type) => type !== typeToDelete)
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const obj = {
            name: input.name.toLowerCase(),
            types: input.types,
            image: input.image,
            hp: input.hp,
            attack: input.attack,
            defense: input.defense,
            speed: input.speed,
            height: input.height,
            weight: input.weight
        }
        console.log("obj", obj);
        if (Object.keys(errors).length === 0) {
            dispatch(createPokemon(obj));
            console.log(obj,"obj");
            setInput({
                name: "",
                types: [],
                image: "",
                hp: "",
                attack: "",
                defense: "",
                speed: "",
                height: "",
                weight: ""
            });
        } else {
            alert("Tienes que llenar los campos obligatorios");
        }
    };

    return (
        <div>
            <Link to={"/home"} className="button">
                <button >Volver</button>
            </Link>
            <div className="container">
                <form onSubmit={(event) => handleSubmit(event)}>
                    <h1>Crea tu pokemon</h1>
                    <div className="formGroup">

                        <div className="inputContainer">
                            <input
                                id="name"
                                placeholder="Nombre"
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
                        <input
                            id="image"
                            placeholder="Imagen .png "
                            type="text"
                            name="image"
                            value={input.image}
                            onChange={(event) => handleChange(event)}
                            className="formInput"
                        /> {errors.image && (
                            <div className="errorContainer">
                                <p className="errorText">{errors.image}</p>
                            </div>
                        )}
                    </div>

                    <div>
                        <input
                            id="hp"
                            placeholder="Hp"
                            type="number"
                            name="hp"
                            value={input.hp}
                            onChange={(event) => handleChange(event)}
                            className="formInput"
                        /> {errors.hp && (
                            <div className="errorContainer">
                                <p className="errorText">{errors.hp}</p>
                            </div>
                        )}
                    </div>

                    <div>
                        <input
                            id="attack"
                            placeholder="Ataque"
                            type="number"
                            name="attack"
                            value={input.attack}
                            onChange={(event) => handleChange(event)}
                            className="formInput"
                        />{errors.attack && (
                            <div className="errorContainer">
                                <p className="errorText">{errors.attack}</p>
                            </div>
                        )}
                    </div>

                    <div>
                        <input
                            id="defense"
                            placeholder="Defensa"
                            type="number"
                            name="defense"
                            value={input.defense}
                            onChange={(event) => handleChange(event)}
                            className="formInput"
                        />{errors.defense && (
                            <div className="errorContainer">
                                <p className="errorText">{errors.defense}</p>
                            </div>
                        )}
                    </div>

                    <div>
                        <input
                            id="speed"
                            placeholder="Velocidad"
                            type="number"
                            name="speed"
                            value={input.speed}
                            onChange={(event) => handleChange(event)}
                            className="formInput"
                        /> {errors.speed && (
                            <div className="errorContainer">
                                <p className="errorText">{errors.speed}</p>
                            </div>
                        )}
                    </div>

                    <div>
                        <input
                            id="height"
                            placeholder="Altura"
                            type="number"
                            name="height"
                            value={input.height}
                            onChange={(event) => handleChange(event)}
                            className="formInput"
                        /> {errors.height && (
                            <div className="errorContainer">
                                <p className="errorText">{errors.height}</p>
                            </div>
                        )}
                    </div>

                    <div>
                        <input
                            id="weight"
                            placeholder="Peso"
                            type="number"
                            name="weight"
                            value={input.weight}
                            onChange={(event) => handleChange(event)}
                            className="formInput"
                        /> {errors.weight && (
                            <div className="errorContainer">
                                <p className="errorText">{errors.weight}</p>
                            </div>
                        )}
                    </div>

                    <div>
                        <label htmlFor="types">
                            Seleccione los tipos: </label>
                        <select
                        id="types"
                            name="tipo"
                            onChange={(event) => handleSelect(event)}
                        >
                            {
                                types.map((e, index) => (
                                    <option key={index} value={e.name}>
                                        {e.name}
                                    </option>
                                ))
                            }
                        </select> {errors.types && (
                            <div className="errorContainer">
                                <p className="errorText">{errors.types}</p>
                            </div>
                        )}
                    </div>
                    <br />
                    <br />
                    <button type="submit"> Crear</button>
                </form >
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
            </div >
        </div>
    );
};

export default Form;
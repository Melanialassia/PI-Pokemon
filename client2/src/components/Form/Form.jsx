import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes, createPokemon } from "../../redux/actions/actions";
import { Link } from "react-router-dom";
import validate from "./Validate";


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

    const [errors, setErrors] = useState({});

    useEffect(() => {
        dispatch(getTypes());
    }, []);

    const handleChange = (event) => {
        setInput({
            ...input,
            [event.target.name]: [event.target.value]
        });

        if ([event.target.name]) {
            setErrors(validate({
                ...input,
                [event.target.name]: [event.target.value]
            }));
        }

    };

    const handleSelect = (event) => {
        // Verificar si el tipo ya está seleccionado
        if (input.types.includes(event.target.value)) {
            // Si ya está seleccionado, quitarlo (cambiar la selección)
            setInput({
                ...input,
                types: input.types.filter((type) => type !== event.target.value)
            });
        } else {
            // Si no está seleccionado y hay menos de dos tipos, agregarlo
            if (input.types.length < 2) {
                setInput({
                    ...input,
                    types: [...input.types, event.target.value]
                });
            } else {
                // Si ya hay dos tipos seleccionados, permitir reemplazar uno
                setInput({
                    ...input,
                    types: [event.target.value]
                });
            }
        }

        setErrors(validate({
            ...input,
            types: [...input.types, event.target.value]
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefaul();
        dispatch(createPokemon());
        setInput({
            name: "",
            image: "",
            hp: "",
            attack: "",
            defense: "",
            speed: "",
            height: "",
            weight: "",
            types: [],
        });
    };

    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            <label htmlFor="name"> Nombre: </label>
            <input
                id="name"
                placeholder="Nombre"
                type="text"
                name="name"
                value={input.name}
                onChange={handleChange}
            />
            {errors.name !== '' && <p>{errors.name}</p>}
            <br />
            <label htmlFor="image">Imagen: </label>
            <input
                id="image"
                placeholder="Imagen .jpg .jpeg .png .gif"
                type="text"
                name="image"
                value={input.image}
                onChange={(event) => handleChange(event)}
            />
            {errors.image !== '' && <p>{errors.image}</p>}
            <br />
            <label htmlFor="hp">HP: </label>
            <input
                id="hp"
                placeholder="HP"
                type="number"
                name="hp"
                value={input.hp}
                onChange={(event) => handleChange(event)}
            />
            {errors.hp !== '' && <p>{errors.hp}</p>}
            <br />
            <label htmlFor="attack">Ataque: </label>
            <input
                id="attack"
                placeholder="Ataque"
                type="number"
                name="attack"
                value={input.attack}
                onChange={(event) => handleChange(event)}
            />
            {errors.attack !== '' && <p>{errors.attack}</p>}
            <br />
            <label htmlFor="defense"> Defensa: </label>
            <input
                id="defense"
                placeholder="Defensa"
                type="number"
                name="defense"
                value={input.defense}
                onChange={(event) => handleChange(event)}
            />
            {errors.defense !== '' && <p>{errors.defense}</p>}
            <br />
            <label htmlFor="speed">Velocidad: </label>
            <input
                id="speed"
                placeholder="Velocidad"
                type="number"
                name="speed"
                value={input.speed}
                onChange={(event) => handleChange(event)}
            />
            {errors.speed !== '' && <p>{errors.speed}</p>}
            <br />
            <label htmlFor="height">Altura: </label>
            <input
                id="height"
                placeholder="Altura"
                type="number"
                name="height"
                value={input.height}
                onChange={(event) => handleChange(event)}
            />
            {errors.height !== '' && <p>{errors.height}</p>}
            <br />
            <label htmlFor="weight">Peso: </label>
            <input
                id="weight"
                placeholder="Peso"
                type="number"
                name="weight"
                value={input.weight}
                onChange={(event) => handleChange(event)}
            />
            {errors.weight !== '' && <p>{errors.weight}</p>}
            <br />
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
            <div>
                Tipos seleccionados: {input.types.join(', ')}
            </div>
            {errors.types && <p>{errors.types}</p>}
            <br />
            <br />
            <button type="submit">Crear</button>
            <br />
            <br />
            <div>
                <Link to={"/home"}>
                    <button>Volver</button>
                </Link>
            </div>
        </form >
    );
};

export default Form;
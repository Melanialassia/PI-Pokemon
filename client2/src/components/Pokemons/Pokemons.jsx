import Pokemon from "../Pokemon/Pokemon";
import {useSelector} from "react-redux"

const Pokemons = () => {
    const allPokemons = useSelector((state) => state.pokemons);

    return (
        <div>
            {allPokemons?.map((p) => {
                return (
                    <Pokemon
                        key={p.id}
                        id={p.id}
                        name={p.name}
                        image={p.image}
                        hp={p.hp}
                        attack={p.attack}
                        defense={p.defense}
                        speed={p.speed}
                        height={p.height}
                        weight={p.weight}
                        types={p.types}

                    />)
            })}
        </div>
    );
};

export default Pokemons;
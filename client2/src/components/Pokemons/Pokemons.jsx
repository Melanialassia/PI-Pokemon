import Pokemon from "../Pokemon/Pokemon";

const Pokemons = ({ allPokemons }) => {
    return (
        <>
            {allPokemons.map((p) => {
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
        </>
    );
};

export default Pokemons;

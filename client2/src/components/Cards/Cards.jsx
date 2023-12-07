import Pokemon from "../Pokemon/Pokemon";
import "./Cards.css"

const Cards = ({allPokemons , paginate, cantPokemons}) => {

    return (
        <div className="pokemonList">
            {
                allPokemons.slice(
                    (paginate - 1) * cantPokemons,
                    (paginate - 1) * cantPokemons + cantPokemons)
                    .map((p) => (
                      <Pokemon
                        key={p.id}
                        id={p.id}
                        name={p.name}
                        image={p.image}
                        types={p.types}
                      />
                    ))
            }
        </div>
    )
};

export default Cards;
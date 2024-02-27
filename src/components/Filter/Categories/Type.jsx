import FilterWrapper from "../FilterWrapper";
import FilterBtn from "../FilterBtn";

const types = [
  "Genetic experiment",
  "Superhuman (Ghost trains summoner)",
  "Parasite",
  "Human with antennae",
  "Human with ants in his eyes",
  "Fish-Person",
  "Cromulon",
  "Self-aware arm",
  "Cat-Person",
  "Human with baby legs",
  "Bepisian",
  "Hivemind",
  "Mytholog",
  "Human with giant head",
  "Dog",
  "Bird-Person",
  "Korblock",
  "Boobloosian",
  "Elephant-Person",
  "Superhuman",
  "Gromflomite",
  "Centaur",
  "Organic gun",
  "Microverse inhabitant",
  "Vampire",
  "Light bulb-Alien",
  "Animal",
  "Robot-Crocodile hybrid",
  "Zigerion",
  "Giant",
  "Cone-nippled alien",
  "Demon",
  "Shapeshifter",
  "Game",
  "Amoeba-Person",
  "Cronenberg",
  "Clone",
  "Robot",
  "Interdimensional gaseous being",
  "Flansian",
  "Zombodian",
  "Garblovian",
  "Gazorpian",
  "Eat shiter-Person",
  "Goddess",
  "Gazorpian reproduction robot",
  "Hammerhead-Person",
  "Hole",
  "Tuskfish",
  "Alphabetrian",
  "Cat",
  "Time God",
  "Unknown-nippled alien",
  "Krootabulan",
  "Plutonian",
  "Jellybean",
  "Tentacle alien",
  "Miniverse inhabitant",
  "Cyborg",
  "Larva alien",
  "Snail alien",
  "Tinymouth",
  "Lizard-Person",
  "Alligator-Person",
  "Monster",
  "Conjoined twin",
  "Sentient ant colony",
  "Human Gazorpian",
  "Boobie buyer reptilian",
  "Meeseeks",
  "The Devil",
  "Cat controlled dead lady",
  "Numbericon",
  "Octopus-Person",
  "Hairy alien",
  "Pickle",
  "Bread",
  "Mega Gargantuan",
  "Rat",
  "Gear-Person",
  "Blue ape alien",
];

function Type({type, setType, setPageNumber}) {
  return (
    <FilterWrapper>
      <details>
        <summary>Type</summary>
        <div>
          {
            types.map((item, index) => {
              return (
                <FilterBtn
                  param={type}
                  task={setType}
                  setPageNumber={setPageNumber}
                  key={item}
                  name="type"
                  index={index}
                  text={item} />
              )
            })
          }
        </div>
      </details>
    </FilterWrapper>
  );
}

export default Type;

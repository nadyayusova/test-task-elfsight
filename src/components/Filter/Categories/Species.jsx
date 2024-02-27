import FilterWrapper from "../FilterWrapper";
import FilterBtn from "../FilterBtn";

const specieses = [
  'human',
  'alien',
  'humanoid',
  'poopybutthole',
  'mythological',
  'unknown',
  'animal',
  'disease',
  'robot',
  'cronenberg',
  'planet'
];

function Species({species, setSpecies, setPageNumber}) {
  return (
    <FilterWrapper>
      <details>
        <summary>Species</summary>
        <div>
          {
            specieses.map((item, index) => {
              return (
                <FilterBtn
                  param={species}
                  task={setSpecies}
                  setPageNumber={setPageNumber}
                  key={item}
                  name="species"
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

export default Species;

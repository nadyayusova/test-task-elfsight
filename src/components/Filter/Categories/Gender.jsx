import FilterWrapper from "../FilterWrapper";
import FilterBtn from "../FilterBtn";

const genders = ['male', 'female', 'genderless', 'unknown'];

function Gender({gender, setGender, setPageNumber}) {
  return (
    <FilterWrapper>
      <details>
        <summary>Gender</summary>
        <div>
          {
            genders.map((item, index) => {
              return (
                <FilterBtn
                  param={gender}
                  task={setGender}
                  setPageNumber={setPageNumber}
                  key={item}
                  name="gender"
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

export default Gender;

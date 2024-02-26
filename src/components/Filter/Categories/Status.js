import FilterWrapper from "../FilterWrapper";
import FilterBtn from "../FilterBtn";

const statuses = ['alive', 'dead', 'unknown'];

function Status({status, setStatus, setPageNumber}) {
  return (
    <FilterWrapper>
      <details>
        <summary>Status</summary>
        <div>
          {
            statuses.map((item, index) => {
              return (
                <FilterBtn
                  param={status}
                  task={setStatus}
                  setPageNumber={setPageNumber}
                  key={item}
                  name="status"
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

export default Status;

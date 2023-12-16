import './Item.css'

export function Item(props) {
  const { data, deleteStudent } = props;

  return (
    <>
      <li key={data.id} className={data.gender}>
        <div className="listStudent">
          id: {data.id} {data.name}
          <button
            className="deleteButton"
            type="button"
            onClick={() => {
              deleteStudent(data.id);
            }}
          >
            delete
          </button>
        </div>
      </li>
    </>
  );
}

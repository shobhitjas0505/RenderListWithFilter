

function HeaderComponent(props) {

  function handleEachCheckbox(event) {
    let target = event.target;
    if(target){
      let value = target.value;
      let checked = target.checked;
      props.updateFilterState(value,checked);
    }
  }


  return (
    <div>
      <span>
        <input
          type="checkbox"
          id="All"
          name="All"
          defaultChecked="checked"
          onClick={handleEachCheckbox}
          value="all"
          margin="10px"
        />
        <label htmlFor="All">All</label>

        <input
          type="checkbox"
          id="Type0"
          name="Type0"
          onClick={handleEachCheckbox}
          value="0"
          margin="10px"
        />
        <label htmlFor="Type0">Type0</label>

        <input
          type="checkbox"
          id="Type1"
          name="Type1"
          onClick={handleEachCheckbox}
          value="1"
          margin="10px"
        />
        <label htmlFor="Type1">Type1</label>

        <input
          type="checkbox"
          id="Type2"
          name="Type2"
          onClick={handleEachCheckbox}
          value="2"
          margin="10px"
        />
        <label htmlFor="Type2">Type2</label>

        <input
          type="checkbox"
          id="Type3"
          name="Type3"
          onClick={handleEachCheckbox}
          value="3"
          margin="10px"
        />
        <label htmlFor="Type3">Type3</label>

        <input
          type="checkbox"
          id="Type4"
          name="Type4"
          onClick={handleEachCheckbox}
          value="4"
          margin="10px"
        />
        <label htmlFor="Type4">Type4</label>
      </span>
    </div>
  );
}

export default HeaderComponent;

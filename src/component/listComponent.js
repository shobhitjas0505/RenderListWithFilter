import React, { useState, useEffect } from "react";
import EachList from "./eachList";



function ListComponent(props) {
  const [allUserList, setAllUserList] = useState([]);

  useEffect(() => {
    setAllUserList(props.allUserList);
  }, [props.allUserList]);



  function renderAllListItems() {
    let renderedListItems;
    if (allUserList && allUserList.length > 0) {
      renderedListItems = allUserList.map((eachListData) => {
        return (
          <EachList key={eachListData.index} eachListData={eachListData} />
        );
      });
    } else {
      renderedListItems = <tr className="tableRow">
          <td className="td_index" style={{ color: "red", padding: "10px", textAlign: "left" }}>
            Missing Data
          </td>

          <td className="td_wallet1" style={{ color: "red", padding: "10px", textAlign: "left" }}>
            Missing Data
          </td>

          <td className="td_wallet2" style={{ color: "red", padding: "10px", textAlign: "left" }}>
            Missing Data
          </td>

          <td className="td_wallet3" style={{ color: "red", padding: "10px", textAlign: "left" }}>
            Missing Data
          </td>

          <td className="td_fullName" style={{ color: "red", padding: "10px", textAlign: "left" }}>
            Missing Data
          </td>

          <td className="td_email" style={{ color: "red", padding: "10px", textAlign: "left" }}>
            Missing Data
          </td>

          <td className="td_type"  style={{ padding: "10px", textAlign: "left" }}>
            Missing Data
          </td>
      </tr>;
    }

    return renderedListItems;
  }

  return (
    <div>
      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ color: "Blue" , textAlign: "left",Font: "Bold",padding : "10px"}}>Index</th>
            <th style={{ color: "Blue" , textAlign: "left",Font: "Bold",padding : "10px"}}>Wallet1</th>
            <th style={{ color: "Blue" , textAlign: "left",Font: "Bold",padding : "10px"}}>Wallet2</th>
            <th style={{ color: "Blue" , textAlign: "left",Font: "Bold",padding : "10px"}}>Wallet3</th>
            <th style={{ color: "Blue" , textAlign: "left",Font: "Bold",padding : "10px"}}>Name</th>
            <th style={{ color: "Blue" , textAlign: "left",Font: "Bold",padding : "10px"}}>Email</th>
            <th style={{ color: "Blue" , textAlign: "left",Font: "Bold",padding : "10px"}}>Type</th>
          </tr>
      </thead>
      <tbody>
          {renderAllListItems()}
      </tbody>
    </table>
</div>
  );
}
export default ListComponent;

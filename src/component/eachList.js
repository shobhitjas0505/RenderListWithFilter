import React, { useState ,useEffect} from "react";

function EachList(props) {

  const [eachListData, setEachListData] = useState([]);

  useEffect(() => {
    setEachListData(props.eachListData);
  }, [props.eachListData]);



  function renderEachList(){
    let defaultTableRow = <tr className="tableRow">
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

    let eachListDom ;
    if(eachListData){
      eachListDom = <tr className="tableRow">
          <td className="td_index" style={{ color: "red", padding: "10px", textAlign: "left" }}>
            {eachListData.index}
          </td>

          <td className="td_wallet1" style={{ color: "red", padding: "10px", textAlign: "left" }}>
            {eachListData.wallet1}
          </td>

          <td className="td_wallet2" style={{ color: "red", padding: "10px", textAlign: "left" }}>
            {eachListData.wallet2}
          </td>

          <td className="td_wallet3" style={{ color: "red", padding: "10px", textAlign: "left" }}>
            {eachListData.wallet3}
          </td>

          <td className="td_fullName" style={{ color: "red", padding: "10px", textAlign: "left" }}>
            {eachListData.fullName}
          </td>

          <td className="td_email" style={{ color: "red", padding: "10px", textAlign: "left" }}>
            {eachListData.email}
          </td>

          <td className={`td_type color${eachListData.type}`}  style={{ padding: "10px", textAlign: "left" }}>
            {eachListData.type}
          </td>
      </tr>
    }else{
      eachListDom = defaultTableRow
    }
    return eachListDom;
  }


  return (
    <>
   {renderEachList()}
   </>
  );
}

export default EachList;

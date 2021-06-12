import React, { useState, useEffect } from "react";
import ListComponent from "./component/listComponent";
import HeaderComponent from "./component/headerComponent";
import { getUserData } from "./utils/utils.js";
import { API_END_POINT } from "./constant/commonData";

const defaultFilterState = {
  0:true,
  1:true,
  2:true,
  3:true,
  4:true,
};

function App() {
  //We have Three States


  const [allUserList, setAllUserList] = useState([]);
  //1.0 allUserList will only Set once when , API Return Data


  const [filterUserList, setFilterUserList] = useState([]);
  // 2.0 filterUserList will set when there is any change in Filter, We will Set it in a UseEffect which  have a 
  // dependency on filterState

  
  const [filterState, setFilterState] = useState(defaultFilterState);
  //3.0 allUserListfilterState will set when there is any change in Filter done by user



  useEffect(() => {
    //This is Initial Use Effect , should be Call only Once
    getinitialUserData();
    function getinitialUserData() {
      let userData = getUserData(API_END_POINT);
      setAllUserList(userData.items);
      setFilterUserList(userData.items);

      //Initially We are Setting API data to Both Lists, via setAllUserList and setFilterUserList
    }
  }, []);



  useEffect(() => {

    // This useEffect is dependent on filterState as said in point 2.0
    // It Will update filter User List based on current filterState

    updateListonFilterUpdate();

    function updateListonFilterUpdate(){
      let filterUserList_local = allUserList.filter(function(thisUserData){
        //Check each user ,if he should be included in the filter User List or not
        return shouldIncludeUser(thisUserData);
      });

      //Set the All elligible Users to Filter List via setFilterUserList
      setFilterUserList(filterUserList_local);
    }

    
    function shouldIncludeUser(thisUserData){
      let thisUserType = thisUserData.type;
      if(filterState[thisUserType]){
        return true;
      }else{
        return false;
      }
    }

  }, [filterState]);




  function updateFilterState(value,checked){
    //This Function will be Called when user Change any filterState

    let oldFilterState = JSON.parse(JSON.stringify(filterState));
    oldFilterState[value] = checked;

    //Update filterState as per Selected Filters , via setFilterState. 
    setFilterState(oldFilterState);

    // We can only Listen to the Updated state in a saperate UseEffect because , Setting State variable is async operation
  }


  //Render ListComponent will always get data based on filterUserList, and will be called automatically on any change on  filterUserList 
  
  return (
    <div>
      <HeaderComponent updateFilterState={updateFilterState}></HeaderComponent>
      <ListComponent allUserList={filterUserList}></ListComponent>
    </div>
  );
}

export default App;

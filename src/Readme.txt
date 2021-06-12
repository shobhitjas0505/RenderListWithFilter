Each List Component Banaya (Each List Ko Render Karega)
Header Component Banya (Jo Filter Ko Render Karega Filter ka data ise props se milega or functions bhi props se milege Ye function actually mai app .js mai hoge)
List Component Banaya (Ye component complete List ko render karega ise data app.js se props se milega)
Common Data js banaya (Jisme puri app ke constants Hoge ) 
Static Data js bayaya Static Available data ko call karne ke liye (Only for temp debuging)
Humne Utils .js banaya Data ko call karne ke liye (Util js ke andar saare util function hoge : jese ki network se baate karna ya other)
App js File mai use state ka use kiya  :  Getter And Setter use kar ke And Usme Empty Array Paas Kiya 
App js File mai use Effect ka use kiya or getinitialUserData() function banaya jism initial data ko insert kiya 
All user list maii items ko daal diyaa
List component maii all user List ko paas Kiyaa 
 
 -List component

 Default user list maii sample data .items ko push kiya 
 use state ke throuh setter (setAllUserList) ko or gettrr (allUserList) ko initially push kiya
 hume hamesha updated data chahiye so humne set all user list mai props .all user list update ki 
 1 check lagaya all user list ki length 0 se jayada hai 
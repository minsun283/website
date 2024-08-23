import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom"; 
import { useState } from "react";


const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    "여성",
    "남성",
    "신생아/유아",
    "아동",
    "sale",
    "지속가능성",
  ];
  let [width, setWidth] = useState(0);
  const navigate = useNavigate()

  const goToLogin=()=>{
    navigate('/Login')
  }

  const search=(event)=>{
   if(event.key=="Enter"){
    let keyword = event.target.value
    navigate(`/?q=${keyword}`)//url 바꿔주는건 네이게이트 
   }
  }



  return (
    <div>
      <div className="top-line">
      <div className="input-box">
          <FontAwesomeIcon icon={faSearch}/>
          <input type="text" onKeyPress={(event)=>search(event)}/>
        </div>

      {authenticate?(
        <div className="login-button" onClick={()=>setAuthenticate(false)}>
          <FontAwesomeIcon icon={faUser} /> 
          <div className="login">로그아웃</div>
        </div>) :
        ( <div className="login-button" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} /> 
          <div className="login">로그인</div>
        </div>)
}

      </div>
      <div className="logo-section">
        <img
          width={120}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOSWOhkrtrLKgKz35SOCEsZV-v2q_yeKpMgw&s" onClick={()=>navigate('/')}
        ></img>
      </div>
      <div className="menu-line">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li>{menu}</li>
          ))}
        </ul>
        
      </div>
    </div>
  );
};

export default Navbar;

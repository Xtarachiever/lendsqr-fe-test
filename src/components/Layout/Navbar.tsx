import Input from '../ReusableInputs/Input';
import Logo from '/logo.svg';
import { LiaBell } from "react-icons/lia";
import { LuUserCircle } from "react-icons/lu";
import { IoSearchOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [openProfile, setOpenProfile] = useState<boolean>(false);
  const navigate = useNavigate();
  return (
    <div className='navbar_container'>
      <div onClick={()=>navigate('/users')}>
        <img src={Logo} alt='Logo'/>
      </div>
      <div className='search_input'>
        <Input placeholder='Search for anything' value='' onChange={()=>{}}/>
        <span className='icon'><IoSearchOutline /></span>
      </div>
      <div className='user_profile desktop'>
        <span className='docs'>Docs</span>
        <LiaBell fontSize={'1.3rem'}/>
        <LuUserCircle  fontSize={'1.6rem'}/>
        <p className='user_profile_details'>Adedeji <IoMdArrowDropdown /></p>
      </div>
      <div className='mobile'>
        <div onClick={()=>setOpenProfile(!openProfile)}>
          <LuUserCircle  fontSize={'2.2rem'}/>
          <IoIosArrowDown fontSize={'1.5rem'} className='profile_arrow'/>
        </div>
        {
          openProfile &&
          <div className='mobile_user_profile'>
            <span className='docs'>Docs</span> <br />
            <span>Notifications</span>
          </div>
        }
      </div>
    </div>
  )
}

export default Navbar
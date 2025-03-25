import React, { useState, useEffect } from "react";
import HeaderProps from './HeaderProps'
import ImgHeader from './ImgHeader'
import { Search } from './Search';
import './Header.css';

const Header = () => {
  return (
    <div>
        <HeaderProps/>
        <ImgHeader />
        <Search/>
       
    </div>
  )
}

export default Header
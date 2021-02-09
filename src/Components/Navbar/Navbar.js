import React, { useRef, useEffect, useState } from "react";
import { NavLink as LinkNav } from "react-router-dom";
import LogoBlack from "../../Assets/Images/penacova_logo.svg";
import LogoWhite from "../../Assets/Images/penacova_logo_white.svg";
import { Nav, List, Item } from "./Style";
import { Avatar } from "@material-ui/core";
import styled from "styled-components";

export const NavLink = styled(LinkNav)`
  text-decoration: none;
`;

function Navbar() {
  const localTheme = window.localStorage.getItem("theme");
  return (
    <Nav className="navbar">
      <div className="container-fluid ">
        <>
          {localTheme === "Light" ? (
            <img id="Logotipo" src={LogoBlack} alt="Municipio de Penacova" />
          ) : (
            <img id="Logotipo" src={LogoWhite} alt="Municipio de Penacova" />
          )}
        </>
        <div className="d-none d-sm-none d-md-none d-lg-block">
        <List>
          <NavLink to="/">
            <Item>Dashboard</Item>
          </NavLink>
          <NavLink to="/eventos">
            <Item>Eventos</Item>
          </NavLink>
          <NavLink to="/utilizadores">
            <Item>Utilizadores</Item>
          </NavLink>
          <NavLink to="/conteudos">
            <Item>Conteúdos</Item>
          </NavLink>
        </List>
        </div>
        <List>
          <Avatar style={{ width: 35, height: 35, backgroundColor: "#3CA661" }}>
            <span style={{ fontSize: 14 }}>P</span>
          </Avatar>
        </List>
      </div>
    </Nav>
  );
}

export default Navbar;

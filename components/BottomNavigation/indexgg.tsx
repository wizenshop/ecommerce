"use client";

import React, { useState, useEffect } from "react";
import Link from 'next/link'

import * as Style from "./styles";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { styled, keyframes, css } from "../../../styles";

import { BiHomeAlt, BiUser } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";

const NavigationMenuLink = styled(NavigationMenu.Link, {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  outline: "none",
  userSelect: "none",
  fontWeight: 500,
  lineHeight: 1,
  borderRadius: 4,
  color: "$colorDefaultMenuIcon",
  textDecoration: "none",
  fontSize: 10,
  "&:focus": {},
});

const activeItemStyles = {
  color: "$colorActiveMenuIcon",
};


export function BottomNavigation() {

  const [activeItem, setActiveItem] = useState("home");

  useEffect(() => {
    // volta a cor original da home sempre que o usuário mudar de página
    setActiveItem("home");
  }, []);

  return (
    <header>
      <Style.NavigationMenuList>
        <NavigationMenu.Item>
          <NavigationMenuLink
            style={activeItem === "home" ? activeItemStyles : {}}
            onClick={() => setActiveItem("home")}
            href="/"
          >
            <BiHomeAlt size={25} />
            <span> Home </span>
          </NavigationMenuLink>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenuLink
            style={activeItem === "carrinho" ? activeItemStyles : {}}
            onClick={() => setActiveItem("carrinho")}
            href="/carrinho"
          >
            <AiOutlineShoppingCart size={25} />
            Carrinho
          </NavigationMenuLink>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenuLink
            style={activeItem === "perfil" ? activeItemStyles : {}}
            onClick={() => setActiveItem("perfil")}
            href="/perfil"
          >
            <BiUser size={25} />
            Perfil
          </NavigationMenuLink>
        </NavigationMenu.Item>
      </Style.NavigationMenuList>
    </header>
  );
}



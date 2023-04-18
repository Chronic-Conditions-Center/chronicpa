import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import styled from 'styled-components'

import { FaChevronDown } from 'react-icons/fa';

const flatListToHierarchical = (
    data = [],
    { idKey = "id", parentKey = "parentId", childrenKey = "children" } = {}
  ) => {
    const tree = []
    const childrenOf = {}
    data.forEach(item => {
      const newItem = { ...item }
      const { [idKey]: id, [parentKey]: parentId = 0 } = newItem
      childrenOf[id] = childrenOf[id] || []
      newItem[childrenKey] = childrenOf[id]
      parentId
        ? (childrenOf[parentId] = childrenOf[parentId] || []).push(newItem)
        : tree.push(newItem)
    })
    return tree
  }

const HeaderMenu = () => {
    const { wpMenu } = useStaticQuery(graphql`
    query WPMenuQuery {
      # if there was more than one user, this would need to be filtered
      wpMenu(locations: { eq: HEADER_MENU }) {
        id
        name
        menuItems {
        nodes {
            id
            label
            title
            path
            parentId
        }
        }
      }
    }
  `)

  const wpMenuHierarchy = flatListToHierarchical(wpMenu.menuItems.nodes)

  return  (<MainNav>
    <ul class="main-menu">
        {wpMenuHierarchy.map((item) => {
            if (item.children.length > 0) {
                return (
                    <li class={"has-submenu"}>{item.label} <FaChevronDown size={12}/>
                        <ul class={`submenu ${item.children.length > 5 ? "large" : ""}`}>
                            {item.children.map((child) => {
                                return (
                                    <li><Link to={child.path}>{child.label}</Link></li>
                                )
                            })}
                        
                        </ul>
                    </li>
                )
        } else {
            return <li><Link to={item.path}>{item.label}</Link></li>
        }
    })}
    </ul>
  </MainNav>)
}

const MainNav = styled.nav`
    opacity: 1;
    visibility: visible;
    transition-duration: .3s;
    ul.main-menu {
        list-style: none;
        display: flex;
        margin-bottom: 0;
        margin-top: 0px;
        > li {
            color: #4c5166;
            font-family: "Roboto Slab";
            font-weight: 700;
            font-size: 16px;
            line-height: 4;
            letter-spacing: 1px;
            padding-right: 35px;
            margin-bottom: 0;
            position: relative;
            overflow: hidden;
            transition-duration: .5s;
            &:last-child {
                padding-right: 0;
            }
            a {
                color: #4c5166;
                font-family: "Roboto Slab";
                font-weight: 700;
                font-size: 16px;
                letter-spacing: 1px;
                font-style: normal;
                text-decoration: none;
                transition-duration: .5s;
            }
            > ul.submenu {
                position: absolute;
                left: 0;
                visibility: hidden;
                opacity: 0;
                z-index: 3;
                transition: opacity .2s ease-in;
                width: 240px;
                margin: 0;
                background-color: #f2efef;
                font-family: Roboto;
                font-weight: 500;
                letter-spacing: 0px;
                font-style: normal;
                line-height: 34px;
                list-style: none;
                border-top: 3px solid #25afb4;
                box-shadow: 1px 1px 30px rgb(0 0 0 / 6%);
                li {
                    margin-bottom: 0;
                    a {
                        display: block;
                        width: 100%;
                        font-family: Roboto;
                        font-weight: 500;
                        padding: 7px 20px;
                        border-bottom-color: #dcdadb;
                        color: #333333;
                        background-color: #f2efef;
                        font-size: 14px;
                        line-height: 34px;
                        text-transform: uppercase;
                        transition-duration: .3s;
                        white-space: nowrap;
                        &:hover {
                            background-color: #f8f8f8;
                        }
                    }
                }
                &.large {
                    display: flex;
                    flex-wrap: wrap;
                    width: 480px;
                    li {
                        width: 50%;
                    }
                }
            }
            &: hover {
                overflow: visible;
                cursor: pointer;
                > ul.submenu {
                    opacity: 1;
                    visibility: visible;
                }
            }
        }
    }
    @media(max-width: 1180px) {
        ul.main-menu {
            li {
                font-size: 14px;
                a {
                    font-size: 14px;
                }
            }
        }
    }
    @media(max-width: 1100px) {
        display: none;
        opacity: 0;
        visibility: hidden;
    }
`

export default HeaderMenu
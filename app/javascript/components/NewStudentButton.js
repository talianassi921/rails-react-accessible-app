import React from "react"
import {
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
  MenuLink,
} from "@reach/menu-button";
import "@reach/menu-button/styles.css";
class NewStudentButton extends React.Component {
  render () {
    return (
      <Menu>
      <MenuButton>Actions</MenuButton>
      <MenuList>
        <MenuLink href="http://localhost:3000/students/new">Create New Student</MenuLink>
        <MenuItem>Download List</MenuItem>
      </MenuList>
    </Menu>
    );
  }
}

export default NewStudentButton

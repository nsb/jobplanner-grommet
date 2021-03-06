// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import * as React from "react";
/* tslint:disable:no-any */
import Sidebar = require("grommet/components/Sidebar");
import Header = require("grommet/components/Header");
import Title = require("grommet/components/Title");
import Button = require("grommet/components/Button");
import CloseIcon = require("grommet/components/icons/base/Close");
import Footer = require("grommet/components/Footer");
/* tslint:enable:no-any */
import UiStore from "../Stores/UiStore";

interface INavSidebarProps {
    uiStore: UiStore;
}

interface INavSidebarState {

}

class NavSidebar extends React.Component<INavSidebarProps, INavSidebarState> {

  constructor(props: INavSidebarProps) {
    super(props);
  }

  render(): React.ReactElement<{}> {

    return (
      <Sidebar colorIndex="neutral-1" fixed={true}>
        <Header size="large" justify="between" pad={{horizontal: "medium"}}>
          <Title a11yTitle="Close Menu">
            <span>JobPlanner</span>
          </Title>
          <Button icon={<CloseIcon />} onClick={this.onClose} plain={true}
            a11yTitle="Close Menu" />
        </Header>
        <Footer pad={{horizontal: "medium", vertical: "small"}}>
        </Footer>
      </Sidebar>
    );
  }

  onClose = () => {
    this.props.uiStore.setNavActive(false);
  }

}

export default NavSidebar;
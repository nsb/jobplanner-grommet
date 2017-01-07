// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import * as React from "react";
import Sidebar = require("grommet/components/Sidebar");
import Header = require("grommet/components/Header");
import Title = require("grommet/components/Title");
import Button = require("grommet/components/Button");
import CloseIcon = require("grommet/components/icons/base/Close");
import Footer = require("grommet/components/Footer");

interface INavSidebarProps {
  toggleNav(): void;
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
          <Button icon={<CloseIcon />} onClick={this.props.toggleNav} plain={true}
            a11yTitle="Close Menu" />
        </Header>
        <Footer pad={{horizontal: "medium", vertical: "small"}}>
        </Footer>
      </Sidebar>
    );
  }

}

export default NavSidebar;
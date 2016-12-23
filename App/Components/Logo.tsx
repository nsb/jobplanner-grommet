import * as React from "react";
/* tslint:disable:no-any */
import SVGIcon = require("grommet/components/SVGIcon");
/* tslint:enable:no-any */

interface ILogoProps {
  colorIndex: string;
  size: string; // PropTypes.oneOf(['medium', 'large'])
}

interface ILogoState {

}

class Logo extends React.Component<ILogoProps, ILogoState> {

  render(): React.ReactElement<{}> {

    return (
      <SVGIcon
        colorIndex={this.props.colorIndex} size={this.props.size} viewBox="0 0 120 120" version="1.1"
        type="logo" a11yTitle="Ferret Logo">
        <g fill="none">
          <rect stroke="none" x="0" y="0" width="120" height="120"></rect>
          <g className="paths" strokeWidth="4">
            <path d="M54,96 L54,106 L14,106 L14,66 L24,66"></path>
            <path d="M24,36 L84,36 L84,96 L24,96 L24,36"></path>
            <path d="M34,36 L34,18 L102,18 L102,86 L84,86"></path>
            <rect x="34" y="66" width="20" height="20"></rect>
          </g>
        </g>
      </SVGIcon>
    );
  }

}

export default Logo;
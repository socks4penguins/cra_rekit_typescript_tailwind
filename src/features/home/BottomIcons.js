import React from "react";
import {
  Check,
  ChevronLeft,
  ChevronRight,
  MessageSharp,
  PlusOne,
  Settings,
  Speed,
  // Settings,
} from "@material-ui/icons";
// import IconBuilder from "../urb/IconBuilder";

// import PropTypes from 'prop-types';

export default function BottomIcons() {
  const [playbackSpeed, setPlaybackSpeed] = React.useState(1);

  function handleItemClick(item) {
    if (item.key === "playbackSpeed") setPlaybackSpeed(item.value);
    console.log("selected", item);
  }

  const menus = [
    {
      name: "main",
      primary: true,
      items: [
        {
          label: "Playback speed",
          leftIcon: <Speed />,
          rightIcon: <ChevronRight />,
          goToMenu: "playbackSpeed",
        },
      ],
    },
    {
      name: "profile",
      items: [
        {
          label: "My profile",
          leftIcon: <ChevronLeft />,
          noHover: true,
          goToMenu: "main",
        },
        { label: "Logout" },
      ],
    },
    {
      name: "playbackSpeed",
      items: [
        {
          label: "Set playback speed",
          noHover: true,
          leftIcon: <ChevronLeft />,
          goToMenu: "main",
        },
        ...[
          { label: "1.5", value: 1.5 },
          { label: "1.4", value: 1.4 },
          { label: "1.4", value: 1.3 },
          { label: "1.3", value: 1.2 },
          { label: "1.1", value: 1.1 },
          { label: "normal", value: 1 },
          { label: "0.9", value: 0.9 },
          { label: "0.8", value: 0.8 },
          { label: "0.7", value: 0.7 },
          { label: "0.6", value: 0.6 },
          { label: "0.5", value: 0.5 },
        ].map((item) => {
          return {
            ...item,
            leftIcon: item.value === playbackSpeed && <Check />,
            closeOnClick: true,
            style: { height: "20px" },
            key: "playbackSpeed",
          };
        }),
      ],
    },
  ];

  return (
    <div className="urb-bottom-icons full-width">
      {/* <IconBuilder
        onItemClick={handleItemClick}
        variant="dropdown"
        icons={[
          { icon: <PlusOne /> },
          { icon: <MessageSharp /> },
          {
            icon: <Settings />,
            menus: menus,
            position: { bottom: "58px" },
          },
        ]}
      /> */}
    </div>
  );
}

BottomIcons.propTypes = {};
BottomIcons.defaultProps = {};

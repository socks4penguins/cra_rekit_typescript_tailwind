import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Paper, Typography } from "@material-ui/core";
import { Devices, Notifications, VideoCall } from "@material-ui/icons";
// import DevMenu from "../dev/DevMenu";
// import ProfileDropDown from "../../config/ProfileDropDown";
import Div100vh from "react-div-100vh";
import BottomIcons from "./BottomIcons";
// import { signOut } from "../urb/FirebaseAuth"

// import sharp from "sharp"

export default function WelcomePage({ history, children }) {
  const [firestoreAddProps, setFirestoreAddProps] = useState({});
  const reduxState = useSelector((state) => state); // redux state
  const { urb } = reduxState;

  return (
    <div style={{ height: "100vh" }}>
      {/* Paper is needed for dark/light theme */}
      <Paper className="home-welcome-page fill">
        <div className="vertical layout fill center">
          <div className="nav-bar full-width horizontal layout center">
            {/* <DevMenu variant="dropdown" /> */}

            <Typography variant="h4">My App reloads</Typography>
            {/* <MenuBuilder
              classes={{ root: "flex full-height" }}
              menus={devMenu}
              variant="horizontal"
              subvariant="speech bubble"
            /> */}

         
            {/* <ProfileDropDown /> */}
          </div>
          <div className="flex full-width vertical layout overflowYHidden">
            {/* <UrbServices // more services = slower load time
               className="fill"
              // signInPage
              // signInPageStyle={{ width: "100%", height: "100%" }}
              // messaging
              // onSignedIn={setAuthData}
              // firestoreAdd
               firestoreAddProps={firestoreAddProps}
            > */}
            <div className="fill horizontal layout">
              <div
                id="leftMenu"
                className="full-height vertical layout overflowYAuto"
              >
                {/* <DevMenu variant="vertical" className="flex" /> */}
              </div>
              <div className="flex">
                {/* DefaultContent component is used when there is no path */}
                {children}
              </div>
            </div>
            {/* </UrbServices> */}
          </div>

          {/* <BottomIcons /> */}
        </div>
      </Paper>
    </div>
  );
}

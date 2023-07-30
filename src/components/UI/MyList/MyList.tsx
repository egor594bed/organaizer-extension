import React, { FC } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { List } from "@mui/material";

interface IMyList {
  children: React.ReactNode;
}

export const MyList: FC<IMyList> = ({ children }) => {
  const [parent] = useAutoAnimate();
  return (
    <List
      ref={parent}
      sx={{
        height: "445px",
        paddingLeft: "2px",
        paddingRight: "2px",
        overflowY: "auto",
        overflowX: "hidden",
      }}
    >
      {children}
    </List>
  );
};

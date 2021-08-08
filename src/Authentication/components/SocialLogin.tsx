import React, { ReactNode } from "react";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";

import { Box } from "../../Components";

interface SocialIconProps {
  children: ReactNode;
}

const SocialIcon = ({ children }: SocialIconProps) => {
  return (
    <Box
      marginHorizontal="s"
      backgroundColor="white"
      width={46}
      height={46}
      borderRadius="l"
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Box>
  );
};
const SocialLogin = () => {
  return (
    <Box flexDirection="row" justifyContent="center">
      <SocialIcon>
        <FontAwesome5 name="facebook-f" size={18} color="black" />
      </SocialIcon>
      <SocialIcon>
        <AntDesign name="google" size={18} color="black" />
      </SocialIcon>
      <SocialIcon>
        <AntDesign name="apple1" size={18} color="black" />
      </SocialIcon>
    </Box>
  );
};

export default SocialLogin;

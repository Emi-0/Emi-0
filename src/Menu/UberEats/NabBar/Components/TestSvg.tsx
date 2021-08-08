import * as React from "react";
import { Feather as Icon } from "@expo/vector-icons";

interface iconProps {
  color: string;
}
const SIZE = 20;
export const Home = ({ color }: iconProps) => {
  return <Icon name="grid" size={SIZE} color={color} />;
};
export const Search = ({ color }: iconProps) => {
  return <Icon name="search" size={SIZE} color={color} />;
};
export const Showcase = ({ color }: iconProps) => {
  return <Icon name="book-open" size={SIZE} color={color} />;
};
export const Profile = ({ color }: iconProps) => {
  return <Icon name="user" size={SIZE} color={color} />;
};

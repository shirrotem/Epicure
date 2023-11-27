import { Icon } from "./types/icon";
import iconSpicy from "../assets/icons/spicy.svg";
import iconVegitarian from "../assets/icons/vegitarian.svg";
import iconVegan from "../assets/icons/vegan.svg";

interface IconMap {
  [key: string]: string;
}

export const iconsArray: Icon[] = [
  { name: "Spicy", icon: iconSpicy },
  { name: "Vegetarian", icon: iconVegitarian },
  { name: "Vegan", icon: iconVegan },
];

export const iconMap: IconMap = {
  spicy: iconSpicy,
  vegitarian: iconVegitarian,
  vegan: iconVegan,
};

import claroImg from "../assets/images/claro.png";
import luminaImg from "../assets/images/Lumina.png";
import tigerImg from "../assets/images/tiger-lily.png";
import padKiMaoImg from "../assets/images/padKiMaoImg.png";
import garbanzoFritoImg from "../assets/images/garbanzoFritoImg.png";
import smokedPizzaImg from "../assets/images/smokedPizzaImg.png";
import spicyIcon from "../assets/icons/spicy.svg";
import veganIcon from "../assets/icons/vegan.svg";
import onzaImg from "../assets/images/onzaImg.png";
import kitchenMarketImg from "../assets/images/kitchenMarket.png";
import mashyaImg from "../assets/images/mashyaImg.png";
import Data from "./types/data";

const data: Data = {
    restaurants: [
        {
            img: claroImg,
            name: 'Claro',
            chef: 'Ran Shmueli',
            rating: 4
        },
        {
            img: luminaImg,
            name: 'Lumina',
            chef: 'Meir Adoni',
            rating: 3
        },
        {
            img: tigerImg,
            name: 'Tiger Lilly',
            chef: 'Yanir Green',
            rating: 4
        },
    ],

    dishes:[
        {
            img:padKiMaoImg,
            name: 'PadKi Mao',
            icon: spicyIcon,
            ingredients:'Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut',
            price: 88
        },
        {
            img:garbanzoFritoImg,
            name: 'Garbanzo Frito',
            icon: spicyIcon,
            ingredients: 'Polenta fingers, veal cheek, magic chili cured lemon cream, yellow laksa',
            price: 98
        },
        {
            img:smokedPizzaImg,
            name: 'Smoked Pizza',
            icon:veganIcon,
            ingredients: 'Basil dough, cashew "butter", demi-glace, bison & radish & sweet sauce',
            price: 65
        }
    ],
    chefRestaurants: [
        {
            img: onzaImg,
            name: 'Onza'
        },
        {
            img: kitchenMarketImg,
            name: 'Kitchen Market'
        },
        {
            img: mashyaImg,
            name: 'Mashya'
        },
    ],
};

export default data;
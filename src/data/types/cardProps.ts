interface CardProps{
    title: string;
    img: string;
    subtitle?: string;
    rating?: number;
    icon?: string;
    price?: string;
    type: string;
    handleOnClick? : (dishName: string)=>void;
}
export default CardProps;
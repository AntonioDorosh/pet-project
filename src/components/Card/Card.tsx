import React, {useEffect, useState} from "react";
import Input from "../../UI/Input/Input.tsx";
import getShoesData from "../../API/getShoesData.ts";
import ShoesList from "../ShoesList/ShoesList.tsx";
import {ShoesType} from "../../types/ShoesType.ts";

const Card = () => {
    const [text, setText] = useState('');
    const [shoes, setShoes] = useState<ShoesType[]>([]);

    useEffect(() => {
        getShoesData().then((shoesData) => setShoes(shoesData));
    }, [setShoes]);

    return (
        <section>
            <Input text={text} setText={setText}/>
            <div className="grid grid-cols-4 gap-4">
                <ShoesList shoes={shoes} text={text}/>
            </div>
        </section>
    );
};

export default Card;
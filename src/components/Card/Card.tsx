import React, {useEffect, useState} from "react";

import Input from "../../UI/Input/Input.tsx";
import {getShoesData} from "../../API/getShoesData.ts";
import {ShoesType} from "../../types/ShoesType.ts";
import ShoesList from "../ShoesList/ShoesList.tsx";

const Card = () => {
    const [text, setText] = useState('');
    const [shoes, setShoes] = useState<ShoesType[]>([]);

    useEffect(() => {
        const storedShoesData = localStorage.getItem('shoesData');
        if (storedShoesData) {
            const shoesData = JSON.parse(storedShoesData);
            setShoes(shoesData)
        } else {
            getShoesData().then((shoesData) => {
                setShoes(shoesData)
                localStorage.setItem('shoesData', JSON.stringify(shoesData))
            })
        }
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
import React, {useEffect, useState} from "react";
import Input from "../../UI/Input/Input.tsx";
import getShoesData from "../../API/getShoesData.ts";
import ShoesList from "../ShoesList/ShoesList.tsx";
import {ShoesProvider, useShoes} from "../../context/ShoesContext.tsx";

const Card = () => {
    const [text, setText] = useState('');
    const {shoes, setShoes} = useShoes();

    useEffect(() => {
        getShoesData().then((shoesData) => setShoes(shoesData));
    }, [setShoes]);

    return (
        <section>
            <Input text={text} setText={setText}/>
            <div className="grid grid-cols-4 gap-4">
                <ShoesProvider>
                    {shoes ? <ShoesList shoes={shoes} text={text} /> : null}
                </ShoesProvider>
            </div>
        </section>
    );
};

export default Card;
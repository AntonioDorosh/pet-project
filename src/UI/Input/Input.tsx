import React, {ChangeEvent} from 'react';
import {InputProps} from "../../types/ InputProps.ts";


const Input = ({text, setText}: InputProps) => {
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value)
    }

    return (
        <div className='flex items-center justify-between mb-7'>
            <h1 className='font-bold text-3xl'>Все кроссовки</h1>
            <input className='border p-2 rounded-2xl focus:outline-lime-500'
                   type="text" placeholder={'Поиск...'} value={text}
                   onChange={onChangeHandler}/>
        </div>
    );
};

export default Input;
import React from 'react';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const ArrowButton = () => {
    return (
        <button
            className='mr-3 border rounded-arrowBorder p-2 opacity-70 hover:bg-lime-500 hover:text-white'>
            <ArrowBackIcon
                className='opacity-70 hover:translate-x-buttonTranslate'/>
        </button>
    );
};

export default ArrowButton;
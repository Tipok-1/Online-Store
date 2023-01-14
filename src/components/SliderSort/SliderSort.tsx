import React from 'react';
import Slider from '../Slider/Slider';
import './SliderSort.css';

interface ISliderSort{
    min:number,
    max:number
    onChange:(obj:{min:number,max:number}) => void,
    title:string,
    postscript?:string,
}
const SliderSort = ({ min, max, onChange, title, postscript }:ISliderSort) => {
    return (
        <div className='SliderSort'>
            <h2>{title}</h2>
             <Slider
                min={min}
                max={max}
                onChange={onChange}
                postscript={postscript}
            />
        </div>
    );
};

export default SliderSort;
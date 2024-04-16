import { useContext } from "react";
import { CalcContext } from "../context/CalcContext";
import {Textfit} from 'react-textfit';

const Screen = () => {
    const {calc} = useContext(CalcContext);//retrieve attributes of object in calccontext

    return(
        <Textfit className="screen">{calc.num ? calc.num:calc.res}</Textfit>
    )
}

export default Screen;
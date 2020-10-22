import React from 'react'
import style from './menuList.module.css'

type menuListPropsType = {
    text: string
}

const MenuList:React.FC<menuListPropsType> = ({text}) => {
    return (
        <div className={style.main}>
            {text}
            <div className={style.br} > </div>
        </div>
    )
};

export default MenuList;

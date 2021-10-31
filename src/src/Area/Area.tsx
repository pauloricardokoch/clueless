/* Copyright (c) 2021, Paulo Ricardo Koch  */
/* Licensed under the BSD 3-Clause License */

import React from 'react';

import Item from './Item/Item';

import styles from './area.module.scss';

interface IArea {
    title: string
    items: string[]
}

function Area({ title, items }: IArea): JSX.Element {
    return (
        <div className={styles.area}>
            <div className={styles.title}>{title}</div>
            {items.map((item, idx) => <Item key={idx} name={item}/>)}
        </div>
    );
}

export default Area;
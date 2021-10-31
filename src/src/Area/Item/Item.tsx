/* Copyright (c) 2021, Paulo Ricardo Koch  */
/* Licensed under the BSD 3-Clause License */

import React from 'react';

import styles from './item.module.scss';

interface IItem {
    name: string
}

function Item({ name }: IItem): JSX.Element {
    return (
        <div className={styles.item}>
            <div className={styles.name}>{name}</div>
            <div className={styles.check}>
                {[...Array(4)].map((_, idx) =>
                    <div key={idx} className={styles.input}><input type="checkbox"></input></div>
                )}
            </div>
        </div>
    );
}

export default Item;
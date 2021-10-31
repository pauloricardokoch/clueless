// Copyright (c) 2021, Paulo Ricardo Koch 
// Licensed under the BSD 3-Clause License

import React from 'react';

import Area from './Area/Area';

import styles from './app.module.scss';
import data from './assets/data.json';

function App() {
    return (
        <div className={styles.app}>
            <div className={styles.title}>Clueless</div>
            {data.areas.map((area, idx) => <Area key={idx} title={area.title} items={area.items} />)}
        </div>
    );
}

export default App;

// src/components/YourBotArmy.js

import React from 'react';

const YourBotArmy = ({ yourBotArmy, releaseFromArmy, dischargeForever }) => {
    return (
        <div>
            <h2>Your Bot Army</h2>
            <ul>
                {yourBotArmy.map(bot => (
                    <li key={bot.id}>
                        <div>{bot.name}</div>
                        <button onClick={() => releaseFromArmy(bot.id)}>Release</button>
                        <button onClick={() => dischargeForever(bot.id)}>Discharge</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default YourBotArmy;

// src/components/BotSpecs.js

import React from 'react';

const BotSpecs = ({ bot, goBack, enlistBot }) => {
    return (
        <div>
            <h2>Bot Specs</h2>
            <div>
                <p>Name: {bot.name}</p>
                <p>Health: {bot.health}</p>
                <p>Damage: {bot.damage}</p>
                <p>Armor: {bot.armor}</p>
                <p>Class: {bot.bot_class}</p>
                <button onClick={goBack}>Go Back</button>
                <button onClick={() => enlistBot(bot)}>Enlist Bot</button>
            </div>
        </div>
    );
};

export default BotSpecs;

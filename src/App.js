import React, { useState, useEffect } from 'react';
import './App.css';
import BotCollection from './components/BotCollection';
import YourBotArmy from './components/YourBotArmy';
import BotSpecs from './components/BotSpecs';
import SortBar from './components/SortBar';
import api from './services/api';

function App() {
  const [bots, setBots] = useState([]);
  const [yourBotArmy, setYourBotArmy] = useState([]);
  const [showSpecs, setShowSpecs] = useState(false);
  const [selectedBot, setSelectedBot] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api.getBots();
      setBots(response);
    };
    fetchData();
  }, []);

  const addToArmy = (bot) => {
    setYourBotArmy([...yourBotArmy, bot]);
  };

  const releaseFromArmy = (botId) => {
    setYourBotArmy(yourBotArmy.filter(bot => bot.id !== botId));
  };

  const dischargeForever = async (botId) => {
    await api.deleteBot(botId);
    setYourBotArmy(yourBotArmy.filter(bot => bot.id !== botId));
  };

  const showBotSpecs = (bot) => {
    setSelectedBot(bot);
    setShowSpecs(true);
  };

  const goBack = () => {
    setShowSpecs(false);
  };

  const enlistBot = (bot) => {
    addToArmy(bot);
    setShowSpecs(false);
  };

  const sortBy = (criteria) => {
    const sortedBots = [...bots].sort((a, b) => b[criteria] - a[criteria]);
    setBots(sortedBots);
  };

  return (
    <div>
      <h1>Bot Battlr</h1>
      {!showSpecs && <SortBar sortBy={sortBy} />}
      {!showSpecs ? (
        <BotCollection bots={bots} addToArmy={addToArmy} showBotSpecs={showBotSpecs} />
      ) : (
        <BotSpecs bot={selectedBot} goBack={goBack} enlistBot={enlistBot} />
      )}
      <YourBotArmy
        yourBotArmy={yourBotArmy}
        releaseFromArmy={releaseFromArmy}
        dischargeForever={dischargeForever}
      />
    </div>
  );
}

export default App;

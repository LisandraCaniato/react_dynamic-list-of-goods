import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRed } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);

  const fakeRequest = () => {
    const img = document.createElement('img');

    img.src = '/api/goods?' + Math.random();
  };

  const loadAll = async () => {
    fakeRequest();
    setGoods(await getAll());
  };

  const loadFirstFive = async () => {
    fakeRequest();
    setGoods(await get5First());
  };

  const loadRed = async () => {
    fakeRequest();
    setGoods(await getRed());
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button type="button" data-cy="all-button" onClick={loadAll}>
        Load all goods
      </button>

      <button type="button" data-cy="first-five-button" onClick={loadFirstFive}>
        Load 5 first goods
      </button>

      <button type="button" data-cy="red-button" onClick={loadRed}>
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};

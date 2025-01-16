// Home.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
<div className="h-[85vh] w-full bg-[url('./bg.jpg')] bg-cover">
<h1>{t('home.welcome')}</h1>
    </div>
  );
};

export default Home;

// Footer.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="p-4 bg-gray-800 text-white">
      <p>{t('footer.text')}</p>
    </footer>
  );
};

export default Footer;

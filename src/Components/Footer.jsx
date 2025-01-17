// Footer.js
import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="p-4 bg-black text-white text-center">
      <p>{t('footer.text')}</p>
    </footer>
  );
};

export default Footer;

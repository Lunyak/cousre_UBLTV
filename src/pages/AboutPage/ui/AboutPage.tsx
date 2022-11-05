import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const {t} = useTranslation('about')
  console.log(t);
  
  return (
    <div>
      <h2>{t('О сайте')}</h2>
    </div>
  );
};

export default AboutPage
import { BugButton } from "app/providers/ErrorBoundary";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const { t } = useTranslation();
  return (
    <div>
      <BugButton />
      <h2>{t("Главная страница")}</h2>
    </div>
  );
};

export default MainPage;

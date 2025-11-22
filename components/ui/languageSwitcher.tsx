"use client";
import { useRouter } from "next/router";
import styles from "@/styles/languageSwitcher.module.css";
import Image from "next/image";

const LanguageSwitcher = () => {
  const router = useRouter();

  const changeLanguage = (lng: string) => {
    router.push(router.pathname, router.asPath, { locale: lng });
  };

  return (
    <div className={styles['language-switcher']}>
      <button
        onClick={() => changeLanguage("en")}
        disabled={router.locale === "en"}
        suppressHydrationWarning={true}
      >
        <Image src="/assets/icons/usa.png" alt="USA" width="25" height="16" />
      </button>

      <button
        onClick={() => changeLanguage("es")}
        disabled={router.locale === "es"}
        suppressHydrationWarning={true}
      >
        <Image src="/assets/icons/spain.png" alt="Spain" width="25" height="16" />
      </button>
    </div>
  );
};

export default LanguageSwitcher;
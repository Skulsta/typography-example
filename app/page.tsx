import { Inter } from "next/font/google";
import Image from "next/image";
import "../styles/globals.css";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/bekk.svg"
              alt="Bekk Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
        <div>Meny</div>
      </div>

      <div className={styles.center}>
        <h3>
          Vi hjelper kunder med teknologi, design og produktledelse. I tillegg
          bistår vi med management consulting. I felleskap gjør vi den digitale
          hverdagen enklere for folk flest. Det kan godt være en ekstra setning
          her hvis vi har behov for det. Det er bare fint hvis teksten går over
          fire linjer.
        </h3>
      </div>

      <div className={styles.grid}>
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Design <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            For å komme frem til det enkle, må vi gjennom det vanskelige.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Teknologi <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Vi bygger digitale tjenester for noen av landets viktigste flater.
          </p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            BMC <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Vi er over 40 forretningsrådgivere som jobber strategisk av natur
          </p>
        </a>
      </div>
    </main>
  );
}

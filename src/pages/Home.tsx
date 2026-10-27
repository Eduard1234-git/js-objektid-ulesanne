import { tulemused } from "../ulesanne";
import "../App.css";

export default function Home() {
  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">JavaScripti praktiline ülesanne</p>
        <h1>Raamat ja raamatukogu</h1>
        <p className="intro">
          Lihtne näide objektidest, meetoditest ja <code>this</code> võtmesõna
          kasutamisest.
        </p>
      </header>

      <section className="section">
        <div className="section-heading">
          <span className="section-number">01</span>
          <div>
            <p className="section-label">Objekt ja meetodid</p>
            <h2>Raamatu objekt</h2>
          </div>
        </div>

        <div className="result-grid">
          <article className="result-card">
            <p className="card-label">Algne kirjeldus</p>
            <p className="book-description">{tulemused.algneKirjeldus}</p>
            <p className="card-note">Meetod <code>kuvaKirjeldus()</code></p>
          </article>

          <article className="result-card accent-card">
            <p className="card-label">Pärast aasta muutmist</p>
            <p className="book-description">{tulemused.muudetudKirjeldus}</p>
            <p className="card-note">
              Meetod <code>muudaAasta(2020)</code> muutis aasta väärtust.
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <span className="section-number">02</span>
          <div>
            <p className="section-label">Objektide massiiv</p>
            <h2>Raamatukogu</h2>
          </div>
        </div>

        <p className="added-book">
          Uue raamatu lisamine: <strong>{tulemused.lisatudRaamat.pealkiri}</strong>
          {" "}({tulemused.lisatudRaamat.aasta})
        </p>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Pealkiri</th>
                <th>Autor</th>
                <th>Aasta</th>
              </tr>
            </thead>
            <tbody>
              {tulemused.raamatud.map((raamat) => (
                <tr key={raamat.pealkiri}>
                  <td>{raamat.pealkiri}</td>
                  <td>{raamat.autor}</td>
                  <td>{raamat.aasta}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="summary-grid">
          <article className="summary-card">
            <strong>{tulemused.koguarv}</strong>
            <span>raamatut kokku</span>
            <code>raamatuteKoguarv()</code>
          </article>
          <article className="summary-card">
            <strong>{tulemused.parast2000}</strong>
            <span>raamatut pärast 2000. aastat</span>
            <code>mituParast2000()</code>
          </article>
        </div>

        <article className="own-method">
          <p className="card-label">Minu enda meetod</p>
          <h3>leiaAutoriRaamatud(autor)</h3>
          <p>
            See meetod kasutab <code>filter()</code> meetodit ja leiab
            raamatukogust kõik valitud autori raamatud. Otsisin Andrus
            Kivirähku raamatuid.
          </p>
          <ul>
            {tulemused.autoriRaamatud.map((raamat) => (
              <li key={raamat.pealkiri}>
                {raamat.pealkiri} <span>({raamat.aasta})</span>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <footer>
        Kõik tulemused on väljastatud ka brauseri konsooli: F12 → Console.
      </footer>
    </main>
  );
}

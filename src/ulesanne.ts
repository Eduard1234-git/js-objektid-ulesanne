export interface Raamat {
  pealkiri: string;
  autor: string;
  aasta: number;
}

// 1. Raamatu objekt ja selle meetodid
const raamat = {
  pealkiri: "Kevade",
  autor: "Oskar Luts",
  aasta: 1912,

  kuvaKirjeldus() {
    return `${this.pealkiri} — ${this.autor} (${this.aasta})`;
  },

  muudaAasta(uusAasta: number) {
    this.aasta = uusAasta;
  },
};

console.log("--- RAAMAT ---");
const algneKirjeldus = raamat.kuvaKirjeldus();
console.log("Algne raamat:", algneKirjeldus);

raamat.muudaAasta(2020);
const muudetudKirjeldus = raamat.kuvaKirjeldus();
console.log("Raamat pärast aasta muutmist:", muudetudKirjeldus);

// 2. Raamatukogu objekt, mille omaduseks on raamatute massiiv
const raamatukogu = {
  raamatud: [
    { pealkiri: "Kevade", autor: "Oskar Luts", aasta: 1912 },
    { pealkiri: "Tõde ja õigus I", autor: "A. H. Tammsaare", aasta: 1926 },
    {
      pealkiri: "Mees, kes teadis ussisõnu",
      autor: "Andrus Kivirähk",
      aasta: 2007,
    },
    { pealkiri: "Hea härra Kivi", autor: "Andrus Kivirähk", aasta: 2018 },
  ] as Raamat[],

  kuvaRaamatud() {
    this.raamatud.forEach((raamat, indeks) => {
      console.log(
        `${indeks + 1}. ${raamat.pealkiri} — ${raamat.autor} (${raamat.aasta})`,
      );
    });
  },

  lisaRaamat(uusRaamat: Raamat) {
    this.raamatud.push(uusRaamat);
  },

  raamatuteKoguarv() {
    return this.raamatud.length;
  },

  mituParast2000() {
    return this.raamatud.filter((raamat) => raamat.aasta > 2000).length;
  },

  // Minu meetod leiab ja tagastab kõik valitud autori raamatud.
  leiaAutoriRaamatud(autor: string) {
    return this.raamatud.filter((raamat) => raamat.autor === autor);
  },
};

console.log("--- RAAMATUKOGU ---");
console.log("Raamatud enne uue raamatu lisamist:");
raamatukogu.kuvaRaamatud();

const lisatudRaamat: Raamat = {
  pealkiri: "Rehepapp",
  autor: "Andrus Kivirähk",
  aasta: 2000,
};
raamatukogu.lisaRaamat(lisatudRaamat);
console.log("Lisatud raamat:", lisatudRaamat);

console.log("Kõik raamatud pärast lisamist:");
raamatukogu.kuvaRaamatud();

const koguarv = raamatukogu.raamatuteKoguarv();
console.log("Raamatute koguarv:", koguarv);

const parast2000 = raamatukogu.mituParast2000();
console.log("Raamatuid, mis ilmusid pärast 2000. aastat:", parast2000);

const autoriRaamatud = raamatukogu.leiaAutoriRaamatud("Andrus Kivirähk");
console.log("Andrus Kivirähku raamatud:", autoriRaamatud);

// Neid tulemusi kasutab ka HTML-leht.
export const tulemused = {
  algneKirjeldus,
  muudetudKirjeldus,
  lisatudRaamat,
  raamatud: raamatukogu.raamatud,
  koguarv,
  parast2000,
  autoriRaamatud,
};

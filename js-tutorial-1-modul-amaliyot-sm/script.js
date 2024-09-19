"use strict";

/* ==== 9 - lesson 💻 Amaliyot 📚 ==== */
/* ==== 12 - lesson 💻 Amaliyot, uyga vazifa. Tsikl 📚 ==== */
/* ==== 15 - lesson 💻 Amaliyot, uyga vazifa. Funcksiya 📚 ==== */
/* ==== 15 - lesson 💻 Amaliyot, uyga vazifa. OOP 📚 ==== */

const seriesDB = {
  count: 0,
  series: {},
  actors: {},
  genres: [],
  private: false,
  start: () => {
    seriesDB.count = +prompt("Nechta serial ko'rdingiz?", "");

    while (
      seriesDB.count == "" ||
      seriesDB.count == null ||
      isNaN(seriesDB.count)
    ) {
      seriesDB.count = +prompt("Nechta serial ko'rdingiz?", "");
    }
  },
  mySeries: () => {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Oxirgi ko'rgan serialingiz?"),
        b = prompt("Necha baxo berasiz?");

      if (a != null && a != "" && b != null && b != "") {
        console.log("done");
        seriesDB.series[a] = b;
      } else {
        console.log("error");
        i--;
      }
    }
  },
  writeGenres: () => {
    for (let i = 0; i < 3; i++) {
      const genre = prompt(`Yaxshi ko'rgan janiriz ${i + 1}`);
      if (genre != "" && genre != null) {
        seriesDB.genres[i] = genre;
      } else {
        i--;
      }
      seriesDB.genres.forEach((item, idx) => {
        console.log(`Yaxshi ko'rgan janiringiz ${idx + 1} - nomi ${item}`);
      });
    }
  },
  detectLevelSeries: () => {
    if (seriesDB.count > 10) {
      console.log("Siz serialchi zvezda ekansiz");
    } else if (seriesDB.count > 5) {
      console.log(" Siz classic tomoshabin ekansiz");
    } else {
      console.log("Kam serial ko'ribsiz");
    }
  },
  showDb: () => {
    if (!seriesDB.private) {
      console.log(seriesDB);
    }
  },

  visibleDB: () => {
    if (seriesDB.private) {
      seriesDB.private = false;
    } else {
      seriesDB.private = true;
    }
  },
};

seriesDB.start();
seriesDB.mySeries();
seriesDB.writeGenres();
seriesDB.detectLevelSeries();
seriesDB.showDb();
seriesDB.visibleDB();

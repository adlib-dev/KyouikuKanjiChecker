import { isKyouikuKanji, isKanji } from "./kanji.js";

document.getElementById("target").addEventListener("change", (e) => {
  const v = document.getElementById("view");
  const t = e.target.value;
  const check = t.split("").map((c) => {
    if (!isKanji(c)) return c;
    if (isKyouikuKanji(c)) return c;
    return '<span style="background: red">' + c + "</span>";
  });
  v.innerHTML = check.join("");
});

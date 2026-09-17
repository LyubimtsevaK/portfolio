// Координаты кейса «Надежда» в px макета «Проект - окно» (Figma node 239:1098, панель 1595×15200).
// В Figma содержимое лежит во фрейме 239:1103 со смещением (50, 86) — здесь все числа уже приведены
// к координатам панели. Формат [x, y, w?, h?]; y заголовков — верх заглавных (text-box-trim в Figma).
// Отдельных мобильных макетов у этого кейса нет: <1200px верстается потоком (см. NadezhdaCase.css).

export type Box = readonly [number, number, number?, number?]

// ширина и высота панели в макете
export const DESIGN_W = 1595
export const PANEL_HEIGHT = 15200

// CaseModal считает высоту сцены в px макета 1440, где панель занимает 1193px,
// поэтому высоту панели «Надежды» переводим из её собственных единиц
export const PANEL_HEIGHT_1440 = (PANEL_HEIGHT * 1193) / DESIGN_W

// ширина колонки текста и её левый край — повторяются почти во всех секциях
const TX = 872
const TW = 673

export const D = {
  // x/y скобок подогнаны рендером: Arsenal SC в Chrome ставит глиф иначе, чем Figma (сдвиг 13px)
  parenOpen: [49.41, 87, 61.79, 90],
  title: [149.8, 101.93, 340, 59.74],
  parenClose: [527.4, 87, 61.79, 90],
  intro: [TX, 108.9, 654],
  heroImg: [50, 226, 1495, 910],
  aboutText: [TX, 1186, TW],

  roleH: [50, 1578],
  roleTags: [870, 1595, 675],

  contextH: [50, 1843, 431],
  contextText: [TX, 1843, TW],

  ideaH: [50, 2279],
  ideaText: [TX, 2279, TW],
  ideaImg: [50, 2549, 1495, 725],

  goalH: [50, 3424],
  goalText: [TX, 3424, TW],

  analysisH: [50, 3728, 707],
  analysisText: [TX, 3728, TW],
  oldSite: [50, 4003, 677, 473.06],
  newSite: [TX, 3975, TW, 530],
  arrow: [740, 4232, 121, 27],

  usersH: [50, 4655, 707],
  usersText: [TX, 4655, TW],
  scenarios: [50, 4838, 1495, 734],

  mainH: [444, 5722, 707],
  mainImg: [50, 5905, 843, 2200],
  mainNote1: [943, 6085, 602, 86],
  mainNote2: [943, 6728, 602, 64],

  aboutPageH: [385, 8255, 825],
  aboutPageImg: [50, 8365, 843, 1958],
  aboutPageNote: [943, 8826, 602, 86],

  catteryH: [356, 10473, 883],
  catteryImg: [50, 10656, 843, 2072],
  catteryNote: [943, 10886, 602, 64],

  visualH: [50, 12878, 707],
  visualText: [TX, 12878, TW],

  changedH: [50, 13358, 707],
  changedText: [TX, 13358, TW],

  resultH: [50, 13728],
  resultText: [TX, 13728, TW],
  resultImg: [50, 13954, 1495, 877],

  thanks: [393, 15000, 810],
} satisfies Record<string, Box>

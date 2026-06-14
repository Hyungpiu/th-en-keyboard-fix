export const enToTh: Record<string, string> = {
  "1": "ๅ",
  "2": "/",
  "3": "-",
  "4": "ภ",
  "5": "ถ",
  "6": "ุ",
  "7": "ึ",
  "8": "ค",
  "9": "ต",
  "0": "จ",
  "-": "ข",
  "=": "ช",

  q: "ๆ",
  w: "ไ",
  e: "ำ",
  r: "พ",
  t: "ะ",
  y: "ั",
  u: "ี",
  i: "ร",
  o: "น",
  p: "ย",
  "[": "บ",
  "]": "ล",
  "\\": "ฃ",

  a: "ฟ",
  s: "ห",
  d: "ก",
  f: "ด",
  g: "เ",
  h: "้",
  j: "่",
  k: "า",
  l: "ส",
  ";": "ว",
  "'": "ง",

  z: "ผ",
  x: "ป",
  c: "แ",
  v: "อ",
  b: "ิ",
  n: "ื",
  m: "ท",
  ",": "ม",
  ".": "ใ",
  "/": "ฝ",
};

export const thToEn: Record<string, string> = Object.fromEntries(
  Object.entries(enToTh).map(([en, th]) => [th, en])
);

export function convert(
  text: string,
  mode: "en-th" | "th-en"
) {
  const map = mode === "en-th" ? enToTh : thToEn;

  return text
    .split("")
    .map((char) => map[char] || char)
    .join("");
}   

function countThaiChars(text: string) {
  return [...text].filter((char) => /[\u0E00-\u0E7F]/.test(char)).length;
}

function countEnglishChars(text: string) {
  return [...text].filter((char) => /[a-zA-Z]/.test(char)).length;
}

export function autoConvert(text: string) {
  const thaiCount = countThaiChars(text);
  const englishCount = countEnglishChars(text);

  if (englishCount > thaiCount) {
    return convert(text, "en-th");
  }

  if (thaiCount > englishCount) {
    return convert(text, "th-en");
  }

  return text;
}

export function detectMode(
  text: string
): "en-th" | "th-en" | "unknown" {
  const thaiCount = [...text].filter((char) =>
    /[\u0E00-\u0E7F]/.test(char)
  ).length;

  const englishCount = [...text].filter((char) =>
    /[a-zA-Z]/.test(char)
  ).length;

  if (englishCount > thaiCount) return "en-th";
  if (thaiCount > englishCount) return "th-en";

  return "unknown";
}

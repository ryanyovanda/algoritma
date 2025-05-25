import { findLongestWord } from "@/app/lib/soal2";

export default function Soal2Page() {
  const sentence = "Saya sangat senang mengerjakan soal algoritma";
  const result = findLongestWord(sentence);

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">Soal 2 - Kata Terpanjang</h1>
      <p><b>Kalimat:</b> {sentence}</p>
      <p><b>Kata Terpanjang:</b> {result}</p>
    </main>
  );
}

import { reverseAlphabetsOnly } from "@/app/lib/soal1";

export default function Soal1Page() {
  const input = "KETARIW1";
  const output = reverseAlphabetsOnly(input);

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">Soal 1 - Reverse Alphabet Only</h1>
      <p><b>Input:</b> {input}</p>
      <p><b>Output:</b> {output}</p>
    </main>
  );
}

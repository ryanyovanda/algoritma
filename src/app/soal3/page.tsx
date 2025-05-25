import { matchQueryFrequency } from "@/app/lib/soal3";

export default function Soal3Page() {
  const input = ['xc', 'dz', 'bbb', 'dz'];
  const query = ['bbb', 'ac', 'dz'];
  const result = matchQueryFrequency(input, query);

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">Soal 3 - Query Matching</h1>
      <p><b>Input:</b> [{input.join(", ")}]</p>
      <p><b>Query:</b> [{query.join(", ")}]</p>
      <p><b>Output:</b> [{result.join(", ")}]</p>
    </main>
  );
}

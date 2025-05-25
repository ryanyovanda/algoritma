import { diagonalDifference } from "@/app/lib/soal4";

export default function Soal4Page() {
  const matrix = [
    [1, 2, 0],
    [4, 5, 6],
    [7, 8, 9],
  ];

  const result = diagonalDifference(matrix);

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold mb-4">Soal 4 - Diagonal Matrix Difference</h1>

      <p className="font-semibold mb-2">Matriks:</p>
      <div className="inline-block border p-2 rounded">
        {matrix.map((row, i) => (
          <div key={i} className="flex gap-4">
            {row.map((val, j) => (
              <span key={j} className="w-8 text-center">{val}</span>
            ))}
          </div>
        ))}
      </div>

      <p className="mt-4 font-semibold">
        Selisih Diagonal: <span className="font-bold">{result}</span>
      </p>
    </main>
  );
}

import Link from "next/link";

export default function Home() {
  const soalPages = [
    { no: 1, title: "Reverse Alphabet Only" },
    { no: 2, title: "Kata Terpanjang" },
    { no: 3, title: "Query Matching" },
    { no: 4, title: "Diagonal Matrix Difference" },
  ];

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-6">Soal Algoritma - Navigasi</h1>
      <ul className="list-disc pl-5 space-y-2">
        {soalPages.map((soal) => (
          <li key={soal.no}>
            <Link href={`/soal${soal.no}`}>
              <span className="text-blue-600 hover:underline">
                Soal {soal.no}: {soal.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

import Pesquisa from "./components/Pesquisa";
import ItemFilme from "./components/ItemFilme";

export default function Home() {
  const filme = {
    id: 1,
    titulo: "Minhã Irmã e Eu",
    genero: "Comédia",
    duracao: 98,
    preco: 19.9,
    foto: "https://br.web.img2.acsta.net/pictures/23/11/21/20/37/1333793.png",
  };
  return (
    <div className="max-w-7xl mx-auto">
      <Pesquisa />
      <h1 className="mt-3 mb-4 text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl dark:text-white">
        Últimos Lançamentos:{" "}
        <span className="underline underline-offset-3 decoration-8 dark:decoration-orange-600">
          Direto do Cinema
        </span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1">
        <ItemFilme filme={filme} />
        <ItemFilme filme={filme} />
        <ItemFilme filme={filme} />
        <ItemFilme filme={filme} />
      </div>
    </div>
  );
}

import { useParams } from "react-router-dom";
import { corretores } from "../dados";
import Index from "./Index";

function normalizeSlug(value: string) {
  return value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // remove acentos
    .replace(/[^a-z0-9]/g, ""); // remove espaços e caracteres especiais
}

export default function Cartao() {
  const { user } = useParams();

  const slug = user ? normalizeSlug(user) : "";
  const dados = slug ? corretores[slug as keyof typeof corretores] : null;

  if (!dados) {
    return <h1>Corretor não encontrado</h1>;
  }

  // ✅ agora passamos os dados corretos pro Index
  return <Index dados={dados} slug={slug} />;
}
// pages/game/game.tsx
import { useParams } from "react-router-dom";

export default function Game() {
  const { name } = useParams();

  return (
    <div>
      <h1>Jogo selecionado:</h1>
      <p>{name}</p>
    </div>
  );
}

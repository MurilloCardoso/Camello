import { CardGame } from "../../components/asset/CardGame";

export default function Home() {
  return (
    <div>
      <h1 className="px-4 pt-4 text-3xl font-bold">Em Alta</h1>
      <div className="p-4">
        <h2 className="mb-4 text-2xl font-bold">Promoções</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <CardGame
            name="Hollow Knight"
            tags={["Metroidvania", "Indie", "Ação"]}
            srcImage="https://cdn.cloudflare.steamstatic.com/steam/apps/367520/header.jpg"
            priceOriginal={79.9}
            pricePromocional={29.9}
          />
          <CardGame
            name="Celeste"
            tags={["Plataforma", "Indie", "Desafio"]}
            srcImage="https://cdn.cloudflare.steamstatic.com/steam/apps/504230/header.jpg"
            priceOriginal={59.99}
            pricePromocional={19.99}
          />
          <CardGame
            name="Dead Cells"
            tags={["Roguelike", "Ação", "Pixel Art"]}
            srcImage="https://cdn.cloudflare.steamstatic.com/steam/apps/588650/header.jpg"
            priceOriginal={89.9}
            pricePromocional={27.9}
          />
          <CardGame
            name="Stardew Valley"
            tags={["Fazenda", "RPG", "Casual"]}
            srcImage="https://cdn.cloudflare.steamstatic.com/steam/apps/413150/header.jpg"
            priceOriginal={39.99}
            pricePromocional={23.99}
          />
          <CardGame
            name="Cuphead"
            tags={["Tiro", "Desafio", "Co-op"]}
            srcImage="https://cdn.cloudflare.steamstatic.com/steam/apps/268910/header.jpg"
            priceOriginal={75.0}
            pricePromocional={32.0}
          />
          <CardGame
            name="Terraria"
            tags={["Sobrevivência", "Craft", "2D"]}
            srcImage="https://cdn.cloudflare.steamstatic.com/steam/apps/105600/header.jpg"
            priceOriginal={24.99}
            pricePromocional={9.99}
          />
          <CardGame
            name="The Binding of Isaac: Rebirth"
            tags={["Roguelike", "Tiro", "Indie"]}
            srcImage="https://cdn.cloudflare.steamstatic.com/steam/apps/250900/header.jpg"
            priceOriginal={59.0}
            pricePromocional={19.9}
          />
          <CardGame
            name="Enter the Gungeon"
            tags={["Roguelike", "Bullet Hell", "Indie"]}
            srcImage="https://cdn.cloudflare.steamstatic.com/steam/apps/311690/header.jpg"
            priceOriginal={49.99}
            pricePromocional={14.99}
          />
        </div>
      </div>

      <h1 className="px-4 pt-6 text-3xl font-bold">Promoções</h1>
      <div className="p-4">
        <h2 className="mb-4 text-2xl font-bold">Mais Ofertas</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Repita ou varie os jogos abaixo se quiser */}
          <CardGame
            name="Ori and the Blind Forest"
            tags={["Aventura", "Plataforma", "História"]}
            srcImage="https://cdn.cloudflare.steamstatic.com/steam/apps/261570/header.jpg"
            priceOriginal={99.9}
            pricePromocional={39.9}
          />
          <CardGame
            name="Gris"
            tags={["Arte", "História", "Plataforma"]}
            srcImage="https://cdn.cloudflare.steamstatic.com/steam/apps/683320/header.jpg"
            priceOriginal={45.0}
            pricePromocional={14.99}
          />
          <CardGame
            name="Risk of Rain 2"
            tags={["Roguelike", "3D", "Co-op"]}
            srcImage="https://cdn.cloudflare.steamstatic.com/steam/apps/632360/header.jpg"
            priceOriginal={95.0}
            pricePromocional={29.9}
          />
          <CardGame
            name="Don't Starve"
            tags={["Sobrevivência", "Craft", "Estilo Tim Burton"]}
            srcImage="https://cdn.cloudflare.steamstatic.com/steam/apps/219740/header.jpg"
            priceOriginal={36.0}
            pricePromocional={12.0}
          />
        </div>
      </div>
    </div>
  );
}

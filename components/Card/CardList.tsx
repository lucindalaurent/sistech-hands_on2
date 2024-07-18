import { Card } from "./Card";
import type { CardProps } from "./Card";

type CardListProps = {
  cards: CardProps[];
};

function CardList({ cards }: CardListProps) {
  return (
    <div className="general grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
      {cards.map((card, index) => (
        <Card
          key={index}
          thumbnail={card.thumbnail}
          title={card.title}
          description={
            <ul className="list-disc px-5">
              {Array.isArray(card.description) && card.description.map((desc: string, descIndex) => (
                <li key={descIndex}>{desc}</li>
              ))}
            </ul>
          }
        />
      ))}
    </div>
  );
}

export { CardList };

import cards from "./dataset";
const Resolvers = {
  Query: {
    getAllCards: () => cards,
    getCard: (_: any, args: any) => {
      console.log(args);
      return cards.find((card) => card.id === args.id);
    },
  },
  Mutation: {
    addCard: (_: any, args: any) => {
      const newCard = {
        id: args.id,
        qtitle: args.qtitle,
        qAnswer: args.qAnswer,
        imageUrl: args.imgUrl,
        description: args.description,
        category: args.category,
      };
      cards.push(newCard);
      return newCard;
    },
  },
};
export default Resolvers;

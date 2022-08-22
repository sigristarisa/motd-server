import prisma from "@prisma/client";
const dbClient = new prisma.PrismaClient();

type MayoType = {
  id: number;
  name: string;
  ingredient: string;
  portion: string;
  image: string;
  combination: object[];
};

export class Mayonnaise {
  id: number;
  name: string;
  ingredient: string;
  portion: string;
  image: string;
  combination: object[];

  constructor(
    id: number,
    name: string,
    ingredient: string,
    portion: string,
    image: string,
    combination: object[]
  ) {
    this.id = id;
    this.name = name;
    this.ingredient = ingredient;
    this.portion = portion;
    this.image = image;
    this.combination = combination;
  }

  static async fromClient(json: MayoType) {
    const { id } = json;
    return new Mayonnaise(+id, "", "", "", "", []);
  }

  static fromDb(mayonnaise: MayoType) {
    return new Mayonnaise(
      mayonnaise.id,
      mayonnaise.name,
      mayonnaise.ingredient,
      mayonnaise.portion,
      mayonnaise.image,
      mayonnaise.combination
    );
  }

  static async findById(id: number) {
    const foundMayonnaise: MayoType | null =
      await dbClient.mayonnaise.findFirst({
        where: { id },
        include: {
          combination: {
            include: {
              dish: true,
            },
          },
        },
      });

    if (foundMayonnaise) {
      return Mayonnaise.fromDb(foundMayonnaise);
    }
    return null;
  }
}

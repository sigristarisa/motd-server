import { rawMayonnaise } from "./rawMayonnaise";
import prisma from "@prisma/client";
const dbClient = new prisma.PrismaClient();

type Mayonnaise = {
  name: string;
  ingredient: string;
  portion: string;
  image: string;
};

const seed = async (): Promise<void> => {
  await createMayonaisseData();
  process.exit(0);
};

const createMayonaisseData = async (): Promise<Mayonnaise[]> => {
  const mayonnaiseArr = [];

  for (const mayonnaise of rawMayonnaise) {
    const createdMayonnaise = await dbClient.mayonnaise.create({
      data: mayonnaise,
    });
    mayonnaiseArr.push(createdMayonnaise);
  }

  return mayonnaiseArr;
};

seed()
  .catch(async (e) => {
    console.error(e);
  })
  .then(() => process.exit(1));

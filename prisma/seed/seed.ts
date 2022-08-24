import { rawMayonnaise } from "./rawMayonnaise";
import { rawDishes } from "./rawDishes";
import { rawCombinations } from "./rawCombinations";
import prisma from "@prisma/client";
const dbClient = new prisma.PrismaClient();

type Mayonnaise = {
  name: string;
  ingredient: string;
  portion: string;
  image: string;
};

type Dish = {
  name: string;
  image: string;
};

type Combination = {
  mayonnaiseId: number;
  dishId: number;
};

const seed = async (): Promise<void> => {
  await createMayonaisseData();
  await createDishData();
  await createCombinationData();
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

const createDishData = async (): Promise<Dish[]> => {
  const dishArr = [];

  for (const dish of rawDishes) {
    const createdDish = await dbClient.dish.create({
      data: dish,
    });
    dishArr.push(dish);
  }
  return dishArr;
};

const createCombinationData = async (): Promise<Combination[]> => {
  const combinationArr = [];

  for (const combination of rawCombinations) {
    const createdCombination = await dbClient.combination.create({
      data: {
        mayonnaise: {
          connect: { id: combination.mayonnaiseId },
        },
        dish: {
          connect: { id: combination.dishId },
        },
      },
    });
    combinationArr.push(createdCombination);
  }
  return combinationArr;
};

seed()
  .catch(async (e) => {
    console.error(e);
  })
  .then(() => process.exit(1));

-- CreateTable
CREATE TABLE "Mayonaisse" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "ingredient" TEXT NOT NULL,
    "portion" TEXT NOT NULL,

    CONSTRAINT "Mayonaisse_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dish" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Dish_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Combination" (
    "id" SERIAL NOT NULL,
    "mayonaisseId" INTEGER NOT NULL,
    "dishId" INTEGER NOT NULL,

    CONSTRAINT "Combination_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Combination" ADD CONSTRAINT "Combination_mayonaisseId_fkey" FOREIGN KEY ("mayonaisseId") REFERENCES "Mayonaisse"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Combination" ADD CONSTRAINT "Combination_dishId_fkey" FOREIGN KEY ("dishId") REFERENCES "Dish"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

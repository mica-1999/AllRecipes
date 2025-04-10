-- CreateTable
CREATE TABLE "PrepareRecipe" (
    "id" SERIAL NOT NULL,
    "recipeid" INTEGER NOT NULL,
    "userid" INTEGER NOT NULL,
    "dateAdded" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastPrepared" TIMESTAMP(6),

    CONSTRAINT "PrepareRecipe_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bookmark" (
    "id" SERIAL NOT NULL,
    "recipeid" INTEGER NOT NULL,
    "userid" INTEGER NOT NULL,
    "dateAdded" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Bookmark_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Collection" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdat" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedat" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userid" INTEGER NOT NULL,

    CONSTRAINT "Collection_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CollectionRecipe" (
    "id" SERIAL NOT NULL,
    "collectionid" INTEGER NOT NULL,
    "recipeid" INTEGER NOT NULL,

    CONSTRAINT "CollectionRecipe_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PrepareRecipe_userid_idx" ON "PrepareRecipe"("userid");

-- CreateIndex
CREATE INDEX "PrepareRecipe_recipeid_idx" ON "PrepareRecipe"("recipeid");

-- CreateIndex
CREATE INDEX "Bookmark_userid_idx" ON "Bookmark"("userid");

-- CreateIndex
CREATE INDEX "Bookmark_recipeid_idx" ON "Bookmark"("recipeid");

-- CreateIndex
CREATE INDEX "Collection_userid_idx" ON "Collection"("userid");

-- CreateIndex
CREATE INDEX "CollectionRecipe_collectionid_idx" ON "CollectionRecipe"("collectionid");

-- CreateIndex
CREATE INDEX "CollectionRecipe_recipeid_idx" ON "CollectionRecipe"("recipeid");

-- AddForeignKey
ALTER TABLE "PrepareRecipe" ADD CONSTRAINT "PrepareRecipe_recipeid_fkey" FOREIGN KEY ("recipeid") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "PrepareRecipe" ADD CONSTRAINT "PrepareRecipe_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Bookmark" ADD CONSTRAINT "Bookmark_recipeid_fkey" FOREIGN KEY ("recipeid") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Bookmark" ADD CONSTRAINT "Bookmark_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Collection" ADD CONSTRAINT "Collection_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "CollectionRecipe" ADD CONSTRAINT "CollectionRecipe_collectionid_fkey" FOREIGN KEY ("collectionid") REFERENCES "Collection"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "CollectionRecipe" ADD CONSTRAINT "CollectionRecipe_recipeid_fkey" FOREIGN KEY ("recipeid") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

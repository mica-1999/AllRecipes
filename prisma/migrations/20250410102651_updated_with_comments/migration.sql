-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "recipeid" INTEGER NOT NULL,
    "userid" INTEGER NOT NULL,
    "content" TEXT NOT NULL,
    "createdat" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Comment_userid_idx" ON "Comment"("userid");

-- CreateIndex
CREATE INDEX "Comment_recipeid_idx" ON "Comment"("recipeid");

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_recipeid_fkey" FOREIGN KEY ("recipeid") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

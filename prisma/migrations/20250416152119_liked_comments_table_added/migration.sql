-- CreateTable
CREATE TABLE "LikedComment" (
    "id" SERIAL NOT NULL,
    "commentid" INTEGER NOT NULL,
    "userid" INTEGER NOT NULL,
    "likedAt" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LikedComment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "LikedComment_userid_idx" ON "LikedComment"("userid");

-- CreateIndex
CREATE INDEX "LikedComment_commentid_idx" ON "LikedComment"("commentid");

-- AddForeignKey
ALTER TABLE "LikedComment" ADD CONSTRAINT "LikedComment_commentid_fkey" FOREIGN KEY ("commentid") REFERENCES "Comment"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "LikedComment" ADD CONSTRAINT "LikedComment_userid_fkey" FOREIGN KEY ("userid") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

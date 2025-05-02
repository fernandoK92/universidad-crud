-- CreateTable
CREATE TABLE "_CarreraMaterias" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CarreraMaterias_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_CarreraMaterias_B_index" ON "_CarreraMaterias"("B");

-- AddForeignKey
ALTER TABLE "_CarreraMaterias" ADD CONSTRAINT "_CarreraMaterias_A_fkey" FOREIGN KEY ("A") REFERENCES "Carrera"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CarreraMaterias" ADD CONSTRAINT "_CarreraMaterias_B_fkey" FOREIGN KEY ("B") REFERENCES "Materia"("id") ON DELETE CASCADE ON UPDATE CASCADE;

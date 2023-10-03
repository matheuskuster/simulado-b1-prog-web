-- CreateTable
CREATE TABLE "pacientes" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "senha" INTEGER NOT NULL,
    "usuario" TEXT NOT NULL,

    CONSTRAINT "pacientes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "secretarias" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "rg" INTEGER NOT NULL,

    CONSTRAINT "secretarias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "consultas" (
    "id" TEXT NOT NULL,
    "data" DATE NOT NULL,
    "nomePaciente" TEXT NOT NULL,
    "nomeDentista" TEXT NOT NULL,

    CONSTRAINT "consultas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "agenda" (
    "id" TEXT NOT NULL,
    "data" DATE NOT NULL,
    "nomePaciente" TEXT NOT NULL,

    CONSTRAINT "agenda_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "secretarias_rg_key" ON "secretarias"("rg");

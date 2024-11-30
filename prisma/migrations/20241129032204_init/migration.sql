/*
  Warnings:

  - Added the required column `image` to the `Mineral` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Mineral" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "classification" TEXT NOT NULL,
    "chemicalFormula" TEXT NOT NULL,
    "hardness" TEXT NOT NULL,
    "luster" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "composition" TEXT NOT NULL,
    "crystallography" TEXT NOT NULL,
    "crystalClass" TEXT NOT NULL,
    "habit" TEXT NOT NULL,
    "cleavage" TEXT NOT NULL,
    "fracture" TEXT,
    "relativeDensity" REAL,
    "opticalProperties" TEXT NOT NULL,
    "diagnosticProperties" TEXT NOT NULL,
    "associations" TEXT NOT NULL,
    "occurrence" TEXT NOT NULL,
    "uses" TEXT NOT NULL,
    "streak" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Mineral" ("associations", "chemicalFormula", "classification", "cleavage", "color", "composition", "createdAt", "crystalClass", "crystallography", "diagnosticProperties", "fracture", "habit", "hardness", "id", "luster", "name", "occurrence", "opticalProperties", "relativeDensity", "streak", "updatedAt", "uses") SELECT "associations", "chemicalFormula", "classification", "cleavage", "color", "composition", "createdAt", "crystalClass", "crystallography", "diagnosticProperties", "fracture", "habit", "hardness", "id", "luster", "name", "occurrence", "opticalProperties", "relativeDensity", "streak", "updatedAt", "uses" FROM "Mineral";
DROP TABLE "Mineral";
ALTER TABLE "new_Mineral" RENAME TO "Mineral";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

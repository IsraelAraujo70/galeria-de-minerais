import { Mineral } from '@/_types/mineral'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export const getMinerals = async (): Promise<Mineral[]> => {
  const minerals = await prisma.mineral.findMany()

  return minerals.map(mineral => ({
    ...mineral,
    relativeDensity: mineral.relativeDensity
      ? mineral.relativeDensity.toString()
      : null,
  }))
}

import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function getMinerals() {
  const minerais = await prisma.mineral.findMany()
  return minerais
}

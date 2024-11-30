import { PrismaClient } from '@prisma/client'
import * as fs from 'fs'

const prisma = new PrismaClient()

interface Mineral {
  name: string
  classification: string
  chemicalFormula: string
  hardness: string
  luster: string
  color: string
  composition: string
  crystallography: string
  crystalClass: string
  habit: string
  cleavage?: string
  fracture?: string
  relativeDensity?: string // Recebido como string no JSON
  opticalProperties: string
  diagnosticProperties: string
  associations: string
  occurrence: string
  uses: string
  streak?: string
  image: string
}

// Função para converter valores de densidade relativa
function parseRelativeDensity(density: string | undefined): number | null {
  if (!density) return null // Retorna null se o valor estiver ausente

  // Tenta extrair um número válido (exemplo: "2,05 – 2,09" -> 2.05)
  const match = density.match(/[\d.]+/)
  return match ? parseFloat(match[0].replace(',', '.')) : null
}

async function main() {
  const minerals: Mineral[] = JSON.parse(
    fs.readFileSync('./src/_actions/minerals.json', 'utf8'),
  )

  for (const mineral of minerals) {
    await prisma.mineral.create({
      data: {
        name: mineral.name,
        classification: mineral.classification,
        chemicalFormula: mineral.chemicalFormula,
        hardness: mineral.hardness,
        luster: mineral.luster,
        color: mineral.color,
        composition: mineral.composition,
        crystallography: mineral.crystallography,
        crystalClass: mineral.crystalClass,
        habit: mineral.habit,
        cleavage: mineral.cleavage || '',
        fracture: mineral.fracture || null,
        relativeDensity: parseRelativeDensity(mineral.relativeDensity), // Converte o valor aqui
        opticalProperties: mineral.opticalProperties,
        diagnosticProperties: mineral.diagnosticProperties,
        associations: mineral.associations,
        occurrence: mineral.occurrence,
        uses: mineral.uses,
        streak: mineral.streak || '',
        image: mineral.image || 'https://example.com/default-image.jpg',
      },
    })
  }

  console.log('Dados importados com sucesso!')
}

main()
  .catch(e => {
    console.error('Erro ao importar os dados:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

export interface Mineral {
  id: number
  name: string
  classification: string
  chemicalFormula: string
  hardness: string
  luster: string
  color: string
  composition: string | null
  crystallography: string | null
  crystalClass: string | null
  habit: string | null
  cleavage?: string | null
  fracture?: string | null
  relativeDensity?: string | null | undefined
  opticalProperties?: string | null
  diagnosticProperties?: string | null
  associations?: string | null
  occurrence?: string | null
  uses?: string | null
  streak?: string | null
  image?: string | null
  createdAt?: Date
  updatedAt?: Date
}

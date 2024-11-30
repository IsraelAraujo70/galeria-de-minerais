import { PrismaClient } from '@prisma/client'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { ScrollArea } from './ui/scroll-area'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'
const prisma = new PrismaClient()

const MineralCard = async () => {
  const minerais = await prisma.mineral.findMany()
  return (
    <>
      {minerais.map(mineral => (
        <Dialog key={mineral.id}>
          <DialogTrigger asChild>
            <Card className="border border-muted rounded-lg shadow-md hover:shadow-lg transition-shadow">
              {/* Header do Card */}
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-primary">
                  {mineral.name}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  Classe Cristalina: {mineral.crystalClass}
                </CardDescription>
              </CardHeader>

              {/* Conteúdo Principal */}
              <CardContent className="flex flex-col space-y-">
                <div className="flex items-center">
                  <span className="font-bold">Dureza:</span>
                  <span className="ml-2">{mineral.hardness}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-bold">Cor:</span>
                  <span className="ml-2">{mineral.color}</span>
                </div>
                <div className="flex items-center">
                  <span className="font-bold">Fórmula Química:</span>
                  <span className="ml-2">{mineral.chemicalFormula}</span>
                </div>
              </CardContent>

              {/* Imagem e Rodapé */}
              <CardFooter className="flex flex-col items-center">
                {mineral.image && (
                  <img
                    src={mineral.image}
                    alt={mineral.name}
                    className="w-full h-full object-cover rounded-md"
                  />
                )}
              </CardFooter>
            </Card>
          </DialogTrigger>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-hidden">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-primary">
                {mineral.name}
              </DialogTitle>
              <DialogDescription className="text-muted-foreground">
                Informações completas sobre o mineral.
              </DialogDescription>
            </DialogHeader>
            <div className="flex flex-col gap-4">
              {/* Propriedades Detalhadas */}
              <ScrollArea className="max-h-[30vh] overflow-y-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[200px]">Propriedade</TableHead>
                      <TableHead>Descrição</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">
                        Fórmula Química
                      </TableCell>
                      <TableCell>{mineral.chemicalFormula}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Dureza</TableCell>
                      <TableCell>{mineral.hardness}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Cor</TableCell>
                      <TableCell>{mineral.color}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Composição</TableCell>
                      <TableCell>{mineral.composition}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Cristalografia
                      </TableCell>
                      <TableCell>{mineral.crystallography}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Classe Cristalina
                      </TableCell>
                      <TableCell>{mineral.crystalClass}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Hábito</TableCell>
                      <TableCell>{mineral.habit}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Clivagem</TableCell>
                      <TableCell>{mineral.cleavage}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Fratura</TableCell>
                      <TableCell>{mineral.fracture}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Densidade Relativa
                      </TableCell>
                      <TableCell>{mineral.relativeDensity}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Propriedades Ópticas
                      </TableCell>
                      <TableCell>{mineral.opticalProperties}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Diagnóstico</TableCell>
                      <TableCell>{mineral.diagnosticProperties}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Associações</TableCell>
                      <TableCell>{mineral.associations}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Ocorrência</TableCell>
                      <TableCell>{mineral.occurrence}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Usos</TableCell>
                      <TableCell>{mineral.uses}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </ScrollArea>
              {/* Imagem no Diálogo */}
              {mineral.image && (
                <img
                  src={mineral.image}
                  alt={mineral.name}
                  className="w-full h-full object-cover rounded-md mt-4 mb-4"
                />
              )}
            </div>
          </DialogContent>
        </Dialog>
      ))}
    </>
  )
}
export default MineralCard

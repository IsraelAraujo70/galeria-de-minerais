'use client'

import { motion } from 'framer-motion'
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
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'
import { Mineral } from '@/_types/mineral'

export default function MineralCard({ minerais }: { minerais: Mineral[] }) {
  return (
    <>
      {minerais.map(mineral => (
        <Dialog key={mineral.id}>
          <DialogTrigger asChild>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="border border-muted rounded-lg shadow-md hover:shadow-lg transition-shadow lg:h-[750px] md:h-[650px] flex flex-col justify-between h-[auto]">
                {/* Header do Card */}
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary">
                    {mineral.name}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    Classe Cristalina:{' '}
                    {mineral.crystalClass || 'Não especificado'}
                  </CardDescription>
                </CardHeader>

                {/* Conteúdo Principal */}
                <CardContent className="flex flex-col space-y-4">
                  <Table>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">Dureza:</TableCell>
                        <TableCell>{mineral.hardness}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">Cor:</TableCell>
                        <TableCell>{mineral.color}</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">
                          Fórmula Química:
                        </TableCell>
                        <TableCell>{mineral.chemicalFormula}</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
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
            </motion.div>
          </DialogTrigger>
          <DialogContent className="md:max-w-2xl md:max-h-[90vh] overflow-hidden max-h-[80%] max-w-[80%]">
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
                      <TableCell>
                        {mineral.composition || 'Não especificado'}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Cristalografia
                      </TableCell>
                      <TableCell>
                        {mineral.crystallography || 'Não especificado'}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Classe Cristalina
                      </TableCell>
                      <TableCell>
                        {mineral.crystalClass || 'Não especificado'}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Hábito</TableCell>
                      <TableCell>{mineral.habit}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Clivagem</TableCell>
                      <TableCell>
                        {mineral.cleavage || 'Não especificado'}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Fratura</TableCell>
                      <TableCell>
                        {mineral.fracture || 'Não especificado'}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Densidade Relativa
                      </TableCell>
                      <TableCell>
                        {mineral.relativeDensity || 'Não especificado'}
                      </TableCell>
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

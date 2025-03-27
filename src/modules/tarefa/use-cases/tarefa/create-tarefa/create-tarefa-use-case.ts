import { inject, injectable } from 'tsyringe'
import { Tarefa } from '@modules/tarefa/infra/typeorm/entities/tarefa'
import { ITarefaRepository } from '@modules/tarefa/repositories/i-tarefa-repository'

interface IRequest {
  name: string
  description: string
  status: boolean
}

@injectable()
class CreateTarefaUseCase {
  constructor(@inject('TarefaRepository')
    private tarefaRepository: ITarefaRepository
  ) {}

  async execute({
    name,
    description,
    status
  }: IRequest): Promise<Tarefa> {
    try {
      const result = await this.tarefaRepository.create({
        name,
        description,
        status
      })

      return result
    } catch (err) {
      throw err
    }
  }
}

export { CreateTarefaUseCase }

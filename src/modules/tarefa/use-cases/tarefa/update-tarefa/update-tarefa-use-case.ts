import { inject, injectable } from 'tsyringe'
import { Tarefa } from '@modules/tarefa/infra/typeorm/entities/tarefa'
import { ITarefaRepository } from '@modules/tarefa/repositories/i-tarefa-repository'

interface IRequest {
  id: string
  name: string
  description: string
  status: boolean
}

@injectable()
class UpdateTarefaUseCase {
  constructor(@inject('TarefaRepository')
    private tarefaRepository: ITarefaRepository
  ) {}

  async execute({
    id,
    name,
    description,
    status
  }: IRequest): Promise<Tarefa> {
    try {
      const tarefa = await this.tarefaRepository.update({
        id,
        name,
        description,
        status
      })

      return tarefa
    } catch (err) {
      throw err
    }
  }
}

export { UpdateTarefaUseCase }

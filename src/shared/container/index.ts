import { container } from 'tsyringe'

import '@shared/container/providers'

import { ITarefaRepository } from '@modules/tarefa/repositories/i-tarefa-repository'
import { TarefaRepository } from '@modules/tarefa/infra/typeorm/repositories/tarefa-repository'

container.registerSingleton<ITarefaRepository>('TarefaRepository', TarefaRepository)


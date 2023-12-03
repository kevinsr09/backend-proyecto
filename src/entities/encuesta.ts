import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { acepofertActual, opinPanadArea } from '../types'

@Entity({ name: 'encuesta' })
export class Encuesta extends BaseEntity {
  @PrimaryGeneratedColumn()
    id: number

  @Column()
    frecuencia_compra: number

  @Column({
    default: 0
  })
    gasto_promedio: number

  @Column({
    nullable: true
  })
    lugar_pref_compra_pan: string

  @Column({
    nullable: true
  })
    opinion_panaderias_area: opinPanadArea

  @Column({
    nullable: true
  })
    comentarios_habitos_compra_pan: string

  @Column({
    type: 'enum',
    enum: ['si', 'no'],
    nullable: true
  })
    acepta_ofertas_actualizaciones: acepofertActual
}

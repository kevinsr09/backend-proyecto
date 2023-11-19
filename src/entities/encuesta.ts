import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { acepofertActual, opinPanadArea, prefComprPan } from '../types'

@Entity({ name: 'encuestas' })
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
    panes_favoritos: string

  @Column({
    type: 'enum',
    enum: ['Ambos', 'Panaderia local', 'Tienda de comestibles'],
    nullable: true
  })
    preferencia_compra_pan: prefComprPan

  @Column({
    nullable: true
  })
    opinion_panaderias_area: opinPanadArea

  @Column({
    nullable: true
  })
    razones_pref_panaderias_locales: string

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

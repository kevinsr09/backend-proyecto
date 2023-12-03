import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 'panes_fav' })
export class PanesFav extends BaseEntity {
  @PrimaryGeneratedColumn()
    id: number

  @Column()
    name: string

  @Column()
    count: number
}

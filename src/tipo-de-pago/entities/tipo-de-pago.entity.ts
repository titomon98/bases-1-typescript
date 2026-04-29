import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'tipo_de_pago', schema: 'tickets' })
export class TipoDePago {
  @PrimaryGeneratedColumn({ name: 'id' })
  id_tipo_de_pago: number;

  @Column({ type: 'varchar', length: 50 })
  tipo: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  proveedor: string;

  @Column({ type: 'boolean', default: false })
  es_predeterminado: boolean;

  @Column({ type: 'int', default: 1 })
  estado: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamptz' })
  createdAt: Date;
}
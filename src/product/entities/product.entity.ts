import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'varchar', length: 255 })
  manufacturer: string;

  @Column({ type: 'varchar', length: 255 })
  country: string;

  @Column({ name: 'unit_price', type: 'varchar', length: 255 })
  unitPrice: number;

  @CreateDateColumn({
    name: 'created_on',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdOn: Date;

  @UpdateDateColumn({
    name: 'modified_on',
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  modifiedOn: Date;
}

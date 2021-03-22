import { 
    Entity, 
    PrimaryGeneratedColumn, 
    Column, 
    BaseEntity,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm';

@Entity("users")
export class User extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ unique: true })
    username: string;

    @Column({ unique: true })
    email: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;

    @CreateDateColumn()
    createdDate: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
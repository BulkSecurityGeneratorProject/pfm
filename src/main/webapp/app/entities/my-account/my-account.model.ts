import { Person } from './../person/person.model';
import { BaseEntity } from './../../shared';

export class MyAccount implements BaseEntity {
    constructor(
        public id?: number,
        public name?: string,
        public balance?: number,
        public bankAccountId?: number,
        public ownerId?: number,
        public owner?: Person,
    ) {
    }
}

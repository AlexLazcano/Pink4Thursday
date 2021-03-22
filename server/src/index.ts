import { createConnection } from 'typeorm';
import { __PROD__ } from './constants';
import { User } from './entities/User';

const main = async () => {
    const conn = await createConnection({
        type: 'postgres',
        database: 'pink-thursday',
        logging: !__PROD__,
        synchronize: !__PROD__,
        entities: [User]
    });
};

main();
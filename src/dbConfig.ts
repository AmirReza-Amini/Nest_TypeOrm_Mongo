import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { join } from "path";

export const config: TypeOrmModuleOptions = {
    type: 'mongodb',
    host: 'localhost',
    port: 27017, 
    database: 'nestDb',
    useNewUrlParser: true,
    autoLoadEntities: true,
    useUnifiedTopology: true,
    entities: [join(__dirname,'models/**.model{.ts,.js}')]
}
import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma'; // Ajusta la ruta al cliente generado

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
    constructor() {
        super();
    }

    async onModuleInit() {
        await this.$connect(); // Conecta automáticamente al iniciar el módulo
    }

    async onModuleDestroy() {
        await this.$disconnect(); // Desconecta automáticamente al destruir el módulo
    }
}
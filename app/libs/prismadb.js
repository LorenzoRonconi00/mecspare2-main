import { PrismaClient } from "@prisma/client";

if (typeof globalThis.prisma === 'undefined') {
    globalThis.prisma = new PrismaClient();
  }
  
const client = globalThis.prisma;

if (process.env.NODE_ENV !== 'production') {
    globalThis.prisma = client;
}
  
export default client;
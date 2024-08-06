/*
  Warnings:

  - You are about to drop the `BarbershopService` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BarbershopService" DROP CONSTRAINT "BarbershopService_barbershopId_fkey";

-- DropForeignKey
ALTER TABLE "Booking" DROP CONSTRAINT "Booking_serviceId_fkey";

-- DropTable
DROP TABLE "BarbershopService";

-- CreateTable
CREATE TABLE "BarberShopService" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "price" DECIMAL(10,2) NOT NULL,
    "barbershopId" TEXT NOT NULL,

    CONSTRAINT "BarberShopService_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BarberShopService" ADD CONSTRAINT "BarberShopService_barbershopId_fkey" FOREIGN KEY ("barbershopId") REFERENCES "Barbershop"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "BarberShopService"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

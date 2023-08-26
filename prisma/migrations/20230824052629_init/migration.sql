/*
  Warnings:

  - You are about to drop the column `cuantity` on the `Products` table. All the data in the column will be lost.
  - You are about to drop the `Addresses` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `color` to the `OrderItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `OrderItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quantity` to the `Products` table without a default value. This is not possible if the table is not empty.
  - Made the column `isfav` on table `Products` required. This step will fail if there are existing NULL values in that column.
  - Made the column `isInCart` on table `Products` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "OrderItem" ADD COLUMN     "color" TEXT NOT NULL,
ADD COLUMN     "quantity" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Products" DROP COLUMN "cuantity",
ADD COLUMN     "quantity" INTEGER NOT NULL,
ALTER COLUMN "isfav" SET NOT NULL,
ALTER COLUMN "isfav" SET DEFAULT false,
ALTER COLUMN "isInCart" SET NOT NULL,
ALTER COLUMN "isInCart" SET DEFAULT false;

-- DropTable
DROP TABLE "Addresses";

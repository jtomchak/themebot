# Migration `20210102231944-create-theme`

This migration has been generated by Jesse Tomchak at 1/2/2021, 4:19:44 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "Theme" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "startingAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endingAt" TIMESTAMP(3),
    "dailyPrompts" TEXT[],
    "dailyTracking" TEXT[],

    PRIMARY KEY ("id")
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20201228223445-create-data-migrations..20210102231944-create-theme
--- datamodel.dml
+++ datamodel.dml
@@ -1,9 +1,9 @@
 datasource DS {
   // optionally set multiple providers
   // example: provider = ["sqlite", "postgresql"]
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider      = "prisma-client-js"
@@ -11,16 +11,26 @@
 }
 // Define your own datamodels here and run `yarn redwood db save` to create
 // migrations for them.
-// TODO: Please remove the following example:
 model User {
   id        Int      @id @default(autoincrement())
   netlifyID String   @unique
   stripeID  String   @unique
   createdAt DateTime @default(now())
 }
+model Theme {
+  id            String    @id @default(cuid())
+  title         String
+  description   Json
+  createdAt     DateTime  @default(now())
+  startingAt    DateTime  @default(now())
+  endingAt      DateTime?
+  dailyPrompts  String[]
+  dailyTracking String[]
+}
+
 model RW_DataMigration {
   version    String   @id
   name       String
   startedAt  DateTime
```


// scripts/seed.ts
import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function main() {
  try {
    // Chemin vers votre fichier JSON
    const dataPath = path.join(process.cwd(), './data/data.json');

    // Lire le fichier JSON
    const jsonData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

    console.log('Chargement des données:', jsonData);

    // Créer un utilisateur par défaut si nécessaire
    let defaultUser = null;

    if (!jsonData.users || jsonData.users.length === 0) {
      defaultUser = await prisma.user.create({
        data: {
          email: 'default@example.com',
          name: 'Utilisateur par défaut',
          password: 'password123', // À remplacer par un mot de passe hashé en production
        },
      });
      console.log('Utilisateur par défaut créé:', defaultUser.id);
    }

    // Importer les balances
    if (jsonData.balance) {
      await prisma.balance.create({
        data: {
          current: parseFloat(jsonData.balance.current),
          income: parseFloat(jsonData.balance.income),
          expenses: parseFloat(jsonData.balance.expenses),
          userId: defaultUser?.id,
        },
      });
      console.log('Balance imported successfully');
    }

    // Importer les transactions
    if (jsonData.transactions) {
      for (const transaction of jsonData.transactions) {
        await prisma.transaction.create({
          data: {
            avatar: transaction.avatar,
            name: transaction.name,
            category: transaction.category,
            date: transaction.date,
            amount: parseFloat(transaction.amount),
            recurring: transaction.recurring || false,
            userId: defaultUser?.id,
          },
        });
      }
      console.log(`${jsonData.transactions.length} transaction(s) importée(s)`);
    }

    // Importer les budgets
    if (jsonData.budgets) {
      for (const budget of jsonData.budgets) {
        await prisma.budget.create({
          data: {
            category: budget.category,
            maximum: parseFloat(budget.maximum),
            theme: budget.theme,
            userId: defaultUser?.id,
          },
        });
      }
      console.log(`${jsonData.budgets.length} budget(s) importé(s)`);
    }

    // Importer les pots
    if (jsonData.pots) {
      for (const pot of jsonData.pots) {
        await prisma.pot.create({
          data: {
            name: pot.name,
            target: parseFloat(pot.target),
            total: parseFloat(pot.total),
            theme: pot.theme,
            userId: defaultUser?.id,
          },
        });
      }
      console.log(`${jsonData.pots.length} pot(s) importé(s)`);
    }

    // Importer les utilisateurs (si présents)
    if (jsonData.users) {
      for (const user of jsonData.users) {
        await prisma.user.create({
          data: {
            email: user.email,
            name: user.name,
            password: user.password,
          },
        });
      }
      console.log(`${jsonData.users.length} utilisateur(s) importé(s)`);
    }

    console.log('Toutes les données ont été importées avec succès !');
  } catch (error) {
    console.error("Erreur lors de l'importation des données :", error);
    console.error(error);
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });

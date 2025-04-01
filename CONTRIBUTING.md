# CONTRIBUTING.md

## Workflow Overview

### 1. Branching

- **Main Branch:** La main branch est protege et lorsqu'on push notre feature branch, il faut ouvrir une pull request sur github en mettant en description ce que l'on a fait pour qu'un autre puisse approuver (au moins on peut prendre connaissance du code egalement).

- **Feature Branches:**
  - Pour creer une branche:
    ```bash
    git checkout -b feature/your-feature-name
    ```
  - Utiliser un prefixe/detail pour les noms de branches (ex:, `feature/login-page`, `bugfix/header-responsive`).

### 2. Workflow pour garder le travail updated

Lorsqu'on travail sur une feature, apres une pause ou une journee, si il y a eu des changements sur la main branche et qu'on souhaite les refleter sur notre feature branche :

- **Avant de commencer a travailler:**
  ```bash
  git checkout main # Retourner sur main branch (si on y est pas deja)
  git pull origin main # Pull les derniers changements de la main branch
  git checkout feature/your-feature-name # Retourner sur notre feature branche (-b pour la creer)
  git merge main # Pour merge les changements de la main qu'on vient de pull sur notre feature branche (on doit etre dessus pour effectuer cette commande)
  ```

### 3. Bonne pratiques

- Faire des commits regulierements avec une petite description clair.
- Effectuer des tests voir meme creer des tests avec Jest avant de push sur la main pour etre sur de ne pas casser la branche principal (apres c'est un projet d'entrainement pas de pression meme si on venait a casser on est la pour pratiquer).
- Essayer de ne pas s'eparpiller sur plusieurs features a la fois sur une branche et pas hesiter a diviser en petite feature pour integrer regulierement a la main (dans l'ideal)
- Ne pas hesiter a faire les feedback et ammener une critique constructive si besoin lorsqu'on review la pull request de quelqu'un, on est la pour apprendre donc c'est utile.

### 4. Pull Requests (PRs)

- **Push la branche sur la main:**

  ```bash
  git push feature/your-feature-name # Quand la feature est prete a etre push sur la main
  ```

- Sur github, une fois notre feature push, on peut ouvrir une pull request, rentrer une description rapide et attendre d'etre approuve par un autre.
- Une personne approuve la pull request, qui est merge sur la main, on peut ensuite delete notre feature branche en local `git branch -d branch` et en remote sur github `git push --delete [nom-de-ma-branche]`

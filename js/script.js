// Récupérer l'élément conteneur de la grille depuis le DOM
const grilleContainer = document.getElementById("grille-container");
// Récupérer l'élément d'affichage du score depuis le DOM
const scoreAffichage = document.getElementById("score");
// Définir la taille de la grille de jeu
const tailleGrille = { largeur: 25, hauteur: 15 };
// Initialiser la position de départ du joueur
let positionJoueur = { x: 1, y: 1 };
// Initialiser le score du joueur
let score = 0;
// Initialiser l'état de la partie (non terminée par défaut)
let partieTerminee = false;




// Définir la disposition de la grille

grille = [
  // Ligne 1
  ["mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur"],
  // Ligne 2
  ["mur", "joueur", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur"],
  // Ligne 3
  ["mur", "mur", "mur", "mur", "mur", "tresor", "vide", "vide", "vide", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur"],
  // Ligne 4
  ["mur", "mur", "mur", "mur", "mur", "mur", "mur", "vide", "vide", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur"],
  // Ligne 5
  ["mur", "vide", "vide", "vide", "vide", "vide", "monstre", "vide", "vide", "tresor", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur"],
  // Ligne 6
  ["mur", "vide", "vide", "mur", "mur", "mur", "mur", "mur", "vide", "vide", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur"],
  // Ligne 7
  ["mur", "vide", "vide", "monstre", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "monstre", "vide", "tresor", "mur", "mur"],
  // Ligne 8
  ["mur", "vide", "mur", "vide", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "vide", "mur", "vide", "mur", "mur", "mur"],
  // Ligne 9
  ["mur", "vide", "mur", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "monstre", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "mur", "mur", "mur"],
  // Ligne 10
  ["mur", "vide", "mur", "vide", "mur", "mur", "vide", "mur", "mur", "mur", "tresor", "mur", "mur", "mur", "vide", "vide", "mur", "mur", "mur", "vide", "mur", "vide", "mur", "mur", "mur"],
  // Ligne 11
  ["mur", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "monstre", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "mur", "mur"],
  // Ligne 12
  ["mur", "mur", "mur", "mur", "vide", "vide", "vide", "vide", "vide", "mur", "mur", "mur", "vide", "vide", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur"],
  // Ligne 13
  ["mur", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "mur", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "mur", "mur"],
  // Ligne 14
  ["mur", "vide", "mur", "mur", "mur", "mur", "mur", "mur", "vide", "mur", "mur", "mur", "mur", "vide", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "vide", "vide", "mur"],
  // Ligne 15
  ["mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur"],

];




// Fonction pour créer la grille (En ajoutant des cellules à l'élément avec l'id "grille-container")

function creerGrille() {
  // On récupère l'élément DOM qui représente le conteneur de la grille
  const grilleContainer = document.getElementById("grille-container");

  // On parcourt les lignes de la grille
  for (let y = 0; y < tailleGrille.hauteur; y++) {
    // On parcourt les colonnes de la grille
    for (let x = 0; x < tailleGrille.largeur; x++) {
      // On crée un nouvel élément <div> pour représenter une cellule
      const cellule = document.createElement("div");

      // On ajoute des classes à la cellule pour lui donner des styles CSS
      cellule.className = "grille-cel " + grille[y][x];

      // Si la cellule contient un trésor, on ajoute la classe "tresor" pour le stylage
      if (grille[y][x] === "tresor") {
        cellule.classList.add("tresor");
      }

      // On ajoute la cellule au conteneur de la grille
      grilleContainer.appendChild(cellule);
    }
  }

  // Démarrer le déplacement continu des monstres une fois la page web Téléchargée
  demarrerDeplacementMonstresContinu();
}




// Fonction pour mettre à jour la position du joueur

// Variable pour indiquer si la partie est démarrée ou non
let partieDemarree = false;

// Fonction pour déplacer le joueur dans une direction donnée

function deplacerJoueur(direction) {
  // Si la partie n'a pas encore démarré, on la prépare et la déclare comme démarrée
  if (!partieDemarree) {
    reinitialiserPartie(); // Cette fonction réinitialise les éléments de la partie
    partieDemarree = true; // On marque la partie comme démarrée
  }

  // Si la partie est déjà terminée, on ne fait rien
  if (partieTerminee) return;

  // Copie de la position actuelle du joueur dans un nouvel objet
  let nouvellePosition = { ...positionJoueur };

  // Gestion des déplacements en fonction de la direction choisie
  switch (direction) {
    case "haut":
      nouvellePosition.y = Math.max(0, positionJoueur.y - 1); // Limite le mouvement en haut
      break;
    case "bas":
      nouvellePosition.y = Math.min(tailleGrille.hauteur - 1, positionJoueur.y + 1); // Limite le mouvement en bas
      break;
    case "gauche":
      nouvellePosition.x = Math.max(0, positionJoueur.x - 1); // Limite le mouvement à gauche
      break;
    case "droite":
      nouvellePosition.x = Math.min(tailleGrille.largeur - 1, positionJoueur.x + 1); // Limite le mouvement à droite
      break;
    default:
      return; // Si la direction n'est pas valide, on ne fait rien
  }

  // Vérifie si la nouvelle position du joueur ne correspond pas à un mur
  if (grille[nouvellePosition.y][nouvellePosition.x] !== "mur") {
    deplacerObjet(positionJoueur, nouvellePosition, "joueur"); // Appelle une fonction pour déplacer l'objet joueur visuellement
    positionJoueur = nouvellePosition; // Met à jour la position du joueur

    verifierCollision(); // Vérifie si le joueur a rencontré un trésor ou un monstre
  }
}




// Fonction pour déplacer les monstres sur la grille
function deplacerMonstres() {
  // Parcours de toutes les cellules de la grille
  for (let y = 0; y < tailleGrille.hauteur; y++) {
    for (let x = 0; x < tailleGrille.largeur; x++) {
      // Si la cellule contient un monstre
      if (grille[y][x] === "monstre") {
        // Choix aléatoire d'une direction pour le monstre
        const randomDirection = Math.floor(Math.random() * 4); // 0: haut, 1: droite, 2: bas, 3: gauche

        let nouvellePosition;

        // Calcul de la nouvelle position en fonction de la direction choisie
        if (randomDirection === 0) {
          nouvellePosition = { x: x, y: y - 1 }; // Déplacement vers le haut
        } else if (randomDirection === 1) {
          nouvellePosition = { x: x + 1, y: y }; // Déplacement vers la droite
        } else if (randomDirection === 2) {
          nouvellePosition = { x: x, y: y + 1 }; // Déplacement vers le bas
        } else if (randomDirection === 3) {
          nouvellePosition = { x: x - 1, y: y }; // Déplacement vers la gauche
        }

        // Vérification si la nouvelle position est à l'intérieur des limites de la grille
        if (
          nouvellePosition.x >= 0 &&
          nouvellePosition.x < tailleGrille.largeur &&
          nouvellePosition.y >= 0 &&
          nouvellePosition.y < tailleGrille.hauteur &&
          grille[nouvellePosition.y][nouvellePosition.x] !== "tresor" // Vérifie que la nouvelle position ne contient pas de trésor
        ) {
          // Déplacement du monstre en mettant à jour visuellement sa position
          deplacerObjet({ x: x, y: y }, nouvellePosition, "monstre");
        }
      }
    }
  }
}

// Fonction pour démarrer le déplacement continu des monstres
function demarrerDeplacementMonstresContinu() {
  // Utilise setInterval pour appeler la fonction de déplacement des monstres toutes les X millisecondes
  setInterval(deplacerMonstres, 1000); // Dans notre jeux, c'est fixé à 1 seconde
}




// Fonction pour déplacer un objet (joueur, monstre) sur la grille

function deplacerObjet(positionActuelle, nouvellePosition, objetType) {
  // Si la nouvelle position est vide, l'objet peut être déplacé
  if (grille[nouvellePosition.y][nouvellePosition.x] === "vide") {
    // Retirer l'objet de la position actuelle
    grille[positionActuelle.y][positionActuelle.x] = "vide";
    const celluleActuelle = grilleContainer.children[positionActuelle.y * tailleGrille.largeur + positionActuelle.x];
    celluleActuelle.classList.remove(objetType);

    // Placer l'objet à la nouvelle position
    grille[nouvellePosition.y][nouvellePosition.x] = objetType;
    const nouvelleCellule = grilleContainer.children[nouvellePosition.y * tailleGrille.largeur + nouvellePosition.x];

    // Si l'objet est le joueur, le retirer également de la cellule actuelle
    if (objetType === "joueur") {
      celluleActuelle.classList.remove("joueur");
    }

    nouvelleCellule.classList.add(objetType);
  }
  // Si la nouvelle position contient un trésor, le joueur récupère le trésor
  else if (grille[nouvellePosition.y][nouvellePosition.x] === "tresor") {
    // Retirer l'objet de la position actuelle
    grille[positionActuelle.y][positionActuelle.x] = "vide";
    const celluleActuelle = grilleContainer.children[positionActuelle.y * tailleGrille.largeur + positionActuelle.x];
    celluleActuelle.classList.remove(objetType);

    // Placer l'objet à la nouvelle position
    grille[nouvellePosition.y][nouvellePosition.x] = objetType;
    const nouvelleCellule = grilleContainer.children[nouvellePosition.y * tailleGrille.largeur + nouvellePosition.x];

    // Si l'objet est le joueur, le retirer également de la cellule actuelle
    if (objetType === "joueur") {
      celluleActuelle.classList.remove("joueur");
    }

    // Ajouter l'objet et mettre à jour le score
    nouvelleCellule.classList.add(objetType);
    nouvelleCellule.classList.remove("tresor");
    score++;
    scoreAffichage.textContent = score;
  }
}




// Fonction pour changer l'état visuel de la position du joueur (Définir sa position comme vide)

function togglePositionJoueur(position) {
  // Récupérer l'élément conteneur de la grille
  const grilleContainer = document.getElementById("grille-container");

  // Récupérer la cellule à la position donnée
  const cellule = grilleContainer.children[position.y * tailleGrille.largeur + position.x];

  // Supprimer la classe "joueur" de la cellule pour masquer visuellement le joueur
  cellule.classList.remove("joueur");

  // Ajouter la classe "vide" à la cellule pour indiquer qu'elle est maintenant vide
  cellule.classList.add("vide");
}




// Fonction pour vérifier les collisions et l'état de la partie

function verifierCollision() {
  // Obtenir le contenu de la cellule où se trouve le joueur actuellement
  const celluleActuelle = grille[positionJoueur.y][positionJoueur.x];

  // Si le joueur entre en collision avec un monstre, la partie se termine
  if (celluleActuelle === "monstre") {
    partieTerminee = true;
    alert("Partie terminée! Réinitialisez le jeu!");
    return;
  }

  // Compter le nombre de trésors restants sur la grille
  const tresorsRestants = grille.flat().filter((cellule) => cellule === "tresor");

  // Si tous les trésors ont été collectés, le joueur a gagné
  if (tresorsRestants.length === 0) {
    partieTerminee = true;
    alert("Bravo! Vous avez gagné!");
    return;
  }
}




// Récupération des boutons de déplacement depuis le DOM
const boutonHaut = document.getElementById("btn-haut");
const boutonBas = document.getElementById("btn-bas");
const boutonGauche = document.getElementById("btn-gauche");
const boutonDroite = document.getElementById("btn-droite");

// Ajout d'écouteurs d'événements pour les boutons de déplacement
boutonHaut.addEventListener("click", () => deplacerJoueur("haut"));
boutonBas.addEventListener("click", () => deplacerJoueur("bas"));
boutonGauche.addEventListener("click", () => deplacerJoueur("gauche"));
boutonDroite.addEventListener("click", () => deplacerJoueur("droite"));




// Appel de la fonction pour créer la grille au chargement de la page
creerGrille();




// Fonction pour réinitialiser la partie

function reinitialiserPartie() {
  // Mettre à jour la position du joueur dans la grille pour la rendre vide
  grille[positionJoueur.y][positionJoueur.x] = "vide";

  // Réinitialiser la position du joueur à sa position de départ
  positionJoueur = { x: 1, y: 1 };

  // Réinitialiser le score
  score = 0;

  // Réinitialiser l'état de la partie à non terminée
  partieTerminee = false;

  // Mettre à jour l'affichage du score
  scoreAffichage.textContent = score;

  // Récupérer le conteneur de la grille depuis le DOM
  const grilleContainer = document.getElementById("grille-container");

  // Supprimer tous les éléments enfants du conteneur de la grille
  while (grilleContainer.firstChild) {
    grilleContainer.removeChild(grilleContainer.firstChild);
  }


  // Définir une nouvelle grille de jeu

  grille = [
    // Ligne 1
    ["mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur"],
    // Ligne 2
    ["mur", "joueur", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur"],
    // Ligne 3
    ["mur", "mur", "mur", "mur", "mur", "tresor", "vide", "vide", "vide", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur"],
    // Ligne 4
    ["mur", "mur", "mur", "mur", "mur", "mur", "mur", "vide", "vide", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur"],
    // Ligne 5
    ["mur", "vide", "vide", "vide", "vide", "vide", "monstre", "vide", "vide", "tresor", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur"],
    // Ligne 6
    ["mur", "vide", "vide", "mur", "mur", "mur", "mur", "mur", "vide", "vide", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur"],
    // Ligne 7
    ["mur", "vide", "vide", "monstre", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "monstre", "vide", "tresor", "mur", "mur"],
    // Ligne 8
    ["mur", "vide", "mur", "vide", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "vide", "mur", "vide", "mur", "mur", "mur"],
    // Ligne 9
    ["mur", "vide", "mur", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "monstre", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "mur", "mur", "mur"],
    // Ligne 10
    ["mur", "vide", "mur", "vide", "mur", "mur", "vide", "mur", "mur", "mur", "tresor", "mur", "mur", "mur", "vide", "vide", "mur", "mur", "mur", "vide", "mur", "vide", "mur", "mur", "mur"],
    // Ligne 11
    ["mur", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "monstre", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "mur", "mur"],
    // Ligne 12
    ["mur", "mur", "mur", "mur", "vide", "vide", "vide", "vide", "vide", "mur", "mur", "mur", "vide", "vide", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur"],
    // Ligne 13
    ["mur", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "mur", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "vide", "mur", "mur"],
    // Ligne 14
    ["mur", "vide", "mur", "mur", "mur", "mur", "mur", "mur", "vide", "mur", "mur", "mur", "mur", "vide", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "vide", "vide", "mur"],
    // Ligne 15
    ["mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur", "mur"],

  ];

  // Recréer la grille visuelle
  creerGrille();

  // Démarrer le déplacement continu des monstres après réinitialisation de la partie
  demarrerDeplacementMonstresContinu();
}
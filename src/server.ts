import express, { Request, Response } from 'express'; // Importation d'express et des types [cite: 76, 85]

const app = express(); // Initialisation [cite: 75]
const port = 3000; // Définition du port [cite: 77]

// Route GET sur la racine avec typage explicite
app.get('/', (req: Request, res: Response) => {
  res.send('Bienvenue sur mon serveur API'); // Message demandé par le TP 
});

// Lancement du serveur
app.listen(port, () => {
  console.log(`Serveur lancé sur http://localhost:${port}`); // Message de confirmation [cite: 86]
});

/**
 * Retourne une salutation personnalisée.
 * @param name - Le nom de la personne (doit être une chaîne de caractères)
 * @returns La phrase de salutation (sous forme de chaîne de caractères)
 */
function greet(name: string): string {
  return `Hello ${name}, bienvenue dans le monde merveilleux du Backend !`;
}

// Testons notre fonction
const message = greet("Émilien");
console.log(message);

// Petit test de sécurité (décommente la ligne du dessous pour voir l'erreur) :
//greet(42);


// execute en console avec "npx ts-node srv/server.ts"



// Définition propre de la structure
interface Etudiant {
    id: number;
    nom: string;
    prenom: string;
}

// Le tableau d'étudiants (bien entouré de [ ] pour le tableau et { } pour les objets)
const etudiants: Etudiant[] = [
    { id: 1, nom: "Dupont", prenom: "Jean" },
    { id: 2, nom: "Martin", prenom: "Sophie" },
    { id: 3, nom: "Doe", prenom: "John" }
];

// La route pour l'exercice 6.1
app.get('/api/data', (req: Request, res: Response) => {
    res.json(etudiants); // Utilisation de res.json() comme demandé au point 6.1
});
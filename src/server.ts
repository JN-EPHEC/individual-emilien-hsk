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
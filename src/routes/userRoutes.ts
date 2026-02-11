import { Router, Request, Response } from 'express';

const router = Router(); // On initialise le routeur 

// Interface pour le typage TypeScript
interface User {
    id: number;
    name: string;
}

// Données demandées par l'exercice [cite: 139-143]
const users: User[] = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
];

// On définit la route (note : le préfixe "/api" sera ajouté dans server.ts)
router.get('/users', (req: Request, res: Response) => {
    res.json(users);
});

export default router; // On exporte pour l'utiliser ailleurs
# EcoShop 🌿

E-commerce de productes ecològics sostenibles.

## Objectiu
Portal de venda online amb catàleg ecològic, carret de compres
i gestió d'estoc per a l'administrador.

## Stack tecnològic
- Frontend: React + Tailwind CSS
- Backend: Node.js + Express
- Base de dades: MongoDB
- Autenticació: JWT
- Pagaments: Stripe

## Equip
| Rol | Responsabilitat |
|-----|----------------|
| Product Owner | Backlog i validació |
| Scrum Master / Backend | API REST i Node.js |
| Frontend Developer | React i components |
| UX/UI & Tester | Disseny i proves |

## Instal·lació
```bash
git clone https://github.com/el-teu-usuari/ecoshop-web
cd ecoshop-web
npm install
npm run dev
```

## Scripts disponibles

| Comanda | Funció |
|---------|--------|
| `npm run dev` | Inicia el servidor de desenvolupament |
| `npm run build` | Compila el projecte per a producció |
| `npm test` | Executa els tests amb Jest |

## Variables d'entorn
Crea un fitxer `.env` a l'arrel:


MONGO_URI=mongodb://localhost:27017/ecoshop
JWT_SECRET=el_teu_secret
STRIPE_KEY=pk_test_...

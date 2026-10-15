TP 1 - Ma première API REST avec Node.js, Express et MongoDB

Démarrage :
1. Installer Node.js LTS et MongoDB Community Server (ou utiliser MongoDB Atlas).
2. Dans ce dossier, ouvrir un terminal et exécuter : npm install
3. Copier .env.example vers .env, puis adapter MONGO_URI si nécessaire.
4. Exécuter : npm run dev
5. Tester : http://localhost:5000/api/health
6. Importer postman-tests.json dans Postman.

Routes :
Patients: POST/GET /api/patients, GET/PUT/DELETE /api/patients/:id
Consultations: POST/GET /api/consultations, GET/PUT/DELETE /api/consultations/:id
Mesures: POST/GET /api/mesures

Dans Postman, après avoir créé un patient, copier son id et remplacer PATIENT_ID
dans la requête de création de consultation.
Pour un émulateur Android : http://10.0.2.2:5000/api/
Pour un téléphone sur le même Wi-Fi : http://IP_DU_PC:5000/api/

Ne pas envoyer le fichier .env ni node_modules sur Git.

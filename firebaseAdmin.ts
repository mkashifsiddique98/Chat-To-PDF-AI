
import { initializeApp, App, getApp, getApps, cert } from "firebase-admin/app"
import { getFirestore } from "firebase-admin/firestore";

const service_key = require("@/service_key.json");

let app: App;

if (getApps().length === 0) {
    app = initializeApp(({ credential: cert(service_key) }))
} else {
    app = getApp();
}

const adminDb = getFirestore(app);

export { app as adminApp, adminDb } 
// ============================================================
//  HYBRIX · Configuración
//  1) Pega aquí los datos de tu proyecto de Firebase
//     (Configuración del proyecto → Tus apps → App web → firebaseConfig)
//  2) Pon tu correo de administrador (el mismo que pusiste en las reglas)
// ============================================================

export const firebaseConfig = {
  apiKey: "AIzaSyDNteFDvb2FeI17yCKV20zkcLwax0dmNSw",
  authDomain: "hybrix-clases.firebaseapp.com",
  projectId: "hybrix-clases",
  storageBucket: "hybrix-clases.firebasestorage.app",
  messagingSenderId: "346644729494",
  appId: "1:346644729494:web:1ca33af6ddb65a45fafcb7"
};

// Correo(s) que pueden entrar al panel de administrador
export const ADMIN_EMAILS = ["arma_felice@hotmail.com"];

// Lo que verán los gyms cuando necesiten ayuda (WhatsApp o correo)
export const CONTACTO = "WhatsApp 938 152 6705";

// Precios mensuales por plan (para el resumen de ingresos del panel)
export const PLANES = { "Coach": 590, "Pro": 990, "Élite": 1790 };

import es from "../locales/es.json";
import fr from "../locales/fr.json";
import en from "../locales/en.json";

export const translations: Record<string, any> = {
  es,
  fr,
  en,
};

// NOTE: consumer components should detect locale client-side (e.g. from pathname)
export default translations;

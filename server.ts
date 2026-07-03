import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const getCurrentDirname = () => {
  try {
    if (typeof __filename !== "undefined") {
      return path.dirname(__filename);
    }
    return path.dirname(fileURLToPath(import.meta.url));
  } catch (e) {
    return process.cwd();
  }
};

const __dirname = getCurrentDirname();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini client lazily/safely
  const getGeminiClient = () => {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.warn("GEMINI_API_KEY environment variable is not defined. AI Bridal Vision Planner will run in demo fallback mode.");
      return null;
    }
    return new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build",
        },
      },
    });
  };

  const ai = getGeminiClient();

  // API Call matching Gemini API Guidelines & Security directives
  app.post("/api/consultation", async (req, res) => {
    try {
      const {
        name,
        skinType,
        skinConcerns,
        makeupStyle,
        locationType,
        message,
      } = req.body;

      if (!ai) {
        // Fallback for visual testing if key is absent
        const demoResponse = {
          vibeSummary: `${makeupStyle || "Timeless Velvet"} Elegance`,
          conceptDetail: `For ${name || "our beloved bride"}, we envision an radiant design optimized for a gorgeous ${locationType || "magical"} setting. Since your skin is ${skinType || "radiant"}, we will craft an absolute masterclass look matching your individual concerns.`,
          skincareTimeline: {
            threeMonthsBefore: "Commit to deeply hydrating hyaluronic treatments and avoid chemical peels. Establish a strict sunscreen routine.",
            oneMonthBefore: "Incorporate a mild botanical essence to tone and soothe redness. Keep hydration locked with rich ceramides.",
            oneWeekBefore: "Exclusively focus on sleep and intensive sheet masking. Absolutely no extractions or new skincare brands.",
            weddingDayOf: "Gentle wash, ice roll to depuff, and layered application of lightweight water-locking emulsions."
          },
          productSourcingSuggestions: [
            "Chanel Les Beiges Water-Fresh Tint for ultra-lux skin",
            "La Mer The Treatment Lotion for instant cellular hydration",
            "Charlotte Tilbury Hollywood Flawless Filter for that lit-from-within sheen",
            "Dior Addict Lip Maximizer in Rose Gold"
          ],
          lookAttributes: {
            skinFinish: `${skinType === "dry" ? "Glass Luminous Dewy" : "Premium Velvet Demi-Matte"} with customized high-definition veil.`,
            eyeMakeupDetail: `Finely blended Champagne-Taupe shadows, subtle soft-focused lash flares, and tight-line cashmere definition.`,
            lipShadeRecommendation: `A custom-blended Warm Rose-Nude liner topped with a highly reflective rose gold diamond glaze.`,
            blushAndHighlightTones: `Nude-peach cream blush overlaid with a ethereal pink-champagne liquid highlight melt.`
          }
        };
        return res.json(demoResponse);
      }

      const prompt = `
        Draft a high-fashion, Vogue-style bridal beauty blueprint for a bride with the following profile:
        - Name: ${name || "Dearest Bride"}
        - Skin Type: ${skinType || "Normal"}
        - Specific Concerns: ${skinConcerns && skinConcerns.length ? skinConcerns.join(", ") : "Maintained Radiance"}
        - Selected Style: ${makeupStyle || "Ethereal Luminous"}
        - Wedding Venue/Setting: ${locationType || "Luxury Estate"}
        - Bride's Message: ${message || "Wants to look classic and breathtaking"}

        Provide the output in English, formulated in a highly emotional, aspirational, luxury-fashion editorial tone. Suggest elite high-end products (e.g. Dior, Chanel, Charlotte Tilbury, Tom Ford, La Mer).
      `;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          systemInstruction: "You are the world's leading celebrity bridal makeup artist and director of Maison de Beauté Bridal. You design breathtaking editorial wedding visuals for Vogue campaigns. Your approach is deeply personal, warm, elite, and highly skilled in aesthetic luxury.",
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              vibeSummary: { 
                type: Type.STRING, 
                description: "An evocative, luxury visual theme title (e.g. 'Royal Velvet Radiance' or 'Celestial Pearl Luster')" 
              },
              conceptDetail: { 
                type: Type.STRING, 
                description: "Editorial visual narrative explaining why this customized makeup palette and technique fits her setting and skin type beautifully." 
              },
              skincareTimeline: {
                type: Type.OBJECT,
                properties: {
                  threeMonthsBefore: { type: Type.STRING, description: "Intense corrective or deep preparation advice." },
                  oneMonthBefore: { type: Type.STRING, description: "Hydration and skin barrier health strengthening." },
                  oneWeekBefore: { type: Type.STRING, description: "Soothing and stabilization guidance to prevent flares." },
                  weddingDayOf: { type: Type.STRING, description: "Morning preparation, depuffing, and perfect makeup prep steps." }
                },
                required: ["threeMonthsBefore", "oneMonthBefore", "oneWeekBefore", "weddingDayOf"]
              },
              productSourcingSuggestions: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: "List of 4 premium luxury cosmetics with specific shade/range notes perfectly suitable."
              },
              lookAttributes: {
                type: Type.OBJECT,
                properties: {
                  skinFinish: { type: Type.STRING, description: "Detailed description of the base technique and texture." },
                  eyeMakeupDetail: { type: Type.STRING, description: "Detailed description of eyeshadow tones, lash style, and liners." },
                  lipShadeRecommendation: { type: Type.STRING, description: "Recommended lip pencil, lipstick shade and gloss combinations." },
                  blushAndHighlightTones: { type: Type.STRING, description: "Cheek sculpting, cream color pop, and highlighting formula instruction." }
                },
                required: ["skinFinish", "eyeMakeupDetail", "lipShadeRecommendation", "blushAndHighlightTones"]
              }
            },
            required: ["vibeSummary", "conceptDetail", "skincareTimeline", "productSourcingSuggestions", "lookAttributes"]
          }
        }
      });

      const responseText = response.text ? response.text.trim() : "{}";
      const parsedData = JSON.parse(responseText);
      res.json(parsedData);
    } catch (error) {
      console.error("Gemini API Error details:", error);
      res.status(500).json({ 
        error: "Failed to generate premium consultation", 
        details: error instanceof Error ? error.message : "Internal Error" 
      });
    }
  });

  // Vite Integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Luxury Bridal Dev server is running on http://0.0.0.0:${PORT}`);
  });
}

startServer();

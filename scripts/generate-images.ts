import dotenv from "dotenv";
import path from "path";
dotenv.config({ path: path.join(process.cwd(), ".env.local") });

import { generateImage } from "ai";
import { fal } from "@ai-sdk/fal";
import { mkdir, writeFile } from "fs/promises";

const OUT_DIR = path.join(process.cwd(), "public", "generated");

const STYLE =
  "cinematic soft studio lighting, navy indigo and gold color grade, shallow depth of field, editorial beauty photography, ultra realistic, 85mm lens, no text, no watermark";

type Prompt = {
  slug: string;
  prompt: string;
  aspect: "16:9" | "4:5" | "1:1";
  variants: number;
};

const PROMPTS: Prompt[] = [
  {
    slug: "hero",
    prompt: `Professional makeup artist applying makeup to a young Moroccan woman client in a modern beauty academy studio in Casablanca, focus on hands and brush near cheekbone, warm gold rim light, navy indigo background, ${STYLE}`,
    aspect: "4:5",
    variants: 5,
  },
  {
    slug: "classroom",
    prompt: `Modern beauty academy training room in Casablanca, makeup stations with mirrors and professional lighting, students practicing, empty of faces, elegant navy and gold interior design, ${STYLE}`,
    aspect: "16:9",
    variants: 3,
  },
  {
    slug: "products",
    prompt: `Flat lay of professional makeup artist kit, brushes, palettes, gold accents, navy fabric background, luxury cosmetics still life, ${STYLE}`,
    aspect: "1:1",
    variants: 3,
  },
];

async function run() {
  await mkdir(OUT_DIR, { recursive: true });

  for (const p of PROMPTS) {
    console.log(`\n→ ${p.slug} (${p.variants} variantes)`);
    const { images } = await generateImage({
      model: fal.image("fal-ai/flux-2-pro"),
      prompt: p.prompt,
      n: p.variants,
      aspectRatio: p.aspect,
    });

    for (let i = 0; i < images.length; i++) {
      const file = path.join(OUT_DIR, `${p.slug}-${i + 1}.png`);
      await writeFile(file, Buffer.from(images[i].uint8Array));
      console.log(`  ✓ ${file}`);
    }
  }

  console.log("\nTerminé. Choisis la meilleure variante par section dans public/generated/.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});

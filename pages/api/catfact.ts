// pages/api/catfact.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await fetch('https://catfact.ninja/fact');
  const fact = await response.json();
  res.status(200).json(fact);
}

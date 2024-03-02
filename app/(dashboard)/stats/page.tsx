import { getStatsAction } from "@/utils/actions";
import React from "react";

export default async function StatsPage() {
  const stats = await getStatsAction();

  return <h1 className="text-4xl">StatsPage</h1>;
}

import { getChartsDataAction, getStatsAction } from "@/utils/actions";
import React from "react";

export default async function StatsPage() {
  const stats = await getStatsAction();
  const charts = await getChartsDataAction();
  await getChartsDataAction();

  return <h1 className="text-4xl">StatsPage</h1>;
}

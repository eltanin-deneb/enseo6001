import { ScenarioId, ScenarioMeta, StageNode, EndingResult } from '../types';
import { lotteworldMeta, lotteworldStages, lotteworldEndings } from './scenarioLotteworld';
import { siblingMeta, siblingStages, siblingEndings } from './scenarioSibling';
import { privacyMeta, privacyStages, privacyEndings } from './scenarioPrivacy';

export const allScenarios: ScenarioMeta[] = [lotteworldMeta, siblingMeta, privacyMeta];

export const allStagesMap: Record<string, StageNode> = {
  ...lotteworldStages,
  ...siblingStages,
  ...privacyStages,
};

export const allEndingsMap: Record<string, EndingResult> = {
  ...lotteworldEndings,
  ...siblingEndings,
  ...privacyEndings,
};

export function getScenarioMeta(id: ScenarioId): ScenarioMeta {
  const found = allScenarios.find((s) => s.id === id);
  if (!found) {
    return lotteworldMeta;
  }
  return found;
}

export function getStageNode(stageId: string): StageNode | null {
  return allStagesMap[stageId] || null;
}

export function getEndingResult(endingId: string): EndingResult | null {
  return allEndingsMap[endingId] || null;
}

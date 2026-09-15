import React, { useState } from 'react';
import { ScenarioId, ChoiceOption, StageNode, EndingResult } from './types';
import { getScenarioMeta, getStageNode, getEndingResult } from './data';
import { TabletFrame } from './components/TabletFrame';
import { IntroScreen } from './components/IntroScreen';
import { ScenarioSelectScreen } from './components/ScenarioSelectScreen';
import { StagePlayScreen } from './components/StagePlayScreen';
import { ParentReactionScreen } from './components/ParentReactionScreen';
import { ResultEndingScreen } from './components/ResultEndingScreen';
import { soundEngine } from './utils/audioSynthesizer';

type AppView = 'intro' | 'select' | 'stage' | 'reaction' | 'result';

export default function App() {
  const [view, setView] = useState<AppView>('intro');
  const [selectedScenarioId, setSelectedScenarioId] = useState<ScenarioId>('lotteworld');
  const [currentStageId, setCurrentStageId] = useState<string>('lw_s1');
  const [selectedChoice, setSelectedChoice] = useState<ChoiceOption | null>(null);
  const [relationshipScore, setRelationshipScore] = useState<number>(65);
  const [currentEndingId, setCurrentEndingId] = useState<string | null>(null);

  const scenarioMeta = getScenarioMeta(selectedScenarioId);
  const currentStage = getStageNode(currentStageId);
  const currentEnding = currentEndingId ? getEndingResult(currentEndingId) : null;

  // Handle Start from Intro
  const handleStartIntro = () => {
    setView('select');
  };

  // Handle Scenario Selection
  const handleSelectScenario = (id: ScenarioId) => {
    const meta = getScenarioMeta(id);
    setSelectedScenarioId(id);
    setCurrentStageId(meta.initialStageId);
    setRelationshipScore(65);
    setSelectedChoice(null);
    setCurrentEndingId(null);
    setView('stage');
  };

  // Handle Choice Selection in Stage
  const handleSelectChoice = (choice: ChoiceOption) => {
    setSelectedChoice(choice);
    // Update relationship score
    setRelationshipScore((prev) => {
      const next = prev + choice.parentReaction.relationshipDelta;
      return Math.max(10, Math.min(100, next));
    });
    setView('reaction');
  };

  // Handle Proceed from Parent Reaction
  const handleProceedReaction = () => {
    if (!selectedChoice) return;

    const nextId = selectedChoice.nextStageId;
    const maybeEnding = getEndingResult(nextId);

    if (maybeEnding) {
      setCurrentEndingId(nextId);
      setView('result');
    } else {
      const nextStage = getStageNode(nextId);
      if (nextStage) {
        setCurrentStageId(nextId);
        setView('stage');
      } else {
        // Fallback safety
        setView('select');
      }
    }
  };

  // Handle Retry current scenario
  const handleRetryScenario = () => {
    soundEngine.playSfx('select');
    soundEngine.setTrack('neutral');
    const meta = getScenarioMeta(selectedScenarioId);
    setCurrentStageId(meta.initialStageId);
    setRelationshipScore(65);
    setSelectedChoice(null);
    setCurrentEndingId(null);
    setView('stage');
  };

  // Handle Return to the Beginning (Intro / First page) & reset to default BGM
  const handleGoHome = () => {
    soundEngine.playSfx('select');
    soundEngine.setTrack('neutral');
    setView('intro');
  };

  // Handle Return to Scenario Select & reset to default BGM
  const handleGoToSelect = () => {
    soundEngine.playSfx('select');
    soundEngine.setTrack('neutral');
    setView('select');
  };

  // Check if current reaction leads to ending
  const isReactionLeadingToEnding = selectedChoice
    ? !!getEndingResult(selectedChoice.nextStageId)
    : false;

  return (
    <TabletFrame
      title="사춘기를 부탁해"
      showHomeButton={view !== 'intro'}
      onGoHome={handleGoHome}
      relationshipScore={view === 'stage' || view === 'reaction' ? relationshipScore : undefined}
      stageProgress={
        view === 'stage' && currentStage
          ? { current: currentStage.stageNumber, total: 5 }
          : view === 'reaction' && currentStage
          ? { current: currentStage.stageNumber, total: 5 }
          : undefined
      }
    >
      {view === 'intro' && <IntroScreen onStart={handleStartIntro} />}

      {view === 'select' && (
        <ScenarioSelectScreen onSelectScenario={handleSelectScenario} />
      )}

      {view === 'stage' && currentStage && (
        <StagePlayScreen
          scenario={scenarioMeta}
          currentStage={currentStage}
          onSelectChoice={handleSelectChoice}
        />
      )}

      {view === 'reaction' && selectedChoice && currentStage && (
        <ParentReactionScreen
          choice={selectedChoice}
          currentStage={currentStage}
          isLastStage={isReactionLeadingToEnding}
          onProceed={handleProceedReaction}
        />
      )}

      {view === 'result' && currentEnding && (
        <ResultEndingScreen
          ending={currentEnding}
          scenario={scenarioMeta}
          onRetry={handleRetryScenario}
          onSelectOtherScenario={handleGoToSelect}
          onGoHome={handleGoHome}
        />
      )}
    </TabletFrame>
  );
}

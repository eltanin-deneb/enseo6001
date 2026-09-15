export type ScenarioId = 'lotteworld' | 'sibling' | 'privacy';

export type EndingCategory = 'best' | 'good' | 'normal' | 'bad' | 'worst';

export type ParentEmotion =
  | 'angry'
  | 'worried'
  | 'disappointed'
  | 'surprised'
  | 'relieved'
  | 'thoughtful'
  | 'firm'
  | 'proud'
  | 'sad';

export interface ParentReaction {
  emotion: ParentEmotion;
  parentSpeech: string;
  parentThought: string; // 부모님의 진짜 속마음
  relationshipDelta: number; // -15 to +15
  feedbackTip: string; // 이 반응이 나온 이유와 포인트
}

export interface ChoiceOption {
  id: string;
  text: string;
  myThought: string; // 내가 이 말을 할 때의 감정
  parentReaction: ParentReaction;
  nextStageId: string; // ID of the next StageNode or Ending ID
}

export interface StageNode {
  id: string;
  stageNumber: number; // 1 to 5
  scenarioId: ScenarioId;
  stageTitle: string;
  situationNarration: string; // 사춘기가 된 나의 독백/상황
  visualScene: {
    location: string;
    atmosphere: 'tense' | 'gloomy' | 'warm' | 'chaotic' | 'neutral';
    iconName: string;
  };
  choices: ChoiceOption[];
}

export interface EndingResult {
  id: string;
  scenarioId: ScenarioId;
  category: EndingCategory; // 'best' | 'good' | 'normal' | 'bad' | 'worst'
  title: string;
  subtitle: string;
  storySummary: string;
  visualMood: {
    badge: string;
    gradient: string;
    illustrationStyle: 'celebrate' | 'frustrated' | 'calm' | 'conflict';
    iconName: string;
  };
  relationshipScore: number; // 0 ~ 100
  myGrowthNote: string; // 사춘기 나의 회고록
  parentHeartNote: string; // 그때 부모님의 진짜 마음
  practicalTips: string[]; // 실전 갈등 해결 솔루션
  bgmType: 'celebration' | 'frustration' | 'calm';
}

export interface ScenarioMeta {
  id: ScenarioId;
  sparklingTitle: string;
  subtitle: string;
  tagline: string;
  icon: string;
  themeColor: {
    bg: string;
    border: string;
    text: string;
    badge: string;
    accent: string;
  };
  initialStageId: string;
  previewPrompt: string;
}

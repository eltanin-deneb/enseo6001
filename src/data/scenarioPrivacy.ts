import { StageNode, EndingResult, ScenarioMeta } from '../types';

export const privacyMeta: ScenarioMeta = {
  id: 'privacy',
  sparklingTitle: '🚪 노크는 기본 상식 아닌가요?! 내 방 문고리를 지켜라',
  subtitle: '방문 닫지 말라는 부모님 vs 사생활을 지키고 싶은 사춘기 나의 비밀 기지',
  tagline: '벌컥 열리는 방문, 불쑥 들여다보는 시선! 나만의 공간과 부모님의 걱정 사이 균형을 찾아라!',
  icon: 'DoorClosed',
  themeColor: {
    bg: 'from-blue-500/10 to-cyan-500/10',
    border: 'border-blue-300',
    text: 'text-blue-700',
    badge: 'bg-blue-100 text-blue-800',
    accent: 'bg-blue-500',
  },
  initialStageId: 'pv_s1',
  previewPrompt: '부모님: "가족끼리 무슨 비밀이 있다고 방 문을 닫아? 문 활짝 열어놔!"',
};

export const privacyStages: Record<string, StageNode> = {
  // === STAGE 1: 첫 번째 침입 사건 ===
  pv_s1: {
    id: 'pv_s1',
    stageNumber: 1,
    scenarioId: 'privacy',
    stageTitle: '1단계: 노크 없는 급습과 닫지 못하는 문',
    situationNarration:
      '내 방 책상에 앉아 친구와 비밀 일기장을 공유하거나 음악을 들으며 나만의 시간을 보내고 있었다. 그런데 갑자기 문이 벌컥 열리며 엄마가 빨래를 들고 불쑥 들어오셨다! 깜짝 놀라 서랍을 닫았더니, 엄마의 의심스러운 눈초리가 날아온다. "가족끼리 떳떳하면 문을 왜 닫고 있어? 문 열어둬!" 이때 나의 반응은?',
    visualScene: {
      location: '벌컥 열린 내 방 문 앞',
      atmosphere: 'chaotic',
      iconName: 'DoorOpen',
    },
    choices: [
      {
        id: 'pv_s1_c1',
        text: '"엄마는 왜 매번 노크도 안 하고 멋대로 들어와요?! 여긴 내 방이라고요!" 하고 소리를 지르며 문을 쾅 닫아버린다.',
        myThought: '내 사생활을 1도 존중 안 해주는 집구석, 진짜 숨 막혀서 살 수가 없어!',
        parentReaction: {
          emotion: 'angry',
          parentSpeech: '"방문을 쾅 닫아?! 이 집 네가 샀니? 부모가 빨래 넣어주러 온 것도 죄야?!"',
          parentThought: '아이가 방문을 쾅 닫고 소리를 지르니 반항심에 피가 거꾸로 솟는다. 대체 안에서 무슨 나쁜 짓을 하길래?',
          relationshipDelta: -12,
          feedbackTip: '‘문을 쾅 닫는 행동’은 부모님의 의심과 감정적 분노를 최고조로 끌어올려요.',
        },
        nextStageId: 'pv_s2_slam',
      },
      {
        id: 'pv_s1_c2',
        text: '깜짝 놀란 가슴을 쓸어내리며 "엄마, 빨래 감사해요. 그런데 노크 없이 갑자기 문이 열리면 심장이 덜컥 내려앉아요. 다음엔 꼭 노크 먼저 해 주실 수 있나요?"',
        myThought: '놀란 건 사실이지만 차분하게 노크의 필요성을 먼저 부탁해 보자.',
        parentReaction: {
          emotion: 'surprised',
          parentSpeech: '"...그렇게 놀랐니? 빨래 두러 급하게 들어오느라 그랬어. 그래도 굳이 문을 꼭꼭 닫아둘 필요가 있나 싶어서 그렇지."',
          parentThought: '아이가 예의 바르게 말하니 미안하긴 한데, 그래도 방문을 닫아두면 안에서 뭘 하는지 불안한 게 솔직한 심정이야.',
          relationshipDelta: 8,
          feedbackTip: '호의(빨래)에 감사하면서 놀란 감정과 구체적 요청(노크)을 차분히 전하는 명품 대화법!',
        },
        nextStageId: 'pv_s2_dialogue',
      },
      {
        id: 'pv_s1_c3',
        text: '의자를 돌려 앉아 한숨을 푹푹 쉬며 턱을 괴고 삐딱하게 엄마를 노려본다.',
        myThought: '말해봤자 잔소리만 늘어놓을 텐데 눈으로 레이저나 쏴야지.',
        parentReaction: {
          emotion: 'disappointed',
          parentSpeech: '"그 눈빛은 뭐니? 부모를 째려보는 태도는 어디서 배운 거야?"',
          parentThought: '사춘기가 되더니 눈빛부터 삐딱해지는구나. 갈수록 거리감이 느껴져 섭섭하다.',
          relationshipDelta: -6,
          feedbackTip: '침묵의 째려보기는 대화의 기회를 차단하고 부모님에게 불쾌한 반항심만 각인시켜요.',
        },
        nextStageId: 'pv_s2_cold',
      },
    ],
  },

  // === STAGE 2: 심화되는 사생활 신경전 ===
  pv_s2_slam: {
    id: 'pv_s2_slam',
    stageNumber: 2,
    scenarioId: 'privacy',
    stageTitle: '2단계: 문고리 철거 협박과 감시의 그림자',
    situationNarration:
      '아빠까지 오셔서 "방문 닫고 들어가서 스마트폰으로 이상한 짓이나 하고 공부 안 할 거면 방문 손잡이를 떼어버리겠다"고 엄포를 놓으셨다. 방문을 10cm만 닫아도 밖에서 "문 열어!"라는 호통이 날아온다. 이 감옥 같은 상황을 어떻게 벗어날까?',
    visualScene: {
      location: '문고리가 위태로운 내 방',
      atmosphere: 'tense',
      iconName: 'Wrench',
    },
    choices: [
      {
        id: 'pv_s2_sl1',
        text: '"아까 문 쾅 닫고 소리 지른 건 진짜 잘못했어요. 하지만 부모님이 절 의심하실 만한 나쁜 짓은 맹세코 안 해요. 제 집중 시간만 보장해 주세요."',
        myThought: '문고리 뜯기기 전에 행동 사과부터 하고 신뢰를 회복해야 해.',
        parentReaction: {
          emotion: 'thoughtful',
          parentSpeech: '"...네가 사과하니 아빠도 문고리 떼겠다는 말은 취소하마. 하지만 부모가 안심할 수 있는 방법을 네가 먼저 보여줘야 해."',
          parentThought: '아이가 반성하고 먼저 대화를 시도하니 다행이다. 감시하고 싶은 부모가 어디 있겠니.',
          relationshipDelta: 10,
          feedbackTip: '과열된 상황에서 나의 잘못된 태도를 쿨하게 인정하면 극단적 처벌을 막을 수 있어요.',
        },
        nextStageId: 'pv_s3_door_rule',
      },
      {
        id: 'pv_s2_sl2',
        text: '"문고리 떼면 저 가출할 거예요! 아동 인권 침해로 신고할 테니까 맘대로 해보세요!"',
        myThought: '내 권리를 침해하면 나도 끝까지 맞서 싸울 거야!',
        parentReaction: {
          emotion: 'angry',
          parentSpeech: '"가출? 신고?! 부모를 상대로 어디서 그런 패륜적인 말을 지껄여!"',
          parentThought: '갈 데까지 갔구나. 아이가 인터넷에서 극단적인 말만 배워와서 부모를 협박하다니.',
          relationshipDelta: -18,
          feedbackTip: '가출이나 신고 등의 극단적 협박은 가족 간의 최소한의 존중마저 파괴합니다.',
        },
        nextStageId: 'pv_s3_lockdown',
      },
      {
        id: 'pv_s2_sl3',
        text: '방 안의 불을 다 끄고 책상 밑에 웅크리고 앉아 시위를 벌인다.',
        myThought: '내 마음이 이 정도로 어둡고 상처받았다는 걸 봐줬으면 좋겠어.',
        parentReaction: {
          emotion: 'worried',
          parentSpeech: '"(엄마가 살짝 문을 열고) 밥도 안 먹고 불 끄고 왜 저러고 있어... 걱정되게 정말."',
          parentThought: '아이가 우울증이라도 걸린 건 아닐까... 덜컥 겁이 나네.',
          relationshipDelta: 2,
          feedbackTip: '불안을 자극하는 소극적 시위보다는 언어로 명확히 소통해야 근본적인 규칙이 생겨요.',
        },
        nextStageId: 'pv_s3_empathy',
      },
    ],
  },

  pv_s2_dialogue: {
    id: 'pv_s2_dialogue',
    stageNumber: 2,
    scenarioId: 'privacy',
    stageTitle: '2단계: 부모님의 불안과 마주하기',
    situationNarration:
      '엄마가 방 문틀에 기대어 한숨을 쉬신다. "사춘기 때 방문을 닫기 시작하면 게임 중독에 빠지거나, 나쁜 동영상을 보거나, 부모랑 대화를 아예 끊는다고 주변에서 다들 그러잖니. 너도 그렇게 멀어질까 봐 부모는 겁이 난단다." 부모님의 불안이 드러났다.',
    visualScene: {
      location: '문턱 너머로 마주 선 우리',
      atmosphere: 'warm',
      iconName: 'ShieldAlert',
    },
    choices: [
      {
        id: 'pv_s2_d1',
        text: '"엄마, 문을 닫는 건 부모님을 밀어내려는 게 아니라 혼자 생각하고 공부에 집중할 조용한 에너지가 필요해서예요. 공부할 때나 옷 갈아입을 때만 닫을게요."',
        myThought: '방문 닫기의 진짜 의미가 \'거절\'이 아닌 \'에너지 충전과 집중\'임을 알려드리자.',
        parentReaction: {
          emotion: 'relieved',
          parentSpeech: '"혼자 생각할 시간이 필요했던 거구나... 부모를 거부하는 줄 알고 엄마가 지레 겁을 먹었나 보네."',
          parentThought: '아, 그렇구나. 아이도 자라면서 혼자만의 시간과 사색이 필요한 나이가 되었지.',
          relationshipDelta: 14,
          feedbackTip: '사춘기 프라이버시가 ‘비밀’이 아니라 ‘성장을 위한 충전 시간’임을 설명하는 최고 수준의 대화!',
        },
        nextStageId: 'pv_s3_door_rule',
      },
      {
        id: 'pv_s2_d2',
        text: '"주변 사람들 말만 듣고 저를 잠재적 범죄자 취급하시는 거예요? 저 그렇게 한심한 애 아니에요!"',
        myThought: '나를 못 믿고 남의 집 이야기로 날 의심하는 게 너무 불쾌해.',
        parentReaction: {
          emotion: 'worried',
          parentSpeech: '"범죄자 취급이라니 말을 왜 그렇게 험하게 하니? 걱정돼서 한 말인데."',
          parentThought: '부모의 걱정을 곡해해서 날을 세우니 서운하고 대화가 힘겹네.',
          relationshipDelta: -4,
          feedbackTip: '부모님의 불안을 ‘의심/취급’으로 받아쳐 비난하면 대화가 방어적으로 흘러가요.',
        },
        nextStageId: 'pv_s3_door_rule',
      },
      {
        id: 'pv_s2_d3',
        text: '"그럼 방문 앞에 [집중 공부 중 / 휴식 중 / 환영합니다] 팻말을 걸어서 제 상태를 미리 알려드릴게요!"',
        myThought: '문 닫힘의 이유를 투명하게 공개하면 부모님도 불안하지 않으실 거야.',
        parentReaction: {
          emotion: 'proud',
          parentSpeech: '"팻말이라고? 어머, 아이디어 참 기발하네! 네가 무슨 상태인지 알면 엄마도 맘 편하지."',
          parentThought: '소통을 단절하는 대신 귀여운 방식으로 소통의 다리를 놓다니 참 센스 있다.',
          relationshipDelta: 15,
          feedbackTip: '문패나 상태 알림 같은 시각적 소통 도구는 부모님의 불안을 완벽하게 없애줍니다.',
        },
        nextStageId: 'pv_s3_door_rule',
      },
    ],
  },

  pv_s2_cold: {
    id: 'pv_s2_cold',
    stageNumber: 2,
    scenarioId: 'privacy',
    stageTitle: '2단계: 투명인간이 되어버린 집안',
    situationNarration:
      '냉랭한 분위기 속에 며칠이 흘렀다. 방문은 활짝 열어둔 채지만, 가족들과 눈도 마주치지 않고 밥만 겨우 먹는다. 엄마가 조심스레 간식을 가져오며 "너 요즘 무슨 고민 있니?"라고 말을 건네신다.',
    visualScene: {
      location: '책상 앞 간식 접시',
      atmosphere: 'neutral',
      iconName: 'Cookie',
    },
    choices: [
      {
        id: 'pv_s2_co1',
        text: '간식을 한 입 베어 물고 "엄마, 저 요즘 사춘기라 그런지 혼자 있고 싶은 시간이 부쩍 늘었어요. 이상한 게 아니래요. 조금만 제 공간을 지켜주시면 안 될까요?"',
        myThought: '선생님이나 책에서 배운 사춘기 심리를 솔직히 설명해 드려보자.',
        parentReaction: {
          emotion: 'thoughtful',
          parentSpeech: '"그렇구나... 우리 아이가 몸도 마음도 쑥쑥 자라느라 혼자만의 방이 필요했구나. 엄마가 몰라줘서 미안해."',
          parentThought: '아이가 사춘기 변화를 차분히 말해주니 이해가 쏙쏙 되네. 존중해 줘야겠어.',
          relationshipDelta: 12,
          feedbackTip: '사춘기의 자연스러운 심리 변화를 설명하는 것은 부모님을 안심시키는 명약입니다.',
        },
        nextStageId: 'pv_s3_door_rule',
      },
      {
        id: 'pv_s2_co2',
        text: '"상관없잖아요. 간식 안 먹어요, 치워주세요."',
        myThought: '괜히 다정하게 굴면서 또 감시하려는 수작이야.',
        parentReaction: {
          emotion: 'sad',
          parentSpeech: '"간식까지 거부하니 엄마는 네가 무섭기까지 하구나..."',
          parentThought: '마음의 문을 꽁꽁 닫아버린 아이... 내가 뭘 그렇게 잘못했을까.',
          relationshipDelta: -10,
          feedbackTip: '선의의 배려까지 매몰차게 거절하면 부모님과의 정서적 끈이 끊어질 수 있어요.',
        },
        nextStageId: 'pv_s3_lockdown',
      },
      {
        id: 'pv_s2_co3',
        text: '간식을 물끄러미 보다가 "엄마, 사실 문을 자꾸 벌컥 여시니까 깜짝깜짝 놀라서 서운했어요"라고 담담히 털어놓는다.',
        myThought: '짜증 내지 않고 내가 놀랐던 사실만 객관적으로 말씀드려 보자.',
        parentReaction: {
          emotion: 'surprised',
          parentSpeech: '"네가 그렇게 놀라고 불안했을 줄은 몰랐구나... 엄마가 노크하는 걸 깜빡했네."',
          parentThought: '아이가 놀랐다고 하니 반성이 되네. 부모라고 함부로 열면 안 되겠어.',
          relationshipDelta: 8,
          feedbackTip: '비난 대신 나의 감정(놀람, 서운함)을 담담히 전달하는 나-전달법(I-message)의 정석!',
        },
        nextStageId: 'pv_s3_door_rule',
      },
    ],
  },

  // === STAGE 3: 프라이버시 룰 제정과 신뢰 구축 ===
  pv_s3_door_rule: {
    id: 'pv_s3_door_rule',
    stageNumber: 3,
    scenarioId: 'privacy',
    stageTitle: '3단계: 우리 집 방문 & 노크 규칙 만들기',
    situationNarration:
      '거실에서 부모님과 함께 \'내 방 공간 사용 규칙\'을 정하기로 했다. 부모님께서 물으신다. "그럼 너의 사생활도 지키고, 우리도 안심할 수 있는 구체적인 규칙을 어떻게 정하면 좋겠니?"',
    visualScene: {
      location: '식탁 위 규칙 메모장',
      atmosphere: 'warm',
      iconName: 'FileText',
    },
    choices: [
      {
        id: 'pv_s3_r1',
        text: '"1. 들어오실 땐 반드시 3회 노크하고 대답 들은 후 열기 2. 밤 10시 이후 취침/스마트폰 충전은 거실에 두기 3. 환기나 청소 시간엔 활짝 열어두기!"',
        myThought: '부모님의 가장 큰 걱정인 밤 스마트폰 중독을 내가 먼저 거실에 양보하면 완벽한 합의가 돼!',
        parentReaction: {
          emotion: 'proud',
          parentSpeech: '"스마트폰을 밤에 거실에 두겠다고? 와, 이 정도 약속을 스스로 지킨다면 방문 닫는 건 얼마든지 허락하지!"',
          parentThought: '스마트폰 통제까지 스스로 내걸다니! 이 아이는 정말 믿을 수 있는 인격체다.',
          relationshipDelta: 16,
          feedbackTip: '부모님의 최대 걱정거리(야간 폰 사용)를 먼저 양보하면 사생활의 자유가 200% 보장됩니다.',
        },
        nextStageId: 'pv_s4_test_knock',
      },
      {
        id: 'pv_s3_r2',
        text: '"노크는 무조건 필수고, 제 서랍이나 다이어리, 휴대폰은 절대 만지지 마세요. 어기면 벌금 5천 원!"',
        myThought: '내 비밀을 완벽하게 보호하기 위한 철통 방패를 치자.',
        parentReaction: {
          emotion: 'thoughtful',
          parentSpeech: '"사생활 존중은 맞지만 부모한테 벌금이라니 섭섭하네. 그래도 약속은 지켜보마."',
          parentThought: '비밀이 참 많은 나이구나. 그래도 벌금 운운하는 건 살짝 거리감이 느껴지네.',
          relationshipDelta: 4,
          feedbackTip: '지나치게 법적인 잣대(벌금 등)를 가족에게 들이대면 온기가 사라질 수 있어요.',
        },
        nextStageId: 'pv_s4_test_knock',
      },
      {
        id: 'pv_s3_r3',
        text: '"그냥 부모님이 맘대로 정하세요. 어차피 제 의견 반영도 안 될 텐데요."',
        myThought: '룰 정해봤자 며칠 안 가서 또 어기실 게 뻔해.',
        parentReaction: {
          emotion: 'disappointed',
          parentSpeech: '"너랑 대화해서 공통의 약속을 만들려는데 왜 자꾸 회피하니?"',
          parentThought: '함께 규칙을 만들려는 의지가 없으니 아쉽다.',
          relationshipDelta: -5,
          feedbackTip: '합의 과정에 적극적으로 참여해야 내가 지키고 싶은 권리를 담을 수 있어요.',
        },
        nextStageId: 'pv_s4_boundary_test',
      },
    ],
  },

  pv_s3_empathy: {
    id: 'pv_s3_empathy',
    stageNumber: 3,
    scenarioId: 'privacy',
    stageTitle: '3단계: 닫힌 문 틈으로 건넨 진심',
    situationNarration:
      '엄마가 내 방에 따뜻한 코코아를 들고 오셔서 노크를 똑똑똑 하신다. "들어가도 될까? 아까 깜짝 놀라게 해서 미안했어." 문턱에 선 엄마의 눈빛에 미안함이 가득하다.',
    visualScene: {
      location: '방문 틈 따뜻한 김이 나는 코코아',
      atmosphere: 'warm',
      iconName: 'Coffee',
    },
    choices: [
      {
        id: 'pv_s3_e1',
        text: '활짝 문을 열고 코코아를 받으며 "엄마, 노크해 주셔서 정말 고마워요. 들어와서 잠깐 이야기해요"라고 웃어 보인다.',
        myThought: '부모님이 먼저 변화된 행동(노크)을 보여주셨으니 나도 활짝 반기자!',
        parentReaction: {
          emotion: 'relieved',
          parentSpeech: '"노크 하나로 우리 딸/아들이 이렇게 환하게 웃어주니 엄마가 앞으로 꼭 명심할게."',
          parentThought: '노크가 아이에게 이렇게 큰 존중의 의미였구나. 앞으로 꼭 지켜야지.',
          relationshipDelta: 15,
          feedbackTip: '상대방의 변화된 행동에 즉각 감사와 환대를 보내면 그 긍정적 행동이 굳어집니다.',
        },
        nextStageId: 'pv_s4_test_knock',
      },
      {
        id: 'pv_s3_e2',
        text: '"코코아 책상에 두고 나가주세요. 저 지금 음악 들어야 해요."',
        myThought: '노크는 고맙지만 아직 단둘이 대화하기엔 어색해.',
        parentReaction: {
          emotion: 'thoughtful',
          parentSpeech: '"그래, 방해 안 할 테니 천천히 마시렴."',
          parentThought: '아직은 조심스러운 시기인가 보다. 천천히 다가가야겠어.',
          relationshipDelta: 3,
          feedbackTip: '시간이 필요할 때는 "나중에 제가 먼저 말 걸게요"라고 부드러운 여지를 남기면 좋아요.',
        },
        nextStageId: 'pv_s4_boundary_test',
      },
      {
        id: 'pv_s3_e3',
        text: '"코코아 감사해요! 대신 다음부터는 꼭 노크 세 번 똑똑똑 해주시는 거 잊지 마세요~ 약속!" 하고 손가락을 건넨다.',
        myThought: '따뜻한 분위기 속에서 밝고 유쾌하게 약속을 확실히 각인시키자.',
        parentReaction: {
          emotion: 'proud',
          parentSpeech: '"하하, 그래 약속 도장 쾅! 우리 큰아이의 방은 이제부터 소중한 독립 구역이다."',
          parentThought: '웃으면서 귀엽게 약속을 거니 부모도 기분 좋게 지켜주고 싶다.',
          relationshipDelta: 14,
          feedbackTip: '갈등 후의 화해 순간에 가벼운 유머와 손가락 약속은 규칙 정착에 큰 힘이 됩니다.',
        },
        nextStageId: 'pv_s4_test_knock',
      },
    ],
  },

  pv_s3_lockdown: {
    id: 'pv_s3_lockdown',
    stageNumber: 3,
    scenarioId: 'privacy',
    stageTitle: '3단계: 완전히 무너진 프라이버시',
    situationNarration:
      '결국 방문은 항상 활짝 열어두어야 한다는 엄명이 떨어졌다. 거실에서 지나갈 때마다 방 안이 훤히 들여다보인다. 옷을 갈아입을 때조차 문틈으로 누가 볼까 봐 불안하고 수치심이 든다.',
    visualScene: {
      location: '훤히 들여다보이는 방 안',
      atmosphere: 'gloomy',
      iconName: 'Eye',
    },
    choices: [
      {
        id: 'pv_s3_l1',
        text: '엄마 아빠께 정중히 손편지를 써서 "옷 갈아입을 때나 신체적인 변화가 있을 때 문이 열려있으면 너무 부끄럽고 수치스러워요. 이 부분만은 제발 배려해 주세요"라고 호소한다.',
        myThought: '사춘기 신체 변화와 수치심에 대해 진지하게 호소하면 부모님도 공감해 주실 거야.',
        parentReaction: {
          emotion: 'surprised',
          parentSpeech: '"어머... 옷 갈아입고 신체 변화 때문에 그랬구나. 엄마가 미처 섬세하게 챙기지 못했어."',
          parentThought: '아이가 성적 수치심을 느끼고 있었다니! 이건 당연히 부모가 보호하고 가려줘야 할 사생활인데!',
          relationshipDelta: 14,
          feedbackTip: '사춘기 신체 변화와 정서적 수치심을 솔직히 고백하면 부모님은 100% 이해하고 물러서십니다.',
        },
        nextStageId: 'pv_s4_test_knock',
      },
      {
        id: 'pv_s3_l2',
        text: '방 안에 옷장이나 이불로 가림막을 쳐서 거실 시선을 차단해 버린다.',
        myThought: '문 못 닫게 하면 방 안에 성벽을 쌓을 테다.',
        parentReaction: {
          emotion: 'angry',
          parentSpeech: '"방 안에 또 장벽을 쌓아? 정말 끝까지 반항할 작정이니?"',
          parentThought: '숨바꼭질하듯 굴러가니 정말 속이 뒤집힌다.',
          relationshipDelta: -12,
          feedbackTip: '물리적 가림막으로 숨는 행동은 부모님의 불안과 의심을 더 가중시켜요.',
        },
        nextStageId: 'pv_s4_isolation',
      },
      {
        id: 'pv_s3_l3',
        text: '"엄마, 문을 완전히 닫는 게 불안하시면 문을 딱 주먹 하나만큼만 살짝 열어두는 걸로 타협하면 안 될까요?"',
        myThought: '전부 아니면 전무 대신 작은 틈새 타협안을 제시해보자.',
        parentReaction: {
          emotion: 'thoughtful',
          parentSpeech: '"주먹 하나만큼 열어둔다고? 음... 그렇게 하면 안심도 되고 너도 덜 답답하겠네. 그렇게 해보자."',
          parentThought: '극단적인 대립 대신 점진적인 절충안을 내놓으니 타협해 볼 만하네.',
          relationshipDelta: 7,
          feedbackTip: '극단적인 통제 상황에서는 작은 틈새부터 타협하는 기술이 효과적입니다.',
        },
        nextStageId: 'pv_s4_boundary_test',
      },
    ],
  },

  // === STAGE 4: 약속 이행과 신뢰의 시험 ===
  pv_s4_test_knock: {
    id: 'pv_s4_test_knock',
    stageNumber: 4,
    scenarioId: 'privacy',
    stageTitle: '4단계: 똑똑똑! 노크 소리의 기적',
    situationNarration:
      '약속 이후 며칠 동안 놀라운 일이 벌어졌다! 부모님께서 내 방에 오실 때마다 "똑- 똑- 똑, 우리 큰아이, 들어가도 될까?" 하고 정중히 노크를 하신다. 그리고 나 역시 약속대로 밤 10시가 되면 스마트폰을 거실 충전대에 가져다 놓았다. 오늘은 친구와 전화로 속마음 수다를 떨고 있는데 밖에서 노크 소리가 들린다!',
    visualScene: {
      location: '닫힌 내 방 문 앞 부모님의 정중한 노크',
      atmosphere: 'warm',
      iconName: 'CheckCircle2',
    },
    choices: [
      {
        id: 'pv_s4_tk1',
        text: '"친구한테 \'잠깐만, 우리 엄마 노크하셨어\'라고 말하고, \'네 엄마, 들어오세요!\' 하고 밝게 맞이한다."',
        myThought: '부모님이 내 프라이버시를 지켜주셨으니, 나도 부모님을 환영하는 예의를 갖추자.',
        parentReaction: {
          emotion: 'proud',
          parentSpeech: '"친구랑 통화 중이었구나~ 과일 깎아왔으니 맛있게 먹으면서 통화해^^ (살포시 문 닫아주심)"',
          parentThought: '노크에 반갑게 대답해 주고 간식만 챙겨주니 서로 얼마나 기분 좋니! 아이가 참 자랑스럽다.',
          relationshipDelta: 16,
          feedbackTip: '노크에 대한 상냥한 응답은 부모님에게 ‘존중받는 느낌’을 되돌려주는 마법의 열쇠예요.',
        },
        nextStageId: 'pv_s5_fortress_peace',
      },
      {
        id: 'pv_s4_tk2',
        text: '"아 지금 중요한 통화 중이니까 들어오지 마세요!" 하고 짜증을 낸다.',
        myThought: '한창 재밌는 타이밍인데 흐름 끊겨서 귀찮아.',
        parentReaction: {
          emotion: 'disappointed',
          parentSpeech: '"노크까지 예의 갖춰 해줬는데 짜증을 내니? 부모를 문전박대하는 거니?"',
          parentThought: '배려해 줬더니 도로 짜증만 돌아오니 배신감이 드네.',
          relationshipDelta: -6,
          feedbackTip: '상대의 정중한 노크를 매몰차게 거절하면 힘들게 세운 노크 규칙이 무너질 수 있어요.',
        },
        nextStageId: 'pv_s5_cracked_door',
      },
      {
        id: 'pv_s4_tk3',
        text: '"네 엄마! 통화 중이라 1분 뒤에 제가 문 열고 나갈게요!"라고 다정하게 시간을 알려드린다.',
        myThought: '노크에 바로 응답하되, 내 현재 상황을 명확한 시간과 함께 전달하자.',
        parentReaction: {
          emotion: 'relieved',
          parentSpeech: '"알겠어~ 통화 마치고 천천히 나오렴^^"',
          parentThought: '노크에 즉각 반응하고 언제 나올지 명확히 알려주니 참 성숙하고 안심된다.',
          relationshipDelta: 12,
          feedbackTip: '노크 시 "1분 뒤 나갈게요"처럼 구체적인 타이밍을 전달하면 신뢰가 배가됩니다.',
        },
        nextStageId: 'pv_s5_fortress_peace',
      },
    ],
  },

  pv_s4_boundary_test: {
    id: 'pv_s4_boundary_test',
    stageNumber: 4,
    scenarioId: 'privacy',
    stageTitle: '4단계: 반쪽짜리 자유와 줄다리기',
    situationNarration:
      '방문은 반쯤 열어두는 조건으로 타협했다. 완벽한 나만의 비밀 요새는 아니지만, 부모님도 노크 없이 불쑥 들어오지 않으려 노력하신다. 하지만 가끔 거실을 지나치며 힐끔 보는 시선이 신경 쓰인다.',
    visualScene: {
      location: '반쯤 열린 방문 사이',
      atmosphere: 'neutral',
      iconName: 'Maximize2',
    },
    choices: [
      {
        id: 'pv_s4_bt1',
        text: '"엄마, 제가 이번 시험공부 목표를 달성하면 방문을 완전히 닫고 스스로 시간 관리하는 자유를 한 번 실험해 볼 수 있을까요?"',
        myThought: '자유의 크기를 내 스스로의 성취와 연결해서 확장해 나가자.',
        parentReaction: {
          emotion: 'relieved',
          parentSpeech: '"목표를 세우고 자유를 확장하겠다니 멋진 도전이네! 당연히 응원해 줄게."',
          parentThought: '스스로 신뢰를 쟁취하려는 모습이 듬직하다.',
          relationshipDelta: 12,
          feedbackTip: '자유를 ‘요구’하기보다 ‘성취의 보상’으로 제안하면 부모님은 기꺼이 응하십니다.',
        },
        nextStageId: 'pv_s5_fortress_peace',
      },
      {
        id: 'pv_s4_bt2',
        text: '"힐끔힐끔 쳐다보지 마세요. 진짜 기분 나빠요."',
        myThought: '보는 척 안 하면서 다 쳐다보는 게 더 소름 돋아.',
        parentReaction: {
          emotion: 'firm',
          parentSpeech: '"지나가다 눈 마주친 것 가지고 유난 떨지 마라. 거실 지나다니지도 못하니?"',
          parentThought: '사소한 시선에도 과민반응하니 같이 살기 참 팍팍하네.',
          relationshipDelta: -5,
          feedbackTip: '지나친 과민반응은 상대방을 피곤하게 만들어 갈등의 불씨를 되살려요.',
        },
        nextStageId: 'pv_s5_cracked_door',
      },
      {
        id: 'pv_s4_bt3',
        text: '거실로 나와 "엄마, 문 살짝 열어둔 약속 며칠 잘 지켰죠? 부모님도 약속 잘 지켜주셔서 감사해요" 하고 먼저 간식을 건넨다.',
        myThought: '약속을 잘 지킨 서로를 칭찬하고 인정하면 다음 단계의 신뢰가 생겨.',
        parentReaction: {
          emotion: 'proud',
          parentSpeech: '"네가 먼저 이렇게 다정하게 말해주니 정말 고맙다. 조금씩 더 믿음을 줄게."',
          parentThought: '아이가 약속을 진지하게 대하는 모습에 감동했다.',
          relationshipDelta: 10,
          feedbackTip: '작은 약속 이행에 대해 서로 인정하고 칭찬하면 더 넓은 자유로 나아갈 수 있어요.',
        },
        nextStageId: 'pv_s5_fortress_peace',
      },
    ],
  },

  pv_s4_isolation: {
    id: 'pv_s4_isolation',
    stageNumber: 4,
    scenarioId: 'privacy',
    stageTitle: '4단계: 마음의 문까지 굳게 잠긴 날',
    situationNarration:
      '방문은 활짝 열려있지만, 내 마음의 문은 굳게 닫혀버렸다. 부모님이 말을 걸어도 대답은 단답형 "네", "아니오"뿐. 거실과 내 방 사이에는 눈에 보이지 않는 거대한 철벽이 쳐졌다.',
    visualScene: {
      location: '적막이 흐르는 내 방 책상',
      atmosphere: 'gloomy',
      iconName: 'CloudRain',
    },
    choices: [
      {
        id: 'pv_s4_is1',
        text: '저녁 식사 후 부모님께 "제가 너무 마음의 문을 닫았죠? 사실 프라이버시도 중요하지만 부모님과 멀어지고 싶진 않았어요"라고 조심스럽게 화해의 손을 내민다.',
        myThought: '고립은 답이 아니야. 대화로 풀지 않으면 영영 감옥이 될 거야.',
        parentReaction: {
          emotion: 'relieved',
          parentSpeech: '"우리 아이가 먼저 다가와 주니 눈물이 날 것 같네... 엄마 아빠가 널 존중해 주는 법을 더 배울게."',
          parentThought: '아이가 이렇게 용기를 내주다니. 이제 정말 아이의 사생활을 소중히 지켜줘야지.',
          relationshipDelta: 15,
          feedbackTip: '철벽을 허물고 먼저 다가가는 용기는 모든 부모님의 마음을 녹입니다.',
        },
        nextStageId: 'pv_s5_cracked_door',
      },
      {
        id: 'pv_s4_is2',
        text: '더욱더 철저하게 침묵을 지키며 일체의 감정 표현을 끊어버린다.',
        myThought: '내 사생활을 안 주면 내 영혼도 안 보여줄 거야.',
        parentReaction: {
          emotion: 'sad',
          parentSpeech: '"아이가 아예 다른 사람처럼 변해버렸어... 대체 어떡하면 좋지..."',
          parentThought: '대화의 줄이 완전히 끊겨버려 절망스럽다.',
          relationshipDelta: -16,
          feedbackTip: '정서적 단절은 프라이버시가 아니라 깊은 상처와 고립의 늪을 만듭니다.',
        },
        nextStageId: 'pv_s5_cage',
      },
      {
        id: 'pv_s4_is3',
        text: '포스트잇에 \'요즘 마음이 너무 지치고 혼자 쉬고 싶어요. 화난 게 아니라 충전이 필요해요\'라고 적어 냉장고에 붙여둔다.',
        myThought: '말하기 힘들다면 메모를 통해 내 마음의 상태라도 솔직히 알리자.',
        parentReaction: {
          emotion: 'thoughtful',
          parentSpeech: '"(메모를 보고) 아이가 많이 지쳐있었구나... 억지로 말을 시키기보다 쉴 틈을 줘야겠어."',
          parentThought: '말하기 힘든 감정을 메모로 전해주니 다행이다. 기다려줘야겠다.',
          relationshipDelta: 6,
          feedbackTip: '말문이 막힐 때는 쪽지나 문자로 감정 상태를 알리는 것이 고립을 막는 훌륭한 방법입니다.',
        },
        nextStageId: 'pv_s5_cracked_door',
      },
    ],
  },

  // === STAGE 5: 최종 정착과 결말 ===
  pv_s5_fortress_peace: {
    id: 'pv_s5_fortress_peace',
    stageNumber: 5,
    scenarioId: 'privacy',
    stageTitle: '5단계: 존중과 사랑이 넘치는 비밀 요새',
    situationNarration:
      '이제 내 방 문은 내가 필요할 때 편안히 닫을 수 있고, 가족들은 언제나 정중한 3회 노크로 내 존재를 예우한다. 나 역시 방문을 열어두고 거실에서 부모님과 유쾌한 수다를 떠는 시간이 더 즐거워졌다! 방문 앞에 걸린 [사춘기 쉼터: 노크 환영!] 문패가 반짝인다.',
    visualScene: {
      location: '아늑하고 평화로운 내 방과 문패',
      atmosphere: 'warm',
      iconName: 'Sparkles',
    },
    choices: [
      {
        id: 'pv_s5_fp1',
        text: '"노크하고 들어오신 부모님께 환하게 웃으며 맛있는 귤을 하나 건넨다."',
        myThought: '지켜진 프라이버시 위에서 가족에 대한 사랑이 더 깊어졌어.',
        parentReaction: {
          emotion: 'proud',
          parentSpeech: '"우리 아이 방에 들어올 때마다 한 사람의 멋진 청소년을 만나는 기분이란다."',
          parentThought: '존중해 주니 아이가 이렇게 예쁘게 자라는구나. 정말 흐뭇하다.',
          relationshipDelta: 16,
          feedbackTip: '건강한 프라이버시는 가족을 멀어지게 하는 게 아니라 더 돈독하게 만듭니다.',
        },
        nextStageId: 'pv_end_best',
      },
      {
        id: 'pv_s5_fp2',
        text: '방문 앞에 [오늘의 가족 감사 한 줄] 메모판을 걸어, 노크해 주신 부모님께 매일 귀여운 감사 메시지를 남긴다.',
        myThought: '배려받는 만큼 부모님께도 따뜻한 표현을 아끼지 말아야지!',
        parentReaction: {
          emotion: 'proud',
          parentSpeech: '"매일 방문 앞 메모를 볼 때마다 하루 피로가 싹 가신단다. 우리 큰아이 최고!"',
          parentThought: '자유를 누리면서 가족을 배려할 줄 아는 멋진 청소년으로 자랐구나.',
          relationshipDelta: 16,
          feedbackTip: '자유를 인정받았을 때 가족과 나누는 감사는 부모 자녀 관계를 평생의 친구로 만듭니다.',
        },
        nextStageId: 'pv_end_best',
      },
      {
        id: 'pv_s5_fp3',
        text: '"숙제할 때는 방문을 닫고, 휴식할 때는 문을 활짝 열어 거실의 가족과 즐겁게 대화한다."',
        myThought: '닫힘과 열림의 균형을 스스로 조절하는 것이 진짜 멋진 독립이야.',
        parentReaction: {
          emotion: 'relieved',
          parentSpeech: '"스스로 문을 열고 닫는 균형을 찾은 네 모습이 정말 대견하단다."',
          parentThought: '방문을 닫아도 전혀 걱정되지 않는 깊은 신뢰가 생겼다.',
          relationshipDelta: 14,
          feedbackTip: '스스로 경계를 열고 닫는 유연함은 사춘기 독립의 가장 이상적인 모습입니다.',
        },
        nextStageId: 'pv_end_best',
      },
    ],
  },

  pv_s5_cracked_door: {
    id: 'pv_s5_cracked_door',
    stageNumber: 5,
    scenarioId: 'privacy',
    stageTitle: '5단계: 살짝 열어둔 마음의 틈',
    situationNarration:
      '방문을 완전히 닫지는 못하지만, 문을 살짝 틈새만큼 열어두고 지낸다. 서로 조심스럽게 영역을 배려하며 큰 충돌 없이 평화로운 균형을 유지하고 있다.',
    visualScene: {
      location: '살짝 열린 문과 잔잔한 방',
      atmosphere: 'neutral',
      iconName: 'Sliders',
    },
    choices: [
      {
        id: 'pv_s5_cd1',
        text: '"완벽하진 않지만 서로 노력하고 있으니, 앞으로 조금씩 더 신뢰를 쌓아가면 되겠죠!"',
        myThought: '점진적인 신뢰 구축이 가장 안전한 방법이야.',
        parentReaction: {
          emotion: 'relieved',
          parentSpeech: '"그래, 서두르지 말고 한 걸음씩 서로에게 맞춰가자꾸나."',
          parentThought: '충돌 없이 서로의 타협점을 지켜나가는 아이가 대견하네.',
          relationshipDelta: 8,
          feedbackTip: '타협된 경계선을 꾸준히 지키면 결국 완전한 자율성이 찾아옵니다.',
        },
        nextStageId: 'pv_end_good',
      },
      {
        id: 'pv_s5_cd2',
        text: '"지금까지 틈새 문 약속을 잘 지켰으니, 이번 주말엔 공부할 때 온전히 문을 닫아보는 2차 실험을 해봐도 될까요?"',
        myThought: '축적된 신뢰를 바탕으로 한 단계 더 높은 완전한 프라이버시에 도전해보자.',
        parentReaction: {
          emotion: 'proud',
          parentSpeech: '"그동안 약속을 참 잘 지켰으니 이번 주말엔 문 닫는 걸 허락해 보마!"',
          parentThought: '약속을 단계적으로 이행해 나가는 모습이 정말 믿음직스럽다.',
          relationshipDelta: 14,
          feedbackTip: '지속적인 약속 이행 후 제안하는 단계적 확장은 100% 성공 확률을 가집니다.',
        },
        nextStageId: 'pv_end_best',
      },
      {
        id: 'pv_s5_cd3',
        text: '"문을 반쯤 열어두는 게 가끔 신경 쓰이지만, 부모님도 신경 써주시는 만큼 저도 익숙해져 볼게요."',
        myThought: '서로가 양보한 중간 지점을 인정하고 평화롭게 유지하자.',
        parentReaction: {
          emotion: 'thoughtful',
          parentSpeech: '"너도 많이 참아주고 배려해 줘서 고마워. 앞으로 엄마 아빠도 더 주의할게."',
          parentThought: '서로 타협하고 맞춰가는 과정 속에서 가족의 정이 깊어지네.',
          relationshipDelta: 6,
          feedbackTip: '서로의 차이를 인정하며 한 발씩 물러서는 타협의 미덕을 배운 소중한 경험입니다.',
        },
        nextStageId: 'pv_end_normal',
      },
    ],
  },

  pv_s5_cage: {
    id: 'pv_s5_cage',
    stageNumber: 5,
    scenarioId: 'privacy',
    stageTitle: '5단계: 감옥이 된 방과 숨 막히는 일상',
    situationNarration:
      '방문은 활짝 열려있고, 언제나 감시당하는 기분에 방에 있어도 쉴 수가 없다. 집은 나에게 가장 불편하고 도망치고 싶은 공간이 되어버렸다.',
    visualScene: {
      location: '모든 게 노출된 삭막한 방',
      atmosphere: 'gloomy',
      iconName: 'Lock',
    },
    choices: [
      {
        id: 'pv_s5_cg1',
        text: '한숨을 쉬며 베개에 얼굴을 묻고 "빨리 어른이 돼서 독립이나 해야지"라고 중얼거린다.',
        myThought: '이 집에선 나라는 존재의 비밀과 존엄성이 없어.',
        parentReaction: {
          emotion: 'sad',
          parentSpeech: '"방에서 한숨만 쉬는 아이를 볼 때마다 집안 공기가 무겁기만 하구나..."',
          parentThought: '불안해서 문을 열어두게 했더니 오히려 아이를 더 잃어버린 것 같다.',
          relationshipDelta: -16,
          feedbackTip: '프라이버시 갈등을 극단적으로 방치하면 집 전체가 감옥처럼 변해버립니다.',
        },
        nextStageId: 'pv_end_worst',
      },
      {
        id: 'pv_s5_cg2',
        text: '감옥 같은 침묵을 깨고 저녁에 부모님 손을 잡으며 "엄마, 아빠... 저 솔직히 지금 숨이 턱턱 막혀요. 제발 제 진짜 마음 한 번만 들어주세요" 하고 진심을 털어놓는다.',
        myThought: '이대로 원수가 될 순 없어. 마지막으로 내 심정을 솔직하게 호소하자.',
        parentReaction: {
          emotion: 'relieved',
          parentSpeech: '"아가야... 네가 그렇게까지 괴로운 줄 몰랐어. 엄마 아빠가 너무 심했구나. 다시 이야기해 보자."',
          parentThought: '아이가 눈물을 보이며 다가오니 가슴이 무너진다. 부모의 고집을 꺾어야겠다.',
          relationshipDelta: 12,
          feedbackTip: '벼랑 끝에서도 취약성을 드러내며 도움을 청하는 용기는 최악의 상황을 반전시킵니다.',
        },
        nextStageId: 'pv_end_normal',
      },
      {
        id: 'pv_s5_cg3',
        text: '"방문을 활짝 열어두는 건 따를 테니, 제 책상 서랍과 휴대폰만큼은 절대 열어보지 않겠다고 약속해 주세요" 하고 최소한의 선을 긋는다.',
        myThought: '방문은 포기하더라도 내 진짜 사적인 기록물만큼은 사수하자.',
        parentReaction: {
          emotion: 'thoughtful',
          parentSpeech: '"그건 당연하지. 네 물건과 비밀은 부모라도 함부로 보지 않으마."',
          parentThought: '최소한의 마지노선을 지키려는 아이의 요구는 들어주는 게 마땅하다.',
          relationshipDelta: 5,
          feedbackTip: '방문이 열리더라도 소지품의 프라이버시를 지키는 것은 현실적인 차선책입니다.',
        },
        nextStageId: 'pv_end_normal',
      },
    ],
  },
};

export const privacyEndings: Record<string, EndingResult> = {
  pv_end_best: {
    id: 'pv_end_best',
    scenarioId: 'privacy',
    category: 'best',
    title: '👑 당당한 프라이버시 사수왕 (BEST 엔딩)',
    subtitle: '노크의 품격과 안심의 약속으로 쟁취한 완벽한 비밀 요새!',
    storySummary:
      '문을 쾅 닫거나 반항하는 대신, 사춘기 심리를 솔직히 설명하고 ‘야간 폰 거실 충전’과 ‘정중한 노크 규칙’을 선제적으로 제안한 당신! 부모님은 당신을 완전히 믿을 수 있는 독립된 인격체로 인정하게 되었습니다. 이제 당신의 방은 문을 닫아도 아무런 의심을 받지 않는 최고의 아늑한 쉼터가 되었습니다.',
    visualMood: {
      badge: '🏆 최고의 해결책',
      gradient: 'from-blue-500 via-cyan-500 to-teal-400',
      illustrationStyle: 'celebrate',
      iconName: 'Trophy',
    },
    relationshipScore: 98,
    myGrowthNote:
      '"내 방 문을 닫는 권리는 문을 쾅 닫아서 얻는 게 아니라, 부모님이 걱정하시는 스마트폰 사용이나 생활 태도를 스스로 투명하게 보여드릴 때 주어진다는 걸 배웠어요!"',
    parentHeartNote:
      '"아이가 자신의 사생활을 요구하면서도 부모의 걱정을 덜어주는 약속을 스스로 지켜내는 모습에 깊은 존경심마저 들었습니다. 이제 아이의 공간을 철저히 존중해 줄 것입니다."',
    practicalTips: [
      '부모님이 방문을 못 닫게 하실 땐 "공부 집중과 에너지 충전"을 위한 것임을 차분히 설명하고, [공부 중 / 휴식 중] 문패를 활용해 보세요.',
      '부모님의 최대 걱정(방 안에서 스마트폰 중독/몰폰)을 없애기 위해 "밤 10시 이후 스마트폰 거실 반납"을 먼저 제안해 보세요.',
      '부모님이 노크하고 들어오셨을 땐 짜증 대신 "노크해 주셔서 감사해요, 들어오세요!"라고 환영해 주면 노크 습관이 영구히 정착됩니다.',
    ],
    bgmType: 'celebration',
  },

  pv_end_good: {
    id: 'pv_end_good',
    scenarioId: 'privacy',
    category: 'good',
    title: '🚪 열린 문틈 사이의 신뢰 (GOOD 엔딩)',
    subtitle: '서로를 배려하는 타협으로 찾은 적당한 사생활',
    storySummary:
      '방문을 살짝 틈새만큼 열어두고 지내며, 노크 규칙과 옷 갈아입을 때의 사생활을 보장받았습니다. 100% 완전 밀폐된 요새는 아니지만, 부모님의 불안을 덜어드리면서도 내 공간을 지켜내는 건강한 타협점을 찾아냈습니다.',
    visualMood: {
      badge: '✨ 균형 잡힌 타협',
      gradient: 'from-teal-400 to-emerald-600',
      illustrationStyle: 'calm',
      iconName: 'DoorOpen',
    },
    relationshipScore: 80,
    myGrowthNote:
      '"조금의 양보를 통해 부모님과의 큰 충돌을 피하고 내 공간을 확보했어요. 앞으로 신뢰를 더 쌓아서 점차 더 큰 자유를 얻을 거예요."',
    parentHeartNote:
      '"아이가 약속을 잘 지켜주니 안심이 됩니다. 점차 스스로 시간을 관리할 수 있도록 방문을 닫는 시간도 늘려줄 생각입니다."',
    practicalTips: [
      '처음부터 100% 완전한 자유를 요구하기보다 "공부할 때 1시간만", "옷 갈아입을 때만"처럼 단계적으로 신뢰를 넓혀가세요.',
    ],
    bgmType: 'calm',
  },

  pv_end_normal: {
    id: 'pv_end_normal',
    scenarioId: 'privacy',
    category: 'normal',
    title: '⚖️ 아슬아슬한 휴전과 서먹한 평화 (NORMAL 엔딩)',
    subtitle: '완전한 자유는 아니지만, 소중한 타협점을 지켜내다',
    storySummary:
      '방문을 완전히 닫지는 못하지만, 문을 살짝 틈새만큼 열어두거나 옷 갈아입을 때만 닫는 조건으로 휴전 상태에 들어갔습니다. 아직 완벽한 나만의 비밀 요새는 아니지만, 서로의 감정이 폭발하지 않고 작은 경계선을 지켜나가는 방법을 배웠습니다.',
    visualMood: {
      badge: '⚖️ 아슬아슬한 타협',
      gradient: 'from-amber-500 to-stone-600',
      illustrationStyle: 'calm',
      iconName: 'Scale',
    },
    relationshipScore: 62,
    myGrowthNote:
      '"모든 것을 한 번에 얻을 수는 없지만, 부모님과의 작은 약속을 지켜나가며 점차 신뢰를 쌓아갈 수 있다는 걸 알게 되었어요."',
    parentHeartNote:
      '"아직 서로 서먹하고 조심스럽지만, 아이가 조금씩 양보하며 규칙을 지키려 노력하는 모습에 마음이 놓입니다."',
    practicalTips: [
      '작은 약속(예: 공부할 때만 닫기, 밥 먹을 땐 나오기)을 꾸준히 지켜 부모님께 안도감을 선물하세요.',
      '부모님이 불안해하지 않도록 거실에서 나누는 일상 대화 빈도를 조금씩 늘려보세요.',
    ],
    bgmType: 'calm',
  },

  pv_end_worst: {
    id: 'pv_end_worst',
    scenarioId: 'privacy',
    category: 'worst',
    title: '🔒 감시와 단절의 차가운 방 (WORST 엔딩)',
    subtitle: '방문은 열렸으나, 마음의 빗장은 영원히 걸려버리다',
    storySummary:
      '문을 쾅 닫고 욕을 하거나 극단적인 협박으로 맞선 결과, 방문 손잡이가 떼어질 뻔하고 방문을 상시 개방해야 하는 최악의 징벌을 받았습니다. 내 방에 있어도 온몸이 발가벗겨진 듯한 감시 속에서 극심한 스트레스와 분노를 겪게 되었고, 가족과의 정서적 유대는 완전히 파탄 났습니다.',
    visualMood: {
      badge: '💔 관계의 파탄',
      gradient: 'from-slate-800 via-zinc-800 to-neutral-900',
      illustrationStyle: 'frustrated',
      iconName: 'Lock',
    },
    relationshipScore: 18,
    myGrowthNote:
      '"문을 쾅 닫고 반항하면 할수록 부모님은 내 방 안에서 무슨 큰일이 일어나는 줄 알고 감시를 더 강화한다는 걸 몰랐어요. 내 미숙한 대처가 내 방을 감옥으로 만들었어요."',
    parentHeartNote:
      '"아이가 소리를 지르고 벽을 치며 반항하는 모습을 보며 도저히 믿고 문을 닫아둘 수가 없었습니다. 서로를 향한 불신만 깊어져 너무 슬픕니다."',
    practicalTips: [
      '방문을 쾅 닫는 행위는 부모님 뇌에 "저 안에서 뭔가 나쁜 짓을 하거나 반항 중이다"라는 경보 사이렌을 울리는 최악의 방아쇠입니다.',
      '사생활을 지키고 싶을수록 내 일상을 부모님께 더 투명하고 당당하게 오픈해야 진짜 사생활이 보장받습니다.',
    ],
    bgmType: 'frustration',
  },
};

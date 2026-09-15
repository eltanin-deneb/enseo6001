import { StageNode, EndingResult, ScenarioMeta } from '../types';

export const lotteworldMeta: ScenarioMeta = {
  id: 'lotteworld',
  sparklingTitle: '🎡 친구들은 다 가는데 나만 안 된다고?! 롯데월드 결사대',
  subtitle: '친구들과의 첫 놀이공원 원정기 vs 위험하다는 부모님의 반대',
  tagline: '초등학교 고학년의 최고 인기 약속! 부모님의 걱정을 신뢰로 바꿀 수 있을까?',
  icon: 'Ticket',
  themeColor: {
    bg: 'from-amber-500/10 to-orange-500/10',
    border: 'border-amber-300',
    text: 'text-amber-700',
    badge: 'bg-amber-100 text-amber-800',
    accent: 'bg-amber-500',
  },
  initialStageId: 'lw_s1',
  previewPrompt: '부모님: "초등학생들끼리 그 넓은 놀이공원을 가겠다고? 절대 안 돼, 위험해!"',
};

export const lotteworldStages: Record<string, StageNode> = {
  // === STAGE 1: 첫 폭탄 투하 ===
  lw_s1: {
    id: 'lw_s1',
    stageNumber: 1,
    scenarioId: 'lotteworld',
    stageTitle: '1단계: 놀이공원 계획 고백의 순간',
    situationNarration:
      '이번 주 토요일, 단짝 친구 4명이서 롯데월드에 가기로 다 정했다. 단톡방은 벌써 놀이기구 탈 생각에 난리인데, 저녁 식사 자리에서 조심스레 말을 꺼냈더니 엄마 아빠 표정이 순식간에 굳어졌다. "아직 어린 너희들끼리 거길 가겠다고? 사람도 많고 위험해서 절대 안 돼!" 이때 나의 반응은?',
    visualScene: {
      location: '거실 저녁 식탁 앞',
      atmosphere: 'tense',
      iconName: 'Users',
    },
    choices: [
      {
        id: 'lw_s1_c1',
        text: '"친구들은 다 허락받았는데 왜 나만 안 돼? 맨날 나만 애 취급이야!" 하고 숟가락을 탁 내려놓는다.',
        myThought: '진짜 나만 억울해! 친구들은 다 자유롭게 가는데 나만 갇혀 사는 기분이야.',
        parentReaction: {
          emotion: 'angry',
          parentSpeech: '"너 지금 숟가락 던지면서 말대꾸하니? 남들이 간다고 너까지 위험한 델 그냥 보내줄 줄 알았어?"',
          parentThought: '다 컸다고 생각하는 모양인데, 버릇없이 화부터 내는 걸 보니 아직 혼자 내보내기엔 턱없이 어리구나.',
          relationshipDelta: -10,
          feedbackTip: '비교하며 화를 내면 부모님은 내 성숙함을 더 의심하게 돼요.',
        },
        nextStageId: 'lw_s2_angry',
      },
      {
        id: 'lw_s1_c2',
        text: '"부모님이 걱정하시는 거 알아요. 그래도 진짜 위험하지 않게 다닐 건데, 왜 안 되는지 더 들어볼 수 있을까요?"',
        myThought: '답답하긴 하지만 일단 부모님이 왜 이렇게 격하게 반대하시는지 알아야 설득할 수 있어.',
        parentReaction: {
          emotion: 'thoughtful',
          parentSpeech: '"너를 못 믿는 게 아니라, 주말 놀이공원은 인파도 너무 많고 혹시라도 길을 잃거나 나쁜 사고가 날까 봐 걱정돼서 그래."',
          parentThought: '화를 낼 줄 알았는데 차분하게 묻네? 그래도 걱정스러운 마음은 어쩔 수 없는데...',
          relationshipDelta: 10,
          feedbackTip: '부모님의 걱정을 먼저 인정해 드리면 대화의 문이 열립니다.',
        },
        nextStageId: 'lw_s2_calm',
      },
      {
        id: 'lw_s1_c3',
        text: '아무 말 없이 밥만 푹푹 퍼먹으며 방으로 쾅 닫고 들어가 폰만 쳐다본다.',
        myThought: '말해봤자 벽이랑 대화하는 기분이야. 그냥 말 섞지 말아야지.',
        parentReaction: {
          emotion: 'disappointed',
          parentSpeech: '"저 녀석 또 문 닫고 들어가네... 자기 뜻대로 안 되면 입부터 닫아버리니 원."',
          parentThought: '소통을 거부하니 안쓰럽기도 하지만, 저렇게 삐치기만 하면 어떻게 믿고 멀리 보내겠니.',
          relationshipDelta: -5,
          feedbackTip: '입을 닫고 침묵시위를 하면 갈등은 전혀 풀리지 않고 시간만 흘러가요.',
        },
        nextStageId: 'lw_s2_silent',
      },
    ],
  },

  // === STAGE 2: 분기별 갈등 전개 ===
  lw_s2_angry: {
    id: 'lw_s2_angry',
    stageNumber: 2,
    scenarioId: 'lotteworld',
    stageTitle: '2단계: 냉전과 폭발 사이의 신경전',
    situationNarration:
      '식탁 분위기가 얼어붙었다. 엄마는 한숨을 쉬고, 아빠는 "이번 주말 외출은 일체 금지"라며 쐐기를 박았다. 단톡방에선 "너 표 끊었어?"라는 알림이 쉴 새 없이 울린다. 이대로 가면 친구들 사이에서 나만 빠지게 생겼다. 어떻게 만회할까?',
    visualScene: {
      location: '싸늘해진 식탁 앞',
      atmosphere: 'chaotic',
      iconName: 'Flame',
    },
    choices: [
      {
        id: 'lw_s2_a1',
        text: '"아까 숟가락 세게 놓은 건 죄송해요. 하지만 친구들이랑 몇 주 전부터 약속한 거라 너무 가고 싶어서 감정이 앞섰어요."',
        myThought: '자존심 상하지만 내가 먼저 태도를 사과해야 롯데월드 갈 확률이 1%라도 생겨.',
        parentReaction: {
          emotion: 'surprised',
          parentSpeech: '"...자기가 잘못한 걸 인정할 줄은 아는구나. 그래도 여전히 안전 문제는 걱정스럽단다."',
          parentThought: '스스로 감정을 가라앉히고 먼저 사과할 줄도 알다니, 조금은 컸네.',
          relationshipDelta: 8,
          feedbackTip: '먼저 태도를 정중히 사과하면 닫혔던 협상의 기회가 다시 생겨나요.',
        },
        nextStageId: 'lw_s3_plan',
      },
      {
        id: 'lw_s2_a2',
        text: '"그럼 내 용돈 모은 걸로 갈 거니까 부모님은 신경 끄세요! 표도 내가 알아서 살 거예요!"',
        myThought: '내 돈으로 내가 간다는데 무슨 상관이야? 반항할 테다.',
        parentReaction: {
          emotion: 'angry',
          parentSpeech: '"신경을 끄라고? 너 아직 법적으로 부모 보호 아래 있는 학생이야. 스마트폰도 압수할 줄 알아!"',
          parentThought: '돈 문제가 아니라 안전 문제인데, 저렇게 막무가내로 굴다니 정말 위험하겠어.',
          relationshipDelta: -15,
          feedbackTip: '극단적인 반항은 부모님의 통제와 규제만 더 강하게 부릅니다.',
        },
        nextStageId: 'lw_s3_rebel',
      },
      {
        id: 'lw_s2_a3',
        text: '"민수네 엄마는 허락하셨다니까요? 민수네 어머님한테 전화해서 물어보실래요?"',
        myThought: '다른 부모님 핑계를 대면 우리 부모님도 어쩔 수 없이 흔들리겠지?',
        parentReaction: {
          emotion: 'firm',
          parentSpeech: '"민수네 집 교육 방식과 우리 집은 달라. 남의 집 핑계 대지 말고 네 안전에 대해 이야기하자."',
          parentThought: '자꾸 남의 집 얘기로 밀어붙이려 하네. 우리 아이의 책임감을 보고 싶은 건데.',
          relationshipDelta: -2,
          feedbackTip: '친구 부모님과의 비교는 부모님에게 오히려 반감을 줄 수 있어요.',
        },
        nextStageId: 'lw_s3_rules',
      },
    ],
  },

  lw_s2_calm: {
    id: 'lw_s2_calm',
    stageNumber: 2,
    scenarioId: 'lotteworld',
    stageTitle: '2단계: 부모님의 진짜 걱정 파악하기',
    situationNarration:
      '부모님께서 차분해진 내 태도를 보고 마주 앉으셨다. "지하철 환승도 복잡하고, 사람 많은 곳에서 핸드폰 배터리 나가면 연락도 안 될 테고, 늦은 밤에 돌아오는 것도 걱정이야." 부모님의 구체적인 걱정거리들이 쏟아져 나온다. 나의 다음 말은?',
    visualScene: {
      location: '거실 소파 대화 자리',
      atmosphere: 'warm',
      iconName: 'MessageCircle',
    },
    choices: [
      {
        id: 'lw_s2_c1',
        text: '"부모님이 걱정하시는 세 가지(이동 경로, 연락 유지, 귀가 시간)에 대해 제가 안전 대책 보고서를 써서 보여드릴게요!"',
        myThought: '말뿐이 아니라 눈으로 확인시켜 드리면 부모님도 안심하실 거야.',
        parentReaction: {
          emotion: 'relieved',
          parentSpeech: '"안전 보고서라고? 호오, 네가 스스로 계획을 세워서 보여주겠다는 거지? 한번 가져와 보렴."',
          parentThought: '어머, 이런 생각까지 하다니 제법 듬직한 구석이 있네. 한번 지켜볼까?',
          relationshipDelta: 12,
          feedbackTip: '걱정거리에 대한 구체적인 대안을 능동적으로 제안하면 신뢰도가 수직 상승해요.',
        },
        nextStageId: 'lw_s3_plan',
      },
      {
        id: 'lw_s2_c2',
        text: '"요즘 초등학생들도 지하철 다 잘 타요. 부모님이 너무 과잉보호하시는 것 같아요."',
        myThought: '나도 알 거 다 아는데 너무 아기 취급하는 것 같아서 섭섭해.',
        parentReaction: {
          emotion: 'worried',
          parentSpeech: '"과잉보호라니... 세상이 얼마나 험한데. 안전은 몇 번을 조심해도 지나치지 않아."',
          parentThought: '세상 물정 모르는 소리만 하니 아직 불안하네.',
          relationshipDelta: -3,
          feedbackTip: '‘과잉보호’라는 단어는 부모님의 사랑 어린 걱정을 방어로 돌려놓기 쉬워요.',
        },
        nextStageId: 'lw_s3_rules',
      },
      {
        id: 'lw_s2_c3',
        text: '"그럼 낮에만 잠깐 놀고 해 지기 전에 오후 5시까지 집에 돌아오는 건 어때요?"',
        myThought: '밤까지는 무리더라도 낮 시간만이라도 친구들과 함께하고 싶어.',
        parentReaction: {
          emotion: 'thoughtful',
          parentSpeech: '"오후 5시 귀가라... 밤늦게 다니는 것보다는 훨씬 낫긴 한데, 친구들은 더 늦게까지 논다고 하지 않겠니?"',
          parentThought: '스스로 먼저 시간을 앞당겨 타협안을 내놓다니 괜찮은 자세네.',
          relationshipDelta: 7,
          feedbackTip: '상대방의 입장을 고려한 중간 타협안 제시는 훌륭한 협상 기술이에요.',
        },
        nextStageId: 'lw_s3_compromise',
      },
    ],
  },

  lw_s2_silent: {
    id: 'lw_s2_silent',
    stageNumber: 2,
    scenarioId: 'lotteworld',
    stageTitle: '2단계: 무거운 침묵의 방문 앞',
    situationNarration:
      '방 안에 혼자 누워 천장만 본 지 1시간. 밖에서 부모님의 속닥거리는 목소리가 들린다. "저러다 친구들 사이에서 따돌림당할까 봐 속상해서 저러나..." 엄마의 걱정스러운 한마디가 방문 틈으로 새어 들어온다. 어떻게 움직여야 할까?',
    visualScene: {
      location: '내 방 침대 위',
      atmosphere: 'gloomy',
      iconName: 'DoorClosed',
    },
    choices: [
      {
        id: 'lw_s2_s1',
        text: '포스트잇에 "엄마 아빠, 화내서 미안해요. 하지만 친구들과 약속이 너무 소중해서 그래요. 이야기 좀 해요"라고 적어 문 밑으로 밀어 넣는다.',
        myThought: '직접 얼굴 보고 말하기 쑥스럽지만 쪽지로 진심을 먼저 전하자.',
        parentReaction: {
          emotion: 'relieved',
          parentSpeech: '"(노크하며) 들어갈게. 우리 아이가 마음을 표현해줘서 고맙네. 우리 이야기 더 해보자."',
          parentThought: '속상했을 텐데 이렇게 마음을 열어줘서 다행이다. 아이 얘길 잘 들어봐야겠어.',
          relationshipDelta: 10,
          feedbackTip: '직접 말하기 힘들 때 글이나 쪽지는 감정을 부드럽게 전달하는 최고의 수단이에요.',
        },
        nextStageId: 'lw_s3_plan',
      },
      {
        id: 'lw_s2_s2',
        text: '문 잠그고 귀에 이어폰을 꽂고 음악을 최대 볼륨으로 틀어버린다.',
        myThought: '신경 쓰기 싫어. 다 내 맘도 모르면서.',
        parentReaction: {
          emotion: 'angry',
          parentSpeech: '"문까지 잠갔어? 대화를 거부하겠다는 거니? 이러면 진짜 롯데월드는 영영 꿈도 못 꿔!"',
          parentThought: '아예 귀를 닫아버리니 답답하다. 저 상태로는 아무것도 해결 안 돼.',
          relationshipDelta: -12,
          feedbackTip: '도피와 단절은 부모님의 불안과 분노를 가장 크게 증폭시킵니다.',
        },
        nextStageId: 'lw_s3_rebel',
      },
      {
        id: 'lw_s2_s3',
        text: '목마른 척 거실로 나와서 부모님 옆에 슬그머니 앉아 TV를 본다.',
        myThought: '대화의 타이밍을 노려보자. 분위기가 좀 풀렸을 때 슬쩍 말을 꺼내보는 거야.',
        parentReaction: {
          emotion: 'thoughtful',
          parentSpeech: '"과일 좀 깎아줄까? 아까는 엄마 아빠도 너무 단호하게만 말한 것 같네."',
          parentThought: '슬그머니 나온 걸 보니 대화하고 싶구나. 먼저 손을 내밀어 줘야겠어.',
          relationshipDelta: 5,
          feedbackTip: '긴장을 풀고 대화의 장으로 자연스럽게 돌아오는 것도 좋은 용기예요.',
        },
        nextStageId: 'lw_s3_compromise',
      },
    ],
  },

  // === STAGE 3: 본격적인 조건 조율 ===
  lw_s3_plan: {
    id: 'lw_s3_plan',
    stageNumber: 3,
    scenarioId: 'lotteworld',
    stageTitle: '3단계: 구체적인 안전 규칙 세우기',
    situationNarration:
      '부모님이 내 제안에 귀를 기울이기 시작하셨다! 아빠가 수첩을 꺼내며 물으신다. "만약 가게 된다면 어떤 규칙을 지킬 거니? 배터리가 나가거나 길을 잃으면 어떡할 거야?" 믿음을 줄 수 있는 대답은?',
    visualScene: {
      location: '거실 테이블 위 메모장 앞',
      atmosphere: 'warm',
      iconName: 'FileCheck',
    },
    choices: [
      {
        id: 'lw_s3_p1',
        text: '"보조배터리 2개 챙기고, 2시간마다 카톡으로 사진과 위치 전송할게요. 비상시엔 인포메이션 센터 위치도 미리 알아뒀어요!"',
        myThought: '진짜 철저하게 준비했다는 걸 보여드려야 안심하시지!',
        parentReaction: {
          emotion: 'proud',
          parentSpeech: '"와, 인포메이션 센터 위치까지? 생각보다 훨씬 꼼꼼하고 어른스럽게 준비했구나."',
          parentThought: '이 정도면 스스로 자기 몸을 챙길 줄 아는 나이가 되었네. 믿어봐도 되겠어.',
          relationshipDelta: 12,
          feedbackTip: '구체적이고 실천 가능한 안전 수칙은 부모님의 가장 큰 불안을 잠재웁니다.',
        },
        nextStageId: 'lw_s4_trust',
      },
      {
        id: 'lw_s3_p2',
        text: '"에이, 스마트폰도 있고 친구들도 있는데 설마 무슨 일 나겠어요? 그냥 알아서 잘할게요."',
        myThought: '너무 꼬치꼬치 따지니까 귀찮은데 대충 얼버무릴까?',
        parentReaction: {
          emotion: 'worried',
          parentSpeech: '"‘알아서 잘한다’는 말만큼 불안한 게 없어. 만약의 사태에 대비가 전혀 안 되어 있잖니."',
          parentThought: '아직 계획성 없이 막연하게만 생각하는구나. 다시 걱정이 커지네.',
          relationshipDelta: -6,
          feedbackTip: '‘알아서 할게요’라는 모호한 대답은 부모님의 신뢰를 깎아내려요.',
        },
        nextStageId: 'lw_s4_test',
      },
      {
        id: 'lw_s3_p3',
        text: '"엄마 아빠가 위치 추적 앱 깔아서 제 실시간 위치 보셔도 좋아요. 귀가도 6시까지 칼같이 맞출게요."',
        myThought: '프라이버시는 좀 양보하더라도 이번 롯데월드는 꼭 가고 싶어!',
        parentReaction: {
          emotion: 'relieved',
          parentSpeech: '"네가 먼저 위치 공유를 제안할 정도로 가고 싶었구나. 그 약속 꼭 지켜야 한다."',
          parentThought: '자신의 자유를 조금 내려놓으면서까지 책임지려 하니 기특하네.',
          relationshipDelta: 10,
          feedbackTip: '상대방의 안심을 위해 내가 양보할 수 있는 것을 먼저 제시하는 멋진 태도예요.',
        },
        nextStageId: 'lw_s4_trust',
      },
    ],
  },

  lw_s3_rules: {
    id: 'lw_s3_rules',
    stageNumber: 3,
    scenarioId: 'lotteworld',
    stageTitle: '3단계: 팽팽한 밀당과 조건 싸움',
    situationNarration:
      '부모님께서 여전히 완강하신 편이지만, 대화는 계속 이어지고 있다. "단둘이 가는 것도 아니고 친구 4명이면 서로 챙기기 힘들 거야. 혹시 부모님 중 한 분이 입구까지 데려다주고 끝날 때 데리러 오는 건 어떠니?" 나의 선택은?',
    visualScene: {
      location: '어색한 거실 분위기',
      atmosphere: 'neutral',
      iconName: 'ShieldAlert',
    },
    choices: [
      {
        id: 'lw_s3_r1',
        text: '"부모님이 따라오면 친구들 앞에서 너무 부끄러워요! 쪽팔려서 같이 못 놀아요!"',
        myThought: '친구들이 날 마마보이/마마걸로 볼까 봐 절대 부모님 동행은 싫어!',
        parentReaction: {
          emotion: 'disappointed',
          parentSpeech: '"부끄럽다고? 널 보호하려는 부모 마음이 친구들 눈치보다 못하단 말이니?"',
          parentThought: '친구들 시선만 중요하고 부모의 배려는 창피하게만 여기니 서운하구나.',
          relationshipDelta: -8,
          feedbackTip: '‘쪽팔리다’는 표현은 부모님의 호의에 큰 상처를 줄 수 있어요.',
        },
        nextStageId: 'lw_s4_test',
      },
      {
        id: 'lw_s3_r2',
        text: '"차로 데려다주시면 친구들이랑 안전하게 갈 수 있어서 너무 좋을 것 같아요! 안에서는 저희끼리 놀게 배려해 주실 수 있나요?"',
        myThought: '픽업은 감사히 받고, 놀이공원 내부 자유를 지켜내는 윈-윈 전략이야.',
        parentReaction: {
          emotion: 'relieved',
          parentSpeech: '"그래! 오고 가는 길만 확인되면 안에서는 친구들과 즐겁게 놀도록 방해 안 할게."',
          parentThought: '이렇게 현명하게 조율할 줄 알다니, 많이 성숙해졌구나.',
          relationshipDelta: 10,
          feedbackTip: '부모님의 도움을 적절히 수용하면서 독립적인 영역을 확보하는 슬기로운 대화법!',
        },
        nextStageId: 'lw_s4_trust',
      },
      {
        id: 'lw_s3_r3',
        text: '"그럴 거면 그냥 안 갈래요. 관둬요!" 하고 한숨을 푹 쉰다.',
        myThought: '내 맘대로 100% 안 되면 다 포기해 버리고 싶어.',
        parentReaction: {
          emotion: 'firm',
          parentSpeech: '"모든 일이 네 뜻대로만 될 순 없어. 극단적으로 굴면 진짜 다음 기회도 없단다."',
          parentThought: '조금만 뜻이 안 맞으면 전부 뒤엎으려 하니 아직 대화 훈련이 필요하네.',
          relationshipDelta: -10,
          feedbackTip: '전부 아니면 전무(All or Nothing) 식의 태도는 협상을 파탄 냅니다.',
        },
        nextStageId: 'lw_s4_breakdown',
      },
    ],
  },

  lw_s3_rebel: {
    id: 'lw_s3_rebel',
    stageNumber: 3,
    scenarioId: 'lotteworld',
    stageTitle: '3단계: 위태로운 위험 신호',
    situationNarration:
      '갈등이 극에 달해 스마트폰 사용 시간제한까지 걸릴 위기다. 단톡방에선 이미 표 예매 링크가 돌고 있고, 나만 응답이 늦어지자 친구들이 "야, 너 혹시 부모님한테 퇴짜 맞았냐? ㅋㅋㅋ" 하고 놀린다. 속이 부글부글 끓는다.',
    visualScene: {
      location: '방 안 책상 앞',
      atmosphere: 'tense',
      iconName: 'Smartphone',
    },
    choices: [
      {
        id: 'lw_s3_b1',
        text: '몰래 다른 친구 폰으로 내 표를 대신 사달라고 하고 당일날 독서실 간다고 거짓말하고 빠져나가기로 결심한다.',
        myThought: '이 방법밖에 없어. 안 들키면 장땡이지!',
        parentReaction: {
          emotion: 'angry',
          parentSpeech: '(아직 부모님은 눈치채지 못했지만, 낯빛이 어두워진 나를 보며 불안한 기색을 내비친다)',
          parentThought: '애가 거짓말을 하려는 눈치인데... 무슨 꿍꿍이가 있는 건 아닐까?',
          relationshipDelta: -15,
          feedbackTip: '거짓말은 한 번 들통나는 순간 모든 신뢰를 영원히 잃게 만들어요.',
        },
        nextStageId: 'lw_s4_breakdown',
      },
      {
        id: 'lw_s3_b2',
        text: '깊게 심호흡하고 물 한 잔을 마신 뒤, "제가 친구들한테 놀림받을까 봐 너무 불안해서 심하게 굴었어요. 제 진심은요..." 하고 솔직한 두려움을 털어놓는다.',
        myThought: '친구들 사이에서의 불안감을 부모님께 털어놓는 게 부끄럽지만 마지막 희망이야.',
        parentReaction: {
          emotion: 'thoughtful',
          parentSpeech: '"친구들 사이에서 소외될까 봐 그렇게 조급했구나... 엄마 아빠가 그 마음을 미처 헤아리지 못했네."',
          parentThought: '단순히 놀고 싶어서 떼쓰는 게 아니라 또래 관계 때문에 불안했던 거구나. 짠하네.',
          relationshipDelta: 15,
          feedbackTip: '내 행동 뒤에 숨은 진짜 감정(불안, 소외감)을 솔직하게 표현하면 기적이 일어납니다.',
        },
        nextStageId: 'lw_s4_trust',
      },
      {
        id: 'lw_s3_b3',
        text: '친구 단톡방에 "나 부모님이 반대하셔서 이번엔 못 가"라고 홧김에 던지고 핸드폰을 던져버린다.',
        myThought: '다 망했어. 내 인생은 왜 이럴까.',
        parentReaction: {
          emotion: 'disappointed',
          parentSpeech: '"그렇게 포기하고 세상을 비관적으로만 보면 앞으로 어떤 어려움도 못 이겨낸단다."',
          parentThought: '아이가 너무 쉽게 좌절하는 것 같아 마음이 아프면서도 걱정스럽다.',
          relationshipDelta: -5,
          feedbackTip: '좌절을 감정적으로 분출하기보다 문제를 재정의하는 회복 탄력성이 필요해요.',
        },
        nextStageId: 'lw_s4_breakdown',
      },
    ],
  },

  lw_s3_compromise: {
    id: 'lw_s3_compromise',
    stageNumber: 3,
    scenarioId: 'lotteworld',
    stageTitle: '3단계: 서로 한 걸음씩 다가가기',
    situationNarration:
      '분위기가 부드러워졌다. 엄마가 따뜻한 우유 한 잔을 건네며 말씀하신다. "네가 가고 싶어 하는 마음은 정말 잘 알겠어. 대신 부모님도 불안하지 않게 몇 가지 안전 약속을 확실히 해줬으면 해." 이제 합의점을 찾을 기회다!',
    visualScene: {
      location: '따뜻한 거실 식탁',
      atmosphere: 'warm',
      iconName: 'Coffee',
    },
    choices: [
      {
        id: 'lw_s3_c1',
        text: '"이번 주말에 친구들과 안전 수칙(무리한 놀이기구 안 타기, 단체 행동하기)을 지키는 조건으로 허락해 주시면, 다음 주 시험공부 계획도 확실히 실천할게요!"',
        myThought: '내 의무(학업/생활 태도)를 다하겠다는 보증을 함께 거는 거야.',
        parentReaction: {
          emotion: 'proud',
          parentSpeech: '"자신의 권리를 누리기 위해 책임까지 약속하다니, 정말 다 컸구나! 그래, 한번 믿어보마."',
          parentThought: '자신의 즐거움과 책임을 결합할 줄 아는 성숙한 태도에 감동받았어.',
          relationshipDelta: 14,
          feedbackTip: '놀 권리와 책임 의무를 결합한 제안은 부모님에게 최고의 설득력을 가집니다.',
        },
        nextStageId: 'lw_s4_trust',
      },
      {
        id: 'lw_s3_c2',
        text: '"약속은 다 지킬게요! 대신 용돈 만 원만 더 얹어주시면 안 돼요?"',
        myThought: '분위기 좋을 때 용돈까지 슬쩍 챙겨볼까?',
        parentReaction: {
          emotion: 'thoughtful',
          parentSpeech: '"허락해 주는 것도 고민 중인데 벌써 용돈 인상이라니, 숟가락 얹기 대장이네~"',
          parentThought: '하여간 틈만 나면 잔머리를 굴린다니까. 그래도 밉진 않네.',
          relationshipDelta: 2,
          feedbackTip: '신뢰가 완전히 형성되기 전에 과도한 추가 요구는 신중해야 해요.',
        },
        nextStageId: 'lw_s4_test',
      },
      {
        id: 'lw_s3_c3',
        text: '"약속 너무 많으면 친구들이랑 놀 때 눈치 보여요. 그냥 딱 2개만 정해주세요."',
        myThought: '너무 빡빡한 룰은 재미없단 말이야.',
        parentReaction: {
          emotion: 'firm',
          parentSpeech: '"안전엔 에누리가 없어. 꼭 필요한 것만 정할 테니 타협하려 들지 마렴."',
          parentThought: '아직 안전의 중요성을 가볍게 여기는 부분이 남아있네.',
          relationshipDelta: -2,
          feedbackTip: '안전 수칙은 흥정의 대상이 아니라는 것을 보여줘야 신뢰를 얻어요.',
        },
        nextStageId: 'lw_s4_test',
      },
    ],
  },

  // === STAGE 4: 신뢰의 시험대 ===
  lw_s4_trust: {
    id: 'lw_s4_trust',
    stageNumber: 4,
    scenarioId: 'lotteworld',
    stageTitle: '4단계: 마지막 점검과 부모님의 믿음',
    situationNarration:
      '드디어 부모님의 허락 도장이 거의 찍히기 직전이다! 그런데 아빠가 마지막으로 질문을 던지신다. "만약 롯데월드 안에서 친구 중 한 명이 갑자기 위험한 장난을 치거나, 예정에 없던 곳으로 가자고 꼬드기면 넌 어떻게 할 거니?"',
    visualScene: {
      location: '따뜻한 거실',
      atmosphere: 'warm',
      iconName: 'HelpCircle',
    },
    choices: [
      {
        id: 'lw_s4_t1',
        text: '"친구 기분 안 상하게 잘 타이르고, 위험한 행동은 절대 동조하지 않고 약속된 장소로 이끌게요."',
        myThought: '친구 관계도 지키고 안전도 지키는 중심을 잡을 수 있어.',
        parentReaction: {
          emotion: 'proud',
          parentSpeech: '"정말 대견하구나! 네 판단력을 믿고 기분 좋게 다녀오라고 응원해 줄게."',
          parentThought: '이제 친구들 무리 속에서도 휩쓸리지 않고 자기 주관을 지킬 줄 아는 아이가 되었구나.',
          relationshipDelta: 15,
          feedbackTip: '또래 압력에 휘둘리지 않겠다는 주관을 보여주는 것이 최고의 성숙함이에요.',
        },
        nextStageId: 'lw_s5_final_prep',
      },
      {
        id: 'lw_s4_t2',
        text: '"친구들이 다 같이 하자는데 저 혼자 빠지면 왕따당해요. 어쩔 수 없이 따라야죠."',
        myThought: '솔직히 친구들 분위기를 거스르는 건 불가능에 가까워.',
        parentReaction: {
          emotion: 'worried',
          parentSpeech: '"친구 눈치 보느라 위험한 짓까지 따라한다면... 역시 이번엔 보내기 힘들겠구나."',
          parentThought: '군중심리에 휩쓸릴 위험이 너무 크네. 아직은 단체 외출이 위험해.',
          relationshipDelta: -10,
          feedbackTip: '또래 동조 압력에 무조건 굴복한다는 말은 부모님을 가장 불안하게 만들어요.',
        },
        nextStageId: 'lw_s5_condition',
      },
      {
        id: 'lw_s4_t3',
        text: '"그 즉시 바로 엄마 아빠한테 전화해서 상황을 알리고 도움을 청할게요."',
        myThought: '내가 감당 안 되는 일은 부모님 찬스를 쓰는 게 제일 안전해.',
        parentReaction: {
          emotion: 'relieved',
          parentSpeech: '"그래! 언제든 부모가 네 뒤에 있다는 걸 기억하고 SOS를 치렴. 아주 훌륭한 생각이야."',
          parentThought: '위기 때 부모를 믿고 연락하겠다는 아이의 말에 비로소 마음이 놓인다.',
          relationshipDelta: 12,
          feedbackTip: '위기 상황에서 부모님과 소통하겠다는 의지는 큰 신뢰의 증표입니다.',
        },
        nextStageId: 'lw_s5_final_prep',
      },
    ],
  },

  lw_s4_test: {
    id: 'lw_s4_test',
    stageNumber: 4,
    scenarioId: 'lotteworld',
    stageTitle: '4단계: 미묘한 줄다리기와 조건부 기회',
    situationNarration:
      '부모님이 고개를 갸우뚱하시며 고민에 빠지셨다. "보내주고는 싶은데... 네가 약속을 진짜 지킬 수 있을지 확신이 안 서네." 마침 거실 시계가 밤 10시를 가리키고, 내일 아침 친구들에게 최종 결정을 알려줘야 한다.',
    visualScene: {
      location: '시계 소리만 들리는 거실',
      atmosphere: 'neutral',
      iconName: 'Clock',
    },
    choices: [
      {
        id: 'lw_s4_te1',
        text: '"제가 이번 주 동안 약속한 집안일과 숙제를 한 번도 안 미루고 완벽하게 해내면 증명해 보일게요! 그때 최종 결정해 주세요!"',
        myThought: '행동으로 보여줘서 부모님 입을 떡 벌어지게 만들겠어.',
        parentReaction: {
          emotion: 'thoughtful',
          parentSpeech: '"오, 행동으로 신뢰를 증명하겠다고? 좋아, 주말 전까지 네 태도를 지켜보마."',
          parentThought: '단순한 떼쓰기를 넘어서 자기 실천력을 증명하려 하네. 기회를 줘야겠어.',
          relationshipDelta: 10,
          feedbackTip: '말보다 행동으로 신뢰를 선투자하는 전략은 부모님의 마음을 움직입니다.',
        },
        nextStageId: 'lw_s5_condition',
      },
      {
        id: 'lw_s4_te2',
        text: '"아 왜 이렇게 사람을 못 믿어요? 의심받는 기분이라 진짜 기분 더러워요!"',
        myThought: '나를 못 믿는다는 사실 자체가 너무 모욕적이야.',
        parentReaction: {
          emotion: 'angry',
          parentSpeech: '"기분 더럽다고? 신뢰는 네가 쌓아야 주는 거지, 당연히 요구하는 권리가 아니야!"',
          parentThought: '조금만 불안해해도 저렇게 날카롭게 공격하니 도저히 믿음이 안 생겨.',
          relationshipDelta: -14,
          feedbackTip: '신뢰는 요구해서 받는 게 아니라 행동으로 입증하는 것임을 기억해야 해요.',
        },
        nextStageId: 'lw_s5_disaster',
      },
      {
        id: 'lw_s4_te3',
        text: '"부모님이 가장 불안해하시는 딱 한 가지만 말씀해 주세요. 그것만 무조건 해결할게요."',
        myThought: '핵심 쟁점 하나만 집중 공략해서 뚫어보자.',
        parentReaction: {
          emotion: 'relieved',
          parentSpeech: '"그래, 오고 갈 때 지하철 혼잡 시간 피해서 안전하게 이동하는 것. 그것만 보장해 주렴."',
          parentThought: '핵심을 물어봐 주니 대화가 훨씬 수월해지네.',
          relationshipDelta: 8,
          feedbackTip: '상대방의 가장 큰 핵심 우려를 정조준해서 해결하는 지혜로운 질문이에요.',
        },
        nextStageId: 'lw_s5_condition',
      },
    ],
  },

  lw_s4_breakdown: {
    id: 'lw_s4_breakdown',
    stageNumber: 4,
    scenarioId: 'lotteworld',
    stageTitle: '4단계: 위기의 골목길, 파국 직전',
    situationNarration:
      '이미 감정의 골이 깊어졌다. 거실에선 부모님이 "아이 사춘기가 온 것 같은데 대화가 너무 안 통한다"며 심각하게 의논 중이시다. 단톡방에선 친구들이 "야, 너 안 가면 우리 팀 게임 못 하는데 어떡해"라며 재촉한다. 벼랑 끝에서 나의 선택은?',
    visualScene: {
      location: '어두워진 방 안',
      atmosphere: 'gloomy',
      iconName: 'AlertTriangle',
    },
    choices: [
      {
        id: 'lw_s4_b1',
        text: '눈물을 훔치며 거실로 나와 무릎을 맞대고 "엄마 아빠, 제가 너무 철없이 굴었어요. 이번에 안 가도 좋으니 저 미워하지 마세요"라고 안긴다.',
        myThought: '롯데월드보다 가족과의 관계가 깨지는 게 더 무섭고 슬퍼.',
        parentReaction: {
          emotion: 'relieved',
          parentSpeech: '"아가야, 널 미워할 리가 있겠니... 부모가 널 너무 사랑하고 걱정해서 그런 거란다. 이리 와."',
          parentThought: '아이가 상처받은 마음을 용기 내 표현해 주었구나. 정말 고맙고 미안하다.',
          relationshipDelta: 16,
          feedbackTip: '갈등의 끝에서 취약함을 드러내고 화해를 청하는 것은 가장 용감한 행동이에요.',
        },
        nextStageId: 'lw_s5_emotional_heal',
      },
      {
        id: 'lw_s4_b2',
        text: '"알았어요, 안 가면 되잖아! 앞으로 내 일에 아는 척도 하지 마세요!" 하고 벽을 쾅 친다.',
        myThought: '모든 게 부모님 탓이야. 내 친구 관계도 다 망쳤어.',
        parentReaction: {
          emotion: 'angry',
          parentSpeech: '"벽을 쳐? 어디서 그런 못된 버릇을 배웠어! 일주일간 외출금지에 용돈 박탈이야!"',
          parentThought: '분노를 폭력적인 방식으로 표출하다니, 절대로 용납할 수 없어.',
          relationshipDelta: -20,
          feedbackTip: '물건을 치거나 벽을 치는 신체적 분노 표출은 관계를 최악의 파국으로 이끕니다.',
        },
        nextStageId: 'lw_s5_disaster',
      },
      {
        id: 'lw_s4_b3',
        text: '친구들에게 "부모님 사정이 생겨서 이번엔 어렵겠다"고 솔직히 보내고, 부모님께는 "다음번에 갈 땐 미리 준비해서 허락받을게요"라고 덤덤히 말한다.',
        myThought: '이번엔 아쉽지만 물러서고, 다음 기회를 기약하자.',
        parentReaction: {
          emotion: 'thoughtful',
          parentSpeech: '"속상할 텐데 스스로 감정을 추스르고 정리하다니... 다음번엔 꼭 좋은 기회를 만들어줄게."',
          parentThought: '아쉬움을 삭이고 성숙하게 대처하는 모습이 정말 대견하고 짠하다.',
          relationshipDelta: 8,
          feedbackTip: '상황을 겸허히 받아들이고 다음을 기약하는 것도 훌륭한 감정 조절 능력이에요.',
        },
        nextStageId: 'lw_s5_mature_retreat',
      },
    ],
  },

  // === STAGE 5: 최종 라운드 (결정의 순간) ===
  lw_s5_final_prep: {
    id: 'lw_s5_final_prep',
    stageNumber: 5,
    scenarioId: 'lotteworld',
    stageTitle: '5단계: 완벽한 출발과 신뢰의 완결',
    situationNarration:
      '출발 당일 아침! 부모님께서 문 앞까지 나와 배웅해 주신다. 엄마는 비상금과 간식을 챙겨주시고, 아빠는 따뜻한 미소로 어깨를 토닥여주신다. "우리 아들/딸, 조심히 재밌게 놀고 와!" 나의 마지막 작별 인사는?',
    visualScene: {
      location: '현관문 앞 아침 햇살',
      atmosphere: 'warm',
      iconName: 'Sparkles',
    },
    choices: [
      {
        id: 'lw_s5_f1',
        text: '"엄마 아빠 믿어주셔서 정말 감사해요! 약속 시간 칼같이 지키고 틈틈이 사진 보낼게요! 사랑해요!"',
        myThought: '부모님의 배려와 신뢰에 진심으로 감사드려. 꼭 멋지게 보답할 거야!',
        parentReaction: {
          emotion: 'proud',
          parentSpeech: '"정말 다 컸네 우리 강아지! 친구들이랑 최고의 하루 보내고 와!"',
          parentThought: '아이의 신뢰와 사랑을 얻은 최고의 대화였다. 보내길 정말 잘했어.',
          relationshipDelta: 15,
          feedbackTip: '마지막 감사의 표현은 부모님에게 최고의 보람과 평생의 믿음을 선물합니다.',
        },
        nextStageId: 'lw_end_best',
      },
      {
        id: 'lw_s5_f2',
        text: '"네~ 알았어요~ 다녀올게요~ (뒤도 안 돌아보고 뛰어나간다)"',
        myThought: '드디어 자유다! 신나게 놀아야지!',
        parentReaction: {
          emotion: 'relieved',
          parentSpeech: '"조심히 가! 차 조심하고!"',
          parentThought: '신나서 나가는 모습을 보니 좋으면서도 살짝 서운하네 ㅎㅎ',
          relationshipDelta: 5,
          feedbackTip: '신나는 마음 중에서도 부모님의 배웅에 눈을 맞춰주면 더 멋져요.',
        },
        nextStageId: 'lw_end_good',
      },
      {
        id: 'lw_s5_f3',
        text: '"부모님 배웅에 꾸벅 인사하며 \'저녁 7시 전까지 꼭 안전하게 컴백하겠습니다!\' 하고 손하트를 날린다."',
        myThought: '약속 시간을 다시 한번 상기시켜 드려 부모님을 안심시켜 드리자.',
        parentReaction: {
          emotion: 'proud',
          parentSpeech: '"하하, 손하트까지! 그래, 친구들이랑 즐거운 추억 듬뿍 쌓고 조심히 오렴!"',
          parentThought: '스스로 귀가 약속을 다시 확인해 주니 아무 걱정 없이 믿고 보낼 수 있겠다.',
          relationshipDelta: 16,
          feedbackTip: '출발 전 자발적인 귀가 시간 재확인은 신뢰를 확고하게 다지는 최고의 습관입니다.',
        },
        nextStageId: 'lw_end_best',
      },
    ],
  },

  lw_s5_condition: {
    id: 'lw_s5_condition',
    stageNumber: 5,
    scenarioId: 'lotteworld',
    stageTitle: '5단계: 조건부 승인과 약속의 무게',
    situationNarration:
      '부모님께서 깊은 고민 끝에 말씀하셨다. "이번 한 번만 특별히 허락하마. 대신 오후 5시까지 반드시 집 앞에 도착해야 하고, 위치 공유는 끄지 마라. 지킬 수 있겠니?"',
    visualScene: {
      location: '엄숙한 거실',
      atmosphere: 'neutral',
      iconName: 'Scale',
    },
    choices: [
      {
        id: 'lw_s5_co1',
        text: '"네! 조건 하나도 빠짐없이 완벽하게 지킬게요. 믿고 기회 주셔서 감사합니다!"',
        myThought: '비록 제한된 시간이지만 친구들과 추억을 만들 수 있어서 다행이야.',
        parentReaction: {
          emotion: 'relieved',
          parentSpeech: '"그래, 네 약속을 믿어볼게. 안전이 최우선이란다."',
          parentThought: '조금 불안하지만 이번 기회를 통해 약속의 중요성을 배우길 바란다.',
          relationshipDelta: 8,
          feedbackTip: '조건부 허락이라도 성실히 이행하면 다음엔 더 큰 자유가 주어집니다.',
        },
        nextStageId: 'lw_end_good',
      },
      {
        id: 'lw_s5_co2',
        text: '"5시는 너무 촉박한데... 6시까지 늘려주면 안 돼요? 1시간만요!"',
        myThought: '마지막까지 조금만 더 딜을 쳐볼까?',
        parentReaction: {
          emotion: 'firm',
          parentSpeech: '"엄마 아빠가 어렵게 양보한 조건을 바로 흥정하려 드니? 이럴 거면 허락 취소야."',
          parentThought: '한 번 양보하면 끝없이 밀고 들어오려 하니 단호해야겠어.',
          relationshipDelta: -8,
          feedbackTip: '어렵게 얻은 타협안에서 무리한 추가 흥정은 상대의 양보를 무색하게 만듭니다.',
        },
        nextStageId: 'lw_end_normal',
      },
      {
        id: 'lw_s5_co3',
        text: '"약속 시간 15분 전마다 알람 맞춰둘게요. 5시 정각에 문 열고 들어오는 모습 보여드릴게요!"',
        myThought: '철저한 시간 관리 의지를 보여드려 부모님의 불안을 완전히 없애자.',
        parentReaction: {
          emotion: 'proud',
          parentSpeech: '"알람까지 맞춰두겠다니 정말 준비성이 철저하구나. 멋진 하루 보내고 오렴!"',
          parentThought: '구체적인 계획과 실행 방안을 스스로 내놓으니 믿음직스럽다.',
          relationshipDelta: 12,
          feedbackTip: '조건을 수용할 때 구체적인 실행 팁(알람 맞추기)을 더하면 신뢰가 배가됩니다.',
        },
        nextStageId: 'lw_end_good',
      },
    ],
  },

  lw_s5_emotional_heal: {
    id: 'lw_s5_emotional_heal',
    stageNumber: 5,
    scenarioId: 'lotteworld',
    stageTitle: '5단계: 롯데월드 대신 얻은 가족의 온기',
    situationNarration:
      '롯데월드는 못 갔지만, 식탁에 마주 앉아 부모님과 좋아하는 치킨을 시켜 먹으며 그동안 하지 못했던 마음속 고민들을 털어놓았다. "나 요즘 친구들 사이에서 뒤처질까 봐 불안했어." 부모님은 내 손을 꼭 잡아주셨다.',
    visualScene: {
      location: '따뜻한 치킨 식탁',
      atmosphere: 'warm',
      iconName: 'Heart',
    },
    choices: [
      {
        id: 'lw_s5_eh1',
        text: '"다음 방학 때 가족 다 같이 가거나, 친구들이랑 낮에 미리 계획 짜서 다시 도전해 볼게요."',
        myThought: '놀이공원보다 더 든든한 내 편이 가족이라는 걸 느꼈어.',
        parentReaction: {
          emotion: 'proud',
          parentSpeech: '"그럼! 다음엔 엄마 아빠가 미리 표도 예매해 주고 멋지게 준비해 줄게."',
          parentThought: '갈등을 통해 오히려 아이와 속 깊은 이야기를 나눌 수 있어서 너무 소중한 시간이었어.',
          relationshipDelta: 14,
          feedbackTip: '놀이공원은 못 갔지만, 가족 간의 깊은 신뢰와 정서적 안정이라는 더 큰 선물을 얻었어요.',
        },
        nextStageId: 'lw_end_normal',
      },
      {
        id: 'lw_s5_eh2',
        text: '"엄마 아빠, 오늘 제 투정도 다 받아주시고 맛있는 것도 사주셔서 감사해요. 솔직히 친구들보다 가족이 더 든든해요."',
        myThought: '실망감을 넘어 가족의 사랑을 확인할 수 있었던 소중한 시간이야.',
        parentReaction: {
          emotion: 'proud',
          parentSpeech: '"우리 아이 입에서 이런 따뜻한 말이 나오다니 눈물이 핑 도네. 다음엔 더 좋은 곳으로 가자!"',
          parentThought: '아이가 부모의 사랑을 온전히 느껴주니 모든 피로가 싹 풀린다.',
          relationshipDelta: 16,
          feedbackTip: '갈등 후 나누는 진심 어린 감사는 가족 관계를 그 어떤 때보다 단단하게 만듭니다.',
        },
        nextStageId: 'lw_end_normal',
      },
      {
        id: 'lw_s5_eh3',
        text: '"친구들에게는 솔직히 가족 모임이 있었다고 얘기하고, 대신 다음 주말에 동네에서 맛있는 떡볶이 먹기로 했어요."',
        myThought: '친구 관계도 솔직하고 유연하게 조율할 줄 알아야 해.',
        parentReaction: {
          emotion: 'relieved',
          parentSpeech: '"친구들과도 씩씩하게 잘 조율했구나! 정말 속이 깊어졌어."',
          parentThought: '친구 관계도 현명하게 대처하는 모습이 참 대견하다.',
          relationshipDelta: 10,
          feedbackTip: '거짓말 대신 솔직하게 친구들에게 상황을 전하고 대안을 찾는 성숙한 대처입니다.',
        },
        nextStageId: 'lw_end_normal',
      },
    ],
  },

  lw_s5_mature_retreat: {
    id: 'lw_s5_mature_retreat',
    stageNumber: 5,
    scenarioId: 'lotteworld',
    stageTitle: '5단계: 한 걸음 물러서서 배운 지혜',
    situationNarration:
      '이번 주말은 집에서 좋아하는 영화를 보고 휴식을 취했다. 부모님은 내 차분한 태도에 고마워하시며 다음 달 가족 외출 및 친구들과의 안전한 만남을 먼저 제안해 주셨다.',
    visualScene: {
      location: '아늑한 거실 소파',
      atmosphere: 'neutral',
      iconName: 'Smile',
    },
    choices: [
      {
        id: 'lw_s5_mr1',
        text: '"부모님 마음도 이해하고, 저도 감정 조절하는 법을 배운 것 같아요."',
        myThought: '원하는 걸 다 얻진 못했지만 나 자신이 한 뼘 자란 느낌이야.',
        parentReaction: {
          emotion: 'relieved',
          parentSpeech: '"정말 어른스러운 우리 아이, 언제 이렇게 훌쩍 자랐니."',
          parentThought: '아이가 성숙하게 참아준 만큼 다음엔 꼭 보상해 줘야지.',
          relationshipDelta: 10,
          feedbackTip: '지혜로운 양보는 패배가 아니라 다음 성공을 위한 신뢰 적립입니다.',
        },
        nextStageId: 'lw_end_normal',
      },
      {
        id: 'lw_s5_mr2',
        text: '"다음번 외출 땐 미리 2주 전에 계획표를 짜서 부모님께 브리핑해 드릴게요!"',
        myThought: '이번 경험을 교훈 삼아 다음엔 완벽한 준비로 승부하자.',
        parentReaction: {
          emotion: 'proud',
          parentSpeech: '"미리 계획표까지? 오, 벌써부터 다음 외출이 기대되는걸!"',
          parentThought: '갈등을 성장의 발판으로 삼는 아이의 미래가 기대된다.',
          relationshipDelta: 14,
          feedbackTip: '실패한 요구를 다음 성공을 위한 구체적 행동 계획으로 전환하는 프로의 자세!',
        },
        nextStageId: 'lw_end_normal',
      },
      {
        id: 'lw_s5_mr3',
        text: '"아쉽긴 하지만 덕분에 집에서 푹 쉬면서 체력도 보충하고 밀린 공부도 끝냈어요."',
        myThought: '주어진 상황에서 긍정적인 면을 찾아내는 게 진정한 회복탄력성이야.',
        parentReaction: {
          emotion: 'relieved',
          parentSpeech: '"어쩜 이렇게 긍정적이고 의젓할까. 우리 딸/아들 최고야!"',
          parentThought: '투정 대신 자기 관리에 집중하는 모습에 깊은 신뢰가 간다.',
          relationshipDelta: 10,
          feedbackTip: '아쉬운 상황 속에서도 긍정적인 가치를 찾는 태도는 삶의 큰 자산이 됩니다.',
        },
        nextStageId: 'lw_end_normal',
      },
    ],
  },

  lw_s5_disaster: {
    id: 'lw_s5_disaster',
    stageNumber: 5,
    scenarioId: 'lotteworld',
    stageTitle: '5단계: 얼어붙은 주말과 굳게 닫힌 문',
    situationNarration:
      '토요일 아침. 친구들은 롯데월드 분수대 앞에서 찍은 신나는 사진들을 단톡방에 올린다. 하지만 나는 방 안에 갇혀 스마트폰도 뺏기고 부모님과 말 한마디 섞지 않는 냉전 상태다. 문밖에서는 무거운 한숨 소리만 들려온다.',
    visualScene: {
      location: '어두운 방 구석',
      atmosphere: 'gloomy',
      iconName: 'Lock',
    },
    choices: [
      {
        id: 'lw_s5_di1',
        text: '이불을 뒤집어쓰고 "다 부모님 때문이야"라며 분노와 원망을 삼킨다.',
        myThought: '어차피 내 맘 아는 사람은 세상에 아무도 없어.',
        parentReaction: {
          emotion: 'sad',
          parentSpeech: '"저 녀석 밥도 안 먹고... 서로 이렇게 상처만 남아서 어쩌누..."',
          parentThought: '아이가 부모를 원망하며 점점 멀어지는 것 같아 가슴이 미어진다.',
          relationshipDelta: -15,
          feedbackTip: '감정의 폭발 끝에는 고립과 상처만 남아요. 다음번엔 다른 방식으로 말해볼 수 있을까요?',
        },
        nextStageId: 'lw_end_worst',
      },
      {
        id: 'lw_s5_di2',
        text: '방문을 열고 나와 눈물을 닦으며 "엄마 아빠, 아까 소리 지르고 벽 친 건 진짜 잘못했어요. 저랑 조금만 이야기해 주시면 안 돼요?" 하고 손을 내민다.',
        myThought: '이렇게 영영 가족을 잃을 순 없어. 내 잘못을 인정하고 화해를 청하자.',
        parentReaction: {
          emotion: 'relieved',
          parentSpeech: '"(엄마가 꼭 안아주며) 먼저 나와줘서 고맙다... 부모도 감정이 격해져서 미안했어."',
          parentThought: '아이가 용기 내어 먼저 다가와 주니 고맙고 짠하다. 다시 보듬어줘야지.',
          relationshipDelta: 10,
          feedbackTip: '최악의 파국 직전이라도 먼저 사과하고 대화를 청하면 기적처럼 관계가 봉합됩니다.',
        },
        nextStageId: 'lw_end_normal',
      },
      {
        id: 'lw_s5_di3',
        text: '마음을 가라앉히고 메모지에 \'아까 흥분해서 죄송합니다. 저녁때 차분히 사과드리고 싶어요\'라고 적어 문틈으로 밀어 넣는다.',
        myThought: '얼굴 보고 말하기 두렵다면 진심 어린 쪽지로 먼저 얼어붙은 분위기를 녹이자.',
        parentReaction: {
          emotion: 'thoughtful',
          parentSpeech: '"(쪽지를 보시고) 아이도 스스로 반성하고 있구나. 저녁 식탁에서 따뜻하게 맞아주자."',
          parentThought: '서투르지만 사과의 뜻을 전하려는 마음에 분노가 사르르 녹아내린다.',
          relationshipDelta: 8,
          feedbackTip: '직접 대면이 어려울 때 정중한 쪽지는 감정의 브레이크 역할을 해줍니다.',
        },
        nextStageId: 'lw_end_normal',
      },
    ],
  },
};

export const lotteworldEndings: Record<string, EndingResult> = {
  lw_end_best: {
    id: 'lw_end_best',
    scenarioId: 'lotteworld',
    category: 'best',
    title: '👑 완벽한 신뢰의 탐험가 (BEST 엔딩)',
    subtitle: '놀이공원 자유와 부모님의 굳건한 신뢰를 모두 쟁취하다!',
    storySummary:
      '부모님의 걱정을 비난하지 않고, 구체적인 안전 계획과 책임 있는 태도로 마주한 당신! 부모님은 당신을 더 이상 어린아이가 아닌 스스로를 지킬 줄 아는 듬직한 청소년으로 인정하게 되었습니다. 친구들과의 롯데월드는 평생 잊지 못할 환상적인 추억이 되었고, 집으로 돌아왔을 때 부모님의 따뜻한 포옹이 기다리고 있었습니다.',
    visualMood: {
      badge: '🏆 최고의 해결책',
      gradient: 'from-amber-400 via-orange-500 to-rose-500',
      illustrationStyle: 'celebrate',
      iconName: 'Trophy',
    },
    relationshipScore: 95,
    myGrowthNote:
      '"화내고 떼쓰는 건 쉬웠지만, 차분하게 내 계획을 설명하고 약속을 지키는 게 진짜 어른스러움이라는 걸 알았어요. 내 자유는 내가 증명한 책임감에서 나온다는 걸 배웠어요!"',
    parentHeartNote:
      '"아이가 친구들에게 휩쓸리지 않고 스스로 안전을 약속하는 모습에서 깊은 감동을 받았습니다. 무조건 품 안에 가두기보다 믿고 날개를 달아주어야 할 때임을 깨달았어요."',
    practicalTips: [
      '부모님이 "안 돼"라고 하실 때는 나를 미워해서가 아니라 "안전과 사고에 대한 두려움" 때문임을 먼저 기억해요.',
      '‘친구들은 다 가는데’라는 비교 대신, ‘내가 세운 구체적인 안전 대책’을 서류나 쪽지로 보여드려 보세요.',
      '시간 약속과 연락 유지는 다음번 더 큰 자유를 얻기 위한 가장 확실한 신용카드입니다.',
    ],
    bgmType: 'celebration',
  },

  lw_end_good: {
    id: 'lw_end_good',
    scenarioId: 'lotteworld',
    category: 'good',
    title: '🤝 슬기로운 타협의 달인 (GOOD 엔딩)',
    subtitle: '조금의 양보로 얻어낸 소중한 친구들과의 추억!',
    storySummary:
      '귀가 시간을 앞당기고 위치 공유를 수용하는 등 현명한 타협안을 통해 롯데월드 행 티켓을 거머쥐었습니다. 비록 밤늦게까지 불꽃놀이를 보진 못했지만, 낮 시간 동안 친구들과 롤러코스터를 타며 배가 아플 정도로 웃었습니다. 부모님도 약속을 잘 지킨 당신을 보며 흐뭇해하셨습니다.',
    visualMood: {
      badge: '✨ 성공적인 협상',
      gradient: 'from-emerald-400 to-teal-600',
      illustrationStyle: 'calm',
      iconName: 'Smile',
    },
    relationshipScore: 82,
    myGrowthNote:
      '"내 고집만 100% 채우려 하지 않고, 부모님이 안심할 수 있는 선에서 절반씩 양보하니까 모두가 웃을 수 있었어요."',
    parentHeartNote:
      '"아이가 약속 시간을 딱 맞춰 돌아오는 모습을 보고 대견했습니다. 다음번엔 조금 더 늦게까지 허락해 줘도 되겠다는 믿음이 생겼어요."',
    practicalTips: [
      '원하는 것을 전부 얻지 못하더라도, 절반의 타협은 갈등을 멈추고 서로를 만족시키는 훌륭한 전략입니다.',
      '약속된 시간을 1분도 어기지 않고 지키는 것이 다음 협상에서 가장 강력한 무기가 됩니다.',
    ],
    bgmType: 'calm',
  },

  lw_end_normal: {
    id: 'lw_end_normal',
    scenarioId: 'lotteworld',
    category: 'normal',
    title: '☕ 아쉬움 속 싹튼 온기 (NORMAL 엔딩)',
    subtitle: '놀이공원은 다음 기회로, 대신 가족의 진심을 확인하다',
    storySummary:
      '이번 롯데월드 방문은 아쉽게 불발되었지만, 극단적인 파국 대신 부모님과 속 깊은 대화를 나누며 서로의 감정을 추슬렀습니다. 부모님은 아이가 친구 관계에서 느끼는 소외감과 성장의 욕구를 이해하게 되었고, 다음 방학 때 더 멋진 여행을 함께 계획하기로 약속했습니다.',
    visualMood: {
      badge: '🌿 잔잔한 성장',
      gradient: 'from-blue-400 to-indigo-500',
      illustrationStyle: 'calm',
      iconName: 'Coffee',
    },
    relationshipScore: 68,
    myGrowthNote:
      '"놀이공원에 못 가서 속상했지만, 솔직한 내 마음을 털어놓으니 부모님이 날 더 잘 이해해 주셨어요. 다음엔 더 미리 준비해서 설득해 볼래요."',
    parentHeartNote:
      '"아이의 속마음을 들을 수 있어 뜻깊은 주말이었습니다. 다음에는 아이가 친구들과 즐거운 시간을 보낼 수 있도록 부모도 준비를 도울 생각입니다."',
    practicalTips: [
      '원하는 것이 이루어지지 않았을 때 어떻게 대처하느냐가 나의 진짜 인품을 보여줍니다.',
      '거절당했을 때 바로 포기하거나 폭발하기보다, "어떻게 준비하면 다음엔 허락해 주실 수 있을까요?"라고 물어보세요.',
    ],
    bgmType: 'calm',
  },

  lw_end_worst: {
    id: 'lw_end_worst',
    scenarioId: 'lotteworld',
    category: 'worst',
    title: '🌧️ 얼어붙은 침묵과 상처 (WORST 엔딩)',
    subtitle: '폭발한 분노 뒤에 남겨진 고립과 후회의 주말',
    storySummary:
      '감정을 참지 못하고 쏟아낸 날 선 말들과 문 쾅 닫기, 반항적인 태도로 인해 롯데월드는커녕 일주일 외출 금지와 스마트폰 압수라는 최악의 결과를 맞이했습니다. 친구들은 신나게 추억을 쌓는 동안, 어두운 방에서 원망과 외로움에 눈물을 흘려야 했습니다. 부모님의 마음에도 깊은 상처가 남았습니다.',
    visualMood: {
      badge: '💔 관계의 위기',
      gradient: 'from-slate-700 via-gray-800 to-zinc-900',
      illustrationStyle: 'frustrated',
      iconName: 'CloudRain',
    },
    relationshipScore: 25,
    myGrowthNote:
      '"화가 난다고 물건을 던지거나 소리를 지르면 내 말이 맞더라도 결국 내가 모든 책임을 뒤집어쓰게 된다는 걸 뼈저리게 느꼈어요. 되돌릴 수 있다면 차분하게 말하고 싶어요."',
    parentHeartNote:
      '"아이가 저렇게 거칠게 반항하는 모습을 보며 너무 큰 충격과 불안을 느꼈습니다. 저러다 더 큰 사고를 치진 않을까 두려워 더 엄격해질 수밖에 없었어요."',
    practicalTips: [
      '감정이 머리끝까지 치솟을 땐 "타임아웃(잠깐만요)"을 외치고 물 한 잔을 마시며 10초간 심호흡을 하세요.',
      '소리를 지르거나 물건을 거칠게 다루면 대화의 본질은 사라지고 오직 "버릇없는 행동"만 남아 처벌을 받게 됩니다.',
      '이미 실수를 했다면 자존심을 접고 "아까 소리 질러서 죄송해요"라고 태도에 대해 먼저 사과하는 용기를 내보세요.',
    ],
    bgmType: 'frustration',
  },
};

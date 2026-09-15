import { StageNode, EndingResult, ScenarioMeta } from '../types';

export const siblingMeta: ScenarioMeta = {
  id: 'sibling',
  sparklingTitle: '⚖️ 왜 맨날 나한테만 양보하래?! 억울함 폭발 주의보',
  subtitle: '동생(형제) 편만 드는 부모님 vs 참다 참다 폭발한 나의 서러움',
  tagline: '"형/언니니까 참아", "동생이니까 봐줘"... 쌓여가는 편애의 불꽃을 어떻게 끌 수 있을까?',
  icon: 'Scale',
  themeColor: {
    bg: 'from-purple-500/10 to-pink-500/10',
    border: 'border-purple-300',
    text: 'text-purple-700',
    badge: 'bg-purple-100 text-purple-800',
    accent: 'bg-purple-500',
  },
  initialStageId: 'sb_s1',
  previewPrompt: '부모님: "넌 형(누나/언니/오빠)이 되어서 왜 맨날 동생이랑 똑같이 굴어? 양보 좀 해!"',
};

export const siblingStages: Record<string, StageNode> = {
  // === STAGE 1: 간식 / 물건 쟁탈전과 일방적 양보 요구 ===
  sb_s1: {
    id: 'sb_s1',
    stageNumber: 1,
    scenarioId: 'sibling',
    stageTitle: '1단계: 마지막 남은 케이크 한 조각',
    situationNarration:
      '내가 아껴둔 마지막 딸기 조각 케이크. 내가 먹으려고 포크를 드는 순간, 동생이 달려와 자기가 먹겠다고 떼를 쓰기 시작했다. 거실에서 TV를 보시던 엄마가 돌아보더니 "넌 다 큰 애가 동생한테 그것도 양보 못 하니? 동생 줘!"라고 역정을 내신다. 내 속에서 울컥 불길이 치솟는다.',
    visualScene: {
      location: '주방 식탁 냉장고 앞',
      atmosphere: 'chaotic',
      iconName: 'Cake',
    },
    choices: [
      {
        id: 'sb_s1_c1',
        text: '"내가 아껴둔 건데 왜 맨날 쟤만 줘요?! 엄마는 동생만 예뻐하고 난 낳지도 말지 그랬어!" 소리를 빽 지른다.',
        myThought: '항상 나만 양보하래. 나도 엄마 아빠 자식인데 너무 불공평해!',
        parentReaction: {
          emotion: 'angry',
          parentSpeech: '"말버릇 좀 봐! 먹는 거 하나 가지고 낳지 말라니 그런 무서운 말을 어디서 배워?!"',
          parentThought: '케이크 하나 양보하라는 게 그렇게 큰 죄인가? 애가 왜 저렇게 극단적으로 말을 하지?',
          relationshipDelta: -12,
          feedbackTip: '극단적인 감정 폭발은 케이크 문제보다 ‘말버릇’으로 논점을 변질시켜요.',
        },
        nextStageId: 'sb_s2_explosion',
      },
      {
        id: 'sb_s1_c2',
        text: '포크를 내려놓고 숨을 들이쉰 뒤, "엄마, 이건 제 이름 써서 아껴둔 제 몫이에요. 칼 가져와서 정확히 반으로 잘라 나눠 먹을게요."',
        myThought: '억울하지만 동생 울리면 내 탓이 되니까 공평한 분할 카드를 꺼내자.',
        parentReaction: {
          emotion: 'thoughtful',
          parentSpeech: '"음... 네 몫이었구나. 반으로 나눠 먹겠다는 건 좋은 생각이네. 동생아, 너도 반만 먹자."',
          parentThought: '무조건 뺏으려 했던 게 미안해지네. 아이가 제법 공정하게 대처하네.',
          relationshipDelta: 10,
          feedbackTip: '공정한 규칙과 대안(5:5 분할)을 먼저 제안하면 부모님도 편애 프레임에서 벗어나요.',
        },
        nextStageId: 'sb_s2_fair',
      },
      {
        id: 'sb_s1_c3',
        text: '케이크를 동생 식탁 앞에 팽개치듯 밀어놓고 "다 처먹어라!" 하고 방으로 쿵쿵 걸어 들어간다.',
        myThought: '더러워서 안 먹어. 아주 쟤 혼자 다 처먹으라지.',
        parentReaction: {
          emotion: 'disappointed',
          parentSpeech: '"음식 팽개치고 거친 욕까지... 쟤가 사춘기라더니 인성이 왜 저렇게 됐누."',
          parentThought: '속상한 건 알겠지만 태도가 너무 거칠어서 정이 떨어지려 해.',
          relationshipDelta: -8,
          feedbackTip: '물건을 던지거나 거친 말을 쓰면 내 정당한 권리마저 박탈당해요.',
        },
        nextStageId: 'sb_s2_sulk',
      },
    ],
  },

  // === STAGE 2: 심화되는 갈등 국면 ===
  sb_s2_explosion: {
    id: 'sb_s2_explosion',
    stageNumber: 2,
    scenarioId: 'sibling',
    stageTitle: '2단계: 눈물과 서러움의 불바다',
    situationNarration:
      '거실에서 호된 꾸중이 쏟아진다. "동생 챙길 줄 모르면 어디 가서 무슨 인정받겠니?"라는 아빠의 훈계까지 더해진다. 동생은 엄마 뒤에 숨어서 메롱 하듯 날 쳐다본다. 눈물이 왈칵 쏟아질 것 같다.',
    visualScene: {
      location: '거실 한가운데',
      atmosphere: 'tense',
      iconName: 'Flame',
    },
    choices: [
      {
        id: 'sb_s2_e1',
        text: '눈물을 닦으며 차분히 "케이크 때문이 아니에요. 저번에도, 그저번에도 무조건 첫째라는 이유로 제 감정은 무시당한 게 너무 서러웠어요"라고 고백한다.',
        myThought: '사건 하나가 아니라 내 마음에 쌓인 서러움의 본질을 전해야 해.',
        parentReaction: {
          emotion: 'surprised',
          parentSpeech: '"...그렇게 오랫동안 서운한 게 쌓여있었니? 엄마 아빠가 첫째라고 너무 당연하게 생각했나 보구나."',
          parentThought: '단순히 떼쓰는 게 아니었구나. 첫째한테 너무 무거운 짐을 지웠나 보다...',
          relationshipDelta: 12,
          feedbackTip: '‘물건’이 아니라 그동안 쌓인 ‘내 감정(소외감, 억울함)’을 고백하면 부모님은 마음을 엽니다.',
        },
        nextStageId: 'sb_s3_dialogue',
      },
      {
        id: 'sb_s2_e2',
        text: '"동생 쟤가 저 뒤에서 메롱 하는 거 안 보여요?! 왜 항상 쟤 거짓 눈물에만 속아요?!"',
        myThought: '동생의 악마 같은 실체를 부모님께 폭로해야겠어.',
        parentReaction: {
          emotion: 'angry',
          parentSpeech: '"또 동생 탓만 하니? 동생을 사랑으로 감싸줄 생각은 눈곱만큼도 없니?"',
          parentThought: '형제끼리 고자질하고 헐뜯는 걸 보면 부모 가슴이 찢어진다.',
          relationshipDelta: -8,
          feedbackTip: '부모님 앞에서 형제를 공격하면 오히려 ‘성숙하지 못한 질투’로 오해받기 쉬워요.',
        },
        nextStageId: 'sb_s3_blame',
      },
      {
        id: 'sb_s2_e3',
        text: '현관문을 열고 밖으로 뛰쳐나가 복도 계단에 주저앉아 엉엉 운다.',
        myThought: '우리 집엔 내 편이 아무도 없어. 나 사라져도 아무도 안 찾겠지.',
        parentReaction: {
          emotion: 'worried',
          parentSpeech: '"(밖으로 따라 나오시며) 너 어디 가니! 위험하게 밤에 뛰쳐나가면 어떡해!"',
          parentThought: '가슴이 철렁 내려앉았네. 애가 저 정도로 마음이 다쳤을 줄은 몰랐어.',
          relationshipDelta: -2,
          feedbackTip: '가출이나 돌발 행동은 부모님을 패닉에 빠뜨려 근본적인 해결을 어렵게 해요.',
        },
        nextStageId: 'sb_s3_staircase',
      },
    ],
  },

  sb_s2_fair: {
    id: 'sb_s2_fair',
    stageNumber: 2,
    scenarioId: 'sibling',
    stageTitle: '2단계: 룰을 만들어가는 식탁',
    situationNarration:
      '케이크를 공평하게 자르자 동생도 투정 없이 자기 조각을 먹기 시작했다. 엄마가 곁에 앉으시며 "아까 엄마가 다짜고짜 양보하라고 해서 기분 상했지? 미안해"라고 사과하셨다. 이때 내 마음을 어떻게 전할까?',
    visualScene: {
      location: '차분해진 주방 식탁',
      atmosphere: 'warm',
      iconName: 'Utensils',
    },
    choices: [
      {
        id: 'sb_s2_f1',
        text: '"엄마가 사과해 주셔서 고마워요. 사실 평소에도 \'첫째니까\'라는 말을 들을 때마다 마음에 큰 돌덩이가 얹힌 것 같았어요."',
        myThought: '엄마가 마음을 열어주셨으니 내 진짜 아픔을 솔직하게 털어놓자.',
        parentReaction: {
          emotion: 'thoughtful',
          parentSpeech: '"그랬구나... 첫째라서 더 의젓하길 바라는 마음에 너한테 너무 큰 부담을 줬네. 정말 미안하다."',
          parentThought: '아이가 이런 무게를 견디고 있었구나. 부모의 언어 습관을 고쳐야겠어.',
          relationshipDelta: 14,
          feedbackTip: '‘나 전달법(I-message)’으로 내 마음의 무게를 표현하는 완벽한 대화법입니다.',
        },
        nextStageId: 'sb_s3_dialogue',
      },
      {
        id: 'sb_s2_f2',
        text: '"알면 됐어요. 앞으로는 절대 동생 편만 들지 마세요, 알았죠?" 으스대며 말한다.',
        myThought: '내가 판정승했으니 이제 내 권력을 확실히 못 박아둬야지.',
        parentReaction: {
          emotion: 'disappointed',
          parentSpeech: '"미안하다고 했더니 기세등등해져서 훈계조로 말하네? 대화할 맛이 안 난다."',
          parentThought: '부모의 사과를 승리의 트로피처럼 휘두르니 씁쓸하네.',
          relationshipDelta: -4,
          feedbackTip: '상대의 사과를 조롱하거나 지적하는 태도는 대화의 온도를 식게 만들어요.',
        },
        nextStageId: 'sb_s3_rules_craft',
      },
      {
        id: 'sb_s2_f3',
        text: '"동생도 이제 고학년 되니까 자기 몫과 남의 몫을 구분하는 규칙을 같이 정해봤으면 좋겠어요."',
        myThought: '앞으로 계속 싸우지 않으려면 시스템을 만들어야 해.',
        parentReaction: {
          emotion: 'proud',
          parentSpeech: '"규칙을 정하자고? 아주 현명한 생각이야. 가족 회의를 한번 열어보자."',
          parentThought: '갈등을 시스템으로 해결하려는 성숙한 발상이네. 정말 훌륭하다.',
          relationshipDelta: 12,
          feedbackTip: '감정 소모 대신 제도와 룰을 제안하는 것은 리더십의 표본이에요.',
        },
        nextStageId: 'sb_s3_rules_craft',
      },
    ],
  },

  sb_s2_sulk: {
    id: 'sb_s2_sulk',
    stageNumber: 2,
    scenarioId: 'sibling',
    stageTitle: '2단계: 냉랭한 벽장 속의 반항',
    situationNarration:
      '방에 틀어박혀 침대에 누워있는데 밖에서 동생이 케이크를 맛있게 먹으며 키득거리는 소리가 들린다. 부모님은 내 방 쪽을 보며 혀를 쯧쯧 차신다. 이 불공평함을 이대로 두고 볼 순 없다.',
    visualScene: {
      location: '침대 위 이불 속',
      atmosphere: 'gloomy',
      iconName: 'Bed',
    },
    choices: [
      {
        id: 'sb_s2_su1',
        text: '일기장에 부모님께 하고 싶은 말을 꾹꾹 눌러 쓴 뒤, 책상 위에 올려두고 방문을 살짝 열어둔다.',
        myThought: '말로 하면 화만 나니까 글자로 내 억울함과 슬픔을 적어보자.',
        parentReaction: {
          emotion: 'thoughtful',
          parentSpeech: '"(편지를 보시고) 우리 아이가 마음속에 이런 아픔을 품고 있었구나... 부모가 너무 무심했어."',
          parentThought: '글을 읽어보니 아이의 서운함이 절절히 느껴진다. 마음을 어루만져 줘야겠어.',
          relationshipDelta: 10,
          feedbackTip: '글로 정리한 감정은 부모님이 방어하지 않고 진지하게 경청하게 만듭니다.',
        },
        nextStageId: 'sb_s3_dialogue',
      },
      {
        id: 'sb_s2_su2',
        text: '동생 방으로 쳐들어가 동생이 아끼는 장난감이나 학용품을 숨겨버린다.',
        myThought: '너도 한번 당해봐라. 뺏기는 기분이 어떤지!',
        parentReaction: {
          emotion: 'angry',
          parentSpeech: '"너 지금 동생 물건에 화풀이한 거야? 어쩜 이렇게 옹졸하고 치사하니!"',
          parentThought: '동생 물건에 보복을 하다니, 도덕적으로 큰 문제야.',
          relationshipDelta: -15,
          feedbackTip: '사적 보복은 내 억울함을 정당화하지 못하고 나를 가해자로 만듭니다.',
        },
        nextStageId: 'sb_s3_blame',
      },
      {
        id: 'sb_s2_su3',
        text: '방문을 열고 나와 엄마에게 "엄마, 동생이랑 단둘이 조용히 이야기 좀 하고 올게요" 하고 어른스럽게 중재를 시도한다.',
        myThought: '부모님을 거치지 않고 우리 둘이서 먼저 풀 수 있는지 확인해 보자.',
        parentReaction: {
          emotion: 'relieved',
          parentSpeech: '"둘이서 스스로 대화해 보겠다고? 그래, 차분하게 이야기 나눠보렴."',
          parentThought: '감정적으로 울고불고하지 않고 직접 대화하려는 성숙한 자세가 대견하다.',
          relationshipDelta: 8,
          feedbackTip: '갈등의 당사자끼리 제3자 개입 없이 차분히 대화하려는 시도는 매우 훌륭합니다.',
        },
        nextStageId: 'sb_s3_rules_craft',
      },
    ],
  },

  // === STAGE 3: 본질적인 가족 회의 / 대화 ===
  sb_s3_dialogue: {
    id: 'sb_s3_dialogue',
    stageNumber: 3,
    scenarioId: 'sibling',
    stageTitle: '3단계: "첫째라는 무게"를 털어놓는 밤',
    situationNarration:
      '거실에 마주 앉은 엄마와 아빠가 진지하게 내 이야기에 귀를 기울이신다. "첫째라서 늘 의젓해야 한다고 말했던 게 너한테 그렇게 큰 상처였는 줄 몰랐어. 네가 가장 힘들었던 순간이 언제였니?" 마음속 깊은 상처를 어떻게 꺼낼까?',
    visualScene: {
      location: '조용한 거실 티테이블',
      atmosphere: 'warm',
      iconName: 'MessageSquareHeart',
    },
    choices: [
      {
        id: 'sb_s3_d1',
        text: '"동생이 제 방에 멋대로 들어와 제 물건을 망가뜨렸을 때도, 오히려 동생 울린다고 저만 혼났을 때예요. 저도 아직 어린아이인데 보호받고 싶어요."',
        myThought: '나도 부모님의 따뜻한 보호와 사랑이 필요한 아이라는 걸 말씀드려야겠어.',
        parentReaction: {
          emotion: 'relieved',
          parentSpeech: '"(눈시울을 붉히시며) 맞다... 너도 아직 우리에겐 품 안의 소중한 아기인데, 너무 일찍 어른 대접을 했구나."',
          parentThought: '첫째라는 이유로 응석 부릴 권리마저 앗아갔구나. 정말 미안하다.',
          relationshipDelta: 16,
          feedbackTip: '‘나도 아직 사랑과 돌봄이 필요한 아이예요’라는 솔직함은 부모님의 심금을 울려요.',
        },
        nextStageId: 'sb_s4_promise',
      },
      {
        id: 'sb_s3_d2',
        text: '"그냥 모든 게 다 싫어요. 솔직히 동생이 없었으면 좋겠다고 백 번도 넘게 생각했어요."',
        myThought: '너무 지긋지긋해서 형제 존재 자체가 미워.',
        parentReaction: {
          emotion: 'disappointed',
          parentSpeech: '"아무리 서운해도 형제를 없었으면 좋겠다고 말하는 건 부모 가슴을 후벼 파는 거야."',
          parentThought: '가족에 대한 거부감까지 품고 있었다니... 너무 마음이 아프고 당황스럽다.',
          relationshipDelta: -6,
          feedbackTip: '형제의 존재 자체를 부정하는 말은 부모님에게 깊은 죄책감과 충격을 줘요.',
        },
        nextStageId: 'sb_s4_struggle',
      },
      {
        id: 'sb_s3_d3',
        text: '"앞으로는 첫째니까 무조건 참으라는 말 대신, \'동생 돌봐줘서 고마워\'라고 칭찬 한마디만 더 해주세요. 그럼 저도 힘낼 수 있어요."',
        myThought: '원망만 늘어놓기보다 내가 부모님께 바라는 인정과 칭찬을 솔직히 요청하자.',
        parentReaction: {
          emotion: 'proud',
          parentSpeech: '"그 쉬운 칭찬 한마디를 아꼈구나... 늘 고맙고 자랑스러운 우리 큰아이, 고마워!"',
          parentThought: '의무만 지우고 감사를 표현하지 않았던 부모의 태도를 깊이 반성하게 된다.',
          relationshipDelta: 15,
          feedbackTip: '바라는 보상(인정과 칭찬)을 구체적으로 요청하는 것은 부모님의 행동을 즉각 변화시킵니다.',
        },
        nextStageId: 'sb_s4_promise',
      },
    ],
  },

  sb_s3_rules_craft: {
    id: 'sb_s3_rules_craft',
    stageNumber: 3,
    scenarioId: 'sibling',
    stageTitle: '3단계: 형제 평화 협정문 작성',
    situationNarration:
      '엄마, 나, 동생 셋이서 스케치북을 펴놓고 \'형제 평화 협정\'을 만들기로 했다. 동생도 처음엔 삐죽거리더니 자기가 원하는 조항을 쓰기 시작했다. 가장 공정하게 넣어야 할 1번 규칙은?',
    visualScene: {
      location: '스케치북과 색연필이 놓인 마루',
      atmosphere: 'warm',
      iconName: 'BookOpenCheck',
    },
    choices: [
      {
        id: 'sb_s3_rc1',
        text: '"1. 간식과 용품은 이름표 붙이기. 2. 상대방 방에 들어갈 땐 3회 노크하고 허락받기. 3. 싸움이 나면 나이 상관없이 잘못한 사람이 사과하기."',
        myThought: '나이와 상관없는 객관적인 정의가 바로 서야 편애가 사라져.',
        parentReaction: {
          emotion: 'proud',
          parentSpeech: '"나이 상관없이 잘못한 사람이 사과하기! 정말 명쾌하고 훌륭한 원칙이다!"',
          parentThought: '판사처럼 공정한 규칙을 세우다니! 아이의 논리력과 배려에 감탄했다.',
          relationshipDelta: 15,
          feedbackTip: '‘잘못한 사람이 사과한다’는 만고불변의 공정 원칙은 갈등을 종식시킵니다.',
        },
        nextStageId: 'sb_s4_promise',
      },
      {
        id: 'sb_s3_rc2',
        text: '"첫째 권한으로 동생은 무조건 하루에 한 번씩 내 심부름하기!"',
        myThought: '이 기회에 동생을 내 부하로 길들여야지.',
        parentReaction: {
          emotion: 'firm',
          parentSpeech: '"규칙을 정하자고 했지 누가 계급을 만들자고 했니? 장난치지 말고 진지하게 쓰자."',
          parentThought: '또 권력을 부리려 하네. 아직 평등의 의미를 잘 모르는구나.',
          relationshipDelta: -4,
          feedbackTip: '권력형 요구는 협정의 신뢰를 깨뜨리고 반발만 사게 됩니다.',
        },
        nextStageId: 'sb_s4_struggle',
      },
      {
        id: 'sb_s3_rc3',
        text: '"동생이 형/언니 말을 잘 들을 때마다 주는 [착한 동생 스티커판]을 만들어서 다 채우면 같이 편의점에 가요!"',
        myThought: '처벌과 통제 대신 칭찬과 보상 시스템으로 동생과의 관계를 긍정적으로 바꾸자.',
        parentReaction: {
          emotion: 'proud',
          parentSpeech: '"보상과 스티커판이라니! 정말 훌륭한 교육적 아이디어다!"',
          parentThought: '동생을 억누르지 않고 이끌어주려는 리더십에 감탄했다.',
          relationshipDelta: 14,
          feedbackTip: '보상 중심의 긍정적 유도 시스템은 형제 갈등을 놀이와 협력으로 바꿉니다.',
        },
        nextStageId: 'sb_s4_promise',
      },
    ],
  },

  sb_s3_blame: {
    id: 'sb_s3_blame',
    stageNumber: 3,
    scenarioId: 'sibling',
    stageTitle: '3단계: 질투와 분노의 소용돌이',
    situationNarration:
      '서로에 대한 비난이 멈추지 않는다. 동생은 엉엉 울고, 아빠는 화가 머리끝까지 나서 "둘 다 손들고 서 있어!"라며 벌을 세우셨다. 벽을 보고 서 있는 내 등 뒤로 억울한 눈물이 뚝뚝 떨어진다.',
    visualScene: {
      location: '벽 앞 벌서는 자리',
      atmosphere: 'gloomy',
      iconName: 'ShieldX',
    },
    choices: [
      {
        id: 'sb_s3_bl1',
        text: '벌을 서면서 옆에 선 동생에게 작게 속삭인다. "야... 너도 아까 나 약 올려서 벌 받는 거야. 우리 그만 싸우고 부모님한테 같이 잘못했다고 할래?"',
        myThought: '동생과 연대해서 이 벌을 끝내고 평화를 찾아야 해.',
        parentReaction: {
          emotion: 'relieved',
          parentSpeech: '"(둘이 속닥이는 모습을 보며) 서로 먼저 화해하려는 모습을 보니 다행이구나. 손 내리렴."',
          parentThought: '아이들끼리 연대하고 화해할 줄 아는 힘이 있네. 참 다행이다.',
          relationshipDelta: 10,
          feedbackTip: '형제끼리 먼저 손잡고 갈등을 봉합하면 부모님의 불안은 즉시 사라져요.',
        },
        nextStageId: 'sb_s4_promise',
      },
      {
        id: 'sb_s3_bl2',
        text: '동생 발을 슬쩍 걷어차며 "너 때문에 이게 뭐야" 하고 흘겨본다.',
        myThought: '다 쟤 때문이야. 꼴도 보기 싫어.',
        parentReaction: {
          emotion: 'angry',
          parentSpeech: '"벌 서는 중에도 발길질이야?! 너 오늘 방에서 한 발짝도 나오지 마!"',
          parentThought: '개선의 여지가 전혀 안 보이니 정말 어떻게 해야 할지 막막하다.',
          relationshipDelta: -16,
          feedbackTip: '벌 받는 상황에서의 추가 공격은 통제 불능 상태로 낙인찍히게 만듭니다.',
        },
        nextStageId: 'sb_s4_quarrel',
      },
      {
        id: 'sb_s3_bl3',
        text: '눈물을 훔치며 손을 든 채로 "아빠, 화내신 이유 알겠어요. 하지만 동생이 제 비밀 일기를 찢은 것도 사실이에요. 벌 다 서고 공정하게 이야기 들어주세요"라고 침착하게 말한다.',
        myThought: '벌은 꿋꿋이 받되, 내 억울함의 본질을 침착한 팩트로 다시 전달하자.',
        parentReaction: {
          emotion: 'thoughtful',
          parentSpeech: '"...벌을 받으면서도 차분하게 팩트를 말하니 아빠도 흥분을 가라앉혀야겠구나. 둘 다 손 내려라."',
          parentThought: '아이가 반항이 아니라 공정성을 요구하고 있구나. 내 훈육 방식이 너무 감정적이었다.',
          relationshipDelta: 8,
          feedbackTip: '벌을 받는 순간에도 떼쓰지 않고 차분히 공정한 청문을 요청하는 성숙한 대응!',
        },
        nextStageId: 'sb_s4_struggle',
      },
    ],
  },

  sb_s3_staircase: {
    id: 'sb_s3_staircase',
    stageNumber: 3,
    scenarioId: 'sibling',
    stageTitle: '3단계: 계단 참에서 나눈 부모님의 온기',
    situationNarration:
      '아파트 비상계단에 웅크리고 있는데 엄마가 겉옷을 들고 조용히 내려오셨다. 내 어깨에 옷을 덮어주시며 옆에 나란히 앉으셨다. "엄마가 우리 큰아이 마음을 너무 몰라줬지? 찬 바닥에 앉아있지 말고 들어가자."',
    visualScene: {
      location: '아파트 비상계단',
      atmosphere: 'warm',
      iconName: 'HeartHandshake',
    },
    choices: [
      {
        id: 'sb_s3_sc1',
        text: '엄마 품에 와락 안겨 "엄마, 나도 엄마 사랑 독차지하고 싶은데 맨날 양보만 하니까 버림받는 기분이었어요"라고 털어놓는다.',
        myThought: '반항하고 싶었던 게 아니라 엄마 품이 그리웠던 내 진짜 마음이야.',
        parentReaction: {
          emotion: 'relieved',
          parentSpeech: '"어이구 내 새끼... 엄마가 첫째라고 너무 무심했어. 널 버리다니 절대 아니야, 제일 사랑해."',
          parentThought: '아이가 애정에 굶주려 있었구나. 첫째만을 위한 특별한 사랑을 더 많이 표현해야겠어.',
          relationshipDelta: 16,
          feedbackTip: '분노를 내려놓고 애정의 결핍을 솔직히 드러내면 부모님의 무한한 사랑을 되찾게 돼요.',
        },
        nextStageId: 'sb_s4_promise',
      },
      {
        id: 'sb_s3_sc2',
        text: '엄마 손을 탁 쳐내며 "가요! 엄마는 동생 엄마지 내 엄마 아니잖아!" 하고 더 아래층으로 내려간다.',
        myThought: '이제 와서 달래주는 척하는 게 더 위선적이야.',
        parentReaction: {
          emotion: 'sad',
          parentSpeech: '"...내 사랑을 그렇게까지 왜곡해서 받아들이다니, 엄마 가슴이 무너진다."',
          parentThought: '손을 내밀어도 쳐내니 이제 어떻게 다가가야 할지 모르겠다...',
          relationshipDelta: -14,
          feedbackTip: '화해를 청하는 손길을 거칠게 거부하면 상대방도 지쳐서 포기하게 됩니다.',
        },
        nextStageId: 'sb_s4_quarrel',
      },
      {
        id: 'sb_s3_sc3',
        text: '엄마가 덮어주신 겉옷을 여미며 "엄마, 저 지금 마음이 너무 복잡해서 10분만 바람 쐬고 들어갈게요. 걱정하지 마세요"라고 안심시켜 드린다.',
        myThought: '내 감정을 추스를 시간을 요청하면서도 부모님의 걱정을 덜어드리자.',
        parentReaction: {
          emotion: 'thoughtful',
          parentSpeech: '"그래, 찬바람 너무 쐬지 말고 마음 가라앉으면 따뜻한 방으로 들어오렴."',
          parentThought: '도망친 게 아니라 스스로 감정을 식힐 시간을 가지려는구나. 기다려줘야겠다.',
          relationshipDelta: 8,
          feedbackTip: '‘스스로 감정을 정리할 시간’을 정중히 예고하는 것은 갈등의 확전을 막는 안전장치입니다.',
        },
        nextStageId: 'sb_s4_struggle',
      },
    ],
  },

  // === STAGE 4: 실천과 검증의 시험대 ===
  sb_s4_promise: {
    id: 'sb_s4_promise',
    stageNumber: 4,
    scenarioId: 'sibling',
    stageTitle: '4단계: 달라진 일상과 첫 번째 시험',
    situationNarration:
      '대화 이후 며칠 동안 집안 분위기가 몰라보게 훈훈해졌다. 그런데 주말 오후, 동생이 내가 학교 과제로 애써 만든 레고 조형물을 만지작거리다가 바닥에 떨어뜨려 부수고 말았다! 동생은 겁에 질려 울먹인다. 나의 첫마디는?',
    visualScene: {
      location: '와르르 부서진 레고 앞',
      atmosphere: 'tense',
      iconName: 'Boxes',
    },
    choices: [
      {
        id: 'sb_s4_pr1',
        text: '심호흡 3번을 하고 "너 진짜 조심 좀 해! 하지만 일단 부서진 건 어쩔 수 없으니까, 네가 다시 조립하는 거 도와줘"라고 말한다.',
        myThought: '화가 머리끝까지 나지만, 감정 분출 대신 복구와 책임을 요구하자.',
        parentReaction: {
          emotion: 'proud',
          parentSpeech: '"(지켜보시던 부모님) 화부터 안 내고 해결책을 먼저 말하다니... 우리 큰아이 정말 대단하다!"',
          parentThought: '저렇게 속 깊게 대처하다니 감격스럽다. 둘 다 안아줘야겠어.',
          relationshipDelta: 15,
          feedbackTip: '상대의 실수를 마주했을 때 ‘비난 대신 복구 동참’을 요구하는 초특급 대처 능력!',
        },
        nextStageId: 'sb_s5_peace',
      },
      {
        id: 'sb_s4_pr2',
        text: '"야 이 바보야! 네가 다 물어내!" 소리치며 동생을 확 밀친다.',
        myThought: '며칠 참아줬더니 기어오르네? 용서 못 해!',
        parentReaction: {
          emotion: 'angry',
          parentSpeech: '"실수한 동생을 밀치면 어떡해! 폭력은 어떤 이유로도 안 된다고 했지!"',
          parentThought: '어렵게 쌓은 평화가 한순간에 무너지네. 폭력적인 행동은 용납 못 해.',
          relationshipDelta: -12,
          feedbackTip: '신체적 충돌이 일어나는 순간 모든 정당성을 잃고 가해자로 몰립니다.',
        },
        nextStageId: 'sb_s5_chaos',
      },
      {
        id: 'sb_s4_pr3',
        text: '부모님을 부른 뒤 "엄마 아빠, 평화 협정 조항대로 동생이 제 소중한 과제물을 훼손했으니 규칙대로 사과와 정리를 시켜주세요"라고 정중히 요청한다.',
        myThought: '우리가 정한 시스템의 힘을 빌려 공정하게 처리하자.',
        parentReaction: {
          emotion: 'relieved',
          parentSpeech: '"맞아, 약속한 규칙이 있지. 동생아, 형/언니한테 진심으로 사과하고 같이 치우자."',
          parentThought: '스스로 감정을 통제하고 시스템으로 문제를 해결하는 법을 완전히 터득했구나.',
          relationshipDelta: 14,
          feedbackTip: '감정 대신 사전에 합의된 ‘규칙’을 적용해 갈등을 우아하게 처리하는 최고수!',
        },
        nextStageId: 'sb_s5_peace',
      },
    ],
  },

  sb_s4_struggle: {
    id: 'sb_s4_struggle',
    stageNumber: 4,
    scenarioId: 'sibling',
    stageTitle: '4단계: 미묘한 시소 게임',
    situationNarration:
      '여전히 서로를 흘겨보는 형제 관계. 엄마가 주말에 단둘이서만 데이트하러 가자며 손을 내미신다. "우리 큰아이 좋아하는 떡볶이 먹으러 둘이서만 데이트할까?"',
    visualScene: {
      location: '현관 앞 엄마의 제안',
      atmosphere: 'neutral',
      iconName: 'ShoppingBag',
    },
    choices: [
      {
        id: 'sb_s4_st1',
        text: '"좋아요! 엄마랑 단둘이 시간 보내면서 속마음 더 많이 나누고 싶어요."',
        myThought: '부모님과의 1:1 데이트로 내 결핍된 사랑을 듬뿍 채워야지.',
        parentReaction: {
          emotion: 'relieved',
          parentSpeech: '"그래그래! 오늘 하루는 오롯이 우리 큰아이만을 위한 시간으로 보내자."',
          parentThought: '단둘만의 시간이 정말 절실했구나. 더 자주 만들어줘야겠어.',
          relationshipDelta: 12,
          feedbackTip: '부모님과의 1:1 데이트는 형제 갈등으로 지친 마음을 치유하는 최고의 보약입니다.',
        },
        nextStageId: 'sb_s5_individual_time',
      },
      {
        id: 'sb_s4_st2',
        text: '"동생 떼어놓고 가면 또 질투할 텐데 그냥 됐어요."',
        myThought: '데이트 다녀오면 동생이 또 부모님 뺏겼다고 앙탈 부릴 게 뻔해.',
        parentReaction: {
          emotion: 'thoughtful',
          parentSpeech: '"동생 눈치 안 봐도 돼. 널 위해 준비한 시간이란다."',
          parentThought: '상처 때문에 마음을 편히 열지 못하는 것 같아 씁쓸하다.',
          relationshipDelta: 2,
          feedbackTip: '호의를 있는 그대로 수용할 때 관계 회복의 속도가 빨라져요.',
        },
        nextStageId: 'sb_s5_individual_time',
      },
      {
        id: 'sb_s4_st3',
        text: '"엄마, 1시간은 저랑 데이트하고, 집에 올 때 동생 좋아하는 과자 사 와서 다 같이 티타임 가져요!"',
        myThought: '내 특별한 시간도 챙기고, 동생도 챙기면 부모님도 마음 편하게 기뻐하실 거야.',
        parentReaction: {
          emotion: 'proud',
          parentSpeech: '"어머나... 엄마랑 데이트하면서도 동생까지 챙기다니, 우리 큰아이 그릇이 정말 넓구나!"',
          parentThought: '자신의 욕구를 충족하면서도 가족 전체를 품는 의젓함에 큰 감동을 받았다.',
          relationshipDelta: 16,
          feedbackTip: '나의 권리를 누리면서도 타인을 배려하는 균형 잡힌 모습은 부모님에게 최고의 감동을 줍니다.',
        },
        nextStageId: 'sb_s5_peace',
      },
    ],
  },

  sb_s4_quarrel: {
    id: 'sb_s4_quarrel',
    stageNumber: 4,
    scenarioId: 'sibling',
    stageTitle: '4단계: 남보다 못한 사이로의 추락',
    situationNarration:
      '이제는 눈만 마주쳐도 으르렁거린다. 부모님도 지쳐서 "너희 둘 다 알아서 해라"며 포기한 듯한 태도를 보이신다. 집 안 전체가 얼음장 같다.',
    visualScene: {
      location: '싸늘한 거실',
      atmosphere: 'gloomy',
      iconName: 'ZapOff',
    },
    choices: [
      {
        id: 'sb_s4_qu1',
        text: '식탁에 비타민 음료 2병을 올려두고 동생에게 "야, 마셔. 그리고 앞으로 서로 영역 침범하지 말자"며 최소한의 정을 건넨다.',
        myThought: '원수는 되지 말아야지. 최소한의 쿨한 관계라도 유지하자.',
        parentReaction: {
          emotion: 'thoughtful',
          parentSpeech: '"저렇게라도 먼저 음료수를 건네며 조율하려는 마음이 기특하구나."',
          parentThought: '비록 데면데면하지만 서로 선을 지키며 살려는 노력이 보이네.',
          relationshipDelta: 6,
          feedbackTip: '차가운 침묵을 깨고 최소한의 배려를 건네는 것은 위대한 첫걸음입니다.',
        },
        nextStageId: 'sb_s5_cold_truce',
      },
      {
        id: 'sb_s4_qu2',
        text: '식탁에 선을 긋고 "이 선 넘어오면 다 버린다"며 살벌한 경계 태세를 갖춘다.',
        myThought: '내 구역을 지키기 위해선 철저하게 차단해야 해.',
        parentReaction: {
          emotion: 'disappointed',
          parentSpeech: '"한집에 살면서 군사분계선이라도 긋겠다는 거니? 답답하다 정말."',
          parentThought: '갈수록 사이가 멀어지니 부모로서 너무 큰 실패감을 느낀다.',
          relationshipDelta: -14,
          feedbackTip: '극단적인 분리벽은 가족 간의 최소한의 유대감마저 끊어버려요.',
        },
        nextStageId: 'sb_s5_chaos',
      },
      {
        id: 'sb_s4_qu3',
        text: '포스트잇에 \'오늘 저녁 동생 학원 갈 때 우산 챙겨가라\'고 무심하게 적어 현관문에 붙여둔다.',
        myThought: '말은 안 섞더라도 츤데레처럼 챙길 건 챙겨주는 게 내 자존심이야.',
        parentReaction: {
          emotion: 'relieved',
          parentSpeech: '"(메모를 보고) 겉으로는 툴툴대도 속으로는 동생 챙기는 따뜻한 마음이 살아있구나."',
          parentThought: '완전히 등을 돌린 줄 알았는데 깊은 곳엔 형제애가 남아있어 안도했다.',
          relationshipDelta: 7,
          feedbackTip: '말없는 츤데레 배려는 얼어붙은 관계에 따뜻한 온기를 불어넣는 불씨가 됩니다.',
        },
        nextStageId: 'sb_s5_cold_truce',
      },
    ],
  },

  // === STAGE 5: 최종 결실과 미래 ===
  sb_s5_peace: {
    id: 'sb_s5_peace',
    stageNumber: 5,
    scenarioId: 'sibling',
    stageTitle: '5단계: 세상에서 가장 든든한 내 편',
    situationNarration:
      '한 달 뒤. 동생과 나는 여전히 가끔 다투지만, 이제는 서로의 물건을 존중하고 억울한 일이 생기면 대화로 푼다. 부모님도 더 이상 "첫째니까 참아"라는 말을 쓰지 않으신다. 온 가족이 거실에 모여 활짝 웃으며 영화를 보는 밤!',
    visualScene: {
      location: '팝콘 향기 가득한 따뜻한 거실',
      atmosphere: 'warm',
      iconName: 'Sparkles',
    },
    choices: [
      {
        id: 'sb_s5_pe1',
        text: '"동생한테 팝콘을 건네며 \'많이 먹어라 꼬맹이\' 하고 웃어준다."',
        myThought: '내 권리를 존중받으니 동생도 훨씬 사랑스럽게 보여.',
        parentReaction: {
          emotion: 'proud',
          parentSpeech: '"우리 아이들이 이렇게 서로를 아끼게 되다니, 세상에서 가장 행복한 밤이네!"',
          parentThought: '갈등을 현명하게 이겨내며 아이도 우리도 진짜 성숙한 가족이 되었다.',
          relationshipDelta: 15,
          feedbackTip: '존중받은 아이가 타인을 진정으로 배려할 수 있다는 삶의 진리를 배웠습니다.',
        },
        nextStageId: 'sb_end_best',
      },
      {
        id: 'sb_s5_pe2',
        text: '"동생 어깨동무를 하며 \'앞으로 또 싸우면 엉덩이 팡팡이다? 그래도 내 동생 사랑한다!\' 하고 장난을 친다."',
        myThought: '갈등을 털어내고 유쾌한 형제 우애를 장난스럽게 확인하자.',
        parentReaction: {
          emotion: 'proud',
          parentSpeech: '"하하호호 웃는 너희 둘을 보니 온 집안에 복이 굴러들어오는 것 같구나!"',
          parentThought: '서로를 진심으로 아끼고 장난치는 아이들의 모습이 세상에서 제일 예쁘다.',
          relationshipDelta: 16,
          feedbackTip: '유쾌한 장난과 스킨십은 갈등의 상처를 완전히 지우는 최고의 묘약입니다.',
        },
        nextStageId: 'sb_end_best',
      },
      {
        id: 'sb_s5_pe3',
        text: '"부모님께 \'첫째로서의 제 마음을 이해해 주시고 규칙을 지켜주셔서 감사해요\'라고 감사의 포옹을 나눈다."',
        myThought: '우리 가족이 함께 성장한 이 순간을 진심으로 감사하고 기념하자.',
        parentReaction: {
          emotion: 'proud',
          parentSpeech: '"네가 지혜롭게 대화해 준 덕분에 우리 가족 모두가 한 단계 성장했단다."',
          parentThought: '아이가 부모를 가르치고 성숙하게 이끌어준 기분이다. 참 고맙다.',
          relationshipDelta: 16,
          feedbackTip: '가족 전체의 성장을 짚어주고 감사하는 마음은 평생 잊지 못할 유대감을 만듭니다.',
        },
        nextStageId: 'sb_end_best',
      },
    ],
  },

  sb_s5_individual_time: {
    id: 'sb_s5_individual_time',
    stageNumber: 5,
    scenarioId: 'sibling',
    stageTitle: '5단계: 나만을 위한 특별한 사랑 충전',
    situationNarration:
      '엄마와의 단둘만의 데이트! 그동안 못다 한 수다를 떨며 내가 얼마나 소중한 존재인지 다시 확인했다. 집으로 돌아가는 길, 동생 줄 붕어빵을 사 들고 가며 마음이 가벼워졌다.',
    visualScene: {
      location: '노을 지는 공원 산책길',
      atmosphere: 'warm',
      iconName: 'Sun',
    },
    choices: [
      {
        id: 'sb_s5_it1',
        text: '"엄마, 오늘 너무 행복했어요. 가끔 이렇게 저만을 위한 시간도 꼭 가져주세요!"',
        myThought: '사랑을 충분히 받으니 동생에게도 너그러워질 여유가 생겼어.',
        parentReaction: {
          emotion: 'relieved',
          parentSpeech: '"당연하지! 언제든 네가 일 순위인 시간을 약속할게."',
          parentThought: '아이에게 필요한 건 훈계가 아니라 온전한 관심과 사랑이었구나.',
          relationshipDelta: 12,
          feedbackTip: '내 감정의 탱크를 먼저 채우면 타인을 향한 질투와 미움이 저절로 녹아내려요.',
        },
        nextStageId: 'sb_end_good',
      },
      {
        id: 'sb_s5_it2',
        text: '사 온 붕어빵을 동생 손에 쥐여주며 "이거 팥 가득 든 거야. 너 먹어" 하고 씩 웃어준다.',
        myThought: '사랑받은 첫째는 동생에게 베풀 줄 아는 여유가 생긴다는 걸 몸소 실천하자.',
        parentReaction: {
          emotion: 'proud',
          parentSpeech: '"동생 챙기는 우리 큰아이 손길이 참 따스하네. 오늘 데이트하길 정말 잘했어."',
          parentThought: '단둘만의 시간이 아이의 마음에 이렇게 큰 여유와 사랑을 심어주었구나.',
          relationshipDelta: 14,
          feedbackTip: '충전된 애정을 형제에게 너그럽게 나누는 선순환의 완성!',
        },
        nextStageId: 'sb_end_good',
      },
      {
        id: 'sb_s5_it3',
        text: '집에 돌아와 거실 화이트보드에 [가족 월간 1:1 데이트 일정표]를 붙여 정례화를 제안한다.',
        myThought: '일회성 이벤트가 아니라 지속 가능한 소통 시스템으로 정착시키자.',
        parentReaction: {
          emotion: 'proud',
          parentSpeech: '"매달 이렇게 번갈아 데이트하면 형제끼리 싸울 일도 전혀 없겠네! 대찬성이야!"',
          parentThought: '문제를 근본적으로 해결하는 시스템을 제안하다니 정말 똑똑하고 기특하다.',
          relationshipDelta: 15,
          feedbackTip: '일회성 화해를 정기적인 가족 소통 제도로 발전시키는 탁월한 기획력!',
        },
        nextStageId: 'sb_end_good',
      },
    ],
  },

  sb_s5_cold_truce: {
    id: 'sb_s5_cold_truce',
    stageNumber: 5,
    scenarioId: 'sibling',
    stageTitle: '5단계: 서먹하지만 평화로운 휴전',
    situationNarration:
      '더 이상 큰 소리로 싸우진 않지만, 서로 필요한 말만 주고받는 조용한 냉전 휴전 상태다. 부모님도 조심스럽게 우리 눈치를 보신다.',
    visualScene: {
      location: '조용한 각자의 방',
      atmosphere: 'neutral',
      iconName: 'Minimize2',
    },
    choices: [
      {
        id: 'sb_s5_ct1',
        text: '"시간이 지나면 조금씩 더 자연스러워지겠죠. 일단 큰 싸움이 안 나는 것만으로도 다행이에요."',
        myThought: '완벽하진 않지만 파국은 피했으니 천천히 관계를 회복해 나가자.',
        parentReaction: {
          emotion: 'thoughtful',
          parentSpeech: '"그래, 서로에게도 적응할 시간이 필요하겠지. 부모가 더 배려할게."',
          parentThought: '아직 서먹하지만 폭발하지 않고 조율해 나가는 법을 배우고 있구나.',
          relationshipDelta: 5,
          feedbackTip: '갈등 후의 서먹함은 자연스러운 치유 과정입니다. 조급해하지 마세요.',
        },
        nextStageId: 'sb_end_normal',
      },
      {
        id: 'sb_s5_ct2',
        text: '"동생 생일 때 작은 케이크와 축하 카드를 조용히 책상에 놓아두며 은근한 화해의 손길을 건넨다."',
        myThought: '차가운 침묵을 녹이는 데는 특별한 날의 작은 정성만 한 게 없어.',
        parentReaction: {
          emotion: 'proud',
          parentSpeech: '"(엄마 아빠가 보시고) 동생 생일을 잊지 않고 챙겨주다니... 속 깊은 우리 아이."',
          parentThought: '말은 없어도 형제의 정을 놓지 않는 아이의 따뜻함에 가슴이 뭉클하다.',
          relationshipDelta: 12,
          feedbackTip: '기념일이나 계기를 활용한 은근한 선물은 서먹한 관계를 자연스럽게 엽니다.',
        },
        nextStageId: 'sb_end_good',
      },
      {
        id: 'sb_s5_ct3',
        text: '"거실에서 마주칠 때 \'밥 먹었냐?\' 같은 짧은 일상 안부를 건네며 서서히 긴장감을 푼다."',
        myThought: '대단한 화해 선언보다 일상의 사소한 안부 한마디가 벽을 허무는 법이야.',
        parentReaction: {
          emotion: 'relieved',
          parentSpeech: '"조금씩 서로에게 말을 건네는 모습을 보니 마음의 짐이 한결 덜어지는구나."',
          parentThought: '서먹한 냉전을 스스로 깨려는 작은 노력들이 참 고맙다.',
          relationshipDelta: 8,
          feedbackTip: '가벼운 일상 안부는 거부감 없이 얼어붙은 관계를 해동시키는 가장 부드러운 기술입니다.',
        },
        nextStageId: 'sb_end_normal',
      },
    ],
  },

  sb_s5_chaos: {
    id: 'sb_s5_chaos',
    stageNumber: 5,
    scenarioId: 'sibling',
    stageTitle: '5단계: 분노의 파편과 찢겨진 가족애',
    situationNarration:
      '집 안은 완전히 침묵과 혐오로 가득 찼다. 동생은 나를 원수 보듯 피하고, 부모님은 내 반항적인 태도에 지쳐 대화를 포기하셨다. 저녁 식사 시간에도 각자 방에서 밥을 먹는 삭막한 일상이 되었다.',
    visualScene: {
      location: '불 꺼진 식탁과 닫힌 문들',
      atmosphere: 'gloomy',
      iconName: 'HeartCrack',
    },
    choices: [
      {
        id: 'sb_s5_ch1',
        text: '방 안에서 귀를 틀어막고 "차라리 혼자 사는 게 낫겠어"라며 깊은 외로움에 빠진다.',
        myThought: '내 억울함을 알리려다 가족 모두를 잃어버린 것 같아.',
        parentReaction: {
          emotion: 'sad',
          parentSpeech: '"어쩌다 우리 집이 이렇게 되었을까... 서로 원수처럼 지내니 가슴이 찢어진다."',
          parentThought: '아이들의 갈등을 제대로 중재하지 못한 부모의 죄책감에 잠을 이룰 수 없다.',
          relationshipDelta: -18,
          feedbackTip: '억울함을 폭력과 극단적인 분노로 표출하면 모두가 패자가 되는 비극이 일어납니다.',
        },
        nextStageId: 'sb_end_worst',
      },
      {
        id: 'sb_s5_ch2',
        text: '더 이상 견딜 수 없어 거실 식탁에 둘러앉은 가족 앞에 무릎을 맞대고 앉아 "우리 가족이 왜 이렇게 원수처럼 변해야 해요? 저 너무 외롭고 아파요"라며 눈물의 호소를 한다.',
        myThought: '자존심이고 뭐고 다 버리자. 나는 가족과 사랑하며 살고 싶어.',
        parentReaction: {
          emotion: 'relieved',
          parentSpeech: '"(엄마 아빠와 동생이 함께 울며) 미안하다... 부모가 널 너무 외롭게 방치했어... 다시 시작하자."',
          parentThought: '파국의 벼랑 끝에서 아이가 보여준 절규가 우리 가족을 살려냈다. 다시 껴안아야 해.',
          relationshipDelta: 14,
          feedbackTip: '모든 것이 무너진 파국에서도 솔직한 취약성과 사랑의 갈망을 드러내면 기적처럼 가족이 다시 뭉칩니다.',
        },
        nextStageId: 'sb_end_normal',
      },
      {
        id: 'sb_s5_ch3',
        text: '부모님께 청소년 심리상담이나 가족 상담 센터를 함께 방문해 보자고 진지하게 도움을 요청한다.',
        myThought: '가족 내부의 힘만으로 풀기 어렵다면 전문가의 객관적인 조정을 받는 게 현명해.',
        parentReaction: {
          emotion: 'thoughtful',
          parentSpeech: '"상담을 받자고 먼저 말해줄 줄은 몰랐어. 그래, 전문가의 도움을 받아 건강한 가정을 되찾자."',
          parentThought: '포기하지 않고 전문적인 해결책을 찾으려는 아이의 제안에 부모로서 부끄럽고 고맙다.',
          relationshipDelta: 10,
          feedbackTip: '갈등이 만성화되었을 때 외부 전문 상담을 제안하는 것은 매우 용기 있고 성숙한 해결책입니다.',
        },
        nextStageId: 'sb_end_normal',
      },
    ],
  },
};

export const siblingEndings: Record<string, EndingResult> = {
  sb_end_best: {
    id: 'sb_end_best',
    scenarioId: 'sibling',
    category: 'best',
    title: '👑 공평과 사랑의 마스터 (BEST 엔딩)',
    subtitle: '"첫째"라는 족쇄를 풀고, 진정한 존중과 우애를 꽃피우다!',
    storySummary:
      '무조건 참거나 폭발하는 대신, 자신의 억울한 감정을 솔직하게 표현하고 객관적인 규칙을 도입한 당신! 부모님은 "첫째니까 양보하라"는 잘못된 관행을 깨닫고 당신의 감정을 한 인격체로서 깊이 존중하게 되었습니다. 동생 또한 당신을 진심으로 따르게 되었고, 집안에는 차별 없는 공평과 따스한 사랑이 가득 차게 되었습니다.',
    visualMood: {
      badge: '🏆 최고의 해결책',
      gradient: 'from-purple-500 via-pink-500 to-rose-400',
      illustrationStyle: 'celebrate',
      iconName: 'Trophy',
    },
    relationshipScore: 96,
    myGrowthNote:
      '"억울하다고 물건을 던지거나 소리 지르면 나만 못된 사람이 되더라고요. 대신 내 슬픔을 정직하게 말하고 공평한 룰을 제안하니 부모님이 내 편이 되어주셨어요!"',
    parentHeartNote:
      '"첫째라는 이유로 너무 많은 희생을 강요했던 부모의 무지를 깨우쳐준 아이에게 고맙고 미안합니다. 아이의 성숙한 제안 덕분에 우리 가족이 진짜 평등해졌습니다."',
    practicalTips: [
      '부모님이 "형/언니니까 참아"라고 하실 때는 "저도 아직 부모님의 보살핌이 필요한 아인데 무조건 양보하라고 하시면 버림받는 기분이 들어요"라고 내 감정을 솔직히 털어놓으세요.',
      '음식이나 물건으로 다툴 때는 감정 싸움 대신 "정확히 반으로 자르기", "이름표 붙이기" 같은 명확한 규칙을 제안하세요.',
      '동생을 공격하기보다 부모님께 둘만의 1:1 데이트나 대화 시간을 요청해 내 애정 결핍을 먼저 채워보세요.',
    ],
    bgmType: 'celebration',
  },

  sb_end_good: {
    id: 'sb_end_good',
    scenarioId: 'sibling',
    category: 'good',
    title: '🍰 나만의 온도를 찾은 성장 (GOOD 엔딩)',
    subtitle: '부모님과의 1:1 교감으로 되찾은 마음의 여유',
    storySummary:
      '부모님과의 진솔한 단둘만의 시간을 통해 결핍되었던 인정과 애정을 듬뿍 충전했습니다. 내 마음에 사랑이 채워지자 동생의 사소한 투정에도 예전처럼 쉽게 폭발하지 않는 마음의 근육이 생겼습니다. 완벽하지는 않아도 서로를 배려하는 건강한 형제 관계가 자리 잡았습니다.',
    visualMood: {
      badge: '✨ 따뜻한 회복',
      gradient: 'from-violet-400 to-purple-600',
      illustrationStyle: 'calm',
      iconName: 'Heart',
    },
    relationshipScore: 84,
    myGrowthNote:
      '"내 마음속 서운함을 털어놓고 엄마와 단둘이 시간을 보내니, 동생을 미워할 필요가 없다는 걸 알게 되었어요."',
    parentHeartNote:
      '"첫째에게 온전한 관심과 사랑을 쏟는 시간이 얼마나 중요한지 깨달았습니다. 아이의 미소가 다시 돌아와 참 다행입니다."',
    practicalTips: [
      '형제에 대한 분노 뒤에는 사실 "부모님의 사랑을 더 받고 싶다"는 외로움이 숨어 있는 경우가 많아요.',
      '가끔은 부모님께 "엄마랑 단둘이 떡볶이 먹고 싶어요"라고 당당하게 데이트를 신청해 보세요.',
    ],
    bgmType: 'calm',
  },

  sb_end_normal: {
    id: 'sb_end_normal',
    scenarioId: 'sibling',
    category: 'normal',
    title: '🕊️ 조심스러운 평화 협정 (NORMAL 엔딩)',
    subtitle: '큰 다툼은 멈추었지만, 아직 서먹한 거리 조율 중',
    storySummary:
      '폭발적인 싸움과 처벌의 위기를 넘기고 서로의 선을 침범하지 않는 안전한 거리를 확보했습니다. 아직 절친한 형제처럼 살갑지는 않지만, 불필요한 충돌을 줄이며 서로에게 적응해 가는 슬기로운 휴전기를 보내고 있습니다.',
    visualMood: {
      badge: '🌿 안전한 거리두기',
      gradient: 'from-indigo-400 to-sky-500',
      illustrationStyle: 'calm',
      iconName: 'Shield',
    },
    relationshipScore: 66,
    myGrowthNote:
      '"무리해서 억지로 친해지려 하지 않고, 서로 물건과 공간을 건드리지 않는 것부터 시작하니 싸움이 훨씬 줄었어요."',
    parentHeartNote:
      '"아이들이 더 이상 크게 싸우지 않는 것만으로도 집안에 숨통이 트입니다. 천천히 우애가 자라나길 기다릴 생각입니다."',
    practicalTips: [
      '형제끼리 억지로 친해지려고 애쓰기보다, 서로의 개인 물건과 사생활을 침범하지 않는 "경계선 지키기"가 먼저입니다.',
    ],
    bgmType: 'calm',
  },

  sb_end_worst: {
    id: 'sb_end_worst',
    scenarioId: 'sibling',
    category: 'worst',
    title: '💔 억울함이 낳은 고립의 벽 (WORST 엔딩)',
    subtitle: '분노와 폭력으로 물든 식탁, 아무도 내 편이 아닌 집',
    storySummary:
      '정당한 서러움을 거친 폭언과 물리적인 충돌, 보복으로 표출한 결과, 부모님은 당신의 억울함은커녕 "폭력적이고 버릇없는 아이"로만 바라보게 되었습니다. 동생과는 철천지원수가 되었고, 집안 전체에 차가운 적막과 고립감만이 감돌고 있습니다.',
    visualMood: {
      badge: '💔 관계의 파탄',
      gradient: 'from-gray-800 via-zinc-800 to-stone-900',
      illustrationStyle: 'frustrated',
      iconName: 'CloudLightning',
    },
    relationshipScore: 20,
    myGrowthNote:
      '"내가 얼마나 억울했는지를 폭력이나 거친 말로 증명하려 했던 게 최악의 실수였어요. 결국 나만 나쁜 사람이 되어버렸으니까요."',
    parentHeartNote:
      '"아이들이 서로를 증오하고 물건을 부수는 모습을 보며 부모로서 억장이 무너졌습니다. 어디서부터 잘못된 건지 막막하기만 합니다."',
    practicalTips: [
      '아무리 내가 100% 억울해도 먼저 욕을 하거나 손찌검을 하는 순간, 세상 모든 법과 부모님의 판결은 나를 가해자로 지목합니다.',
      '억울해서 눈물이 날 땐 일단 그 자리를 벗어나 찬물로 세수를 하고, 글로 내 억울한 사실관계를 차분히 적어보세요.',
    ],
    bgmType: 'frustration',
  },
};

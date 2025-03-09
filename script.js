/***************************************
 * 난이도별 30문항 예시 (간단 샘플)
 * 실제로는 이전에 생성했던 30문항씩 넣어주세요.
 ***************************************/
const quizDataEasy = [
  // 어린이용 30문항
  { question: "회의하다가 결정된 내용은 회의록(기록)으로 남겨 누구든지 볼 수 있다.", correctAnswer: "O", explanation: " 본회의나 위원회 회의록은 대부분 공개되어 의정활동을 확인할 수 있습니다. 「경기도의회 회의규칙」 제62조" },
  { question: "회의시간에 옆 사람과 크게 떠들어도 괜찮다.", correctAnswer: "X", explanation: " 회의 중에는 정숙해야 하며, 집중해서 안건을 논의하는 것이 원칙입니다." },
  { question: "회의 중에 소란스러운 사람이 있으면, 의장이 질서를 지킬 수 있도록 주의를 주거나 회의를 잠시 멈출 수 있다.", correctAnswer: "O", explanation: " 의장은 회의 질서유지 권한이 있어, 회의장 내 질서를 지킬 수 있습니다." },
  { question: "경기도의회의 의원 전체가 참여하는 회의를 '본회의'라고 부른다.", correctAnswer: "O", explanation: " 모든 의원이 모이는 회의를 본회의라 하며, 중요한 결정은 이곳에서 이뤄집니다." },
  { question: "경기도의회 의원이 되려면 도민이 뽑아야 하지만, 임기는 영원히 계속된다.", correctAnswer: "X", explanation: " 의원 임기는 원칙적으로 4년이며, 다시 선출될 수 있지만 영구적이진 않습니다." },
  { question: "의회에서 모든 안건이 다 통과되는 것은 아니고, 표결을 통해 부결될 수도 있다.", correctAnswer: "O", explanation: " 표결에서 찬성보다 반대가 많거나, 찬성이 과반수가 넘지 않는 경우에는 부결로 처리됩니다." },
  { question: "의회는 도청이나 교육청에 예산을 달라고 명령만 할 수 있고, 예산 사용 내역을 확인할 권한은 없다.", correctAnswer: "X", explanation: " 의회는 예산을 심의·의결할 뿐만 아니라, 집행 후 결산도 확인하고 행정사무감사를 통해 점검합니다." },
  { question: "의원들은 회의에서 예의 바르게 말해야 하고, 함부로 상대를 비난하거나 폭력을 쓰면 안 된다.", correctAnswer: "O", explanation: " 회의규칙과 윤리강령 등이 있어, 품위 있고 질서 있는 토론이 원칙입니다." },
  { question: "의원들은 주민이 뽑아 준 사람들이다.", correctAnswer: "O", explanation: " 지방선거를 통해 도민들이 직접 투표해 의원을 선출합니다." },
  { question: "의원들은 1년에 한 번도 모이지 않고 개인적으로 일만 한다.", correctAnswer: "X", explanation: " 의회는 정례회·임시회를 통해 매년 여러 차례 모여서 의정활동을 합니다." },
  { question: "우리 동네 문제가 있으면, 그 지역을 담당하는 도의원에게 연락해서 의견을 낼 수 있다.", correctAnswer: "O", explanation: " 의원에게 주민 불편이나 개선 의견을 전달하면, 의정활동에 반영될 수 있습니다." },
  { question: "어린이도 경기도의회 방청석에서 회의를 구경할 수 있다.", correctAnswer: "O", explanation: " 특별한 제한이 없으면 방청석에서 회의를 지켜볼 수 있어요(단, 조용히 질서를 지켜야 합니다)." },
  { question: "사람들은 경기도의회 홈페이지를 통해 의원들의 활동과 회의록 등을 볼 수 있다.", correctAnswer: "O", explanation: " 의회 홈페이지에 회의록, 의안, 예·결산 내역 등 정보가 공개됩니다." },
  { question: "누구나 조례를 만들거나 바꾸자고 요구(청구)할 순 없고, 오직 의원만 할 수 있다.", correctAnswer: "X", explanation: " 주민조례발안법에 따라 주민들도 일정 조건을 만족하면 조례 제·개정안을 청구할 수 있습니다." },
  { question: "경기도의회는 경기도지사가 하는 일에 대해 감시·감독할 수 없다.", correctAnswer: "X", explanation: " 의회는 행정사무감사 등을 통해 도지사가 하는 행정이 잘되는지 확인합니다." },
  { question: "경기도의회에서는 회의할 때, 여러 사람이 동시에 말해도 괜찮다.", correctAnswer: "X", explanation: " 발언 순서를 지켜야 하며, 회의가 혼란스럽지 않도록 규칙이 있어요." },
  { question: "경기도의회에서는 어느 누구도 반대 의견을 말할 수 없다.", correctAnswer: "X", explanation: " 의원들은 토론할 때 자유롭게 찬성, 반대 의견을 말할 수 있어요." },
  { question: "경기도의회에서 회의를 할 때, 의장이 없으면 다른 의원이 대신 회의를 진행할 수 있다.", correctAnswer: "O", explanation: " 의장 부재 시 부의장이나 임시의장이 직무를 대행합니다." },
  { question: "경기도의회에서 일하는 사람 중엔 전문지식을 가진 “전문위원”도 있다.", correctAnswer: "O", explanation: " 각 위원회에 전문위원이 있어, 조례안 등을 검토하고 의원들을 보좌합니다." },
  { question: "경기도의회에는 여러 개의 위원회가 있어서 각각 다른 일을 맡아 살핀다.", correctAnswer: "O", explanation: " 문화, 복지, 예산 등 분야별 상임위원회가 있어 전문적으로 심사·의결합니다." },
  { question: "경기도의회는 '조례'라는 법 같은 규칙을 만들 수도 있다.", correctAnswer: "O", explanation: " 도민 생활과 밀접한 내용을 담은 “조례”를 제정·개정합니다." },
  { question: "경기도의회는 오직 어른만을 위한 일을 하고, 어린이나 청소년을 위한 정책에는 관심이 없다.", correctAnswer: "X", explanation: " 교육, 청소년 지원, 복지, 문화 등 어린이·청소년 정책도 매우 중요한 의정 대상입니다." },
  { question: "경기도의회는 예산(돈)과 관련된 일을 전혀 다루지 않는다.", correctAnswer: "X", explanation: " 경기도의회는 경기도 예산안을 심의하고 결정하는 중요한 권한이 있습니다." },
  { question: "경기도의회는 경기도민의 불편함을 해결하거나 더욱 편리하게 만들기 위한 규칙(조례)을 만든다.", correctAnswer: "O", explanation: " 지역 문제 해결, 복리증진을 위한 다양한 조례가 제·개정됩니다." },
  { question: "경기도의회는 경기도를 더 좋게 만들기 위해 일하는 곳이다.", correctAnswer: "O", explanation: " 경기도의회는 도민(주민)을 대표하는 의원들이 정책을 만들고, 예산을 심의·의결하는 기관이에요." },
  { question: "경기도의회가 한 번 결정한 내용은, 잘못이 있어도 다시 고칠 수 없다.", correctAnswer: "X", explanation: " 필요하면 재의나 조례 개정 등을 통해 수정할 수 있습니다." },
  { question: "경기도의회가 하는 일은 신문이나 뉴스로 전혀 나오지 않는다.", correctAnswer: "X", explanation: " 언론에서도 지방의회의 주요 결정, 이슈를 보도합니다." },
  { question: "경기도의회 의원은 여러 위원회 중 한 곳에서만 일할 수 있고, 절대 겸직할 수 없다.", correctAnswer: "X", explanation: " 일반적으로 하나의 상임위원회를 맡지만, 필요에 따라 운영위원회 등 겸직할 수도 있습니다." },
  { question: "경기도민은 의회에 직접 찾아가서 “내가 겪고 있는 어려움을 해결해 달라”고 말하거나 제안할 수 있다.", correctAnswer: "O", explanation: " 청원, 민원 접수 등 다양한 경로로 의견을 전달할 수 있습니다." },
  { question: "경기도교육청 예산도 경기도의회에서 심의할 수 있다.", correctAnswer: "O", explanation: " 도교육청 예산도 의회의 예산결산특별위원회 등을 통해 심사·의결합니다." },
  // ... 여기서 더 추가하시면 됩니다.
];

const quizDataMedium = [
  // 학생용 30문항
  { question: "「경기도의회 회의규칙」에 따르면, 의장과 부의장은 무기명투표로 선출된다.", correctAnswer: "O", explanation: "「경기도의회 회의규칙」 제9조에 따르면, 의장·부의장 선거는 무기명투표로 진행하도록 되어 있습니다." },
  { question: "회의 중 의원이 무단으로 2일 연속 결석하면, 의장은 그 의원의 출석을 요구해야 한다.", correctAnswer: "O", explanation: "「경기도의회 회의규칙」 제7조에 따르면, 정당한 이유 없이 2일 이상 결석 시 의장은 해당 의원에게 출석을 요구해야 합니다." },
  { question: "특별위원회는 21명 이내로 구성되며, 기간을 정해 일시적으로 운영될 수 있다.", correctAnswer: "O", explanation: "「경기도의회 위원회 구성·운영 조례」제9조에 특별위원회 정원·활동기간 규정이 있습니다." },
  { question: "주민들이 조례를 제정해 달라고 청구하려면 “주민조례발안” 제도를 이용할 수 있다.", correctAnswer: "O", explanation: "일정 서명 등 요건을 충족하면, 직접 조례안을 의회에 청구할 수 있습니다." },
  { question: "조례안에 예산이 수반되는 경우, 발의 시 비용추계서를 첨부해야 할 수도 있다.", correctAnswer: "O", explanation: "비용추계 등 재정적 영향 분석이 필요합니다." },
  { question: "조례안 발의를 하려면, 의원 10명 이상의 동의가 있어야 본회의에 정식으로 안건이 될 수 있다.", correctAnswer: "O", explanation: "일정 수 이상의 의원(경기도의 경우 10명 이상) 연서로 조례안을 발의할 수 있습니다." },
  { question: "정례회는 매년 2회 개최하며, 예산안·결산안 심의, 행정사무감사 등이 포함되는 경우가 많다.", correctAnswer: "O", explanation: "정례회는 예산·결산, 행정사무감사가 주로 열리는 중요한 회기입니다." },
  { question: "임시회가 아닌 정례회는 매년 2회, 일정 기간 열린다.", correctAnswer: "O", explanation: "지방의회는 지방자치법에 따라 매년 정례회를 2회 이상 개최합니다." },
  { question: "의원이 청가(請暇)를 신청하지 않고 여러 번 결석해도, 아무런 불이익이 없다.", correctAnswer: "X", explanation: "정당한 사유 없이 계속 결석 시 윤리특위 징계 대상이 될 수 있으며, 의장이 출석 요구를 합니다." },
  { question: "의원이 대집행부(도지사·교육감) 질문을 할 때, “일문일답” 혹은 “일괄질문·일괄답변” 방식을 쓸 수 있다.", correctAnswer: "O", explanation: "「경기도의회 회의규칙」 제92조에 명시된 공식 질의응답 방식입니다." },
  { question: "의원들은 도지사가 편성한 예산안을 그냥 승인만 하고, 어떤 수정이나 삭감 권한은 없다.", correctAnswer: "X", explanation: "지방의회는 예산안을 심의·의결해 예산 항목을 조정하거나 삭감할 수 있습니다." },
  { question: "윤리특별위원회는 의원의 윤리·자격·징계를 심사하는 역할을 한다.", correctAnswer: "O", explanation: "윤리특위는 의원 징계안, 윤리 심사 등 처리하는 특별위원회입니다." },
  { question: "위원회에서 안건을 심사할 때, 축조심사를 생략하려면 위원회 의결로 결정할 수 있다.", correctAnswer: "O", explanation: "「경기도의회 회의규칙」 제76조 등에서 필요한 경우 위원회 의결로 축조심사를 생략할 수 있다고 규정합니다." },
  { question: "위원회에서 “공청회”를 열면 주민이나 전문가가 와서 해당 안건에 대해 의견을 말할 수 있다.", correctAnswer: "O", explanation: "전문지식이 필요한 경우나 이해관계가 큰 경우 공청회를 통해 의견을 수렴할 수 있습니다." },
  { question: "예결특위가 삭제한 예산 항목은 상임위원회의 동의 없이도 다시 부활시킬 수 있다.", correctAnswer: "X", explanation: "삭감 예산 재조정은 소관 상임위원회 동의가 필요합니다." },
  { question: "상임위원장은 의장 선거와 동일하게 본회의 무기명투표로 선출된다.", correctAnswer: "O", explanation: "상임위원장도 본회의 투표(무기명)로 선출합니다." },
  { question: "상임위원은 2년 임기로 선임되며, 본회의 의결 없이도 의장이 임의로 마음대로 교체할 수 있다.", correctAnswer: "X", explanation: "「경기도의회 위원회 구성·운영 조례」 제13조에 따르면, 상임위원 선임·교체는 교섭단체 추천과 본회의 의결 절차 등을 거칩니다." },
  { question: "본회의 의결을 마친 후 조례안 등 의결서류는 의장이 도지사나 교육감에게 이송한다.", correctAnswer: "O", explanation: "본회의에서 의결된 후, 의장은 도지사·교육감에게 이송해 공포나 집행과정을 진행합니다." },
  { question: "무제한토론(필리버스터)는 본회의가 아니어도, 위원회에서도 자유롭게 진행할 수 있다.", correctAnswer: "X", explanation: "무제한토론은 본회의에서 특정 안건에 대해 활용하는 제도이며, 위원회에서는 일반적으로 적용되지 않습니다." },
  { question: "경기도청 예산과는 달리, 경기도교육청 예산은 경기도의회 소관이 아니어서 심의할 수 없다.", correctAnswer: "X", explanation: "도교육청 예산도 의회에서 심의·의결합니다. (도청, 도교육청 예결특위 분리 운영)" },
  { question: "경기도의회에서 한 결정이나 조례를 위반하면 형사처벌을 받게 된다.", correctAnswer: "X", explanation: "조례 위반 시, 처벌 규정이 있다면 과태료나 이행강제금 등 행정상 제재가 가능하나, 모든 경우 형사처벌이 적용되는 것은 아님." },
  { question: "경기도의회에서 의장·부의장이 동시에 사고가 있는 경우, 최다선 의원이 당연직 의장이 되어 회의 전체를 진행한다.", correctAnswer: "X", explanation: "「경기도의회 회의규칙」 제14조에 따르면, 의장·부의장 전원 사고 시 '임시의장 선출' 절차를 본회의에서 거칩니다(최다선 의원이 임시로 회의를 주재해 선출)." },
  { question: "경기도의회에서 예산을 심사할 때, 원칙적으로 소관 상임위원회 예비심사를 거친 뒤 예결특위에서 종합 심사를 진행한다.", correctAnswer: "O", explanation: "상임위 예비심사 → 예결특위 종합심사 → 본회의 최종 의결 절차로 진행됩니다." },
  { question: "경기도의회에는 상임위원회가 여러 개 있고, 필요하면 특정 안건을 위해 특별위원회도 구성할 수 있다.", correctAnswer: "O", explanation: "상임위원회(의회운영위, 기획재정위 등)가 상시 운영되고, 특정사안에 대해 특별위원회가 임시 구성됩니다." },
  { question: "경기도의회는 회의 중 방청객이나 관계 공무원이 발언을 요구하면 언제든 자유롭게 마이크를 넘겨 발언시킬 수 있다.", correctAnswer: "X", explanation: "발언 허가는 의장(또는 위원장)이 결정하며, 방청객은 일반적으로 발언권이 없습니다(필요 시 공청회 등을 통해 공식 발언 가능)." },
  { question: "경기도의회는 지방세 등 주민 생활에 영향을 미치는 조례를 제정·개정할 수 있으며, 이는 법률과 같은 효력을 가진다.", correctAnswer: "X", explanation: "조례도 법규범이지만, 법률과 동등한 효력이 아니라 법률 하위의 자치법규입니다." },
  { question: "경기도의회는 비공개 회의를 할 수 없고, 항상 모든 회의가 일반인에게 공개된다.", correctAnswer: "X", explanation: "「지방자치법」 및 의회 규칙에 따른 일정 요건 충족 시, 비공개회의를 진행할 수도 있습니다." },
  { question: "경기도의회 회의는 원격영상회의 방식으로도 진행할 수 있다(예: 감염병 상황 등).", correctAnswer: "O", explanation: "「경기도의회 회의규칙」 제62조에 관련 근거가 있으며, 의장과 교섭단체 대표의원의 합의로 원격영상회의가 가능합니다." },
  { question: "「경기도의회 회의규칙」에서는 예산안에 대해 무제한토론(필리버스터)을 허용한다.", correctAnswer: "X", explanation: "회의규칙상 예산안은 무제한토론 대상에서 제외됩니다." },
  { question: "경기도의회 의원 임기는 4년이며, 재선거를 통해 연임도 가능하다.", correctAnswer: "O", explanation: "지방의원 임기는 4년, 재선 가능. (「지방자치법」 제39조)" },  
  // ... 
];

const quizDataHard = [
  // 일반인용 30문
  { question: "회의가 비공개로 진행된 경우, 그 회의록은 의원에게도 전혀 공개되지 않는다.", correctAnswer: "X", explanation: "의원은 비공개 회의록을 열람할 수 있으며, 다만 외부로의 무단 공개는 금지됩니다." },
  { question: "행정사무감사는 도내 모든 기관을 대상으로 무제한으로 실시할 수 있다.", correctAnswer: "X", explanation: "행정사무감사는 법령과 조례가 정한 범위 내에서, 경기도청 및 소관 기관 등에 대해 한정적으로 실시합니다." },
  { question: "지방자치법 개정으로 인해, 지방의회는 일부 지방공무원 임명권을 독립적으로 갖게 되었다.", correctAnswer: "O", explanation: "2022년 지방자치법 전부개정으로 의회사무처(국)의 인사권이 의장에게 부여되었음.2022년 지방자치법 전부개정으로 의회사무처(국)의 인사권이 의장에게 부여되었음.(의회사무처 인사권 독립)" },
  { question: "경기도의회의 의결을 거쳐 제정된 조례는 법률 하위의 자치법규이므로, 상위법(법률)에 위배되지 않는 범위에서만 효력을 가진다.", correctAnswer: "O", explanation: "조례는 법률의 위임을 받아 제정되며, 상위 법령 위반 시 무효나 집행정지 가능성이 있습니다." },
  { question: "도의원이 회의 중 품위 손상 행동을 했을 때는, 바로 의장이 징계를 내릴 수 있다.", correctAnswer: "X", explanation: "의원 징계는 윤리특위 심사→본회의 의결 절차가 필요하며, 즉결처분은 안 됩니다(단, 경고·제지 등 일시적 질서유지조치는 가능)." },
  { question: "조례안에 대해 도지사나 교육감이 재의 요구를 할 수 있으며, 재의에서 다시 가결되면 도지사·교육감은 그 조례를 공포해야 한다.", correctAnswer: "O", explanation: "지방자치법상 조례에 대한 재의 절차가 있으며, 재의에서 의회가 재차 의결하면 공포해야 합니다." },
  { question: "조례안 등 의안이 표결에서 과반 찬성으로 가결되면, 재적의원 과반수 출석 여부와 상관없이 효력이 발생한다.", correctAnswer: "X", explanation: "표결 성립 요건에 ‘재적의원 과반수 출석’이 기본적으로 충족되어야 합니다(지방자치법 등 규정)." },
  { question: "조례를 발의할 때는 지역구 의원만 서명하면 되고, 비례대표 의원 서명은 효력이 없다.", correctAnswer: "X", explanation: "지역구·비례대표 구분 없이 모두 동등하게 조례 발의에 참여할 수 있습니다." },
  { question: "자격심사 청구가 들어온 의원은 윤리특별위원회를 거치지 않고, 본회의에서 바로 자격심사를 진행한다.", correctAnswer: "X", explanation: "의원 자격심사 청구는 윤리특별위원회 심사를 거쳐 본회의에서 최종 판단합니다." },
  { question: "일반 주민도 도의회 공청회에 참석하여 발언할 수 있으나, 이는 위원회 결정(초청) 및 의장·위원장 허가가 있어야 가능하다.", correctAnswer: "O", explanation: "공청회 진술인은 위원회가 선정하거나 초청 요청을 받아서 발언할 수 있습니다." },
  { question: "의회는 행정사무감사를 통해 집행부(도청·교육청 등)의 조직 운영과 예산 집행을 상세히 조사·감사할 수 있다.", correctAnswer: "O", explanation: "지방자치법 등에 근거해 매년 일정 기간 행정사무감사가 실시됩니다." },
  { question: "예산안을 상임위원회에서 삭감한 부분을 예결특위가 다시 증액하거나 다른 비목을 설치하려면 해당 상임위의 동의가 필수적이다.", correctAnswer: "O", explanation: "예산 항목 증액·신설 시 소관 상임위 동의가 필요(예결특위의 일방적 처리 불가)." },
  { question: "예산안 심사 시, 삭감된 세출예산 항목에 대해서는 지자체장이 집행 과정에서 임의로 부활·증액할 수 있다.", correctAnswer: "X", explanation: "의회에서 삭감된 항목은 지자체장이 임의로 되살릴 수 없으며, 추경 편성 시 다시 심의를 받아야 합니다." },
  { question: "예산결산특별위원회는 회계연도가 시작된 후 예산이 집행되는 상황을 감사할 수 없다.", correctAnswer: "X", explanation: "예결특위는 예산안·결산안을 중점적으로 다루지만, 본회의 의결에 따라 추가경정예산 등도 심사합니다. 별도로 행정사무감사 등에서 집행 상황을 확인할 수 있습니다." },
  { question: "어린이·청소년 등 미성년자는 조례안 발의가 불가능하므로, 주민조례발안에도 참여할 수 없다.", correctAnswer: "X", explanation: "조례발안 주체(청구인)는 나이 요건을 따지지 않고, 주민투표권과는 별도의 기준이 있습니다(해당 법령·조례 세부조항 확인 필요)." },
  { question: "상임위원장과 부위원장은 의장·부의장의 관할 명령만으로 즉시 교체될 수 있다.", correctAnswer: "X", explanation: "위원장·부위원장 교체나 중도사임에는 절차와 본회의 동의(의결) 등이 필요합니다." },
  { question: "본회의에서 표결 방식은 원칙적으로 무기명투표이지만, 의장 선거·부의장 선거 등은 기명투표로 진행하도록 규정한다.", correctAnswer: "X", explanation: "기본적으로는 전자투표에 의한 기록표결로 가부를 결정하고(기명투표), 의장·부의장 선거 등 법령에서 정한 경우 무기명투표를 시행합니다." },
  { question: "본회의 의결이 있으면, 경기도지사는 법령에 근거하지 않아도 의회의 의결만으로 곧바로 해당 정책을 시행해야 한다.", correctAnswer: "X", explanation: "법령 근거가 필요합니다. 조례로 정해야 할 사항이나 예산이 필요한 사업 등은 법적 절차를 따라야 합니다." },
  { question: "본회의 의결로 운영위원회에 안건이 재회부되면, 운영위원회는 그 안건을 다시 본회의에 상정하지 않아도 된다.", correctAnswer: "X", explanation: "재회부된 안건은 다시 심사 후, 본회의에 재보고·재상정해야 의결 절차가 종결됩니다." },
  { question: "무제한 토론(필리버스터)을 진행하려면 재적의원 3분의 1 이상의 요구서가 필요하고, 안건이 의사일정에 상정되기 전까지 요청해야 한다.", correctAnswer: "O", explanation: "「경기도의회 회의규칙」 제50조의2 등에 따라 필리버스터에 대한 구체 절차가 규정되어 있습니다." },
  { question: "만약 예산이 미리 확정돼야 하는데 의회 의결이 지연되면, 도지사가 임의로 임시예산을 집행할 수 있다.", correctAnswer: "X", explanation: "예산안 의결이 지연되면 준예산 편성 등 지방자치법에 따른 제한적인 범위에서만 집행이 가능합니다." },
  { question: "교섭단체 대표회의는 의장이 주관하여 의사일정, 회의 운영 등에 대한 협의를 하는 기구이며, 교섭단체가 없으면 구성하지 않는다.", correctAnswer: "O", explanation: "교섭단체가 없는 의회라면 대표의원 협의체 자체가 성립하기 어려우며, 교섭단체 대표회의는 교섭단체를 전제로 합니다." },
  { question: "경기도의회에서는 상임위원회 간 의견 충돌이 있을 시, 연석회의 또는 안건조정위원회를 통해 조정할 수 있다.", correctAnswer: "O", explanation: "「경기도의회 회의규칙」 제80조, 제28조의2에 따라 연석회의나 안건조정위원회가 운영될 수 있습니다." },
  { question: "경기도의회는 필요하면 해외연수나 현지시찰을 할 수 있으나, 원칙적으로 본회의 의결 없이 의원 개인이 임의로 예산을 쓰는 것은 불가능하다.", correctAnswer: "O", explanation: "공식 승인·절차가 필요하며, 무단 예산사용은 불가능합니다." },
  { question: "경기도의회는 의원 전원으로 구성된 본회의 외에도, 운영위원회를 제외한 다른 상임위원회는 모두 임시적으로만 운영된다.", correctAnswer: "X", explanation: "운영위원회 외에도 기획재정위원회, 보건복지위원회 등 다수의 상임위원회가 정식으로 상시 운영됩니다." },
  { question: "경기도의회는 「지방자치법」에서 정한 광역의회로, 조례 제정권과 예산 심의권, 행정사무감사권을 행사한다.", correctAnswer: "O", explanation: "경기도의회는 지방자치법에 근거한 광역의회로, 입법·예산·감사 권한 등을 갖습니다." },
  { question: "「경기도의회 회의규칙」에 따르면, 부칙을 통해 규정 시행일이나 경과조치를 별도로 정할 수 있다.", correctAnswer: "O", explanation: "회의규칙·조례 모두 부칙으로 시행일, 경과규정 등을 따로 명시할 수 있습니다." },
  { question: "경기도의회 의회운영위원회는 상시적으로 의회운영 전반, 교섭단체 대표의원 협의 등을 주관한다.", correctAnswer: "O", explanation: "의회운영위원회는 의회 운영과 의회사무처 관련 사무, 교섭단체와의 협의 등을 맡습니다." },
  { question: "경기도교육청 관련 예·결산도 경기도의회가 심의·의결하므로, 경기도청 예결특위와 도교육청 예결특위를 별도로 둘 수 있다.", correctAnswer: "O", explanation: "「경기도의회 위원회 구성·운영 조례」에 따라 경기도청 예결특위, 도교육청 예결특위를 구분하여 설치합니다." },
  { question: "「경기도의회 회의규칙」에 따르면, 위원회가 의결하면 전문가를 일정 기간 위촉하여 안건 심사를 지원받을 수 있다.", correctAnswer: "O", explanation: "“제8조(전문가의 활용)” 등에 근거해 필요한 경우 전문가를 적극적으로 활용할 수 있습니다." },
  // ... 
];


/************************************************************
 * 전역 변수
 ************************************************************/
let currentQuizData = [];         // 난이도별 30개 중 추출된 10문항
let currentQuestionIndex = 0;      // 현재 문제 순서
let score = 0;                     // 정답 개수


window.addEventListener('DOMContentLoaded', () => {
  // 모달창 닫기 버튼
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => {
      hideModal();
      // 다음 문제로
      currentQuestionIndex++;
      if (currentQuestionIndex < currentQuizData.length) {
        showQuestion();
      } else {
        showResult(); // 전부 다 풀었으면 결과
      }
    });
  }
});


/************************************************************
 * 난이도 선택 → 퀴즈 시작
 ************************************************************/
function startQuiz(difficulty) {
  // 난이도별 30문제 데이터 중 10문항 랜덤 추출
  if (difficulty === 'easy') {
    currentQuizData = getRandomTen(quizDataEasy);
  } else if (difficulty === 'medium') {
    currentQuizData = getRandomTen(quizDataMedium);
  } else if (difficulty === 'hard') {
    currentQuizData = getRandomTen(quizDataHard);
  }

  // 변수 초기화
  currentQuestionIndex = 0;
  score = 0;

  // 난이도 선택 박스 숨기고, 문제 표시 영역 보이기
  document.getElementById('difficultySelectBox').style.display = 'none';
  // 진행 바와 문제 박스 보이기
  document.getElementById('progressBarContainer').style.display = 'block';
  document.getElementById('questionBox').style.display = 'block';

  // 첫 문제 표시
  showQuestion();
}


/************************************************************
 * 랜덤 10문항 추출 함수
 ************************************************************/
function getRandomTen(fullArray) {
  // shallow copy 후 shuffle, 앞에서 10개 slice
  let copied = [...fullArray];
  shuffleArray(copied);
  return copied.slice(0, 10);
}

// 피셔–예이츠( Fisher-Yates ) 셔플 알고리즘
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

/************************************************************
 * updateProgressBar: 진행 바 width, 텍스트 갱신
 ************************************************************/
function updateProgressBar() {
  const progressBar = document.getElementById('progressBar');
  const progressText = document.getElementById('progressText');

  const total = currentQuizData.length;  // 보통 10
  const current = currentQuestionIndex + 1; // 1-based index

  // 진행 비율 계산
  const progressPercent = (current / total) * 100;

  // 바 너비 설정 (0% ~ 100%)
  progressBar.style.width = progressPercent + "%";

  // 텍스트: "현재 / 전체"
  progressText.textContent = `${current} / ${total}`;
}


/************************************************************
 * 문제 표시
 ************************************************************/
function showQuestion() {
  const questionText = document.getElementById('questionText');
  const currentData = currentQuizData[currentQuestionIndex];
  questionText.textContent = currentData.question;

  // 진행 바 업데이트
  updateProgressBar();
}


/************************************************************
 * 정답 체크
 ************************************************************/
function checkAnswer(userAnswer) {
  const currentData = currentQuizData[currentQuestionIndex];
  const isCorrect = (userAnswer === currentData.correctAnswer);
  if (isCorrect) score++;

  // 모달창에 결과 표시
  const modalTitle = document.getElementById('modalTitle');
  const modalExplanation = document.getElementById('modalExplanation');
  
  modalTitle.textContent = isCorrect ? "정답😃" : "오답😨";
  modalExplanation.textContent = currentData.explanation;

  showModal();
}


/************************************************************
 * 모달 제어
 ************************************************************/
function showModal() {
  const modalOverlay = document.getElementById('modalOverlay');
  modalOverlay.style.display = 'flex';
}

function hideModal() {
  const modalOverlay = document.getElementById('modalOverlay');
  modalOverlay.style.display = 'none';
}


/************************************************************
 * 결과 표시
 ************************************************************/
function showResult() {
  // 문제 표시 영역 숨기기
  document.getElementById('questionBox').style.display = 'none';
  document.getElementById('progressBarContainer').style.display = 'none';

  // 최종 스코어 표시
  const resultBox = document.getElementById('resultBox');
  const scoreText = document.getElementById('scoreText');
  scoreText.textContent = `당신의 점수는 ${score} / ${currentQuizData.length} 입니다!`;
  const scoreMessage = document.getElementById('scoreMessage'); // 메시지 요소
  const userNumberDisplay = document.getElementById('userNumber'); // 유저 번호 표시

  const total = currentQuizData.length; // 총 문제수 (10)
  const ratio = score / total;

  // ✅ 🔥 1. 오늘 날짜 가져오기
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD 형식

  // ✅ 🔥 2. localStorage에서 오늘 참여 인원 카운트 가져오기
  let todayCount = localStorage.getItem(today) ? parseInt(localStorage.getItem(today)) : 0;
  todayCount++; // 오늘 퀴즈 참여 인원 +1
  localStorage.setItem(today, todayCount); // 저장

  // 예: 점수 비율에 따라 메시지 분기
  if(ratio === 1){
    scoreMessage.textContent = "완벽합니다! 모든 문제 정답!";
  } else if(ratio >= 0.9){
    scoreMessage.textContent = "훌륭한 점수입니다!";
  } else if(ratio >= 0.7){
    scoreMessage.textContent = "좋은 성적입니다!";
  } else if(ratio >= 0.5){
    scoreMessage.textContent = "절반 이상은 맞췄네요, 조금 더 분발!";
  } else {
    scoreMessage.textContent = "아쉽습니다. 다시 도전해 보세요.";
  }

  // ✅ 🔥 4. 성적표에 표시
  scoreText.textContent = `${score} / ${total}`;
  userNumberDisplay.innerHTML = `</br><strong><u>오늘의 ${todayCount}번째 도전자</u></strong>`;
  /* userNumberDisplay.textContent = `오늘의 ${todayCount}번째 도전자; 에서 앞부분 수정했음*/

  resultBox.style.display = 'block';
}

/************************************************************
 * SNS모달창 관련
 ************************************************************/
function openSnsModal() {
  const overlay = document.getElementById('snsModalOverlay');
  overlay.style.display = 'flex';
}

function closeSnsModal() {
  const overlay = document.getElementById('snsModalOverlay');
  overlay.style.display = 'none';
}

// SNS모달창 처음으로 돌아가기 버튼 관련
function resetSNSPage() {
  let iframe = document.getElementById("snsIframe");
  iframe.src = "https://blog.naver.com/PostList.nhn?blogId=gassembly&from=postList&categoryNo=42";
}

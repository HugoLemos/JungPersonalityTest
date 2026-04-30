Questionnaire__c questionnaire = new Questionnaire__c(
    ExternalId__c = 'JungianQuestionnaire1',
    Name          = 'Jungian Personality Assessment',
    Introduction_Text__c = '<p>Read each question carefully and do not worry about giving the “right” answer. In this questionnaire there are no “right” or “wrong” answers. Your responses may help to show how you prefer to see things and how you prefer to make decisions.</p><p><br></p><p>Do not think too long before answering. If you cannot decide which answer to give to a question, skip that question and move immediately on to the next one. If you skip any questions, be careful not to mark the following answer in the wrong place.</p><p><br></p><p><strong style="background-color: rgb(255, 255, 255);">But do try to answer all questions.</strong></p><p><br></p><p>Do not mark an answer at random (Do not guess!).</p>',
    Is_Active__c = true,
    Questions_Per_Page__c = 3
);

upsert questionnaire ExternalId__c;

List<Question__c> questions = new List<Question__c>();

List<List<String>> qas = new List<List<String>>{

    new List<String>{
        'When you are learning something new, you prefer...',
        'concepts, patterns, and the bigger picture.',
        'Intuition',
        'clear facts and step-by-step examples',
        'Sensing'
    },
    new List<String>{
        'After a busy day with lots of interaction, you typically feel best when you...',
        'meet or message people to keep the energy going.',
        'Extroverted',
        'have quiet time alone to recharge',
        'Introverted'
    },
    new List<String>{
        'In the middle of a discussion among colleagues, your strongest impulse is to...',
        'state what seems logically correct to you',
        'Thinking',
        'maintain a positive atmosphere in the group.',
        'Feeling'
    },
    new List<String>{
        'When someone makes a remark or comment, you...',
        'take it mostly at face value',
        'Sensing',
        'wonder what might be behind it.',
        'Intuition'
    },
    new List<String>{
        'In group discussions, your natural tendency is to...',
        'observe first and speak when you are ready',
        'Introverted',
        'jump in early and think out loud.',
        'Extroverted'
    },
    new List<String>{
        'When making an important decision, you listen more to...',
        'your feelings and what seems right.',
        'Feeling',
        'your reason and consistency',
        'Thinking'
    },
    new List<String>{
        'When you read a report, you tend to focus on...',
        'the implications and what it suggests overall.',
        'Intuition',
        'the concrete details and what is explicitly stated',
        'Sensing'
    },
    new List<String>{
        'When you have an idea, you are more likely to...',
        'reflect on it privately before sharing',
        'Introverted',
        'share it quickly and refine it through discussion.',
        'Extroverted'
    },
    new List<String>{
        'When resolving conflict, you usually prefer to...',
        'seek mutual understanding and restore harmony.',
        'Feeling',
        'define facts, responsibilities, and next steps',
        'Thinking'
    },
    new List<String>{
        'At a social event, you usually...',
        'move between groups and chat with many people.',
        'Extroverted',
        'have one or two deeper conversations',
        'Introverted'
    },

    new List<String>{
        'If you were to choose a professional activity, you would be more attracted to...',
        'imagination and creation.',
        'Intuition',
        'usefulness and practicality',
        'Sensing'
    },
    new List<String>{
        'When meeting someone new, you usually...',
        'feel comfortable quickly.',
        'Extroverted',
        'take time to warm up',
        'Introverted'
    },
    new List<String>{
        'When a friend comes to you with a serious problem, your first impulse is to...',
        'comfort them and help them feel understood.',
        'Feeling',
        'analyse causes and propose solutions',
        'Thinking'
    },
    new List<String>{
        'When visiting an art exhibition, you prefer works that...',
        'feel symbolic, abstract, or suggestive.',
        'Intuition',
        'feel realistic and grounded',
        'Sensing'
    },
    new List<String>{
        'If a conversation pauses, you usually...',
        'feel an urge to fill the gap.',
        'Extroverted',
        'feel comfortable with the silence',
        'Introverted'
    },
    new List<String>{
        'When you disagree with someone, you usually focus on...',
        'the impact of your words on the relationship.',
        'Feeling',
        'the correctness of the argument',
        'Thinking'
    },
    new List<String>{
        'When planning an outing next weekend, you...',
        'prefer a clear plan and timing',
        'Sensing',
        'prefer to keep it open and spontaneous.',
        'Intuition'
    },
    new List<String>{
        'In meetings, you are more likely to...',
        'contribute spontaneously as ideas arise.',
        'Extroverted',
        'prepare your thoughts and then contribute',
        'Introverted'
    },
    new List<String>{
        'When you review a plan, you tend to evaluate it by...',
        'whether it is fair and considerate.',
        'Feeling',
        'whether it is coherent and workable',
        'Thinking'
    },
    new List<String>{
        'Your main interest in relation to people is more often...',
        'what someone does or does not do',
        'Sensing',
        'why someone is the way they are.',
        'Intuition'
    },

    new List<String>{
        'If you are invited to a big gathering, you generally prefer to...',
        'go and enjoy the buzz of lots of people.',
        'Extroverted',
        'go only if you can keep it short or stay close to familiar people',
        'Introverted'
    },
    new List<String>{
        'When shopping at the supermarket, it is more common for you to...',
        'try new and different brands.',
        'Intuition',
        'stick to proven, familiar brands',
        'Sensing'
    },
    new List<String>{
        'When giving feedback, you tend to prioritise...',
        'accuracy and directness',
        'Thinking',
        'encouragement and sensitivity.',
        'Feeling'
    },
    new List<String>{
        'In open-plan environments, you tend to work best when you can...',
        'focus with minimal interruptions',
        'Introverted',
        'collaborate freely and talk as needed.',
        'Extroverted'
    },
    new List<String>{
        'When a rule seems unfair in a specific case, you are more likely to...',
        'adjust based on the person and context.',
        'Feeling',
        'apply the rule consistently',
        'Thinking'
    },
    new List<String>{
        'In your day-to-day life, if you have an appointment, you usually...',
        'feel comfortable adapting the timing as things evolve.',
        'Intuition',
        'aim to be punctual',
        'Sensing'
    },
    new List<String>{
        'When you go shopping, you typically...',
        'enjoy friendly chatter with staff.',
        'Extroverted',
        'keep conversation brief and functional',
        'Introverted'
    },
    new List<String>{
        'When making choices, you usually trust more...',
        'what is compassionate and human.',
        'Feeling',
        'what is consistent and objective',
        'Thinking'
    },
    new List<String>{
        'When choosing a book to read, you prefer...',
        'fiction, fantasy, or imaginative themes.',
        'Intuition',
        'non-fiction that deals with real, current facts',
        'Sensing'
    },

    new List<String>{
        'At a party, it is more common that you...',
        'stay engaged and ride the energy.',
        'Extroverted',
        'step outside or take breaks to reset',
        'Introverted'
    },
    new List<String>{
        'When you enter a room full of people, you tend to...',
        'scan the room quietly and choose where to engage',
        'Introverted',
        'start engaging quickly and naturally.',
        'Extroverted'
    },
    new List<String>{
        'If someone is upset, your first response is usually to...',
        'acknowledge their feelings and offer comfort.',
        'Feeling',
        'ask what happened and what can be done',
        'Thinking'
    },
    new List<String>{
        'When you stop to observe an event, what attracts your attention most is...',
        'the important details',
        'Sensing',
        'the event as a whole.',
        'Intuition'
    },
    new List<String>{
        'When you receive praise, you usually...',
        'feel energised and respond enthusiastically.',
        'Extroverted',
        'feel slightly self-conscious and keep it low-key',
        'Introverted'
    },
    new List<String>{
        'In leadership, you tend to admire more...',
        'care, fairness, and emotional intelligence.',
        'Feeling',
        'clarity, firmness, and principles',
        'Thinking'
    },
    new List<String>{
        'Keeping objects around you in order is...',
        'something you do when it becomes necessary.',
        'Intuition',
        'a natural and satisfying habit',
        'Sensing'
    },
    new List<String>{
        'When you are under pressure, you tend to rely more on...',
        'detached analysis',
        'Thinking',
        'personal conviction and empathy.',
        'Feeling'
    },
    new List<String>{
        'Suppose you go somewhere every day. Your tendency is to...',
        'try new routes when you can.',
        'Intuition',
        'take the most practical familiar route',
        'Sensing'
    },

    new List<String>{
        'Your default weekend plan tends to be...',
        'something social and lively.',
        'Extroverted',
        'something quiet and restorative',
        'Introverted'
    },
    new List<String>{
        'When you need to judge someone, your main tendency is to seek...',
        'justice and consistency',
        'Thinking',
        'mercy and understanding.',
        'Feeling'
    },
    new List<String>{
        'When reading a book, if halfway through it becomes disappointing, you...',
        'switch to another book that interests you more.',
        'Intuition',
        'finish it to see it through',
        'Sensing'
    },
    new List<String>{
        'When you are interrupted while working, you usually...',
        'switch context easily and carry on.',
        'Extroverted',
        'find it disruptive and need time to refocus',
        'Introverted'
    },
    new List<String>{
        'In teamwork, you naturally contribute more by...',
        'supporting people and strengthening cohesion.',
        'Feeling',
        'spotting flaws and improving logic',
        'Thinking'
    },
    new List<String>{
        'When doing something that most people do, you prefer to...',
        'do it in your own way as it occurs to you.',
        'Intuition',
        'do it the standard way that works',
        'Sensing'
    },
    new List<String>{
        'When you receive criticism, you are more likely to...',
        'separate it from emotion and extract what is useful',
        'Thinking',
        'feel it personally and reflect on the relationship.',
        'Feeling'
    },
    new List<String>{
        'When making friends, you typically...',
        'keep a wide circle and stay active socially.',
        'Extroverted',
        'keep a small circle and go deep',
        'Introverted'
    },
    new List<String>{
        'If you received your pay today, what would your main tendency be?',
        'to spend on something interesting or inspiring.',
        'Intuition',
        'to save and plan for future needs',
        'Sensing'
    },

    new List<String>{
        'When you negotiate, you usually aim for...',
        'the most rational agreement',
        'Thinking',
        'the most mutually acceptable outcome.',
        'Feeling'
    },
    new List<String>{
        'When you are stressed, you tend to...',
        'talk it through to feel lighter.',
        'Extroverted',
        'withdraw a bit to regain clarity',
        'Introverted'
    },
    new List<String>{
        'Regarding time, you generally...',
        'track it carefully and plan around it',
        'Sensing',
        'treat it flexibly and adapt as needed.',
        'Intuition'
    },
    new List<String>{
        'When you are in a new team, you usually...',
        'observe dynamics before engaging a lot',
        'Introverted',
        'engage quickly to build rapport.',
        'Extroverted'
    },
    new List<String>{
        'When solving a problem, you are more comfortable with...',
        'new approaches and what might work.',
        'Intuition',
        'proven methods and what has worked before',
        'Sensing'
    },
    new List<String>{
        'When you consider success, you think first about...',
        'meaning and impact on people.',
        'Feeling',
        'results and correctness',
        'Thinking'
    },
    new List<String>{
        'You usually prefer to get the news...',
        'from varied sources to spot trends and ideas.',
        'Intuition',
        'from reliable sources with clear facts',
        'Sensing'
    },
    new List<String>{
        'When you have free time, you typically prefer to...',
        'go out and be around people.',
        'Extroverted',
        'stay in and enjoy a solo activity',
        'Introverted'
    },
    new List<String>{
        'When choosing between two good options, you tend to choose the one that...',
        'feels most aligned with your values.',
        'Feeling',
        'makes the most logical sense',
        'Thinking'
    },

    new List<String>{
        'If you host a celebration, you prefer to...',
        'invite a few close friends',
        'Introverted',
        'invite a wide mix of friends and acquaintances.',
        'Extroverted'
    },
    new List<String>{
        'If you are alone for a long period, you usually...',
        'start craving external stimulation.',
        'Extroverted',
        'feel settled and productive',
        'Introverted'
    },
    new List<String>{
        'When observing a landscape, it is more common for you to...',
        'describe specific details you notice',
        'Sensing',
        'describe the overall impression and mood.',
        'Intuition'
    },
    new List<String>{
        'When a project is behind schedule, you are more likely to...',
        'prioritise morale and keeping people motivated.',
        'Feeling',
        'prioritise efficiency and clear decisions',
        'Thinking'
    },
    new List<String>{
        'When you are asked a question unexpectedly, you tend to...',
        'answer immediately and elaborate.',
        'Extroverted',
        'prefer a moment to think',
        'Introverted'
    },
    new List<String>{
        'When you are presented with instructions, you prefer...',
        'the goal and freedom to explore approaches.',
        'Intuition',
        'specific steps and concrete examples',
        'Sensing'
    },
    new List<String>{
        'When you have to network, you prefer...',
        'lots of quick introductions.',
        'Extroverted',
        'a few meaningful connections',
        'Introverted'
    },
    new List<String>{
        'When you are learning something new, you prefer to...',
        'learn best through interaction.',
        'Extroverted',
        'work it out privately first',
        'Introverted'
    },
    new List<String>{
        'In an election campaign, you tend to evaluate the candidate...',
        'by the trust and personal confidence they inspire.',
        'Feeling',
        'by plans, structure, and feasibility',
        'Thinking'
    },
    new List<String>{
        'When you have to solve a problem, it is more common for you to...',
        'ask how it would work in practice',
        'Sensing',
        'feel excited by where it could lead.',
        'Intuition'
    },

    new List<String>{
        'After brief contact with someone, do you usually...',
        'quickly sense what they might be like.',
        'Intuition',
        'wait to form an opinion based on more evidence',
        'Sensing'
    },
    new List<String>{
        'When you meet acquaintances, you usually prefer to...',
        'turn it into a longer chat.',
        'Extroverted',
        'keep it brief and polite',
        'Introverted'
    },
    new List<String>{
        'When you are in a group, you typically...',
        'join the group conversation actively.',
        'Extroverted',
        'focus on one person at a time',
        'Introverted'
    },
    new List<String>{
        'When you have good news, you are more likely to...',
        'share it broadly and celebrate openly.',
        'Extroverted',
        'share it with a small few',
        'Introverted'
    },
    new List<String>{
        'If you were a teacher, you would prefer to teach a...',
        'theoretical course.',
        'Intuition',
        'practical course',
        'Sensing'
    },
    new List<String>{
        'When you review a plan, you tend to evaluate it by...',
        'whether it is coherent and workable',
        'Thinking',
        'whether it is fair and considerate.',
        'Feeling'
    },
    new List<String>{
        'When you are alone at home for a long time, it is common for you to...',
        'let details slide while you follow interests.',
        'Intuition',
        'keep things orderly and consistent',
        'Sensing'
    },
    new List<String>{
        'When you disagree with someone, you usually focus on...',
        'the correctness of the argument',
        'Thinking',
        'the impact of your words on the relationship.',
        'Feeling'
    },
    new List<String>{
        'When you have an important decision, you usually...',
        'discuss it early to clarify your thinking.',
        'Extroverted',
        'think it through alone before discussing',
        'Introverted'
    },
    new List<String>{
        'When giving someone a gift, you prefer one that...',
        'will surprise or inspire the recipient.',
        'Intuition',
        'will be useful in everyday life',
        'Sensing'
    },

    new List<String>{
        'When you are in a group of people, you usually prefer to...',
        'take part in the group conversation.',
        'Extroverted',
        'talk to one person at a time',
        'Introverted'
    },
    new List<String>{
        'If you were to choose a professional activity, you would be more attracted to...',
        'usefulness and practicality',
        'Sensing',
        'imagination and creation.',
        'Intuition'
    },
    new List<String>{
        'When you need to judge someone, your main tendency is to seek...',
        'mercy and understanding.',
        'Feeling',
        'justice and consistency',
        'Thinking'
    },
    new List<String>{
        'When someone is upset, your first response is usually to...',
        'ask what happened and what can be done',
        'Thinking',
        'acknowledge their feelings and offer comfort.',
        'Feeling'
    },
    new List<String>{
        'When you receive praise, you usually...',
        'feel slightly self-conscious and keep it low-key',
        'Introverted',
        'feel energised and respond enthusiastically.',
        'Extroverted'
    },
    new List<String>{
        'In your day-to-day life, if you have an appointment, you usually...',
        'aim to be punctual',
        'Sensing',
        'feel comfortable adapting the timing as things evolve.',
        'Intuition'
    },
    new List<String>{
        'When solving a problem, you are more comfortable with...',
        'proven methods and what has worked before',
        'Sensing',
        'new approaches and what might work.',
        'Intuition'
    },
    new List<String>{
        'When you have free time, you typically prefer to...',
        'stay in and enjoy a solo activity',
        'Introverted',
        'go out and be around people.',
        'Extroverted'
    },
    new List<String>{
        'When you negotiate, you usually aim for...',
        'the most mutually acceptable outcome.',
        'Feeling',
        'the most rational agreement',
        'Thinking'
    },
    new List<String>{
        'You prefer to be regarded as someone...',
        'visionary and inventive.',
        'Intuition',
        'practical and dependable',
        'Sensing'
    },

    // ---- Remaining items to complete 100 (continuing shuffle + pre-swaps) ----

    new List<String>{
        'When you are in the company of other people, you usually prefer to...',
        'listen more than you speak',
        'Introverted',
        'speak more than you listen.',
        'Extroverted'
    },
    new List<String>{
        'When someone presents you with instructions, you prefer...',
        'specific steps and concrete examples',
        'Sensing',
        'the goal and freedom to explore approaches.',
        'Intuition'
    },
    new List<String>{
        'When observing a fact and needing to make a judgement, you prefer to...',
        'use a general logical principle to guide your evaluation',
        'Thinking',
        'use your personal values and lived experience to guide it.',
        'Feeling'
    },
    new List<String>{
        'When you go shopping, you typically...',
        'keep conversation brief and functional',
        'Introverted',
        'enjoy friendly chatter with staff.',
        'Extroverted'
    },
    new List<String>{
        'When visiting an art exhibition, you prefer works that...',
        'feel realistic and grounded',
        'Sensing',
        'feel symbolic, abstract, or suggestive.',
        'Intuition'
    },
    new List<String>{
        'Being a tactful person means...',
        'being kind and considerate of feelings.',
        'Feeling',
        'respecting others and being fair in judgement',
        'Thinking'
    },
    new List<String>{
        'To live with on a daily basis, you prefer someone who is...',
        'decisive and direct',
        'Thinking',
        'devoted and caring.',
        'Feeling'
    },
    new List<String>{
        'Your comfort zone is more...',
        'a calm environment with depth',
        'Introverted',
        'a stimulating environment with activity.',
        'Extroverted'
    },
    new List<String>{
        'When you are introduced to new information, you prefer...',
        'a complete factual picture before concluding',
        'Sensing',
        'enough to see the pattern and infer the rest.',
        'Intuition'
    },
    new List<String>{
        'When resolving conflict, you usually prefer to...',
        'define facts, responsibilities, and next steps',
        'Thinking',
        'seek mutual understanding and restore harmony.',
        'Feeling'
    },
    new List<String>{
        'If you are interrupted while working, you usually...',
        'find it disruptive and need time to refocus',
        'Introverted',
        'switch context easily and carry on.',
        'Extroverted'
    },
    new List<String>{
        'When watching a film, you are more likely to...',
        'focus on relationships and emotional tone.',
        'Feeling',
        'focus on the plot and internal logic',
        'Thinking'
    },
    new List<String>{
        'When you stop to observe an event, what attracts your attention most is...',
        'the event as a whole.',
        'Intuition',
        'the important details',
        'Sensing'
    },
    new List<String>{
        'When you have an idea, you are more likely to...',
        'share it quickly and refine it through discussion.',
        'Extroverted',
        'reflect on it privately before sharing',
        'Introverted'
    },
    new List<String>{
        'If you were to choose a professional activity, you would be more attracted to...',
        'imagination and creation.',
        'Intuition',
        'usefulness and practicality',
        'Sensing'
    },
    new List<String>{
        'When giving feedback, you tend to prioritise...',
        'encouragement and sensitivity.',
        'Feeling',
        'accuracy and directness',
        'Thinking'
    },
    new List<String>{
        'When you read a report, you tend to focus on...',
        'the concrete details and what is explicitly stated',
        'Sensing',
        'the implications and what it suggests overall.',
        'Intuition'
    },
    new List<String>{
        'If you are alone for a long period, you usually...',
        'feel settled and productive',
        'Introverted',
        'start craving external stimulation.',
        'Extroverted'
    },
    new List<String>{
        'When making choices, you usually trust more...',
        'what is consistent and objective',
        'Thinking',
        'what is compassionate and human.',
        'Feeling'
    },
    new List<String>{
        'Regarding time, you generally...',
        'treat it flexibly and adapt as needed.',
        'Intuition',
        'track it carefully and plan around it',
        'Sensing'
    },
    new List<String>{
        'When you receive criticism, you are more likely to...',
        'feel it personally and reflect on the relationship.',
        'Feeling',
        'separate it from emotion and extract what is useful',
        'Thinking'
    },
    new List<String>{
        'When you attend an event, you prefer to...',
        'arrive a bit later and leave earlier',
        'Introverted',
        'arrive early and stay until the end.',
        'Extroverted'
    },
    new List<String>{
        'Imagine you are going to travel. It is more common for you to...',
        'pack well in advance',
        'Sensing',
        'pack closer to the last minute.',
        'Intuition'
    },
    new List<String>{
        'When you have free time, you typically prefer to...',
        'go out and be around people.',
        'Extroverted',
        'stay in and enjoy a solo activity',
        'Introverted'
    },
    new List<String>{
        'When planning an outing next weekend, you...',
        'prefer to keep it open and spontaneous.',
        'Intuition',
        'prefer a clear plan and timing',
        'Sensing'
    },
    new List<String>{
        'When a project is behind schedule, you are more likely to...',
        'prioritise efficiency and clear decisions',
        'Thinking',
        'prioritise morale and keeping people motivated.',
        'Feeling'
    },
    new List<String>{
        'When you have to network, you prefer...',
        'a few meaningful connections',
        'Introverted',
        'lots of quick introductions.',
        'Extroverted'
    },
    new List<String>{
        'When giving someone a gift, you prefer one that...',
        'will be useful in everyday life',
        'Sensing',
        'will surprise or inspire the recipient.',
        'Intuition'
    },
    new List<String>{
        'When you are in a new team, you usually...',
        'engage quickly to build rapport.',
        'Extroverted',
        'observe dynamics before engaging a lot',
        'Introverted'
    },
    new List<String>{
        'When making an important decision, you listen more to...',
        'your reason and consistency',
        'Thinking',
        'your feelings and what seems right.',
        'Feeling'
    },
    new List<String>{
        'When you are stressed, you tend to...',
        'withdraw a bit to regain clarity',
        'Introverted',
        'talk it through to feel lighter.',
        'Extroverted'
    },
    new List<String>{
        'You admire more...',
        'people who are original and bold.',
        'Intuition',
        'people who are grounded and consistent',
        'Sensing'
    },
    new List<String>{
        'When you need to judge someone, your main tendency is to seek...',
        'justice and consistency',
        'Thinking',
        'mercy and understanding.',
        'Feeling'
    },
    new List<String>{
        'If you received your pay today, what would your main tendency be?',
        'to save and plan for future needs',
        'Sensing',
        'to spend on something interesting or inspiring.',
        'Intuition'
    },
    new List<String>{
        'When shopping at the supermarket, it is more common for you to...',
        'stick to proven, familiar brands',
        'Sensing',
        'try new and different brands.',
        'Intuition'
    },
    new List<String>{
        'When you receive praise, you usually...',
        'feel energised and respond enthusiastically.',
        'Extroverted',
        'feel slightly self-conscious and keep it low-key',
        'Introverted'
    },
    new List<String>{
        'When someone makes a remark or comment, you...',
        'wonder what might be behind it.',
        'Intuition',
        'take it mostly at face value',
        'Sensing'
    },
    new List<String>{
        'When you have an important decision, you usually...',
        'think it through alone before discussing',
        'Introverted',
        'discuss it early to clarify your thinking.',
        'Extroverted'
    },
    new List<String>{
        'When you are asked a question unexpectedly, you tend to...',
        'prefer a moment to think',
        'Introverted',
        'answer immediately and elaborate.',
        'Extroverted'
    },
    new List<String>{
        'When you consider success, you think first about...',
        'results and correctness',
        'Thinking',
        'meaning and impact on people.',
        'Feeling'
    }
};


for (Integer i = 0; i < qas.size(); i++) {
    Integer qNum = i + 1;

    questions.add(new Question__c(
        ExternalId__c      = 'Question' + qNum,
        Questionnaire__c   = questionnaire.Id,
        Question_Text__c   = qas[i][0],
        Order__c = i,
        Name               = 'Question' + qNum
    ));
}

upsert questions ExternalId__c;

List<Answer_Option__c> options = new List<Answer_Option__c>();
for (Integer i = 0; i < qas.size(); i++) {
    Integer qNum = i + 1;

    String answerAName = 'Answer' + qNum + 'a';
    String answerBName = 'Answer' + qNum + 'b';

    // Option A
    options.add(new Answer_Option__c(
        Question__r = new Question__c(ExternalId__c = 'Question' + qNum),
        ExternalId__c = answerAName,
        Classification__c = qas[i][2],
        Answer_Text__c = qas[i][1],
        Order__c = 1,
        Name = answerAName
    ));

    // Option B
    options.add(new Answer_Option__c(
        Question__r = new Question__c(ExternalId__c = 'Question' + qNum),
        Answer_Text__c = qas[i][3],
        ExternalId__c = answerBName,
        Classification__c = qas[i][4],
        Order__c = 2,
        Name = answerBName
    ));
}

insert options;

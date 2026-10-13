// 응원 문장은 이 파일에만 둡니다. 화면(index.html)에는 문장이 없습니다.
const MESSAGES = [
  '오늘도 충분히 잘하고 있어요.',
  '천천히 가도 괜찮아요. 멈추지만 않으면 돼요.',
  '지금까지 온 것만으로도 대단해요.',
  '오늘의 작은 한 걸음이 내일을 바꿔요.',
  '실수해도 괜찮아요. 그만큼 배우고 있는 거예요.',
  '당신의 노력은 분명히 쌓이고 있어요.',
  '잠깐 쉬어 가도 돼요. 쉬는 것도 실력이에요.',
  '오늘 하루도 당신 편이에요.',
  '어제보다 한 뼘 더 자랐어요.',
  '할 수 있어요. 이미 시작했잖아요.',
  '걱정보다 당신이 훨씬 강해요.',
  '지금 이 순간에도 잘 해내고 있어요.',
  '좋은 일은 생각보다 가까이 와 있어요.',
  '당신이 있어서 오늘이 더 좋아요.',
  '끝까지 해내는 당신을 응원해요.',
];

const DEFAULT_NAME = '여러분';
const MAX_NAME_LENGTH = 20;

module.exports = (req, res) => {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'GET 요청만 받을 수 있어요.' });
  }

  const raw = Array.isArray(req.query.name) ? req.query.name[0] : req.query.name;
  const trimmed = String(raw || '').trim().slice(0, MAX_NAME_LENGTH);
  const name = trimmed || DEFAULT_NAME;

  const message = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
  const greeting = name === DEFAULT_NAME ? name : `${name}님`;

  return res.status(200).json({ name, message, text: `${greeting}, ${message}` });
};

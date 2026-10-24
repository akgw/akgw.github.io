// サイトに載せる情報はすべてここで管理する。更新するときはこのファイルだけ触ればよい。

export const profile = {
  name: 'Ryunosuke Akagawa',
  nameJa: '赤川 龍之介',
  role: 'Software Engineer / Engineering Manager',
  location: 'Tokyo (from Toyama)',
  photo: '/self.webp',
  summary:
    'Web バックエンドとインフラを軸に、プロダクト開発・チームづくり・エンジニア採用まで幅広くやっています。最近は Claude Code を使った AI 駆動開発に夢中です。',
}

export const links = [
  { label: 'GitHub', href: 'https://github.com/akgw' },
  { label: 'Facebook', href: 'https://www.facebook.com/ryunosuke.akagawa' },
  { label: 'Mail', href: 'mailto:ryu.akagawa@gmail.com' },
]

export const now = [
  {
    title: 'Hacobell',
    body: '物流マッチングプラットフォームの開発。',
    href: 'https://www.hacobell.co.jp/',
  },
  {
    title: 'AI 駆動開発',
    body: '実装は Claude、人間はレビューと動作確認だけ、という体制で開発を回す実験。PdM / PjM / TL のエージェント分業や夜間 routine を試している。',
  },
]

export const career = [
  { period: '2024.09 –', company: '株式会社Hacobell', en: 'Hacobell Inc.' },
  { period: '2021.07 – 2024.08', company: '株式会社BuySell Technologies', en: 'BuySell Technologies Co., Ltd.' },
  { period: '2017.11 – 2021.06', company: '株式会社エス・エム・エスキャリア', en: 'SMS Career Co., Ltd.' },
  { period: '2016.04 – 2017.10', company: '北電情報システムサービス株式会社', en: 'Hokuden Information System Service Co., Inc.' },
  { period: '2013.04 – 2016.03', company: 'グリー株式会社', en: 'GREE, Inc.' },
]

export const education = [
  { period: '2011.04 – 2013.03', school: '北陸先端科学技術大学院大学', en: 'Japan Advanced Institute of Science and Technology' },
  { period: '2009.04 – 2011.03', school: '富山高等専門学校 専攻科', en: 'National Institute of Technology, Toyama College' },
]

export const skills = [
  { group: 'Backend', items: ['TypeScript', 'PHP / Laravel', 'Ruby on Rails', 'Go', 'Python'] },
  { group: 'Frontend', items: ['Vue', 'React'] },
  { group: 'Infra / Data', items: ['AWS', 'Terraform', 'BigQuery', 'RDB'] },
  { group: 'AI / Other', items: ['Claude Code', 'Google Apps Script', 'Raycast'] },
  { group: 'Management', items: ['People Management', 'Product Management', 'Tech Lead', 'Engineer Recruiting'] },
]

export const mind = [
  { title: 'Be a generalist', body: 'プロダクトに必要な知識を、領域にこだわらず優先して取りにいく。' },
  { title: 'HRT', body: 'Humility, Respect, Trust.' },
  { title: 'Motivation curve', body: '一緒に働くエンジニアのモチベーションに向き合い、対話を続ける。' },
]

export const books = [
  { title: 'プログラマが知るべき97のこと', asin: '4873114799' },
  { title: '現場で役立つシステム設計の原則', asin: 'B073GSDBGT' },
  { title: 'Webを支える技術', asin: 'B07JK7FZH2' },
  { title: 'Team Geek', asin: '4873116309' },
  { title: '世界一速く結果を出す人は、なぜ、メールを使わないのか', asin: 'B01N2672CU' },
  { title: 'イシューからはじめよ', asin: 'B00MTL340G' },
  { title: 'チーズはどこへ消えた？', asin: 'B00KD2IK4S' },
]

export const hobbies = ['🏸 Badminton', '🏕️ Camping', '🎮 Games']

//TODO refactor and combine as 1 obj

var REACTION_TYPES=['LIKE','LOVE','WOW','HAHA','SAD','ANGRY','THANKFUL'];

var pages ={
  'hk':{"hk.nextmedia":"105259197447","southchinamorningpost":"355665009819","mingpaoinews":"498203090239831","hongkongeconomicjournal":"139543009419663"},
  'tw':{"appledaily.tw":"232633627068","news.ebc":"124616330906800","m.ltn.tw":"394896373929368","TheNewsLens":"481065478629613","myudn":"241284961029",
  "ETtoday":"242305665805605","ctitv.news":"283285647874"}
};

var pageNamesById={"105259197447":"蘋果日報","355665009819":"South China Morning Post SCMP","200954406608272":"香港獨立媒體網","420361564693683":"PassionTimes 熱血時報","498203090239831":"明報即時新聞","139543009419663":"信報財經新聞 hkej.com","113816764690":"香港經濟日報 hket.com","126994627339633":"am730","448747665308662":"香港01","148108245239100":"頭條日報","569337929781203":"852郵報","180447291099":"Metro Daily Hong Kong《都市日報》"
,"232633627068":"蘋果日報","124616330906800":"東森新聞","242305665805605":"ETtoday新聞雲","394896373929368":"自由時報","283285647874":"快點報報","481065478629613":"The News Lens 關鍵評論網","241284961029":"udn.com 聯合新聞網"}

module.exports = {
  REACTION_TYPES:REACTION_TYPES,
  pages:pages,
  pageNamesById:pageNamesById
}

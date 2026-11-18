const words=[
{category:"Общение",sr:"Zdravo!",ru:"Привет!",ex:"Zdravo, kako si? — Привет, как ты?"},
{category:"Общение",sr:"Dobro jutro",ru:"Доброе утро",ex:"Dobro jutro! Kako ste? — Доброе утро! Как вы?"},
{category:"Общение",sr:"Hvala",ru:"Спасибо",ex:"Hvala puno! — Большое спасибо!"},
{category:"Общение",sr:"Molim",ru:"Пожалуйста / прошу",ex:"Još jednu kafu, molim. — Ещё один кофе, пожалуйста."},
{category:"Общение",sr:"Izvinite",ru:"Извините",ex:"Izvinite, gde je Maxi? — Извините, где Maxi?"},
{category:"Еда и покупки",sr:"Koliko košta?",ru:"Сколько стоит?",ex:"Koliko košta ova voda? — Сколько стоит эта вода?"},
{category:"Еда и покупки",sr:"Voda",ru:"Вода",ex:"Želim čašu vode. — Я хочу стакан воды."},
{category:"Еда и покупки",sr:"Prodavnica",ru:"Магазин",ex:"Gde je prodavnica? — Где магазин?"},
{category:"Время",sr:"Danas",ru:"Сегодня",ex:"Danas učim srpski. — Сегодня я учу сербский."},
{category:"Время",sr:"Sutra",ru:"Завтра",ex:"Vidimo se sutra! — Увидимся завтра!"},
{category:"Общение",sr:"Razumem",ru:"Я понимаю",ex:"Razumem, hvala. — Я понимаю, спасибо."},
{category:"Общение",sr:"Ne razumem",ru:"Я не понимаю",ex:"Izvinite, ne razumem. — Извините, я не понимаю."},
{category:"Общение",sr:"Ćao",ru:"Привет (разговорное)",ex:"Ćao, vidimo se! — Пока, увидимся!"},
{category:"Общение",sr:"Doviđenja",ru:"До свидания",ex:"Doviđenja, prijatan dan! — До свидания, хорошего дня!"},
{category:"Общение",sr:"Dobro veče",ru:"Добрый вечер",ex:"Dobro veče, komšija. — Добрый вечер, сосед."},
{category:"Общение",sr:"Laku noć",ru:"Спокойной ночи",ex:"Laku noć! — Спокойной ночи!"},
{category:"Общение",sr:"Kako si?",ru:"Как ты? (неформально)",ex:"Kako si danas? — Как ты сегодня?"},
{category:"Общение",sr:"Kako ste?",ru:"Как вы? (вежливо)",ex:"Kako ste danas? — Как вы сегодня?"},
{category:"Общение",sr:"Dobro sam",ru:"У меня всё хорошо",ex:"Dobro sam, hvala. — У меня всё хорошо, спасибо."},
{category:"Общение",sr:"Tako-tako",ru:"Так себе",ex:"Danas sam tako-tako. — Сегодня я так себе."},
{category:"Общение",sr:"Drago mi je",ru:"Приятно познакомиться",ex:"Drago mi je! — Очень приятно!"},
{category:"Общение",sr:"Nema na čemu",ru:"Не за что",ex:"Hvala! — Nema na čemu. — Спасибо! — Не за что."},
{category:"Общение",sr:"Molim vas",ru:"Пожалуйста (вежливо)",ex:"Jednu kafu, molim vas. — Один кофе, пожалуйста."},
{category:"Общение",sr:"Govorim",ru:"Я говорю",ex:"Govorim ruski. — Я говорю по-русски."},
{category:"Общение",sr:"Ne znam",ru:"Я не знаю",ex:"Ne znam odgovor. — Я не знаю ответ."},
{category:"Общение",sr:"Možda",ru:"Может быть",ex:"Možda sutra. — Может быть, завтра."},
{category:"Общение",sr:"Naravno",ru:"Конечно",ex:"Naravno, može. — Конечно, можно."},
{category:"Общение",sr:"Polako",ru:"Медленно / не спеша",ex:"Molim vas, govorite polako. — Пожалуйста, говорите медленно."},
{category:"Общение",sr:"Ponovite, molim",ru:"Повторите, пожалуйста",ex:"Izvinite, ponovite, molim. — Извините, повторите, пожалуйста."},
{category:"Вопросы и связки",sr:"Ko?",ru:"Кто?",ex:"Ko je ovo? — Кто это?"},
{category:"Вопросы и связки",sr:"Šta?",ru:"Что?",ex:"Šta je to? — Что это?"},
{category:"Вопросы и связки",sr:"Gde?",ru:"Где?",ex:"Gde je autobuska stanica? — Где автобусная остановка?"},
{category:"Вопросы и связки",sr:"Kuda?",ru:"Куда?",ex:"Kuda ideš? — Куда ты идёшь?"},
{category:"Вопросы и связки",sr:"Kada?",ru:"Когда?",ex:"Kada dolaziš? — Когда ты придёшь?"},
{category:"Вопросы и связки",sr:"Zašto?",ru:"Почему?",ex:"Zašto danas? — Почему сегодня?"},
{category:"Вопросы и связки",sr:"Kako?",ru:"Как?",ex:"Kako se kaže na srpskom? — Как сказать по-сербски?"},
{category:"Вопросы и связки",sr:"Koliko?",ru:"Сколько?",ex:"Koliko imaš godina? — Сколько тебе лет?"},
{category:"Вопросы и связки",sr:"Koji?",ru:"Который? / какой? (м.р.)",ex:"Koji autobus ide do centra? — Какой автобус идёт до центра?"},
{category:"Вопросы и связки",sr:"Ovaj / ova / ovo",ru:"Этот / эта / это",ex:"Koliko košta ova voda? — Сколько стоит эта вода?"},
{category:"Вопросы и связки",sr:"I",ru:"И",ex:"Kafa i voda. — Кофе и вода."},
{category:"Вопросы и связки",sr:"Ali",ru:"Но",ex:"Želim, ali ne mogu. — Хочу, но не могу."},
{category:"Вопросы и связки",sr:"Zato što",ru:"Потому что",ex:"Ne mogu zato što radim. — Не могу, потому что работаю."},
{category:"Вопросы и связки",sr:"Takođe",ru:"Также / тоже",ex:"Ja takođe učim. — Я тоже учусь."},
{category:"Вопросы и связки",sr:"Veoma",ru:"Очень",ex:"Veoma lepo. — Очень красиво."},
{category:"Вопросы и связки",sr:"Samo",ru:"Только",ex:"Samo gledam, hvala. — Я только смотрю, спасибо."},
{category:"Вопросы и связки",sr:"Još",ru:"Ещё",ex:"Još jednu vodu, molim. — Ещё одну воду, пожалуйста."},
{category:"Вопросы и связки",sr:"Već",ru:"Уже",ex:"Već sam kod kuće. — Я уже дома."},
{category:"Время",sr:"Juče",ru:"Вчера",ex:"Juče sam bila kod kuće. — Вчера я была дома."},
{category:"Время",sr:"Sada",ru:"Сейчас",ex:"Sada nemam vremena. — Сейчас у меня нет времени."},
{category:"Время",sr:"Ujutru",ru:"Утром",ex:"Ujutru pijem kafu. — Утром я пью кофе."},
{category:"Время",sr:"Uveče",ru:"Вечером",ex:"Uveče šetam. — Вечером я гуляю."},
{category:"Время",sr:"Noću",ru:"Ночью",ex:"Noću spavam. — Ночью я сплю."},
{category:"Время",sr:"Često",ru:"Часто",ex:"Često idem u prodavnicu. — Я часто хожу в магазин."},
{category:"Время",sr:"Ponekad",ru:"Иногда",ex:"Ponekad kuvam. — Иногда я готовлю."},
{category:"Время",sr:"Uvek",ru:"Всегда",ex:"Uvek pijem kafu. — Я всегда пью кофе."},
{category:"Время",sr:"Nikad",ru:"Никогда",ex:"Nikad ne kasnim. — Я никогда не опаздываю."},
{category:"Время",sr:"Dugo",ru:"Долго",ex:"Dugo učim srpski. — Я давно учу сербский."},
{category:"Время",sr:"Danas",ru:"Сегодня",ex:"Danas učim srpski. — Сегодня я учу сербский."},
{category:"Люди и семья",sr:"Porodica",ru:"Семья",ex:"Moja porodica je velika. — Моя семья большая."},
{category:"Люди и семья",sr:"Muž",ru:"Муж",ex:"Moj muž radi od kuće. — Мой муж работает из дома."},
{category:"Люди и семья",sr:"Žena",ru:"Женщина / жена",ex:"Ona je moja žena. — Она моя жена."},
{category:"Люди и семья",sr:"Dete",ru:"Ребёнок",ex:"Dete ide u školu. — Ребёнок ходит в школу."},
{category:"Люди и семья",sr:"Sin",ru:"Сын",ex:"Moj sin ima dvanaest godina. — Моему сыну двенадцать лет."},
{category:"Люди и семья",sr:"Majka",ru:"Мать",ex:"Moja majka živi u Rusiji. — Моя мама живёт в России."},
{category:"Люди и семья",sr:"Otac",ru:"Отец",ex:"Moj otac radi. — Мой отец работает."},
{category:"Люди и семья",sr:"Prijatelj / prijateljica",ru:"Друг / подруга",ex:"Ona je moja prijateljica. — Она моя подруга."},
{category:"Люди и семья",sr:"Komšija / komšinica",ru:"Сосед / соседка",ex:"Dobar dan, komšinice! — Добрый день, соседка!"},
{category:"Люди и семья",sr:"Čovek",ru:"Человек / мужчина",ex:"On je dobar čovek. — Он хороший человек."},
{category:"Люди и семья",sr:"Ime",ru:"Имя",ex:"Kako je vaše ime? — Как вас зовут?"},
{category:"Дом и быт",sr:"Kuća",ru:"Дом",ex:"Moja kuća je velika. — Мой дом большой."},
{category:"Дом и быт",sr:"Stan",ru:"Квартира",ex:"Živim u stanu. — Я живу в квартире."},
{category:"Дом и быт",sr:"Soba",ru:"Комната",ex:"Ovo je moja soba. — Это моя комната."},
{category:"Дом и быт",sr:"Kuhinja",ru:"Кухня",ex:"Kuhinja je mala. — Кухня маленькая."},
{category:"Дом и быт",sr:"Kupatilo",ru:"Ванная комната",ex:"Gde je kupatilo? — Где ванная?"},
{category:"Дом и быт",sr:"Sto",ru:"Стол",ex:"Knjiga je na stolu. — Книга на столе."},
{category:"Дом и быт",sr:"Stolica",ru:"Стул",ex:"Treba mi stolica. — Мне нужен стул."},
{category:"Дом и быт",sr:"Vrata",ru:"Дверь",ex:"Zatvorite vrata, molim. — Закройте дверь, пожалуйста."},
{category:"Дом и быт",sr:"Prozor",ru:"Окно",ex:"Otvorite prozor. — Откройте окно."},
{category:"Дом и быт",sr:"Ključ",ru:"Ключ",ex:"Gde je ključ? — Где ключ?"},
{category:"Еда и покупки",sr:"Hleb",ru:"Хлеб",ex:"Kupujem hleb. — Я покупаю хлеб."},
{category:"Еда и покупки",sr:"Mleko",ru:"Молоко",ex:"Treba mi mleko. — Мне нужно молоко."},
{category:"Еда и покупки",sr:"Meso",ru:"Мясо",ex:"Ne jedem svinjsko meso. — Я не ем свинину."},
{category:"Еда и покупки",sr:"Piletina",ru:"Курица",ex:"Volim piletinu. — Я люблю курицу."},
{category:"Еда и покупки",sr:"Jaje",ru:"Яйцо",ex:"Želim dva jaja. — Я хочу два яйца."},
{category:"Еда и покупки",sr:"Sir",ru:"Сыр",ex:"Ovaj sir je dobar. — Этот сыр хороший."},
{category:"Еда и покупки",sr:"Jabuka",ru:"Яблоко",ex:"Jedem jabuku. — Я ем яблоко."},
{category:"Еда и покупки",sr:"Povrće",ru:"Овощи",ex:"Kupujem sveže povrće. — Я покупаю свежие овощи."},
{category:"Еда и покупки",sr:"Voće",ru:"Фрукты",ex:"Volim voće. — Я люблю фрукты."},
{category:"Еда и покупки",sr:"Račun",ru:"Счёт / чек",ex:"Račun, molim. — Счёт, пожалуйста."},
{category:"Еда и покупки",sr:"Novac",ru:"Деньги",ex:"Nemam sitan novac. — У меня нет мелких денег."},
{category:"Еда и покупки",sr:"Kesa",ru:"Пакет",ex:"Treba mi kesa. — Мне нужен пакет."},
{category:"Еда и покупки",sr:"Pijaca",ru:"Рынок",ex:"Idem na pijacu. — Я иду на рынок."},
{category:"Еда и покупки",sr:"Pekara",ru:"Пекарня",ex:"Pekara je blizu. — Пекарня близко."},
{category:"Полезные глаголы",sr:"Biti",ru:"Быть",ex:"Ja sam kod kuće. — Я дома."},
{category:"Полезные глаголы",sr:"Imati",ru:"Иметь",ex:"Imam vremena. — У меня есть время."},
{category:"Полезные глаголы",sr:"Hteti",ru:"Хотеть",ex:"Hoću kafu. — Я хочу кофе."},
{category:"Полезные глаголы",sr:"Moći",ru:"Мочь",ex:"Mogu da pomognem. — Я могу помочь."},
{category:"Полезные глаголы",sr:"Želeti",ru:"Хотеть / желать",ex:"Želim vodu. — Я хочу воды."},
{category:"Полезные глаголы",sr:"Trebati",ru:"Быть нужным",ex:"Treba mi pomoć. — Мне нужна помощь."},
{category:"Полезные глаголы",sr:"Ići",ru:"Идти / ехать",ex:"Idem kući. — Я иду домой."},
{category:"Полезные глаголы",sr:"Doći",ru:"Приходить / приезжать",ex:"Dolazim sutra. — Я приду завтра."},
{category:"Полезные глаголы",sr:"Raditi",ru:"Работать / делать",ex:"Radim od kuće. — Я работаю из дома."},
{category:"Полезные глаголы",sr:"Živeti",ru:"Жить",ex:"Živim u Subotici. — Я живу в Суботице."},
{category:"Полезные глаголы",sr:"Učiti",ru:"Учить(ся)",ex:"Učim srpski. — Я учу сербский."},
{category:"Полезные глаголы",sr:"Razumeti",ru:"Понимать",ex:"Razumem pitanje. — Я понимаю вопрос."},
{category:"Полезные глаголы",sr:"Znati",ru:"Знать / уметь",ex:"Znam odgovor. — Я знаю ответ."},
{category:"Полезные глаголы",sr:"Govoriti",ru:"Говорить",ex:"Govorim malo srpski. — Я немного говорю по-сербски."},
{category:"Полезные глаголы",sr:"Kupiti",ru:"Купить",ex:"Želim da kupim hleb. — Я хочу купить хлеб."},
{category:"Полезные глаголы",sr:"Tražiti",ru:"Искать / просить",ex:"Tražim apoteku. — Я ищу аптеку."},
{category:"Полезные глаголы",sr:"Voleti",ru:"Любить / нравиться",ex:"Volim kafu. — Я люблю кофе."},
{category:"Полезные глаголы",sr:"Jesti",ru:"Есть",ex:"Želim da jedem. — Я хочу поесть."},
{category:"Полезные глаголы",sr:"Piti",ru:"Пить",ex:"Pijem vodu. — Я пью воду."},
{category:"Полезные глаголы",sr:"Spavati",ru:"Спать",ex:"Želim da spavam. — Я хочу спать."},
{category:"Полезные глаголы",sr:"Kuvati",ru:"Готовить",ex:"Volim da kuvam. — Я люблю готовить."},
{category:"Полезные глаголы",sr:"Čekati",ru:"Ждать",ex:"Čekam autobus. — Я жду автобус."},
{category:"Полезные глаголы",sr:"Platiti",ru:"Платить",ex:"Gde mogu da platim? — Где я могу заплатить?"},
{category:"Полезные глаголы",sr:"Otvoriti",ru:"Открыть",ex:"Možete li da otvorite vrata? — Можете открыть дверь?"},
{category:"Полезные глаголы",sr:"Zatvoriti",ru:"Закрыть",ex:"Zatvorite prozor, molim. — Закройте окно, пожалуйста."}
];
const $=s=>document.querySelector(s);const view=$("#view");let saved=JSON.parse(localStorage.getItem("mojSaved")||"[]");const customWords=JSON.parse(localStorage.getItem("mojCustomWords")||"[]");words.push(...customWords.filter(c=>!words.some(w=>w.sr===c.sr)));let learned=Number(localStorage.getItem("mojLearned")||0);let quizIndex=0,quizScore=0,answered=false,installPrompt=null;
const titles={home:"Твой сербский",words:"Карточки слов",grammar:"Грамматика",test:"Проверка знаний",saved:"Мои слова",practice:"Тренажёр ответов",exercises:"Упражнения",verbs:"Глаголы и спряжения"};
function setTitle(name){$("#page-title").textContent=titles[name]||titles.home;document.querySelectorAll(".nav-item").forEach(b=>b.classList.toggle("active",b.dataset.view===name))}
function go(name){setTitle(name);({home:home,words:showWords,grammar:grammar,test:startTest,saved:showSaved,practice:practice,exercises:exercises,verbs:verbs}[name]||home)()}
document.querySelectorAll("[data-view]").forEach(b=>b.addEventListener("click",()=>go(b.dataset.view)));
function home(){view.innerHTML=`<section class="hero"><div><span class="tag">TVOJ MALI KORAK</span><h2>Сербский становится ближе — шаг за шагом.</h2><p>Немного слов, немного практики и смелость говорить. Начнём с короткого занятия?</p><button class="primary" data-go="words">Начать занятие&nbsp; →</button></div><div class="hero-art">🌿</div></section><div class="stats"><div class="stat"><small>Выучено слов</small><strong>${learned}</strong><em>Продолжай в своём темпе</em></div><div class="stat"><small>Сохранено слов</small><strong>${saved.length}</strong><em>Твоя личная подборка</em></div><div class="stat"><small>Уроки</small><strong>1 / 12</strong><em>Первый шаг уже сделан</em></div></div><div class="section-head"><h2>Выбери занятие</h2><span class="muted">15–30 минут в день</span></div><div class="tiles"><div class="tile" data-go="words"><div class="tile-icon">🗂️</div><h3>Карточки слов</h3><p>Полезные слова и выражения на каждый день.</p></div><div class="tile" data-go="grammar"><div class="tile-icon">📖</div><h3>Грамматика</h3><p>Разберёмся с основами на простых примерах.</p></div><div class="tile" data-go="test"><div class="tile-icon">✍️</div><h3>Проверка знаний</h3><p>Проверь, что уже запомнилось.</p></div></div><div class="section-head"><h2>Твой прогресс</h2><span class="muted">Начало пути</span></div><div class="panel"><div style="display:flex;justify-content:space-between;font-size:13px"><b>Слова из первого набора</b><span>${Math.min(learned,words.length)} из ${words.length}</span></div><div class="progress-track"><div class="progress-fill" style="width:${Math.min(100,learned/words.length*100)}%"></div></div></div>`;view.querySelectorAll("[data-go]").forEach(b=>b.addEventListener("click",()=>go(b.dataset.go)))}
function wordCard(w,i){const isSaved=saved.includes(w.sr);return `<article class="word-card"><span class="tag">СЛОВО ${String(i+1).padStart(2,"0")}</span><div class="serbian">${w.sr}</div><div class="translation">${w.ru}</div><div class="example">${w.ex}</div><div class="word-actions"><button class="icon-btn" data-speak="${i}">🔊 Слушать</button><button class="icon-btn" data-save="${i}">${isSaved?"♥ Сохранено":"♡ Сохранить"}</button><button class="icon-btn" data-known="${i}">✓ Знаю</button></div></article>`}
function bindWordButtons(){view.querySelectorAll("[data-speak]").forEach(b=>b.onclick=()=>speak(words[+b.dataset.speak].sr));view.querySelectorAll("[data-save]").forEach(b=>b.onclick=()=>{const w=words[+b.dataset.save].sr;saved=saved.includes(w)?saved.filter(x=>x!==w):[...saved,w];localStorage.setItem("mojSaved",JSON.stringify(saved));const current=$("#page-title").textContent;current==="Мои слова"?showSaved():showWords()});view.querySelectorAll("[data-known]").forEach(b=>b.onclick=()=>{learned++;localStorage.setItem("mojLearned",learned);b.textContent="✓ Отмечено";b.disabled=true})}
let wordCategory="Все",wordSearch="";
function showWords(){
 const cats=["Все",...new Set(words.map(w=>w.category))];
 const filtered=words.map((w,i)=>({...w,index:i})).filter(w=>(wordCategory==="Все"||w.category===wordCategory)&&(!wordSearch||[w.sr,w.ru,w.ex].join(" ").toLowerCase().includes(wordSearch.toLowerCase())));
 view.innerHTML=`<p class="page-intro">Большая базовая подборка для повседневного общения. Учим слова по темам, слушаем произношение и сразу видим пример в предложении.</p>
 <div class="word-tools"><input id="word-search" type="search" placeholder="Найти слово или перевод…" value="${wordSearch.replace(/"/g,"&quot;")}"><select id="word-category">${cats.map(c=>`<option ${c===wordCategory?"selected":""}>${c}</option>`).join("")}</select><span class="muted">${filtered.length} из ${words.length} слов</span></div>
 <div class="cards-grid">${filtered.map(w=>wordCard(w,w.index)).join("")}</div>`;
 $("#word-search").oninput=e=>{wordSearch=e.target.value;showWords();const el=$("#word-search");el.focus();el.setSelectionRange(wordSearch.length,wordSearch.length)};
 $("#word-category").onchange=e=>{wordCategory=e.target.value;showWords()};
 bindWordButtons();
}
function showSaved(){const list=words.filter(w=>saved.includes(w.sr));view.innerHTML=list.length?`<p class="page-intro">Слова, которые ты сохранила, чтобы повторить позже.</p><div class="cards-grid">${list.map(w=>wordCard(w,words.indexOf(w))).join("")}</div>`:`<div class="empty"><div style="font-size:42px">♡</div><strong>Здесь пока пусто</strong><p>Сохраняй слова из карточек — они появятся здесь.</p><button class="secondary" data-go="words">Перейти к словам</button></div>`;bindWordButtons();view.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>go(b.dataset.go))}
function grammar(){view.innerHTML=`<p class="page-intro">Урок 1 · Знакомство с сербским предложением</p><article class="lesson-card"><span class="tag">LEKCIJA 01</span><h3>Личные местоимения</h3><p>В сербском языке местоимение часто можно опустить: окончание глагола уже подсказывает, кто выполняет действие. Но сначала выучим полные формы.</p><div class="example-box"><b>ja</b> — я &nbsp; · &nbsp; <b>ti</b> — ты<br><b>on</b> — он &nbsp; · &nbsp; <b>ona</b> — она &nbsp; · &nbsp; <b>ono</b> — оно<br><b>mi</b> — мы &nbsp; · &nbsp; <b>vi</b> — вы &nbsp; · &nbsp; <b>oni / one</b> — они</div></article><article class="lesson-card"><h3>Глагол biti — быть</h3><p>Это один из самых важных глаголов. Запомни его формы в настоящем времени:</p><div class="example-box"><b>Ja sam</b> — я есть / я являюсь<br><b>Ti si</b> — ты есть<br><b>On / ona je</b> — он / она есть<br><b>Mi smo</b> — мы есть<br><b>Vi ste</b> — вы есть<br><b>Oni su</b> — они есть</div><p>В обычной речи по-русски мы часто не говорим «есть», а в сербском форма biti обычно нужна: Ja sam Ana. — Я Ана.</p></article><article class="lesson-card"><h3>Попробуй произнести</h3><div class="example-box">Ja sam iz Rusije. — Я из России.<br>Živim u Subotici. — Я живу в Суботице.<br>Učim srpski. — Я учу сербский.</div><button class="secondary" id="grammar-speak">🔊 Прослушать примеры</button></article><button class="primary" data-go="test">Проверить себя →</button>`;$("#grammar-speak").onclick=()=>speak("Ja sam iz Rusije. Živim u Subotici. Učim srpski.");view.querySelector("[data-go]").onclick=()=>go("test")}
const questions=[{q:"Как по-сербски «спасибо»?",a:["Molim","Hvala","Zdravo"],c:1,why:"Hvala — спасибо. Molim — пожалуйста."},{q:"Что означает «Dobro jutro»?",a:["Добрый вечер","Доброе утро","До свидания"],c:1,why:"Dobro jutro — доброе утро."},{q:"Как сказать «Я понимаю»?",a:["Razumem","Ne znam","Izvinite"],c:0,why:"Razumem — я понимаю. Ne razumem — я не понимаю."},{q:"Выбери правильную форму: Ja ___ iz Rusije.",a:["si","sam","je"],c:1,why:"С местоимением ja используется форма sam: Ja sam."},{q:"Что означает «Koliko košta?»",a:["Где находится?","Как тебя зовут?","Сколько стоит?"],c:2,why:"Koliko košta? — Сколько стоит?"}];
function startTest(){quizIndex=0;quizScore=0;answered=false;renderQuestion()}
function renderQuestion(){if(quizIndex>=questions.length){view.innerHTML=`<div class="panel quiz"><span class="tag">KRAJ TESTA</span><h2>Отличная работа!</h2><div style="font:800 48px Manrope;color:var(--green);margin:20px 0">${quizScore} / ${questions.length}</div><p class="page-intro">Правильных ответов: ${quizScore} из ${questions.length}. Повторение поможет закрепить материал.</p><button class="primary" id="again">Пройти ещё раз</button></div>` ;$("#again").onclick=startTest;return}const q=questions[quizIndex];view.innerHTML=`<div class="panel quiz"><span class="tag">ВOПРОС ${quizIndex+1} ИЗ ${questions.length}</span><div class="progress-track"><div class="progress-fill" style="width:${quizIndex/questions.length*100}%"></div></div><div class="question">${q.q}</div><div class="answers">${q.a.map((a,i)=>`<button class="answer" data-answer="${i}">${a}</button>`).join("")}</div><div class="feedback" id="feedback"></div><button class="primary" id="next" disabled>Следующий вопрос →</button></div>`;view.querySelectorAll("[data-answer]").forEach(b=>b.onclick=()=>{if(answered)return;answered=true;const chosen=+b.dataset.answer;view.querySelectorAll(".answer").forEach((x,i)=>{if(i===q.c)x.classList.add("correct");else if(i===chosen)x.classList.add("wrong");x.disabled=true});if(chosen===q.c)quizScore++;$("#feedback").textContent=(chosen===q.c?"Верно! ":"Не совсем. ")+q.why;$("#next").disabled=false});$("#next").onclick=()=>{quizIndex++;answered=false;renderQuestion()}}
function speak(text){if(!("speechSynthesis"in window)){alert("Озвучивание не поддерживается этим браузером.");return}const u=new SpeechSynthesisUtterance(text);u.lang="sr-RS";u.rate=.85;const voices=speechSynthesis.getVoices();const v=voices.find(x=>x.lang.toLowerCase().startsWith("sr"));if(v)u.voice=v;speechSynthesis.cancel();speechSynthesis.speak(u)}
window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();installPrompt=e;$("#install-btn").hidden=false});$("#install-btn").onclick=async()=>{if(!installPrompt)return;installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;$("#install-btn").hidden=true};
if("serviceWorker"in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));
home();

// Тренажёр самостоятельных ответов: короткие вопросы уровня A1
const speakingTasks=[
{q:"Kako se zoveš?",ru:"Как тебя зовут?",hint:"Начни с: Zovem se…",answer:"Zovem se Ana.",keys:["zovem se"],tip:"После Zovem se назови своё имя."},
{q:"Odakle si?",ru:"Откуда ты?",hint:"Используй: Ja sam iz…",answer:"Ja sam iz Rusije.",keys:["iz"],tip:"Страна после iz: Ja sam iz Rusije."},
{q:"Gde živiš?",ru:"Где ты живёшь?",hint:"Начни с: Živim u…",answer:"Živim u Subotici.",keys:["živim","u"],tip:"Для города скажи Živim u…"},
{q:"Šta radiš?",ru:"Чем занимаешься?",hint:"Можно ответить: Učim srpski. / Radim.",answer:"Učim srpski.",keys:["učim","srpski"],tip:"Učim srpski — Я учу сербский."},
{q:"Kako si danas?",ru:"Как ты сегодня?",hint:"Например: Dobro sam, hvala.",answer:"Dobro sam, hvala.",keys:["dobro"],tip:"Dobro sam — У меня всё хорошо."},
{q:"Da li govoriš srpski?",ru:"Ты говоришь по-сербски?",hint:"Если пока немного: Govorim malo srpski.",answer:"Govorim malo srpski.",keys:["malo","srpski"],tip:"Malo значит «немного». Это полезный ответ для начинающего."}
];
let speakingIndex=0;
function practice(){
 speakingIndex=0;
 renderSpeakingTask();
}
function renderSpeakingTask(){
 const t=speakingTasks[speakingIndex];
 view.innerHTML=`<p class="page-intro">Отвечай самостоятельно, целым предложением. Не бойся ошибок: сначала попробуй вспомнить фразу, затем при необходимости открой подсказку.</p>
 <section class="panel speaking-panel">
  <div class="speaking-top"><span class="tag">GOVORNA VEŽBA · A1</span><span class="muted">Вопрос ${speakingIndex+1} из ${speakingTasks.length}</span></div>
  <div class="progress-track"><div class="progress-fill" style="width:${(speakingIndex+1)/speakingTasks.length*100}%"></div></div>
  <h2 class="speaking-question">${t.q}</h2><p class="speaking-translation">${t.ru}</p>
  <label class="answer-label" for="speaking-answer">Твой ответ на сербском</label>
  <textarea id="speaking-answer" rows="2" placeholder="Napiši svoj odgovor…"></textarea>
  <div class="speaking-actions"><button class="secondary" id="show-hint">Показать подсказку</button><button class="primary" id="check-speaking">Проверить ответ</button></div>
  <div id="speaking-hint" class="speaking-hint" hidden></div>
  <div id="speaking-feedback" class="speaking-feedback" aria-live="polite"></div>
  <button class="primary" id="next-speaking" hidden>${speakingIndex===speakingTasks.length-1?"Завершить":"Следующий вопрос →"}</button>
 </section>`;
 const input=$("#speaking-answer");
 $("#show-hint").onclick=()=>{const h=$("#speaking-hint");h.hidden=false;h.textContent=t.hint};
 $("#check-speaking").onclick=()=>{
  const value=input.value.trim().toLocaleLowerCase();
  const feedback=$("#speaking-feedback");
  if(!value){feedback.textContent="Сначала напиши свой вариант — даже если не уверена.";return}
  const normalized=value.normalize("NFD").replace(/[\u0300-\u036f]/g,"");
  const ok=t.keys.every(k=>normalized.includes(k.normalize("NFD").replace(/[\u0300-\u036f]/g,"")));
  feedback.innerHTML=`<div class="feedback-title">${ok?"Dobro! Хорошая попытка.":"Хорошая попытка — сравни со стандартным вариантом."}</div><p>${t.tip}</p><div class="model-answer"><small>Вариант ответа</small><b>${t.answer}</b></div>`;
  $("#next-speaking").hidden=false;
  $("#check-speaking").disabled=true;
 };
 $("#next-speaking").onclick=()=>{speakingIndex++;if(speakingIndex>=speakingTasks.length){view.innerHTML=`<div class="panel quiz"><span class="tag">BRAVO!</span><h2>Ты ответила на все вопросы</h2><p class="page-intro">Прочитай ответы ещё раз вслух. Повтори это упражнение завтра — попробуй отвечать уже без подсказок.</p><button class="primary" id="repeat-speaking">Повторить тренировку</button></div>`;$("#repeat-speaking").onclick=practice}else renderSpeakingTask()};
}

function verbs(){
 const data=[
 {inf:"hteti",ru:"хотеть",forms:["hoću","hoćeš","hoće","hoćemo","hoćete","hoće"],ex:"Hoću kafu. — Я хочу кофе."},
 {inf:"raditi",ru:"работать",forms:["radim","radiš","radi","radimo","radite","rade"],ex:"Radim od kuće. — Я работаю из дома."},
 {inf:"živeti",ru:"жить",forms:["živim","živiš","živi","živimo","živite","žive"],ex:"Živim u Subotici. — Я живу в Суботице."},
 {inf:"imati",ru:"иметь",forms:["imam","imaš","ima","imamo","imate","imaju"],ex:"Imam vremena. — У меня есть время."},
 {inf:"govoriti",ru:"говорить",forms:["govorim","govoriš","govori","govorimo","govorite","govore"],ex:"Govorim malo srpski. — Я немного говорю по-сербски."},
 {inf:"učiti",ru:"учить(ся)",forms:["učim","učiš","uči","učimo","učite","uče"],ex:"Učim srpski. — Я учу сербский."}
 ];
 const pron=["ja — я","ti — ты","on / ona — он / она","mi — мы","vi — вы","oni / one — они"];
 view.innerHTML=`<p class="page-intro">В сербском окончание глагола меняется в зависимости от того, кто выполняет действие. Учим не только перевод, но и все формы сразу.</p>
 <div class="verb-note"><b>Как читать таблицу</b><span>Местоимение + форма глагола. В обычной речи местоимение часто опускают: вместо «Ja radim» можно сказать просто «Radim».</span></div>
 <div class="verb-grid">${data.map((v,i)=>`<article class="lesson-card verb-card"><div class="verb-heading"><div><span class="tag">ГЛАГОЛ ${String(i+1).padStart(2,"0")}</span><h3>${v.inf}</h3><p>${v.ru}</p></div><button class="icon-btn" data-verb-speak="${i}">🔊 Слушать</button></div><div class="verb-forms">${v.forms.map((f,j)=>`<div><span>${pron[j]}</span><b>${f}</b></div>`).join("")}</div><div class="example-box">${v.ex}</div></article>`).join("")}</div>
 <article class="lesson-card verb-practice"><span class="tag">MALA VEŽBA</span><h3>Проверь себя</h3><p>Выбери правильную форму глагола.</p><div class="verb-question" id="verb-question"></div><div class="answers" id="verb-options"></div><div class="feedback" id="verb-feedback"></div><button class="primary" id="verb-next">Следующий вопрос →</button></article>`;
 view.querySelectorAll("[data-verb-speak]").forEach(b=>b.onclick=()=>{const v=data[+b.dataset.verbSpeak];speak(v.forms.join(", "))});
 const qs=[
 {q:"Ja ___ od kuće. (raditi)",opts:["radiš","radim","rade"],c:1,why:"Ja radim — я работаю."},
 {q:"Ti ___ u Subotici. (živeti)",opts:["živim","živi","živiš"],c:2,why:"Ti živiš — ты живёшь."},
 {q:"Ona ___ kafu. (hteti)",opts:["hoće","hoću","hoćemo"],c:0,why:"Ona hoće — она хочет."},
 {q:"Mi ___ srpski. (učiti)",opts:["učite","učimo","uče"],c:1,why:"Mi učimo — мы учим."},
 {q:"Oni ___ vremena. (imati)",opts:["imaju","imaš","imam"],c:0,why:"Oni imaju — у них есть."},
 {q:"Vi ___ ruski. (govoriti)",opts:["govore","govorim","govorite"],c:2,why:"Vi govorite — вы говорите."}
 ];
 let qi=0,locked=false;
 const draw=()=>{const q=qs[qi];locked=false;$("#verb-question").textContent=q.q;$("#verb-feedback").textContent="";$("#verb-options").innerHTML=q.opts.map((x,i)=>`<button class="answer" data-vopt="${i}">${x}</button>`).join("");view.querySelectorAll("[data-vopt]").forEach(b=>b.onclick=()=>{if(locked)return;locked=true;const n=+b.dataset.vopt;view.querySelectorAll("[data-vopt]").forEach((x,i)=>{x.disabled=true;if(i===q.c)x.classList.add("correct");else if(i===n)x.classList.add("wrong")});$("#verb-feedback").textContent=(n===q.c?"Верно! ":"Попробуй запомнить: ")+q.why})};
 $("#verb-next").onclick=()=>{qi=(qi+1)%qs.length;draw()};draw();
}


const exerciseSets={
 translate:[
 {q:"Как сказать «Я живу в Суботице»?",a:["Živim u Subotici.","Živiš u Subotici.","Živim iz Subotice."],c:0,why:"Živim u Subotici — я живу в Суботице."},
 {q:"Как сказать «Мне нужна вода»?",a:["Želim vodu.","Treba mi voda.","Imam vodu."],c:1,why:"Treba mi… — мне нужно / нужна…"},
 {q:"Как сказать «Я не понимаю»?",a:["Ne znam.","Ne razumem.","Ne govorim."],c:1,why:"Ne razumem — я не понимаю."},
 {q:"Как сказать «Ещё один кофе, пожалуйста»?",a:["Još jednu kafu, molim.","Jednu vodu, molim.","Kafa je dobra."],c:0,why:"Još jednu kafu, molim — ещё один кофе, пожалуйста."},
 {q:"Как сказать «Мой муж работает из дома»?",a:["Moj muž radi od kuće.","Moj muž živi kuću.","Moj muž radi u kući."],c:0,why:"Radi od kuće — работает из дома."},
 {q:"Как сказать «Я учу сербский»?",a:["Govorim srpski.","Učim srpski.","Znam srpski."],c:1,why:"Učim srpski — я учу сербский."}
 ],
 grammar:[
 {q:"Ja ___ iz Rusije. (biti)",a:["si","sam","je"],c:1,why:"С ja используется sam."},
 {q:"Ti ___ u Subotici. (živeti)",a:["živim","živiš","žive"],c:1,why:"Ti živiš — ты живёшь."},
 {q:"Ona ___ kafu. (hteti)",a:["hoće","hoću","hoćemo"],c:0,why:"Ona hoće — она хочет."},
 {q:"Mi ___ srpski. (učiti)",a:["učite","učimo","uče"],c:1,why:"Mi učimo — мы учим."},
 {q:"Oni ___ vremena. (imati)",a:["imam","imaš","imaju"],c:2,why:"Oni imaju — у них есть."},
 {q:"Vi ___ ruski. (govoriti)",a:["govorite","govori","govorim"],c:0,why:"Vi govorite — вы говорите."}
 ],
 vocabulary:[
 {q:"Что значит «ponekad»?",a:["Всегда","Иногда","Никогда"],c:1,why:"Ponekad — иногда."},
 {q:"Что значит «komšinica»?",a:["Соседка","Подруга","Мать"],c:0,why:"Komšinica — соседка."},
 {q:"Что значит «račun»?",a:["Деньги","Пакет","Счёт / чек"],c:2,why:"Račun — счёт или чек."},
 {q:"Что значит «kupatilo»?",a:["Кухня","Ванная комната","Комната"],c:1,why:"Kupatilo — ванная комната."},
 {q:"Что значит «sutra»?",a:["Вчера","Сегодня","Завтра"],c:2,why:"Sutra — завтра."},
 {q:"Что значит «polako»?",a:["Быстро","Медленно / не спеша","Громко"],c:1,why:"Polako — медленно, не спеша."}
 ],

 translate:[
 {q:"Как сказать «Я хочу купить хлеб»?",a:["Želim da kupim hleb.","Želim da jedem hleb.","Kupujem od hleba."],c:0,why:"Želim da kupim hleb — я хочу купить хлеб."},
 {q:"Как сказать «Где находится аптека?»",a:["Kada je apoteka?","Gde je apoteka?","Ko je apoteka?"],c:1,why:"Gde je…? — Где находится…?"},
 {q:"Как сказать «Я немного говорю по-сербски»?",a:["Govorim mnogo srpski.","Govorim malo srpski.","Ne govorim ruski."],c:1,why:"Malo — немного."},
 {q:"Как сказать «Сегодня я дома»?",a:["Danas sam kod kuće.","Sutra sam kući.","Danas imam kuću."],c:0,why:"Danas sam kod kuće — сегодня я дома."},
 {q:"Как сказать «Мне нужно идти»?",a:["Mogu da idem.","Moram da idem.","Želim da dođem."],c:1,why:"Moram da idem — я должен / должна идти."},
 {q:"Как сказать «Повторите, пожалуйста»?",a:["Govorite brzo, molim.","Ponovite, molim.","Čekajte kod kuće."],c:1,why:"Ponovite, molim — повторите, пожалуйста."},
 {q:"Как сказать «Я не знаю»?",a:["Ne znam.","Ne mogu.","Ne želim."],c:0,why:"Ne znam — я не знаю."},
 {q:"Как сказать «Сколько стоит это?»",a:["Koliko je sati?","Koliko košta ovo?","Gde je ovo?"],c:1,why:"Koliko košta ovo? — Сколько это стоит?"},
 {q:"Как сказать «Я пью кофе утром»?",a:["Ujutru pijem kafu.","Uveče jedem kafu.","Danas kuvam kafu."],c:0,why:"Ujutru — утром; pijem — пью."},
 {q:"Как сказать «Магазин рядом»?",a:["Prodavnica je daleko.","Prodavnica je blizu.","Prodavnica je zatvorena."],c:1,why:"Blizu — близко, рядом."},
 {q:"Как сказать «Я жду автобус»?",a:["Čekam autobus.","Tražim autobusku kartu.","Vozim autobus."],c:0,why:"Čekam — я жду."},
 {q:"Как сказать «Мы учим сербский»?",a:["Oni uče srpski.","Mi učimo srpski.","Vi učite srpski."],c:1,why:"Mi učimo — мы учим."},
 {q:"Как сказать «Завтра я работаю»?",a:["Juče radim.","Sada sam radila.","Sutra radim."],c:2,why:"Sutra — завтра; radim — работаю."},
 {q:"Как сказать «Мне нужна помощь»?",a:["Treba mi pomoć.","Imam pomoć.","Pomažem mi."],c:0,why:"Treba mi pomoć — мне нужна помощь."},
 {q:"Как сказать «Я люблю гулять»?",a:["Volim da šetam.","Volim da spavam.","Želim da čekam."],c:0,why:"Volim da šetam — я люблю гулять."},
 {q:"Как сказать «Извините, где остановка?»",a:["Izvinite, gde je stanica?","Hvala, kada je stanica?","Molim, ko je stanica?"],c:0,why:"Izvinite, gde je stanica? — Извините, где остановка?"},
 {q:"Как сказать «Я живу в квартире»?",a:["Radim u stanu.","Živim u stanu.","Idem iz stana."],c:1,why:"Živim u stanu — я живу в квартире."},
 {q:"Как сказать «Не понимаю вопрос»?",a:["Ne razumem pitanje.","Ne znam pitanje.","Ne govorim pitanje."],c:0,why:"Ne razumem pitanje — я не понимаю вопрос."}
 ],
 grammar:[
 {q:"Ja ___ kafu. (piti)",a:["piješ","pijem","piju"],c:1,why:"Ja pijem — я пью."},
 {q:"Ti ___ u prodavnicu. (ići)",a:["idem","ideš","ide"],c:1,why:"Ti ideš — ты идёшь."},
 {q:"On ___ srpski. (učiti)",a:["učim","učite","uči"],c:2,why:"On uči — он учит."},
 {q:"Mi ___ vremena. (imati)",a:["imamo","imate","imaju"],c:0,why:"Mi imamo — у нас есть."},
 {q:"Ja ___ da pomognem. (moći)",a:["možeš","mogu","može"],c:1,why:"Ja mogu — я могу."},
 {q:"Vi ___ ovde. (raditi)",a:["radim","radi","radite"],c:2,why:"Vi radite — вы работаете."},
 {q:"One ___ kafu. (želeti)",a:["žele","želim","želiš"],c:0,why:"One žele — они (жен.) хотят."},
 {q:"Ti ___ odgovor. (znati)",a:["znam","znaš","zna"],c:1,why:"Ti znaš — ты знаешь."},
 {q:"Ona ___ u Subotici. (živeti)",a:["živim","živiš","živi"],c:2,why:"Ona živi — она живёт."},
 {q:"Mi ___ kod kuće. (biti)",a:["sam","smo","su"],c:1,why:"Mi smo — мы есть / мы находимся."},
 {q:"Ja ___ hleb. (jesti)",a:["jedem","jedeš","jedu"],c:0,why:"Ja jedem — я ем."},
 {q:"Deca ___ u školi. (biti)",a:["je","su","smo"],c:1,why:"Deca su — дети находятся."},
 {q:"On ___ autobus. (čekati)",a:["čekam","čekaš","čeka"],c:2,why:"On čeka — он ждёт."},
 {q:"Vi ___ ruski? (govoriti)",a:["govorim","govore","govorite"],c:2,why:"Vi govorite — вы говорите."},
 {q:"Ja ___ da spavam. (želeti)",a:["želim","želiš","žele"],c:0,why:"Ja želim — я хочу."},
 {q:"Oni ___ u pekari. (raditi)",a:["radi","radimo","rade"],c:2,why:"Oni rade — они работают."},
 {q:"Ti ___ vodu. (piti)",a:["pijem","piješ","pije"],c:1,why:"Ti piješ — ты пьёшь."},
 {q:"Mi ___ u park. (ići)",a:["idemo","idu","ideš"],c:0,why:"Mi idemo — мы идём."}
 ],
 vocabulary:[
 {q:"Что значит «odmah»?",a:["Сразу","Позже","Вчера"],c:0,why:"Odmah — сразу, немедленно."},
 {q:"Что значит «blizu»?",a:["Далеко","Близко","Слева"],c:1,why:"Blizu — близко."},
 {q:"Что значит «daleko»?",a:["Рядом","Далеко","Напротив"],c:1,why:"Daleko — далеко."},
 {q:"Что значит «pomoć»?",a:["Помощь","Покупка","Вопрос"],c:0,why:"Pomoć — помощь."},
 {q:"Что значит «pitanje»?",a:["Ответ","Вопрос","Задание"],c:1,why:"Pitanje — вопрос."},
 {q:"Что значит «odgovor»?",a:["Ответ","Остановка","Адрес"],c:0,why:"Odgovor — ответ."},
 {q:"Что значит «stanica»?",a:["Станция / остановка","Квартира","Улица"],c:0,why:"Stanica — станция или остановка."},
 {q:"Что значит «šetati»?",a:["Работать","Гулять","Покупать"],c:1,why:"Šetati — гулять, прогуливаться."},
 {q:"Что значит «čekati»?",a:["Ждать","Идти","Знать"],c:0,why:"Čekati — ждать."},
 {q:"Что значит «morati»?",a:["Хотеть","Мочь","Быть должным"],c:2,why:"Morati — быть должным, быть вынужденным."},
 {q:"Что значит «možda»?",a:["Конечно","Может быть","Никогда"],c:1,why:"Možda — может быть."},
 {q:"Что значит «uvek»?",a:["Иногда","Всегда","Редко"],c:1,why:"Uvek — всегда."},
 {q:"Что значит «nikad»?",a:["Никогда","Сейчас","Часто"],c:0,why:"Nikad — никогда."},
 {q:"Что значит «porodica»?",a:["Работа","Семья","Соседи"],c:1,why:"Porodica — семья."},
 {q:"Что значит «račun»?",a:["Счёт / чек","Ключ","Книга"],c:0,why:"Račun — счёт или чек."},
 {q:"Что значит «ključ»?",a:["Окно","Ключ","Дверь"],c:1,why:"Ključ — ключ."},
 {q:"Что значит «voće»?",a:["Овощи","Фрукты","Мясо"],c:1,why:"Voće — фрукты."},
 {q:"Что значит «povrće»?",a:["Овощи","Фрукты","Молоко"],c:0,why:"Povrće — овощи."}
 ]
};
const exerciseWordTranslations={ja:"я",ti:"ты",on:"он",ona:"она",mi:"мы",vi:"вы",oni:"они",sam:"есть",si:"есть",je:"есть",smo:"есть",ste:"есть",su:"есть",živim:"живу",živiš:"живёшь",živi:"живёт",živimo:"живём",žive:"живут",radim:"работаю",radiš:"работаешь",radi:"работает",radimo:"работаем",rade:"работают",učim:"учу",učiš:"учишь",uči:"учит",učimo:"учим",uče:"учат",pijem:"пью",piješ:"пьёшь",pije:"пьёт",pijemo:"пьём",piju:"пьют",idem:"иду / еду",ideš:"идёшь / едешь",ide:"идёт / едет",idemo:"идём / едем",idu:"идут / едут",hoću:"хочу",hoćeš:"хочешь",hoće:"хочет",hoćemo:"хотим",mogu:"могу",možeš:"можешь",može:"может",možemo:"можем",imam:"имею / у меня есть",imaš:"имеешь / у тебя есть",ima:"имеет",imamo:"имеем",imaju:"имеют",hleb:"хлеб",voda:"вода",vodu:"воду",kafu:"кофе",kafa:"кофе",muž:"муж",kuće:"дома",kuća:"дом",stanu:"квартире",stan:"квартира",Subotici:"Суботице",srpski:"сербский",ruski:"русский",malo:"немного",danas:"сегодня",sutra:"завтра",ujutru:"утром",prodavnica:"магазин",apoteka:"аптека",stanica:"остановка / станция",pomoć:"помощь",pitanje:"вопрос",autobus:"автобус",odgovor:"ответ",razumem:"понимаю",znam:"знаю",govorim:"говорю",ponovite:"повторите",molim:"пожалуйста",još:"ещё",jednu:"одну",želim:"хочу",da:"частица перед глаголом",ne:"не",u:"в",iz:"из",blizu:"близко",daleko:"далеко",čekam:"жду",volim:"люблю",šetam:"гуляю"};
function lookupExerciseWord(token){const key=token.toLocaleLowerCase("sr");const k=Object.keys(exerciseWordTranslations).find(x=>x.toLocaleLowerCase("sr")===key);if(k)return exerciseWordTranslations[k];const w=words.find(x=>x.sr.toLocaleLowerCase("sr")===key);return w?w.ru:null}
function escEx(v){return String(v).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function clickableExerciseText(v){return String(v).split(/(\p{L}+|[^\p{L}]+)/u).map(part=>{if(!/^\p{L}+$/u.test(part))return escEx(part);const ru=lookupExerciseWord(part);return ru?'<button type="button" class="exercise-word" data-ex-word="'+escEx(part)+'">'+escEx(part)+'</button>':escEx(part)}).join("")}
function bindExerciseWords(){view.querySelectorAll("[data-ex-word]").forEach(btn=>btn.onclick=()=>{const token=btn.dataset.exWord,ru=lookupExerciseWord(token)||"Перевод пока не добавлен";let old=view.querySelector("#exercise-word-tip");if(old)old.remove();const tip=document.createElement("div");tip.id="exercise-word-tip";tip.className="exercise-word-tip";const exists=words.some(w=>w.sr.toLocaleLowerCase("sr")===token.toLocaleLowerCase("sr"));tip.innerHTML='<b>'+escEx(token)+'</b> — '+escEx(ru)+(saved.includes(token)?' <span>✓ Уже в моих словах</span>':' <button type="button" class="small-btn" id="save-exercise-word">＋ Добавить в мои слова</button>');btn.closest(".panel").appendChild(tip);const save=tip.querySelector("#save-exercise-word");if(save)save.onclick=()=>{if(!exists){const added={category:"Из упражнений",sr:token,ru,ex:token+" — "+ru};words.push(added);customWords.push(added);localStorage.setItem("mojCustomWords",JSON.stringify(customWords))}if(!saved.includes(token))saved.push(token);localStorage.setItem("mojSaved",JSON.stringify(saved));save.textContent="✓ Добавлено";save.disabled=true}})}

let exerciseMode="translate",exerciseIndex=0,exerciseScore=0,exerciseLocked=false,exerciseQuestions=[];
function exercises(){
 view.innerHTML=`<p class="page-intro">Выбирай тип задания. Упражнения помогают не только узнавать слова, но и использовать их в предложениях.</p>
 <div class="exercise-modes">
 <button class="exercise-mode" data-mode="translate"><b>🇷🇸 Перевод</b><span>Выбери сербскую фразу по русскому значению</span></button>
 <button class="exercise-mode" data-mode="grammar"><b>🧩 Грамматика</b><span>Подставь правильную форму глагола</span></button>
 <button class="exercise-mode" data-mode="vocabulary"><b>📚 Словарный запас</b><span>Проверь значение новых слов</span></button>
 </div><div class="panel exercise-intro"><span class="tag">VEŽBANJE SVAKOG DANA</span><h2>Практика маленькими шагами</h2><p>В каждом раунде 24 вопроса. Вопросы перемешиваются, поэтому при повторении порядок будет другим. После ответа ты увидишь объяснение и правильный вариант.</p></div>`;
 view.querySelectorAll("[data-mode]").forEach(b=>b.onclick=()=>startExercise(b.dataset.mode));
}
function startExercise(mode){
 exerciseMode=mode;exerciseIndex=0;exerciseScore=0;exerciseLocked=false;
 exerciseQuestions=[...exerciseSets[mode]].sort(()=>Math.random()-.5);
 renderExercise();
}
function renderExercise(){
 if(exerciseIndex>=exerciseQuestions.length){
  view.innerHTML=`<div class="panel quiz"><span class="tag">BRAVO!</span><h2>Раунд завершён</h2><div class="exercise-score">${exerciseScore} / ${exerciseQuestions.length}</div><p class="page-intro">Правильных ответов: ${exerciseScore} из ${exerciseQuestions.length}. Ошибки — это часть обучения, повтори раунд, чтобы закрепить материал.</p><button class="primary" id="exercise-again">Повторить раунд</button> <button class="secondary" id="exercise-back">К упражнениям</button></div>`;
  $("#exercise-again").onclick=()=>startExercise(exerciseMode);$("#exercise-back").onclick=exercises;return;
 }
 const q=exerciseQuestions[exerciseIndex];exerciseLocked=false;
 view.innerHTML=`<div class="panel quiz exercise-card"><div class="exercise-top"><span class="tag">${exerciseMode==="translate"?"PREVOD · ПЕРЕВОД":exerciseMode==="grammar"?"GRAMATIKA · ГРАММАТИКА":"REČNIK · СЛОВА"}</span><span class="muted">${exerciseIndex+1} / ${exerciseQuestions.length}</span></div><div class="progress-track"><div class="progress-fill" style="width:${(exerciseIndex+1)/exerciseQuestions.length*100}%"></div></div><div class="question">${clickableExerciseText(q.q)}</div><div class="answers">${q.a.map((x,i)=>`<button class="answer" data-ex-answer="${i}">${clickableExerciseText(x)}</button>`).join("")}</div><div class="feedback" id="exercise-feedback"></div><button class="primary" id="exercise-next" disabled>${exerciseIndex===exerciseQuestions.length-1?"Результат":"Следующий вопрос →"}</button></div>`;
 view.querySelectorAll("[data-ex-answer]").forEach(b=>b.onclick=()=>{
  if(exerciseLocked)return;exerciseLocked=true;const chosen=+b.dataset.exAnswer;
  view.querySelectorAll("[data-ex-answer]").forEach((x,i)=>{x.disabled=true;if(i===q.c)x.classList.add("correct");else if(i===chosen)x.classList.add("wrong")});
  if(chosen===q.c)exerciseScore++;
  $("#exercise-feedback").textContent=(chosen===q.c?"Верно! ":"Запомни: ")+q.why;
  if(exerciseMode==="translate"){const full=q.q.replace(/^Как сказать\s*[«"]?/,"").replace(/[»"]\?$/,"");const line=document.createElement("div");line.className="exercise-full-translation";line.textContent="Полный перевод: "+full;$("#exercise-feedback").appendChild(line)}
  $("#exercise-next").disabled=false;
 });
 bindExerciseWords();
 $("#exercise-next").onclick=()=>{exerciseIndex++;renderExercise()};
}

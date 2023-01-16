let emplData = `Участок очистки сточных вод	Волков Н.А.
Усреднитель	Волков Н.А.
Холодильник	Гаврилова С.С.
Материальный склад № 7	Васильченко С.В.
Токарная мастерская	Ведерников В.И.
Трансформаторная подстанция ТП-15	Казанцев А.В.
Раздевалка АХС	Вершинин А.С.
Гараж легковых автомобилей	Абуткин Р.Ш.
Помещение для тех.обслуживания	Абуткин Р.Ш.
Материальный склад № 8	Васильченко С.В.
Трансформаторная подстанция ТП-47	Казанцев А.В.
Материальный склад	Васильченко С.В.
Диспетчерская	Абуткин Р.Ш.
Материальный склад № 5	Васильченко С.В.
Помещение прачечной	Ведерников В.И.
Тепловой пункт	Ведерников В.И.
Склад готовой продукции	Гаврилова С.С.
Железный склад	Гаврилова С.С.
Бетонный склад	Гаврилова С.С.
Градирни	Ведерников В.И.
Трансформаторная подстанция РП-4	Казанцев А.В.
Здание распредпункта	Ведерников В.И.
Воздуходувная компрессорная	Ведерников В.И.
Склад СП ГПК СОМ	Чинюк Э.В.
Компрессорная АХУ	Ведерников В.И.
Электрощитовая к участку ледяной воды	Казанцев А.В.
Участок по производству СП	Чинюк Э.В.
Теплогазогенераторная	Савин П. В.
Помещение ВВУ	Чинюк Э.В.
Отделение баромембранных технологий	Чинюк Э.В.
Водоподготовка СИП №3	Чинюк Э.В.
Отделение хранения сыворотки	Чинюк Э.В.
Отделение хранения молока	Чинюк Э.В.
Приемка сыворотки	Чинюк Э.В.
Участок нормализации	Чинюк Э.В.
Приемка молока	Чинюк Э.В.
Здание АБК	Вершинин А.С.
Цех по производству ЦМП и КМП №1,2	Главатских Л.Л.
Цех по производству ЦМП и КМП №3	Главатских Л.Л.
Цех по производству ЦМП и КМП №4	Главатских Л.Л.
Цех по производству ЦМП и КМП №5	Главатских Л.Л.
СИП-станция цех ЦМП №1,2	Главатских Л.Л.
Склад вспом.материалов ЦМП № 1	Главатских Л.Л.
Склад вспом.материалов ЦМП № 2	Главатских Л.Л.
СИП-станция цех ЦМП № 3,4	Главатских Л.Л.
СИП-станция цех ЦМП № 5	Главатских Л.Л.
Мелкооптовый магазин	Вершинин А.С.
Раздевалка ОСЛ	Гаврилова С.С.
Котельная	Савин П. В.
Помещение для шиномонтажа	Юферев Д.А.
Склад № 3	Юферев Д.А.
Склад № 2	Юферев Д.А.
Склад № 1	Васильченко С.В.
Ремонтный бокс № 3	Юферев Д.А.
Ремонтный бокс № 2	Юферев Д.А.
Ремонтный бокс № 1	Юферев Д.А.
Сварочный пост	Юферев Д.А.
Ангар для хранения автомобилей	Абуткин Р.Ш.
Блок подсобных помещений	Ведерников В.И.
Здание проходной	Вершинин А.С.
Здание насосной станции	Савин П. В.
Канализационная насосная станция	Ведерников В.И.
Административный корпус	Вершинин А.С.`

emplData = emplData.replaceAll('"', '')
emplData = emplData.split('\n')

let res = []

for (let i = 0; i < emplData.length; i++) {
    let splittedData = emplData[i].split('\t')
    let name = splittedData[1]
    let place = splittedData[0]

    res.push({
        emplName: name,
        place: [place],
        problemType: null,
        isConfirmed: false,
        email: '',
        roles: ['territory_resp'],
        user: null,
        reportsToFix: []
    })

    emplData.splice(i, 1)

    let toSplice = []

    for (let j = 0; j < emplData.length; j++) {
        let s = emplData[j].split('\t')
        let currentName = s[1]
        let currentPlace = s[0]

        if (currentName == name) {
            res[res.length - 1].place.push(currentPlace)
            toSplice.push(j)
        }
    }
    // i dont know, why it works
    while (toSplice.length) {
        emplData.splice(toSplice.pop(), 1);
    }
}

console.log(res);






















let problemTypesRaw = `Неисправность в электричестве/Казанцев А.В.
Неисправность оборудования в части КИП и А/Невоструев А.В.
Неисправность оборудования в части электричества/Казанцев А.В.
Неисправность оборудования в механической части/Горбушин С.В.
Неисправность отопления, вентиляции, водопровода, канализации, сварочные работы./Ведерников В.И.
Ремонт наружный или внутренний зданий./Бузиков И.Х.
Уличная территория производственной площадки/Вершинин А.С.
Ремонтное оборудование автомобилей/Юферев Д.А.`

problemTypesRaw = problemTypesRaw.split('\n')

let problemTypes = []
for (let p of problemTypesRaw) {
    let f = p.split('/')

    problemTypes.push({
        type: f[0],
        emplName: f[1],
    })
}
// console.log(problemTypes);

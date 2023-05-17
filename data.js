module.exports = {
    // hierarchy: [
    //     {
    //         emplName: 'Пальшин В.В.',
    //         down: [
    //             { emplName: 'Глушков А.Б.', _id: null },
    //             { emplName: 'Лебедев И.П.', _id: null },
    //             { emplName: 'Абуткин Р.Ш.', _id: null }
    //         ],
    //         up: []
    //     },
    //     {
    //         emplName: 'Глушков А.Б.',
    //         down: [{ emplName: 'Лебедев И.П.', _id: null }, { emplName: 'Казанцев А.В.', _id: null }, { emplName: 'Невоструев А.В.', _id: null }, { emplName: 'Ведерников В.И.', _id: null }, { emplName: 'Бузиков И.Х.', _id: null }],
    //         up: [{ emplName: 'Пальшин В.В.', _id: null }]
    //     },
    //     {
    //         emplName: 'Абуткин Р.Ш.',
    //         down: [{ emplName: 'Юферев Д.А.', _id: null }],
    //         up: [{ emplName: 'Пальшин В.В.', _id: null }]
    //     },
    //     {
    //         emplName: 'Казанцев А.В.',
    //         down: [],
    //         up: [{ emplName: 'Глушков А.Б.', _id: null }, { emplName: 'Пальшин В.В.', _id: null }]
    //     },
    //     {
    //         emplName: 'Невоструев А.В.',
    //         down: [],
    //         up: [{ emplName: 'Глушков А.Б.', _id: null }, { emplName: 'Пальшин В.В.', _id: null }]
    //     },
    //     {
    //         emplName: 'Горбушин С.В.',
    //         down: [],
    //         up: [{ emplName: 'Лебедев И.П.', _id: null }, { emplName: 'Глушков А.Б.', _id: null }, { emplName: 'Пальшин В.В.', _id: null }]
    //     },
    //     {
    //         emplName: 'Ведерников В.И.',
    //         down: [],
    //         up: [{ emplName: 'Глушков А.Б.', _id: null }, { emplName: 'Пальшин В.В.', _id: null }]
    //     },
    //     {
    //         emplName: 'Бузиков И.Х.',
    //         down: [],
    //         up: [{ emplName: 'Глушков А.Б.', _id: null }, { emplName: 'Пальшин В.В.', _id: null }]
    //     },
    //     {
    //         emplName: 'Вершинин А.С.',
    //         down: [],
    //         up: [{ emplName: 'Пальшин В.В.', _id: null }]
    //     },
    //     {
    //         emplName: 'Юферев Д.А.',
    //         down: [],
    //         up: [{ emplName: 'Абуткин Р.Ш.', _id: null }, { emplName: 'Пальшин В.В.', _id: null }]
    //     },
    // ],
    // rawProblemTypes: [
    //     { type: 'Неисправность в электричестве', emplName: 'Казанцев А.В.' },
    //     {
    //         type: 'Неисправность оборудования в части КИП и А',
    //         emplName: 'Невоструев А.В.'
    //     },
    //     {
    //         type: 'Неисправность оборудования в части электричества',
    //         emplName: 'Казанцев А.В.'
    //     },
    //     {
    //         type: 'Неисправность оборудования в механической части',
    //         emplName: 'Горбушин С.В.'
    //     },
    //     {
    //         type: 'Неисправность отопления, вентиляции, водопровода, канализации, сварочные работы.',
    //         emplName: 'Ведерников В.И.'
    //     },
    //     {
    //         type: 'Ремонт наружный или внутренний зданий.',
    //         emplName: 'Бузиков И.Х.'
    //     },
    //     {
    //         type: 'Уличная территория производственной площадки',
    //         emplName: 'Вершинин А.С.'
    //     },
    //     {
    //         type: 'Ремонтное оборудование автомобилей',
    //         emplName: 'Юферев Д.А.'
    //     }
    // ],
    // employees: [
    //     {
    //         emplName: 'Невоструев А.В.',
    //         problemType: null,
    //         isConfirmed: false,
    //         roles: ['territory_resp'],
    //         places: [],
    //         email: '',
    //         user: null,
    //         reportsToFix: []
    //     },
    //     {
    //         emplName: 'Горбушин С.В.',
    //         problemType: null,
    //         isConfirmed: false,
    //         roles: ['territory_resp'],
    //         places: [],
    //         email: '',
    //         user: null,
    //         reportsToFix: []
    //     },
    //     {
    //         emplName: 'Лебедев И.П.',
    //         problemType: null,
    //         isConfirmed: false,
    //         roles: [],
    //         places: [],
    //         email: '',
    //         user: null,
    //         reportsToFix: []
    //     },
    //     {
    //         emplName: 'Бузиков И.Х.',
    //         problemType: null,
    //         isConfirmed: false,
    //         places: [],
    //         roles: [],
    //         email: '',
    //         user: null,
    //         reportsToFix: []
    //     },
    //     {
    //         emplName: 'Глушков А.Б.',
    //         problemType: null,
    //         isConfirmed: false,
    //         places: [],
    //         roles: [],
    //         email: '',
    //         user: null,
    //         reportsToFix: []
    //     },
    //     {
    //         emplName: 'Волков Н.А.',
    //         places: ['Участок очистки сточных вод', 'Усреднитель'],
    //         problemType: null,
    //         isConfirmed: false,
    //         places: [],
    //         roles: [],
    //         email: '',
    //         roles: ['territory_resp'],
    //         user: null,
    //         reportsToFix: []
    //     },
    //     {
    //         emplName: 'Васильченко С.В.',
    //         places: [
    //             'Материальный склад № 7',
    //             'Материальный склад № 8',
    //             'Материальный склад',
    //             'Материальный склад № 5',
    //             'Склад № 1'
    //         ],
    //         problemType: null,
    //         isConfirmed: false,
    //         email: '',
    //         roles: ['territory_resp'],
    //         user: null,
    //         reportsToFix: []
    //     },
    //     {
    //         emplName: 'Казанцев А.В.',
    //         places: [
    //             'Трансформаторная подстанция ТП-15',
    //             'Трансформаторная подстанция ТП-47',
    //             'Трансформаторная подстанция РП-4',
    //             'Электрощитовая к участку ледяной воды'
    //         ],
    //         problemType: null,
    //         isConfirmed: false,
    //         email: '',
    //         roles: ['territory_resp'],
    //         user: null,
    //         reportsToFix: []
    //     },
    //     {
    //         emplName: 'Абуткин Р.Ш.',
    //         places: [
    //             'Гараж легковых автомобилей',
    //             'Помещение для тех.обслуживания',
    //             'Диспетчерская',
    //             'Ангар для хранения автомобилей'
    //         ],
    //         problemType: null,
    //         isConfirmed: false,
    //         email: '',
    //         roles: ['territory_resp'],
    //         user: null,
    //         reportsToFix: []
    //     },
    //     {
    //         emplName: 'Ведерников В.И.',
    //         places: [
    //             'Тепловой пункт',
    //             'Токарная мастерская',
    //             'Помещение прачечной',
    //             'Градирни',
    //             'Здание распредпункта',
    //             'Воздуходувная компрессорная',
    //             'Компрессорная АХУ',
    //             'Блок подсобных помещений',
    //             'Канализационная насосная станция'
    //         ],
    //         problemType: null,
    //         isConfirmed: false,
    //         email: '',
    //         roles: ['territory_resp'],
    //         user: null,
    //         reportsToFix: []
    //     },
    //     {
    //         emplName: 'Чинюк Э.В.',
    //         places: [
    //             'Склад СП ГПК СОМ',
    //             'Участок по производству СП',
    //             'Помещение ВВУ',
    //             'Отделение баромембранных технологий',
    //             'Водоподготовка СИП №3',
    //             'Отделение хранения сыворотки',
    //             'Отделение хранения молока',
    //             'Приемка сыворотки',
    //             'Участок нормализации',
    //             'Приемка молока'
    //         ],
    //         problemType: null,
    //         isConfirmed: false,
    //         email: '',
    //         roles: ['territory_resp'],
    //         user: null,
    //         reportsToFix: []
    //     },
    //     {
    //         emplName: 'Вершинин А.С.',
    //         places: [
    //             'Здание АБК',
    //             'Раздевалка АХС',
    //             'Мелкооптовый магазин',
    //             'Здание проходной',
    //             'Административный корпус'
    //         ],
    //         problemType: null,
    //         isConfirmed: false,
    //         email: '',
    //         roles: ['territory_resp'],
    //         user: null,
    //         reportsToFix: []
    //     },
    //     {
    //         emplName: 'Главатских Л.Л.',
    //         places: [
    //             'Цех по производству ЦМП и КМП №4',
    //             'Цех по производству ЦМП и КМП №1,2',
    //             'Цех по производству ЦМП и КМП №3',
    //             'Цех по производству ЦМП и КМП №5',
    //             'СИП-станция цех ЦМП №1,2',
    //             'Склад вспом.материалов ЦМП № 1',
    //             'Склад вспом.материалов ЦМП № 2',
    //             'СИП-станция цех ЦМП № 3,4',
    //             'СИП-станция цех ЦМП № 5'
    //         ],
    //         problemType: null,
    //         isConfirmed: false,
    //         email: '',
    //         roles: ['territory_resp'],
    //         user: null,
    //         reportsToFix: []
    //     },
    //     {
    //         emplName: 'Юферев Д.А.',
    //         places: [
    //             'Склад № 3',
    //             'Помещение для шиномонтажа',
    //             'Склад № 2',
    //             'Ремонтный бокс № 3',
    //             'Ремонтный бокс № 2',
    //             'Ремонтный бокс № 1',
    //             'Сварочный пост'
    //         ],
    //         problemType: null,
    //         isConfirmed: false,
    //         email: '',
    //         roles: ['territory_resp'],
    //         user: null,
    //         reportsToFix: []
    //     }
    // ],
    hierarchy: [
        {
            emplName: "Григорий Д",
            down: [
                { emplName: 'Екатерина Б', _id: null },
                { emplName: 'Данил Л', _id: null },
                { emplName: 'Кристина Р', _id: null },
                { emplName: 'Степан С', _id: null },
                { emplName: 'Екатерина Ч', _id: null },
                { emplName: 'Екатерина К', _id: null },
                { emplName: 'Дарья Л', _id: null },
                { emplName: 'Арина К', _id: null },
                { emplName: 'Анна Перфилова', _id: null },
                { emplName: 'Федя Д', _id: null },
                { emplName: 'Александра Е', _id: null },
                { emplName: 'Любовь Т', _id: null },
                { emplName: 'Никита Ч', _id: null },
                { emplName: 'Андрей К', _id: null },
                { emplName: 'Сергей К', _id: null },
                { emplName: 'Анна Прокудина', _id: null },
                { emplName: 'Костя Фаткин', _id: null },
                { emplName: 'Андрей П', _id: null },
                { emplName: 'Виктор', _id: null },
                { emplName: 'Андрей Б', _id: null },
                { emplName: 'Влад К', _id: null },
                { emplName: 'Анастасия В', _id: null },
                { emplName: 'Лиля', _id: null },
                { emplName: 'Анастасия М', _id: null }
            ],
            up: []
        },
        {
            emplName: "Екатерина Б",
            down: [],
            up: [{ emplName: "Григорий Д", _id: null }]
        },
        {
            emplName: "Данил Л",
            down: [],
            up: [{ emplName: "Григорий Д", _id: null }]
        },
        {
            emplName: "Кристина Р",
            down: [],
            up: [{ emplName: "Григорий Д", _id: null }]
        },
        {
            emplName: "Степан С",
            down: [],
            up: [{ emplName: "Григорий Д", _id: null }]
        },
        {
            emplName: "Екатерина Ч",
            down: [],
            up: [{ emplName: "Григорий Д", _id: null }]
        },
        {
            emplName: "Екатерина К",
            down: [],
            up: [{ emplName: "Григорий Д", _id: null }]
        },
        {
            emplName: "Дарья Л",
            down: [],
            up: [{ emplName: "Григорий Д", _id: null }]
        },
        {
            emplName: "Арина К",
            down: [],
            up: [{ emplName: "Григорий Д", _id: null }]
        },
        {
            emplName: "Анна Перфилова",
            down: [],
            up: [{ emplName: "Григорий Д", _id: null }]
        },
        {
            emplName: "Федя Д",
            down: [],
            up: [{ emplName: "Григорий Д", _id: null }]
        },
        {
            emplName: "Александра Е",
            down: [],
            up: [{ emplName: "Григорий Д", _id: null }]
        },
        {
            emplName: "Любовь Т",
            down: [],
            up: [{ emplName: "Григорий Д", _id: null }]
        },
        {
            emplName: "Никита Ч",
            down: [],
            up: [{ emplName: "Григорий Д", _id: null }]
        },
        {
            emplName: "Андрей К",
            down: [],
            up: [{ emplName: "Григорий Д", _id: null }]
        },
        {
            emplName: "Сергей К",
            down: [],
            up: [{ emplName: "Григорий Д", _id: null }]
        },
        {
            emplName: "Анна Прокудина",
            down: [],
            up: [{ emplName: "Григорий Д", _id: null }]
        },
        {
            emplName: "Костя Фаткин",
            down: [],
            up: [{ emplName: "Григорий Д", _id: null }]
        },
        {
            emplName: "Андрей П",
            down: [],
            up: [{ emplName: "Григорий Д", _id: null }]
        },
        {
            emplName: "Виктор",
            down: [],
            up: [{ emplName: "Григорий Д", _id: null }]
        },
        {
            emplName: "Андрей Б",
            down: [],
            up: [{ emplName: "Григорий Д", _id: null }]
        },
        {
            emplName: "Влад К",
            down: [],
            up: [{ emplName: "Григорий Д", _id: null }]
        },
        {
            emplName: "Анастасия В",
            down: [],
            up: [{ emplName: "Григорий Д", _id: null }]
        },
        {
            emplName: "Лиля",
            down: [],
            up: [{ emplName: "Григорий Д", _id: null }]
        },
        {
            emplName: "Анастасия М",
            down: [],
            up: [{ emplName: "Григорий Д", _id: null }]
        },
    ],
    rawProblemTypes: [
        { emplName: 'Григорий Д', type: 'Проблема у Григорий Д' },
        { emplName: 'Екатерина Б', type: 'Проблема у Екатерина Б' },
        { emplName: 'Данил Л', type: 'Проблема у Данил Л' },
        { emplName: 'Кристина Р', type: 'Проблема у Кристина Р' },
        { emplName: 'Степан С', type: 'Проблема у Степан С' },
        { emplName: 'Екатерина Ч', type: 'Проблема у Екатерина Ч' },
        { emplName: 'Екатерина К', type: 'Проблема у Екатерина ' },
        { emplName: 'Дарья Л', type: 'Проблема у Дарья Л' },
        { emplName: 'Арина К', type: 'Проблема у Арина К' },
        { emplName: 'Анна Перфилова', type: 'Проблема у Анна Перфилова' },
        { emplName: 'Федя Д', type: 'Проблема у Федя Д' },
        { emplName: 'Александра Е', type: 'Проблема у Александра Е' },
        { emplName: 'Любовь Т', type: 'Проблема у Любовь Т' },
        { emplName: 'Никита Ч', type: 'Проблема у Никита Ч' },
        { emplName: 'Андрей К', type: 'Проблема у Андрей К' },
        { emplName: 'Сергей К', type: 'Проблема у Сергей К' },
        { emplName: 'Анна Прокудина', type: 'Проблема у Анна Прокудина' },
        { emplName: 'Костя Фаткин', type: 'Проблема у Костя Фаткин' },
        { emplName: 'Андрей П', type: 'Проблема у Андрей П' },
        { emplName: 'Виктор', type: 'Проблема у Виктор' },
        { emplName: 'Андрей Б', type: 'Проблема у Андрей Б' },
        { emplName: 'Влад К', type: 'Проблема у Влад К' },
        { emplName: 'Анастасия В', type: 'Проблема у Анастасия В' },
        { emplName: 'Лиля', type: 'Проблема у Лиля' },
        { emplName: 'Анастасия М', type: 'Проблема у Анастасия М' }
    ],
    employees: [
        { emplName: 'Данил Л', places: ['16 школа'], roles: ['territory_resp'], },
        { emplName: 'Степан С', places: ['16 школа'], roles: ['territory_resp'], },
        { emplName: 'Федя Д', places: ['16 школа'], roles: ['territory_resp'], },
        { emplName: 'Андрей К', places: ['16 школа'], roles: ['territory_resp'], },
        { emplName: 'Сергей К', places: ['16 школа'], roles: ['territory_resp'], },
        { emplName: 'Никита Ч', places: ['16 школа'], roles: ['territory_resp'], },


        { emplName: 'Екатерина Б', places: ['16 школа'], roles: ['territory_resp'], },
        { emplName: 'Кристина Р', places: ['16 школа'], roles: ['territory_resp'], },
        { emplName: 'Екатерина Ч', places: ['16 школа'], roles: ['territory_resp'], },
        { emplName: 'Екатерина К', places: ['16 школа'], roles: ['territory_resp'], },
        { emplName: 'Дарья Л', places: ['16 школа'], roles: ['territory_resp'], },
        { emplName: 'Арина К', places: ['16 школа'], roles: ['territory_resp'], },
        { emplName: 'Анна Перфилова', places: ['16 школа'], roles: ['territory_resp'], },
        { emplName: 'Александра Е', places: ['16 школа'], roles: ['territory_resp'], },
        { emplName: 'Любовь Т', places: ['16 школа'], roles: ['territory_resp'], },
        { emplName: 'Анна Прокудина', places: ['16 школа'], roles: ['territory_resp'], },
        { emplName: 'Костя Фаткин', places: ['16 школа'], roles: ['territory_resp'], },
        { emplName: 'Андрей П', places: ['16 школа'], roles: ['territory_resp'], },
        { emplName: 'Виктор', places: ['16 школа'], roles: ['territory_resp'], },
        { emplName: 'Андрей Б', places: ['16 школа'], roles: ['territory_resp'], },
        { emplName: 'Влад К', places: ['16 школа'], roles: ['territory_resp'], },
        { emplName: 'Анастасия В', places: ['16 школа'], roles: ['territory_resp'], },
        { emplName: 'Лиля', places: ['16 школа'], roles: ['territory_resp'], },
        { emplName: 'Анастасия М', places: ['16 школа'], roles: ['territory_resp'], }
    ]
}

let data = [
    { emplName: 'Данил Л', places: ['16 школа'], roles: ['territory_resp'], },
    { emplName: 'Степан С', places: ['16 школа'], roles: ['territory_resp'], },
    { emplName: 'Федя Д', places: ['16 школа'], roles: ['territory_resp'], },
    { emplName: 'Андрей К', places: ['16 школа'], roles: ['territory_resp'], },
    { emplName: 'Сергей К', places: ['16 школа'], roles: ['territory_resp'], },
    { emplName: 'Никита Ч', places: ['16 школа'], roles: ['territory_resp'], },


    { emplName: 'Екатерина Б', places: ['16 школа'], roles: ['territory_resp'], },
    { emplName: 'Кристина Р', places: ['16 школа'], roles: ['territory_resp'], },
    { emplName: 'Екатерина Ч', places: ['16 школа'], roles: ['territory_resp'], },
    { emplName: 'Екатерина К', places: ['16 школа'], roles: ['territory_resp'], },
    { emplName: 'Дарья Л', places: ['16 школа'], roles: ['territory_resp'], },
    { emplName: 'Арина К', places: ['16 школа'], roles: ['territory_resp'], },
    { emplName: 'Анна Перфилова', places: ['16 школа'], roles: ['territory_resp'], },
    { emplName: 'Александра Е', places: ['16 школа'], roles: ['territory_resp'], },
    { emplName: 'Любовь Т', places: ['16 школа'], roles: ['territory_resp'], },
    { emplName: 'Анна Прокудина', places: ['16 школа'], roles: ['territory_resp'], },
    { emplName: 'Костя Фаткин', places: ['16 школа'], roles: ['territory_resp'], },
    { emplName: 'Андрей П', places: ['16 школа'], roles: ['territory_resp'], },
    { emplName: 'Виктор', places: ['16 школа'], roles: ['territory_resp'], },
    { emplName: 'Андрей Б', places: ['16 школа'], roles: ['territory_resp'], },
    { emplName: 'Влад К', places: ['16 школа'], roles: ['territory_resp'], },
    { emplName: 'Анастасия В', places: ['16 школа'], roles: ['territory_resp'], },
    { emplName: 'Лиля', places: ['16 школа'], roles: ['territory_resp'], },
    { emplName: 'Анастасия М', places: ['16 школа'], roles: ['territory_resp'], }
]
for (let d of data) {
    console.log(d.emplName);
}

module.exports = {
    hierarchy: [
        {
            emplName: 'Пальшин В.В.',
            down: [
                { emplName: 'Глушков А.Б.', _id: null },
                { emplName: 'Лебедев И.П.', _id: null },
                { emplName: 'Абуткин Р.Ш.', _id: null }
            ],
            up: []
        },
        {
            emplName: 'Глушков А.Б.',
            down: [{ emplName: 'Лебедев И.П.', _id: null }, { emplName: 'Казанцев А.В.', _id: null }, { emplName: 'Невоструев А.В.', _id: null }, { emplName: 'Ведерников В.И.', _id: null }, { emplName: 'Бузиков И.Х.', _id: null }],
            up: [{ emplName: 'Пальшин В.В.', _id: null }]
        },
        {
            emplName: 'Абуткин Р.Ш.',
            down: [{ emplName: 'Юферев Д.А.', _id: null }],
            up: [{ emplName: 'Пальшин В.В.', _id: null }]
        },
        {
            emplName: 'Казанцев А.В.',
            down: [],
            up: [{ emplName: 'Глушков А.Б.', _id: null }, { emplName: 'Пальшин В.В.', _id: null }]
        },
        {
            emplName: 'Невоструев А.В.',
            down: [],
            up: [{ emplName: 'Глушков А.Б.', _id: null }, { emplName: 'Пальшин В.В.', _id: null }]
        },
        {
            emplName: 'Горбушин С.В.',
            down: [],
            up: [{ emplName: 'Лебедев И.П.', _id: null }, { emplName: 'Глушков А.Б.', _id: null }, { emplName: 'Пальшин В.В.', _id: null }]
        },
        {
            emplName: 'Ведерников В.И.',
            down: [],
            up: [{ emplName: 'Глушков А.Б.', _id: null }, { emplName: 'Пальшин В.В.', _id: null }]
        },
        {
            emplName: 'Бузиков И.Х.',
            down: [],
            up: [{ emplName: 'Глушков А.Б.', _id: null }, { emplName: 'Пальшин В.В.', _id: null }]
        },
        {
            emplName: 'Вершинин А.С.',
            down: [],
            up: [{ emplName: 'Пальшин В.В.', _id: null }]
        },
        {
            emplName: 'Юферев Д.А.',
            down: [],
            up: [{ emplName: 'Абуткин Р.Ш.', _id: null }, { emplName: 'Пальшин В.В.', _id: null }]
        },
    ],
    rawProblemTypes: [
        { type: 'Неисправность в электричестве', emplName: 'Казанцев А.В.' },
        {
            type: 'Неисправность оборудования в части КИП и А',
            emplName: 'Невоструев А.В.'
        },
        {
            type: 'Неисправность оборудования в части электричества',
            emplName: 'Казанцев А.В.'
        },
        {
            type: 'Неисправность оборудования в механической части',
            emplName: 'Горбушин С.В.'
        },
        {
            type: 'Неисправность отопления, вентиляции, водопровода, канализации, сварочные работы.',
            emplName: 'Ведерников В.И.'
        },
        {
            type: 'Ремонт наружный или внутренний зданий.',
            emplName: 'Бузиков И.Х.'
        },
        {
            type: 'Уличная территория производственной площадки',
            emplName: 'Вершинин А.С.'
        },
        {
            type: 'Ремонтное оборудование автомобилей',
            emplName: 'Юферев Д.А.'
        }
    ],
    employees: [
        {
            emplName: 'Невоструев А.В.',
            problemType: null,
            isConfirmed: false,
            roles: ['territory_resp'],
            places: [],
            email: '',
            user: null,
            reportsToFix: []
        },
        {
            emplName: 'Горбушин С.В.',
            problemType: null,
            isConfirmed: false,
            roles: ['territory_resp'],
            places: [],
            email: '',
            user: null,
            reportsToFix: []
        },
        {
            emplName: 'Лебедев И.П.',
            problemType: null,
            isConfirmed: false,
            roles: [],
            places: [],
            email: '',
            user: null,
            reportsToFix: []
        },
        {
            emplName: 'Бузиков И.Х.',
            problemType: null,
            isConfirmed: false,
            places: [],
            roles: [],
            email: '',
            user: null,
            reportsToFix: []
        },
        {
            emplName: 'Глушков А.Б.',
            problemType: null,
            isConfirmed: false,
            places: [],
            roles: [],
            email: '',
            user: null,
            reportsToFix: []
        },
        {
            emplName: 'Волков Н.А.',
            places: ['Участок очистки сточных вод', 'Усреднитель'],
            problemType: null,
            isConfirmed: false,
            places: [],
            roles: [],
            email: '',
            roles: ['territory_resp'],
            user: null,
            reportsToFix: []
        },
        {
            emplName: 'Васильченко С.В.',
            places: [
                'Материальный склад № 7',
                'Материальный склад № 8',
                'Материальный склад',
                'Материальный склад № 5',
                'Склад № 1'
            ],
            problemType: null,
            isConfirmed: false,
            email: '',
            roles: ['territory_resp'],
            user: null,
            reportsToFix: []
        },
        {
            emplName: 'Казанцев А.В.',
            places: [
                'Трансформаторная подстанция ТП-15',
                'Трансформаторная подстанция ТП-47',
                'Трансформаторная подстанция РП-4',
                'Электрощитовая к участку ледяной воды'
            ],
            problemType: null,
            isConfirmed: false,
            email: '',
            roles: ['territory_resp'],
            user: null,
            reportsToFix: []
        },
        {
            emplName: 'Абуткин Р.Ш.',
            places: [
                'Гараж легковых автомобилей',
                'Помещение для тех.обслуживания',
                'Диспетчерская',
                'Ангар для хранения автомобилей'
            ],
            problemType: null,
            isConfirmed: false,
            email: '',
            roles: ['territory_resp'],
            user: null,
            reportsToFix: []
        },
        {
            emplName: 'Ведерников В.И.',
            places: [
                'Тепловой пункт',
                'Токарная мастерская',
                'Помещение прачечной',
                'Градирни',
                'Здание распредпункта',
                'Воздуходувная компрессорная',
                'Компрессорная АХУ',
                'Блок подсобных помещений',
                'Канализационная насосная станция'
            ],
            problemType: null,
            isConfirmed: false,
            email: '',
            roles: ['territory_resp'],
            user: null,
            reportsToFix: []
        },
        {
            emplName: 'Чинюк Э.В.',
            places: [
                'Склад СП ГПК СОМ',
                'Участок по производству СП',
                'Помещение ВВУ',
                'Отделение баромембранных технологий',
                'Водоподготовка СИП №3',
                'Отделение хранения сыворотки',
                'Отделение хранения молока',
                'Приемка сыворотки',
                'Участок нормализации',
                'Приемка молока'
            ],
            problemType: null,
            isConfirmed: false,
            email: '',
            roles: ['territory_resp'],
            user: null,
            reportsToFix: []
        },
        {
            emplName: 'Вершинин А.С.',
            places: [
                'Здание АБК',
                'Раздевалка АХС',
                'Мелкооптовый магазин',
                'Здание проходной',
                'Административный корпус'
            ],
            problemType: null,
            isConfirmed: false,
            email: '',
            roles: ['territory_resp'],
            user: null,
            reportsToFix: []
        },
        {
            emplName: 'Главатских Л.Л.',
            places: [
                'Цех по производству ЦМП и КМП №4',
                'Цех по производству ЦМП и КМП №1,2',
                'Цех по производству ЦМП и КМП №3',
                'Цех по производству ЦМП и КМП №5',
                'СИП-станция цех ЦМП №1,2',
                'Склад вспом.материалов ЦМП № 1',
                'Склад вспом.материалов ЦМП № 2',
                'СИП-станция цех ЦМП № 3,4',
                'СИП-станция цех ЦМП № 5'
            ],
            problemType: null,
            isConfirmed: false,
            email: '',
            roles: ['territory_resp'],
            user: null,
            reportsToFix: []
        },
        {
            emplName: 'Юферев Д.А.',
            places: [
                'Склад № 3',
                'Помещение для шиномонтажа',
                'Склад № 2',
                'Ремонтный бокс № 3',
                'Ремонтный бокс № 2',
                'Ремонтный бокс № 1',
                'Сварочный пост'
            ],
            problemType: null,
            isConfirmed: false,
            email: '',
            roles: ['territory_resp'],
            user: null,
            reportsToFix: []
        }
    ]
}
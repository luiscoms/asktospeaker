// use nodetest2;

db.events.insert([
    {
        'eventId' : "1",
        'name' : 'BrazilJS',
        'when' : 'August 21-22 2014',
        'location' : 'Porto Alegre / RS'
    },
    {
        'eventId' : "2",
        'name' : 'Front in POA',
        'when' : 'November 8 2014',
        'location' : 'Porto Alegre / RS'
    },
]);

db.talks.insert([
    {
        'talkId' : "1",
        'eventId' : "1",
        'speaker' : 'RENATO MANGINI',
        'title' : 'Why ServiceWorker may be the next big thing'
    },
    {
        'talkId' : "2",
        'eventId' : "1",
        'speaker' : 'ROB DODSON',
        'title' : 'The Web Component Ecosystem'
    },
    {
        'talkId' : "3",
        'eventId' : "1",
        'speaker' : 'CHRIS MILLS',
        'title' : 'Web versus native: round 1?'
    },
    {
        'talkId' : "4",
        'eventId' : "2",
        'speaker' : 'Vinícius Almeida',
        'title' : 'Repensando o uso do jQuery'
    },
    {
        'talkId' : "5",
        'eventId' : "2",
        'speaker' : 'Davidson Fellipe',
        'title' : 'O melhor da monitoração de Web Performance'
    }
]);


db.questions.insert([
    {
        'talkId' : "1",
        'who' : 'Yilvis',
        'question' : 'What does the fox say?'
    }
]);
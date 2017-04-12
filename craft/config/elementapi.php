<?php
namespace Craft;

return [
    'endpoints' => [
        'api/homepage.json' => [
            'elementType' => 'Entry',
            'criteria' => ['section' => 'homepage' ],
            'first' => true,
            'transformer' => function(EntryModel $entry) {
                return [
                    'title' => $entry->title,
                    'url' => $entry->url,
                    'body' => (string) $entry->body,
                ];
            },
        ],
        'api/about.json' => [
            'elementType' => 'Entry',
            'criteria' => ['section' => 'about' ],
            'first' => true,
            'transformer' => function(EntryModel $entry) {
                return [
                    'title' => $entry->title,
                    'url' => $entry->url,
                    'body' => (string) $entry->body,
                ];
            },
        ],
        'api/news.json' => [
            'elementType' => 'Entry',
            'criteria' => ['section' => 'news'],
            'transformer' => function(EntryModel $entry) {
                return [
                    'slug' => $entry->slug,
                    'title' => $entry->title,
                    'url' => $entry->url,
                    'body' => (string) $entry->body
                ];
            },
        ],

        'api/news/<slug:{slug}>.json' => function($slug) {
            return [
                'elementType' => 'Entry',
                'criteria' => [
                    'section' => 'news',
                    'slug' => $slug,
                ],
                'first' => true,
                'transformer' => function(EntryModel $entry) {
                    return [
                        'title' => $entry->title,
                        'url' => $entry->url,
                        'body' => (string) $entry->body,
                    ];
                },
            ];
        },
    ]
];


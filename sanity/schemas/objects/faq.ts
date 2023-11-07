export default {
    name: 'faq',
    title: 'FAQ',
    type: 'object',

    fields: [
        {
            name: 'question',
            title: 'Question',
            type: 'string',
        },
        {
            name: 'answer',
            title: 'Answer',
            type: 'array',
            of: [{ type: 'block' }],
        },
    ],

    preview: {
        select: {
            title: 'question',
        },
    },
};
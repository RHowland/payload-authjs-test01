import type { Field } from 'payload/types'

import richText from './richText'
import label from './richText/label'
import largeBody from './richText/largeBody'

export const simpleContent: Field = {
    name: 'SimpleContent',
    label: false,
    type: 'group',
    fields: [
        richText({
            admin: {
                elements: ['h1', largeBody, label, 'link'],
                leaves: [],
            },
        }),
    ],
}

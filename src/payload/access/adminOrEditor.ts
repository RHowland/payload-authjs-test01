import type { AccessArgs } from 'payload/config'

import { checkRole } from '../collections/Users/checkRole'
import type { User } from '../payload-types'

type isAdminOrEditor = (args: AccessArgs<unknown, User>) => boolean

export const adminsOrEditor: isAdminOrEditor = ({ req: { user } }) => {
    return checkRole(['admin'], user) || checkRole(['editor'], user)
}

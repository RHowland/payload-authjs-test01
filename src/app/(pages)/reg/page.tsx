import React from 'react'
import { Metadata } from 'next'

import { Gutter } from '../../_components/Gutter'
import { RenderParams } from '../../_components/RenderParams'
import { getMeUser } from '../../_utilities/getMeUser'
import RegForm from './RegForm'

import classes from './index.module.scss'

export default async function Reg() {
    await getMeUser({
        validUserRedirect: `/account?warning=${encodeURIComponent('You are already logged in.')}`,
    })

    return (
        <Gutter className={classes.login}>
            <RenderParams className={classes.params} />
            <h1>Sign Up</h1>
            <RegForm />
        </Gutter>
    )
}

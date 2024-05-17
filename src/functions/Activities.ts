import { Page } from 'playwright'

import { MicrosoftRewardsBot } from '../index'

import { Search } from './activities/Search'
import { ABC } from './activities/ABC'
import { Poll } from './activities/Poll'
import { Quiz } from './activities/Quiz'
import { ThisOrThat } from './activities/ThisOrThat'
import { UrlReward } from './activities/UrlReward'

import { DashboardData } from '../interface/DashboardData'
import { Account } from '../interface/Account'


export default class Activities {
    private bot: MicrosoftRewardsBot

    constructor(bot: MicrosoftRewardsBot) {
        this.bot = bot
    }

    doSearch = async (page: Page, data: DashboardData, account:Account): Promise<void> => {
        const search = new Search(this.bot)
        await search.doSearch(page, data,account)
    }

    doABC = async (page: Page): Promise<void> => {
        const abc = new ABC(this.bot)
        await abc.doABC(page)
    }

    doPoll = async (page: Page): Promise<void> => {
        const poll = new Poll(this.bot)
        await poll.doPoll(page)
    }

    doThisOrThat = async (page: Page): Promise<void> => {
        const thisOrThat = new ThisOrThat(this.bot)
        await thisOrThat.doThisOrThat(page)
    }

    doQuiz = async (page: Page): Promise<void> => {
        const quiz = new Quiz(this.bot)
        await quiz.doQuiz(page)
    }

    doUrlReward = async (page: Page): Promise<void> => {
        const urlReward = new UrlReward(this.bot)
        await urlReward.doUrlReward(page)
    }

}
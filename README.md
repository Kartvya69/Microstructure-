# Microsoft-Rewards-Script
Automated Microsoft Rewards script, however this time using TypeScript, Cheerio and Playwright.

Under development, however mainly for personal use!

## How to setup ##
1. Download or clone source code
2. Run `npm i` to install the packages
3. Change `accounts.example.json` to `accounts.json` and add your account details
4. Change `config.json` to your liking
5. Run `npm run build` to build the script
6. Run `npm run start` to start the built script

## Notes ##
- If you end the script without closing the browser window first (only with headless as false), you'll be left with hanging chrome instances using resources. Use taskmanager to kill these or use the included `npm run kill-chrome-win` script. (Windows)
- If you automate this script, set it to run at least 2 times a day to make sure it picked up all tasks, set `"runOnZeroPoints": false` so it doesn't run when no points are found.

## Docker (Experimental) ##
1. Download the source code
2. Make changes to your `accounts.json`
3. Make sure to change `"headless": false` to `"headless": true` in your `config.json` 
4. Note, the container has to be recreated for any changes regarding the `config.json` and/or `accounts.json`!
### Option 1: build and run with docker run

1. Run `docker build -t microsoft-rewards-script-docker .` to build the container
2. Run the container with `docker run --name netsky -d microsoft-rewards-script-docker` or, omit the detached flag `-d` to view the script output in your terminal. 
3. Optionally, change the name of the container by changing `--name netsky` to your preferred container name
4. The container will exit after completing the script, run it again using `docker start netsky`
5. If you are running the container `-d` detached, you can view logs with `docker logs netsky`

### Option 2: use docker compose

1. A basic docker compose.yaml has been provided, which can be run with `docker compose up -d` or, omit the detached flag `-d` to view the script output in your terminal. 

2. If you make changes to your config, you may wish to use use `docker compose up -d --build` to build or rebuild the image with your latest changes to the script.

3. The container will exit after completing the script, run it again using `docker start netsky`

4. If you are running the container `-d` detached, you can view logs with `docker logs netsky`

   

## Config ## 
| Setting        | Description           | Default  |
| :------------- |:-------------| :-----|
|  baseURL    | MS Rewards page | `https://rewards.bing.com` |
|  sessionPath    | Path to where you want sessions/fingerprints to be stored | `sessions` (In ./browser/sessions) |
|  headless    | If the browser window should be visible be ran in the background | `false` (Browser is visible) |
|  runOnZeroPoints    | Run the rest of the script if 0 points can be earned | `false` (Will not run on 0 points) |
|  clusters    | Amount of instances ran on launch, 1 per account | `1` (Will run 1 account at the time) |
|  saveFingerprint    | Re-use the same fingerprint each time | `false` (Will generate a new fingerprint each time) |
|  workers.doDailySet    | Complete daily set items | `true`  |
|  workers.doMorePromotions    | Complete promotional items | `true`  |
|  workers.doPunchCards    | Complete punchcards | `true`  |
|  workers.doDesktopSearch    | Complete daily desktop searches | `true`  |
|  workers.doMobileSearch    | Complete daily mobile searches | `true`  |
|  searchSettings.useGeoLocaleQueries    | Generate search queries based on your geo-location | `false` (Uses EN-US generated queries)  |
|  scrollRandomResults    | Scroll randomly in search results | `true`   |
|  searchSettings.clickRandomResults    | Visit random website from search result| `true`   |
|  searchSettings.searchDelay    | Minimum and maximum time in miliseconds between search queries | `min: 10000` (10 seconds)    `max: 20000` (20 seconds) |
|  searchSettings.retryMobileSearch     | Keep retrying mobile searches until completed (indefinite)| `false` |
|  webhook.enabled     | Enable or disable your set webhook | `false` |
|  webhook.url     | Your Discord webhook URL | `null` |

## Features ##
- [x] Multi-Account Support
- [x] Session Storing
- [x] 2FA Support
- [x] Headless Support
- [x] Discord Webhook Support
- [x] Desktop Searches
- [x] Configurable Tasks
- [x] Microsoft Edge Searches
- [x] Mobile Searches
- [x] Emulated Scrolling Support
- [x] Emulated Link Clicking Support
- [x] Geo Locale Search Queries
- [x] Completing Daily Set
- [x] Completing More Promotions
- [x] Solving Quiz (10 point variant)
- [x] Solving Quiz (30-40 point variant)
- [x] Completing Click Rewards
- [x] Completing Polls
- [x] Completing Punchcards
- [x] Solving This Or That Quiz (Random)
- [x] Solving ABC Quiz
- [ ] Completing Shopping Game
- [ ] Completing Gaming Tab
- [x] Clustering Support
- [x] Proxy Support

## Disclaimer ##
Your account may be at risk of getting banned or suspended using this script, you've been warned!
<br /> 
Use this script at your own risk!

# nestjs-slack-notifier

A simple nest js wrapper around the [Slack webhook API](https://api.slack.com). For sending notifications to slack from your nest js application.

### Installation

```sh
npm install nestjs-slack-notifier
or
yarn add nestjs-slack-notifier
```

### Usage

```js
// Import module:

import { SlackNotificationModule } from 'nestjs-slack-notifier';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    SlackNotificationModule.forRoot({
      // your slack webhook url goes here
      slackWebhookURL: 'xxxxxxxxx',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
```

```js
// Sending the notification using the serivce class

import { SlackNotificationService } from 'nestjs-slack-notifier';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(
    private readonly slackNotificationService: SlackNotificationService,
  ) {}
  async sendMessage() {
    return this.slackNotificationService.success({
      text: 'Hey this is test',
    });
  }
}

```

```js
//Pre-styled messages

await this.slackNotificationService.success({
    text: 'Hey this is success message',
});

await this.slackNotificationService.bug({
    text: 'Hey this is bug reported',
});

await this.slackNotificationService.error({
    text: 'Hey this is error message',
});
```


### License

MIT. Copyright &copy; 2022 Laxmikanta Nayak

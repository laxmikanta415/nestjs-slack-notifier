import { Injectable } from "@nestjs/common";
import axios from "axios";
import { DEFAULT_ALLOWED_ENVIRONMENT, SlackMessageOptions, SlackNotificationConfigOptions } from "./slack-notification.interface";

@Injectable()
export class SlackNotificationService{
    private slackConfig: SlackNotificationConfigOptions;

    constructor(options: Partial<SlackNotificationConfigOptions>){
        this.slackConfig= {
            slackWebhookURL: options.slackWebhookURL,
        }
    }

    private async sendMessage(data) {
        try {
          const res = await axios.post(
            this.slackConfig.slackWebhookURL,
            JSON.stringify(data),
          );
          return res.data;
        } catch (err) {
          throw new Error(
            'Error sending notification to slack check your slack webhook url',
          );
        }
      }
    
      async error(options: SlackMessageOptions) {
        const payload = {
          attachments: [
            {
              title: options.text,
              color: '#dc3545',
            },
          ],
        };
        return this.sendMessage(payload);
      }
    
      async info(options: SlackMessageOptions) {
        const payload = {
          attachments: [
            {
              title: options.text,
              color: '#17a2b8',
            },
          ],
        };
        return this.sendMessage(payload);
      }
    
      async success(options: SlackMessageOptions) {
        const payload = {
          attachments: [
            {
              title: options.text,
              color: '#28a745',
            },
          ],
        };
        return this.sendMessage(payload);
      }
}   
export interface SlackNotificationConfigOptions {
    slackWebhookURL: string

}

export const DEFAULT_ALLOWED_ENVIRONMENT = 'production'

export interface SlackMessageOptions {
    text: string;
  };
  
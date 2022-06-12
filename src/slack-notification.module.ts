import { DynamicModule, Module } from "@nestjs/common";
import { SlackNotificationConfigOptions } from "./slack-notification.interface";
import { SlackNotificationService } from "./slack-notification.service";

@Module({})
export class SlackNotificationModule{
    static forRoot(
        options: Partial<SlackNotificationConfigOptions>
    ):DynamicModule {
        const providers = [
            {
                provide: SlackNotificationService,
                useValue: new SlackNotificationService(options)
            }
        ];
        return {
            providers,
            exports: providers,
            module: SlackNotificationModule
        }
    }
}
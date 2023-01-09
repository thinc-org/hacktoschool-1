import { Injectable } from "@nestjs/common";
import { ConfigService as NestJSConfigService } from "@nestjs/config";

import { Configuration, defaultConfig } from "./configuration";

@Injectable()
export class ConfigService {
  constructor(private configService: NestJSConfigService) {}

  get port(): Configuration["port"] {
    return this.configService.get("port") || defaultConfig.port;
  }
}
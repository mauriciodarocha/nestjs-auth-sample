import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthenticatedGuard } from './auth/authentication.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Request() req): any {
        return { 'message': 'User logged in.' };
    }

    @UseGuards(AuthenticatedGuard)
    @Get('protected')
    getHello(@Request() req): string {
        return req.user;
    }
}

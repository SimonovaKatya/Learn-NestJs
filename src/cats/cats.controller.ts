import {Controller, Get, Header, HttpCode, Param, Post, Query, Redirect, Req} from '@nestjs/common';
import {Request} from 'express'

@Controller('cats')
export class CatsController {
    @Get()
    @HttpCode(233)
    @Header('Cache-Control', 'none')
    findAll(@Req() request: Request): string {
      // console.log(request.body)
        return 'This action returns all cats';
    }

    @Get('profile')
    findAll1(): string {
        return "3";
    }

    @Post()
    create(): string {
        return 'This action adds a new cat';
    }

    @Get('go_to_katy')
    @Redirect('https://vk.com/simonovakaterina7', 301)
    create2(@Query('user') user, @Query('lvl') lvl){
        if (user === 'mark' && lvl === '11') {
            return { url: 'https://vk.com/markkislov' };
        }
    }

    @Get(':idf')
    findOne(@Param() params): string {
        console.log(params.idf);
        return `This action returns a #${params.idf} cat`;
    }
}

import { Request, Response } from "express";

//* services
import { TranslateService } from "../services";

//* interfaces
import { TranslateTextProps } from "../interfaces";

const translateService = new TranslateService();

class TranslateController {
    translateText(request: Request, response: Response): void {
        const { text, translateFrom, translateTo } = request.body;

        const translateBody: TranslateTextProps = {
            text,
            translateFrom,
            translateTo,
        };

        translateService.translateText(translateBody, response);
    }
}

export { TranslateController };

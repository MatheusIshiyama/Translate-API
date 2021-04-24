import { Response } from "express";
import { spawn } from "child_process";
import { TranslateTextProps } from "../interfaces";
import path from "path";

const pythonFilePath = path.join(__dirname, "../services/Translator.py");

class TranslateService {
    translateText(
        { text, translateFrom, translateTo }: TranslateTextProps,
        response: Response
    ): void {
        let translatedText = "";

        const translateProcess = spawn("python", [
            pythonFilePath,
            text,
            translateFrom,
            translateTo,
        ]);

        translateProcess.stdout.on("data", (data) => {
            const translateReturn = data.toString();
            translatedText = translateReturn.split("\r").shift();
            response.json({ translatedText });
        });
    }
}

export { TranslateService };

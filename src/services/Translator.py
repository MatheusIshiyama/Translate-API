import sys

from googletrans import LANGUAGES
from googletrans import Translator

# * setup

translator = Translator()
text = str(sys.argv[1])
translate_from = str(sys.argv[2])
translate_to = str(sys.argv[3])


def translate_text(text, translate_from, translate_to):
    translated_text = translator.translate(
        text, src=translate_from, dest=translate_to)
    print(translated_text.text)


def main():
    translate_text(text, translate_from, translate_to)


main()

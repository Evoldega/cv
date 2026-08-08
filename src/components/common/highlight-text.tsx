import Text from "@/components/ui/text";

interface IHighlightText {
  text: string;
  boldWords: string[];
}

export default function HighlightText({ text, boldWords }: IHighlightText) {
  if (!boldWords || boldWords.length === 0) {
    return <p>{text}</p>;
  }

  // Сортируем фразы по длине (от длинных к коротким), чтобы избежать пересечений
  const sortedPhrases = [...boldWords].sort((a, b) => b.length - a.length);

  let result: (string | React.ReactElement)[] = [text];
  let keyCounter = 0;

  for (const phrase of sortedPhrases) {
    if (!phrase) continue;

    const newResult: (string | React.ReactElement)[] = [];

    for (const part of result) {
      if (typeof part !== 'string') {
        newResult.push(part);
        continue;
      }

      const regex = new RegExp(`(${escapeRegExp(phrase)})`, 'gi');
      const splitParts = part.split(regex);

      for (let i = 0; i < splitParts.length; i++) {
        const segment = splitParts[i];
        if (i % 2 === 1) {
          // Это совпадение фразы
          newResult.push(
            <Text variant="btn" className="text-black" key={keyCounter++}>{segment}</Text>
          );
        } else if (segment) {
          newResult.push(segment);
        }
      }
    }

    result = newResult;
  }

  return <Text variant="p" className="text-gray-700">{result}</Text>;
}

// Вспомогательная функция для экранирования спецсимволов в RegExp
function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
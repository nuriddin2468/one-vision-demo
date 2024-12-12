export abstract class TextFormatterService {
    abstract encode(text: string): string;

    abstract decode(text: string): string;

    abstract addTag(
        tagType: 'B' | 'U' | 'I' | 'LINK', 
        position: { start: number, end: number }, 
        text: string,
        encoded?: boolean,
    ): string;
}
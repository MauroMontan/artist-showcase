import Card from './card';
export default interface Artist {
    name:string,
    networks:Array<string>,
    artwork:Array<Card>
}
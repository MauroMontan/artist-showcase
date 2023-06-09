import Card from './card';
import Network from './network';
export default interface Artist {
    name: string;
    networks: Array<Network>;
    artwork: Array<Card>;
}
